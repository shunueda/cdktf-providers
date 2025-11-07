// https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org#annotations Org#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org#auditors Org#auditors}
  */
  readonly auditors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org#billing_managers Org#billing_managers}
  */
  readonly billingManagers?: string[];
  /**
  * Allow recursive deletion of spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org#delete_recursive_allowed Org#delete_recursive_allowed}
  */
  readonly deleteRecursiveAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org#id Org#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org#labels Org#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org#managers Org#managers}
  */
  readonly managers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org#name Org#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org#quota Org#quota}
  */
  readonly quota?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org cloudfoundry_org}
*/
export class Org extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudfoundry_org";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Org resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Org to import
  * @param importFromId The id of the existing Org that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Org to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudfoundry_org", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org cloudfoundry_org} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgConfig
  */
  public constructor(scope: Construct, id: string, config: OrgConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudfoundry_org',
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
    this._annotations = config.annotations;
    this._auditors = config.auditors;
    this._billingManagers = config.billingManagers;
    this._deleteRecursiveAllowed = config.deleteRecursiveAllowed;
    this._id = config.id;
    this._labels = config.labels;
    this._managers = config.managers;
    this._name = config.name;
    this._quota = config.quota;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // billing_managers - computed: true, optional: true, required: false
  private _billingManagers?: string[]; 
  public get billingManagers() {
    return cdktf.Fn.tolist(this.getListAttribute('billing_managers'));
  }
  public set billingManagers(value: string[]) {
    this._billingManagers = value;
  }
  public resetBillingManagers() {
    this._billingManagers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingManagersInput() {
    return this._billingManagers;
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

  // quota - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      auditors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditors),
      billing_managers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._billingManagers),
      delete_recursive_allowed: cdktf.booleanToTerraform(this._deleteRecursiveAllowed),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      managers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managers),
      name: cdktf.stringToTerraform(this._name),
      quota: cdktf.stringToTerraform(this._quota),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      auditors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      billing_managers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._billingManagers),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      quota: {
        value: cdktf.stringToHclTerraform(this._quota),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
