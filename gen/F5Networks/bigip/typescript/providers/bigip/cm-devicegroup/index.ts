// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmDevicegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies if the device-group will automatically sync configuration data to its members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup#auto_sync CmDevicegroup#auto_sync}
  */
  readonly autoSync?: string;
  /**
  * Description of Device group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup#description CmDevicegroup#description}
  */
  readonly description?: string;
  /**
  * Specifies if the device-group will perform a full-load upon sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup#full_load_on_sync CmDevicegroup#full_load_on_sync}
  */
  readonly fullLoadOnSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup#id CmDevicegroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the maximum size (in KB) to devote to incremental config sync cached transactions. The default is 1024 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup#incremental_config CmDevicegroup#incremental_config}
  */
  readonly incrementalConfig?: number;
  /**
  * Name of the Device group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup#name CmDevicegroup#name}
  */
  readonly name?: string;
  /**
  * Specifies if the device-group will use a network connection for failover
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup#network_failover CmDevicegroup#network_failover}
  */
  readonly networkFailover?: string;
  /**
  * Device administrative partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup#partition CmDevicegroup#partition}
  */
  readonly partition?: string;
  /**
  * Specifies whether the configuration should be saved upon auto-sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup#save_on_auto_sync CmDevicegroup#save_on_auto_sync}
  */
  readonly saveOnAutoSync?: string;
  /**
  * Specifies if the device-group will be used for failover or resource syncing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup#type CmDevicegroup#type}
  */
  readonly type?: string;
  /**
  * device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup#device CmDevicegroup#device}
  */
  readonly device?: CmDevicegroupDevice[] | cdktf.IResolvable;
}
export interface CmDevicegroupDevice {
  /**
  * Name of origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup#name CmDevicegroup#name}
  */
  readonly name?: string;
  /**
  * Name of origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup#set_sync_leader CmDevicegroup#set_sync_leader}
  */
  readonly setSyncLeader?: boolean | cdktf.IResolvable;
}

export function cmDevicegroupDeviceToTerraform(struct?: CmDevicegroupDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    set_sync_leader: cdktf.booleanToTerraform(struct!.setSyncLeader),
  }
}


export function cmDevicegroupDeviceToHclTerraform(struct?: CmDevicegroupDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_sync_leader: {
      value: cdktf.booleanToHclTerraform(struct!.setSyncLeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmDevicegroupDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CmDevicegroupDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._setSyncLeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.setSyncLeader = this._setSyncLeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmDevicegroupDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._setSyncLeader = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._setSyncLeader = value.setSyncLeader;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // set_sync_leader - computed: false, optional: true, required: false
  private _setSyncLeader?: boolean | cdktf.IResolvable; 
  public get setSyncLeader() {
    return this.getBooleanAttribute('set_sync_leader');
  }
  public set setSyncLeader(value: boolean | cdktf.IResolvable) {
    this._setSyncLeader = value;
  }
  public resetSetSyncLeader() {
    this._setSyncLeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSyncLeaderInput() {
    return this._setSyncLeader;
  }
}

export class CmDevicegroupDeviceList extends cdktf.ComplexList {
  public internalValue? : CmDevicegroupDevice[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CmDevicegroupDeviceOutputReference {
    return new CmDevicegroupDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup bigip_cm_devicegroup}
*/
export class CmDevicegroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_cm_devicegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmDevicegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmDevicegroup to import
  * @param importFromId The id of the existing CmDevicegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmDevicegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_cm_devicegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/cm_devicegroup bigip_cm_devicegroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmDevicegroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CmDevicegroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bigip_cm_devicegroup',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSync = config.autoSync;
    this._description = config.description;
    this._fullLoadOnSync = config.fullLoadOnSync;
    this._id = config.id;
    this._incrementalConfig = config.incrementalConfig;
    this._name = config.name;
    this._networkFailover = config.networkFailover;
    this._partition = config.partition;
    this._saveOnAutoSync = config.saveOnAutoSync;
    this._type = config.type;
    this._device.internalValue = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_sync - computed: false, optional: true, required: false
  private _autoSync?: string; 
  public get autoSync() {
    return this.getStringAttribute('auto_sync');
  }
  public set autoSync(value: string) {
    this._autoSync = value;
  }
  public resetAutoSync() {
    this._autoSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSyncInput() {
    return this._autoSync;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // full_load_on_sync - computed: false, optional: true, required: false
  private _fullLoadOnSync?: string; 
  public get fullLoadOnSync() {
    return this.getStringAttribute('full_load_on_sync');
  }
  public set fullLoadOnSync(value: string) {
    this._fullLoadOnSync = value;
  }
  public resetFullLoadOnSync() {
    this._fullLoadOnSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullLoadOnSyncInput() {
    return this._fullLoadOnSync;
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

  // incremental_config - computed: false, optional: true, required: false
  private _incrementalConfig?: number; 
  public get incrementalConfig() {
    return this.getNumberAttribute('incremental_config');
  }
  public set incrementalConfig(value: number) {
    this._incrementalConfig = value;
  }
  public resetIncrementalConfig() {
    this._incrementalConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalConfigInput() {
    return this._incrementalConfig;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_failover - computed: false, optional: true, required: false
  private _networkFailover?: string; 
  public get networkFailover() {
    return this.getStringAttribute('network_failover');
  }
  public set networkFailover(value: string) {
    this._networkFailover = value;
  }
  public resetNetworkFailover() {
    this._networkFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFailoverInput() {
    return this._networkFailover;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // save_on_auto_sync - computed: false, optional: true, required: false
  private _saveOnAutoSync?: string; 
  public get saveOnAutoSync() {
    return this.getStringAttribute('save_on_auto_sync');
  }
  public set saveOnAutoSync(value: string) {
    this._saveOnAutoSync = value;
  }
  public resetSaveOnAutoSync() {
    this._saveOnAutoSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveOnAutoSyncInput() {
    return this._saveOnAutoSync;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // device - computed: false, optional: true, required: false
  private _device = new CmDevicegroupDeviceList(this, "device", false);
  public get device() {
    return this._device;
  }
  public putDevice(value: CmDevicegroupDevice[] | cdktf.IResolvable) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_sync: cdktf.stringToTerraform(this._autoSync),
      description: cdktf.stringToTerraform(this._description),
      full_load_on_sync: cdktf.stringToTerraform(this._fullLoadOnSync),
      id: cdktf.stringToTerraform(this._id),
      incremental_config: cdktf.numberToTerraform(this._incrementalConfig),
      name: cdktf.stringToTerraform(this._name),
      network_failover: cdktf.stringToTerraform(this._networkFailover),
      partition: cdktf.stringToTerraform(this._partition),
      save_on_auto_sync: cdktf.stringToTerraform(this._saveOnAutoSync),
      type: cdktf.stringToTerraform(this._type),
      device: cdktf.listMapper(cmDevicegroupDeviceToTerraform, true)(this._device.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_sync: {
        value: cdktf.stringToHclTerraform(this._autoSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_load_on_sync: {
        value: cdktf.stringToHclTerraform(this._fullLoadOnSync),
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
      incremental_config: {
        value: cdktf.numberToHclTerraform(this._incrementalConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_failover: {
        value: cdktf.stringToHclTerraform(this._networkFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_on_auto_sync: {
        value: cdktf.stringToHclTerraform(this._saveOnAutoSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.listMapperHcl(cmDevicegroupDeviceToHclTerraform, true)(this._device.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmDevicegroupDeviceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
