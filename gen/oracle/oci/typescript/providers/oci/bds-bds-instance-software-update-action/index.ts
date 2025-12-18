// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_software_update_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BdsBdsInstanceSoftwareUpdateActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_software_update_action#bds_instance_id BdsBdsInstanceSoftwareUpdateAction#bds_instance_id}
  */
  readonly bdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_software_update_action#id BdsBdsInstanceSoftwareUpdateAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_software_update_action#software_update_keys BdsBdsInstanceSoftwareUpdateAction#software_update_keys}
  */
  readonly softwareUpdateKeys: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_software_update_action#timeouts BdsBdsInstanceSoftwareUpdateAction#timeouts}
  */
  readonly timeouts?: BdsBdsInstanceSoftwareUpdateActionTimeouts;
}
export interface BdsBdsInstanceSoftwareUpdateActionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_software_update_action#create BdsBdsInstanceSoftwareUpdateAction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_software_update_action#delete BdsBdsInstanceSoftwareUpdateAction#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_software_update_action#update BdsBdsInstanceSoftwareUpdateAction#update}
  */
  readonly update?: string;
}

export function bdsBdsInstanceSoftwareUpdateActionTimeoutsToTerraform(struct?: BdsBdsInstanceSoftwareUpdateActionTimeouts | cdktf.IResolvable): any {
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


export function bdsBdsInstanceSoftwareUpdateActionTimeoutsToHclTerraform(struct?: BdsBdsInstanceSoftwareUpdateActionTimeouts | cdktf.IResolvable): any {
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

export class BdsBdsInstanceSoftwareUpdateActionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BdsBdsInstanceSoftwareUpdateActionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BdsBdsInstanceSoftwareUpdateActionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_software_update_action oci_bds_bds_instance_software_update_action}
*/
export class BdsBdsInstanceSoftwareUpdateAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance_software_update_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BdsBdsInstanceSoftwareUpdateAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BdsBdsInstanceSoftwareUpdateAction to import
  * @param importFromId The id of the existing BdsBdsInstanceSoftwareUpdateAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_software_update_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BdsBdsInstanceSoftwareUpdateAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_bds_instance_software_update_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_software_update_action oci_bds_bds_instance_software_update_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BdsBdsInstanceSoftwareUpdateActionConfig
  */
  public constructor(scope: Construct, id: string, config: BdsBdsInstanceSoftwareUpdateActionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance_software_update_action',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bdsInstanceId = config.bdsInstanceId;
    this._id = config.id;
    this._softwareUpdateKeys = config.softwareUpdateKeys;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bds_instance_id - computed: false, optional: false, required: true
  private _bdsInstanceId?: string; 
  public get bdsInstanceId() {
    return this.getStringAttribute('bds_instance_id');
  }
  public set bdsInstanceId(value: string) {
    this._bdsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bdsInstanceIdInput() {
    return this._bdsInstanceId;
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

  // software_update_keys - computed: false, optional: false, required: true
  private _softwareUpdateKeys?: string[]; 
  public get softwareUpdateKeys() {
    return this.getListAttribute('software_update_keys');
  }
  public set softwareUpdateKeys(value: string[]) {
    this._softwareUpdateKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareUpdateKeysInput() {
    return this._softwareUpdateKeys;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BdsBdsInstanceSoftwareUpdateActionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BdsBdsInstanceSoftwareUpdateActionTimeouts) {
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
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
      id: cdktf.stringToTerraform(this._id),
      software_update_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._softwareUpdateKeys),
      timeouts: bdsBdsInstanceSoftwareUpdateActionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bds_instance_id: {
        value: cdktf.stringToHclTerraform(this._bdsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_update_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._softwareUpdateKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: bdsBdsInstanceSoftwareUpdateActionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BdsBdsInstanceSoftwareUpdateActionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
