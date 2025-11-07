// https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space#allow_ssh Space#allow_ssh}
  */
  readonly allowSsh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space#annotations Space#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space#asgs Space#asgs}
  */
  readonly asgs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space#auditors Space#auditors}
  */
  readonly auditors?: string[];
  /**
  * Allow recursive deletion of apps, routes, service instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space#delete_recursive_allowed Space#delete_recursive_allowed}
  */
  readonly deleteRecursiveAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space#developers Space#developers}
  */
  readonly developers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space#id Space#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space#isolation_segment Space#isolation_segment}
  */
  readonly isolationSegment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space#labels Space#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space#managers Space#managers}
  */
  readonly managers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space#name Space#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space#org Space#org}
  */
  readonly org: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space#quota Space#quota}
  */
  readonly quota?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space#staging_asgs Space#staging_asgs}
  */
  readonly stagingAsgs?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space cloudfoundry_space}
*/
export class Space extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudfoundry_space";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Space resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Space to import
  * @param importFromId The id of the existing Space that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Space to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudfoundry_space", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space cloudfoundry_space} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpaceConfig
  */
  public constructor(scope: Construct, id: string, config: SpaceConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudfoundry_space',
      terraformGeneratorMetadata: {
        providerName: 'cloudfoundry',
        providerVersion: '0.53.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowSsh = config.allowSsh;
    this._annotations = config.annotations;
    this._asgs = config.asgs;
    this._auditors = config.auditors;
    this._deleteRecursiveAllowed = config.deleteRecursiveAllowed;
    this._developers = config.developers;
    this._id = config.id;
    this._isolationSegment = config.isolationSegment;
    this._labels = config.labels;
    this._managers = config.managers;
    this._name = config.name;
    this._org = config.org;
    this._quota = config.quota;
    this._stagingAsgs = config.stagingAsgs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_ssh - computed: true, optional: true, required: false
  private _allowSsh?: boolean | cdktf.IResolvable; 
  public get allowSsh() {
    return this.getBooleanAttribute('allow_ssh');
  }
  public set allowSsh(value: boolean | cdktf.IResolvable) {
    this._allowSsh = value;
  }
  public resetAllowSsh() {
    this._allowSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSshInput() {
    return this._allowSsh;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // asgs - computed: false, optional: true, required: false
  private _asgs?: string[]; 
  public get asgs() {
    return cdktf.Fn.tolist(this.getListAttribute('asgs'));
  }
  public set asgs(value: string[]) {
    this._asgs = value;
  }
  public resetAsgs() {
    this._asgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asgsInput() {
    return this._asgs;
  }

  // auditors - computed: true, optional: true, required: false
  private _auditors?: string[]; 
  public get auditors() {
    return cdktf.Fn.tolist(this.getListAttribute('auditors'));
  }
  public set auditors(value: string[]) {
    this._auditors = value;
  }
  public resetAuditors() {
    this._auditors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditorsInput() {
    return this._auditors;
  }

  // delete_recursive_allowed - computed: false, optional: true, required: false
  private _deleteRecursiveAllowed?: boolean | cdktf.IResolvable; 
  public get deleteRecursiveAllowed() {
    return this.getBooleanAttribute('delete_recursive_allowed');
  }
  public set deleteRecursiveAllowed(value: boolean | cdktf.IResolvable) {
    this._deleteRecursiveAllowed = value;
  }
  public resetDeleteRecursiveAllowed() {
    this._deleteRecursiveAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRecursiveAllowedInput() {
    return this._deleteRecursiveAllowed;
  }

  // developers - computed: true, optional: true, required: false
  private _developers?: string[]; 
  public get developers() {
    return cdktf.Fn.tolist(this.getListAttribute('developers'));
  }
  public set developers(value: string[]) {
    this._developers = value;
  }
  public resetDevelopers() {
    this._developers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developersInput() {
    return this._developers;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // isolation_segment - computed: false, optional: true, required: false
  private _isolationSegment?: string; 
  public get isolationSegment() {
    return this.getStringAttribute('isolation_segment');
  }
  public set isolationSegment(value: string) {
    this._isolationSegment = value;
  }
  public resetIsolationSegment() {
    this._isolationSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationSegmentInput() {
    return this._isolationSegment;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // managers - computed: true, optional: true, required: false
  private _managers?: string[]; 
  public get managers() {
    return cdktf.Fn.tolist(this.getListAttribute('managers'));
  }
  public set managers(value: string[]) {
    this._managers = value;
  }
  public resetManagers() {
    this._managers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managersInput() {
    return this._managers;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // org - computed: false, optional: false, required: true
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: string; 
  public get quota() {
    return this.getStringAttribute('quota');
  }
  public set quota(value: string) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // staging_asgs - computed: false, optional: true, required: false
  private _stagingAsgs?: string[]; 
  public get stagingAsgs() {
    return cdktf.Fn.tolist(this.getListAttribute('staging_asgs'));
  }
  public set stagingAsgs(value: string[]) {
    this._stagingAsgs = value;
  }
  public resetStagingAsgs() {
    this._stagingAsgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingAsgsInput() {
    return this._stagingAsgs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_ssh: cdktf.booleanToTerraform(this._allowSsh),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      asgs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._asgs),
      auditors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditors),
      delete_recursive_allowed: cdktf.booleanToTerraform(this._deleteRecursiveAllowed),
      developers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._developers),
      id: cdktf.stringToTerraform(this._id),
      isolation_segment: cdktf.stringToTerraform(this._isolationSegment),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      managers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managers),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      quota: cdktf.stringToTerraform(this._quota),
      staging_asgs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._stagingAsgs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_ssh: {
        value: cdktf.booleanToHclTerraform(this._allowSsh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      asgs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._asgs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auditors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      delete_recursive_allowed: {
        value: cdktf.booleanToHclTerraform(this._deleteRecursiveAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      developers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._developers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isolation_segment: {
        value: cdktf.stringToHclTerraform(this._isolationSegment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      managers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota: {
        value: cdktf.stringToHclTerraform(this._quota),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      staging_asgs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._stagingAsgs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
