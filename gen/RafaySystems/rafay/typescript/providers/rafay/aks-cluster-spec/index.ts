// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/aks_cluster_spec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AksClusterSpecAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/aks_cluster_spec#checkdiff AksClusterSpecA#checkdiff}
  */
  readonly checkdiff?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/aks_cluster_spec#id AksClusterSpecA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/aks_cluster_spec#name AksClusterSpecA#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/aks_cluster_spec#projectname AksClusterSpecA#projectname}
  */
  readonly projectname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/aks_cluster_spec#waitflag AksClusterSpecA#waitflag}
  */
  readonly waitflag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/aks_cluster_spec#yamlfilepath AksClusterSpecA#yamlfilepath}
  */
  readonly yamlfilepath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/aks_cluster_spec#yamlfileversion AksClusterSpecA#yamlfileversion}
  */
  readonly yamlfileversion: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/aks_cluster_spec#timeouts AksClusterSpecA#timeouts}
  */
  readonly timeouts?: AksClusterSpecTimeouts;
}
export interface AksClusterSpecTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/aks_cluster_spec#create AksClusterSpecA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/aks_cluster_spec#delete AksClusterSpecA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/aks_cluster_spec#update AksClusterSpecA#update}
  */
  readonly update?: string;
}

export function aksClusterSpecTimeoutsToTerraform(struct?: AksClusterSpecTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function aksClusterSpecTimeoutsToHclTerraform(struct?: AksClusterSpecTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterSpecTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AksClusterSpecTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterSpecTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/aks_cluster_spec rafay_aks_cluster_spec}
*/
export class AksClusterSpecA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_aks_cluster_spec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AksClusterSpecA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AksClusterSpecA to import
  * @param importFromId The id of the existing AksClusterSpecA that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/aks_cluster_spec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AksClusterSpecA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_aks_cluster_spec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/aks_cluster_spec rafay_aks_cluster_spec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AksClusterSpecAConfig
  */
  public constructor(scope: Construct, id: string, config: AksClusterSpecAConfig) {
    super(scope, id, {
      terraformResourceType: 'rafay_aks_cluster_spec',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.54',
        providerVersionConstraint: '1.1.54'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkdiff = config.checkdiff;
    this._id = config.id;
    this._name = config.name;
    this._projectname = config.projectname;
    this._waitflag = config.waitflag;
    this._yamlfilepath = config.yamlfilepath;
    this._yamlfileversion = config.yamlfileversion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checkdiff - computed: false, optional: true, required: false
  private _checkdiff?: boolean | cdktf.IResolvable; 
  public get checkdiff() {
    return this.getBooleanAttribute('checkdiff');
  }
  public set checkdiff(value: boolean | cdktf.IResolvable) {
    this._checkdiff = value;
  }
  public resetCheckdiff() {
    this._checkdiff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkdiffInput() {
    return this._checkdiff;
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

  // projectname - computed: false, optional: false, required: true
  private _projectname?: string; 
  public get projectname() {
    return this.getStringAttribute('projectname');
  }
  public set projectname(value: string) {
    this._projectname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectnameInput() {
    return this._projectname;
  }

  // waitflag - computed: false, optional: true, required: false
  private _waitflag?: string; 
  public get waitflag() {
    return this.getStringAttribute('waitflag');
  }
  public set waitflag(value: string) {
    this._waitflag = value;
  }
  public resetWaitflag() {
    this._waitflag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitflagInput() {
    return this._waitflag;
  }

  // yamlfilepath - computed: false, optional: false, required: true
  private _yamlfilepath?: string; 
  public get yamlfilepath() {
    return this.getStringAttribute('yamlfilepath');
  }
  public set yamlfilepath(value: string) {
    this._yamlfilepath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlfilepathInput() {
    return this._yamlfilepath;
  }

  // yamlfileversion - computed: false, optional: false, required: true
  private _yamlfileversion?: string; 
  public get yamlfileversion() {
    return this.getStringAttribute('yamlfileversion');
  }
  public set yamlfileversion(value: string) {
    this._yamlfileversion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlfileversionInput() {
    return this._yamlfileversion;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AksClusterSpecTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AksClusterSpecTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      checkdiff: cdktf.booleanToTerraform(this._checkdiff),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      projectname: cdktf.stringToTerraform(this._projectname),
      waitflag: cdktf.stringToTerraform(this._waitflag),
      yamlfilepath: cdktf.stringToTerraform(this._yamlfilepath),
      yamlfileversion: cdktf.stringToTerraform(this._yamlfileversion),
      timeouts: aksClusterSpecTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      checkdiff: {
        value: cdktf.booleanToHclTerraform(this._checkdiff),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      projectname: {
        value: cdktf.stringToHclTerraform(this._projectname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waitflag: {
        value: cdktf.stringToHclTerraform(this._waitflag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      yamlfilepath: {
        value: cdktf.stringToHclTerraform(this._yamlfilepath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      yamlfileversion: {
        value: cdktf.stringToHclTerraform(this._yamlfileversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: aksClusterSpecTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AksClusterSpecTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
