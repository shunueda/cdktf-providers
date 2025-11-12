// https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DedicatedServerV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#configuration_id DedicatedServerV1#configuration_id}
  */
  readonly configurationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#force_update_additional_params DedicatedServerV1#force_update_additional_params}
  */
  readonly forceUpdateAdditionalParams?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#id DedicatedServerV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#location_id DedicatedServerV1#location_id}
  */
  readonly locationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#os_host_name DedicatedServerV1#os_host_name}
  */
  readonly osHostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#os_id DedicatedServerV1#os_id}
  */
  readonly osId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#os_password DedicatedServerV1#os_password}
  */
  readonly osPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#price_plan_name DedicatedServerV1#price_plan_name}
  */
  readonly pricePlanName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#private_subnet DedicatedServerV1#private_subnet}
  */
  readonly privateSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#project_id DedicatedServerV1#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#public_subnet_id DedicatedServerV1#public_subnet_id}
  */
  readonly publicSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#public_subnet_ip DedicatedServerV1#public_subnet_ip}
  */
  readonly publicSubnetIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#ssh_key DedicatedServerV1#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#ssh_key_name DedicatedServerV1#ssh_key_name}
  */
  readonly sshKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#user_data DedicatedServerV1#user_data}
  */
  readonly userData?: string;
  /**
  * partitions_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#partitions_config DedicatedServerV1#partitions_config}
  */
  readonly partitionsConfig?: DedicatedServerV1PartitionsConfig[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#timeouts DedicatedServerV1#timeouts}
  */
  readonly timeouts?: DedicatedServerV1Timeouts;
}
export interface DedicatedServerV1PartitionsConfigDiskPartitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#fs_type DedicatedServerV1#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#mount DedicatedServerV1#mount}
  */
  readonly mount: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#raid DedicatedServerV1#raid}
  */
  readonly raid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#size DedicatedServerV1#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#size_percent DedicatedServerV1#size_percent}
  */
  readonly sizePercent?: number;
}

export function dedicatedServerV1PartitionsConfigDiskPartitionsToTerraform(struct?: DedicatedServerV1PartitionsConfigDiskPartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    mount: cdktf.stringToTerraform(struct!.mount),
    raid: cdktf.stringToTerraform(struct!.raid),
    size: cdktf.numberToTerraform(struct!.size),
    size_percent: cdktf.numberToTerraform(struct!.sizePercent),
  }
}


export function dedicatedServerV1PartitionsConfigDiskPartitionsToHclTerraform(struct?: DedicatedServerV1PartitionsConfigDiskPartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raid: {
      value: cdktf.stringToHclTerraform(struct!.raid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_percent: {
      value: cdktf.numberToHclTerraform(struct!.sizePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerV1PartitionsConfigDiskPartitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedServerV1PartitionsConfigDiskPartitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._mount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mount = this._mount;
    }
    if (this._raid !== undefined) {
      hasAnyValues = true;
      internalValueResult.raid = this._raid;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizePercent = this._sizePercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerV1PartitionsConfigDiskPartitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._mount = undefined;
      this._raid = undefined;
      this._size = undefined;
      this._sizePercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._mount = value.mount;
      this._raid = value.raid;
      this._size = value.size;
      this._sizePercent = value.sizePercent;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
  }

  // raid - computed: false, optional: false, required: true
  private _raid?: string; 
  public get raid() {
    return this.getStringAttribute('raid');
  }
  public set raid(value: string) {
    this._raid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get raidInput() {
    return this._raid;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_percent - computed: false, optional: true, required: false
  private _sizePercent?: number; 
  public get sizePercent() {
    return this.getNumberAttribute('size_percent');
  }
  public set sizePercent(value: number) {
    this._sizePercent = value;
  }
  public resetSizePercent() {
    this._sizePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizePercentInput() {
    return this._sizePercent;
  }
}

export class DedicatedServerV1PartitionsConfigDiskPartitionsList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerV1PartitionsConfigDiskPartitions[] | cdktf.IResolvable

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
  public get(index: number): DedicatedServerV1PartitionsConfigDiskPartitionsOutputReference {
    return new DedicatedServerV1PartitionsConfigDiskPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerV1PartitionsConfigSoftRaidConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#disk_type DedicatedServerV1#disk_type}
  */
  readonly diskType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#level DedicatedServerV1#level}
  */
  readonly level: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#name DedicatedServerV1#name}
  */
  readonly name: string;
}

export function dedicatedServerV1PartitionsConfigSoftRaidConfigToTerraform(struct?: DedicatedServerV1PartitionsConfigSoftRaidConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    level: cdktf.stringToTerraform(struct!.level),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dedicatedServerV1PartitionsConfigSoftRaidConfigToHclTerraform(struct?: DedicatedServerV1PartitionsConfigSoftRaidConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerV1PartitionsConfigSoftRaidConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedServerV1PartitionsConfigSoftRaidConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerV1PartitionsConfigSoftRaidConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskType = undefined;
      this._level = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskType = value.diskType;
      this._level = value.level;
      this._name = value.name;
    }
  }

  // disk_type - computed: false, optional: false, required: true
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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
}

export class DedicatedServerV1PartitionsConfigSoftRaidConfigList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerV1PartitionsConfigSoftRaidConfig[] | cdktf.IResolvable

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
  public get(index: number): DedicatedServerV1PartitionsConfigSoftRaidConfigOutputReference {
    return new DedicatedServerV1PartitionsConfigSoftRaidConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerV1PartitionsConfig {
  /**
  * disk_partitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#disk_partitions DedicatedServerV1#disk_partitions}
  */
  readonly diskPartitions?: DedicatedServerV1PartitionsConfigDiskPartitions[] | cdktf.IResolvable;
  /**
  * soft_raid_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#soft_raid_config DedicatedServerV1#soft_raid_config}
  */
  readonly softRaidConfig?: DedicatedServerV1PartitionsConfigSoftRaidConfig[] | cdktf.IResolvable;
}

export function dedicatedServerV1PartitionsConfigToTerraform(struct?: DedicatedServerV1PartitionsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_partitions: cdktf.listMapper(dedicatedServerV1PartitionsConfigDiskPartitionsToTerraform, true)(struct!.diskPartitions),
    soft_raid_config: cdktf.listMapper(dedicatedServerV1PartitionsConfigSoftRaidConfigToTerraform, true)(struct!.softRaidConfig),
  }
}


export function dedicatedServerV1PartitionsConfigToHclTerraform(struct?: DedicatedServerV1PartitionsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_partitions: {
      value: cdktf.listMapperHcl(dedicatedServerV1PartitionsConfigDiskPartitionsToHclTerraform, true)(struct!.diskPartitions),
      isBlock: true,
      type: "list",
      storageClassType: "DedicatedServerV1PartitionsConfigDiskPartitionsList",
    },
    soft_raid_config: {
      value: cdktf.listMapperHcl(dedicatedServerV1PartitionsConfigSoftRaidConfigToHclTerraform, true)(struct!.softRaidConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DedicatedServerV1PartitionsConfigSoftRaidConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerV1PartitionsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedServerV1PartitionsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskPartitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPartitions = this._diskPartitions?.internalValue;
    }
    if (this._softRaidConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.softRaidConfig = this._softRaidConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerV1PartitionsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskPartitions.internalValue = undefined;
      this._softRaidConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskPartitions.internalValue = value.diskPartitions;
      this._softRaidConfig.internalValue = value.softRaidConfig;
    }
  }

  // disk_partitions - computed: false, optional: true, required: false
  private _diskPartitions = new DedicatedServerV1PartitionsConfigDiskPartitionsList(this, "disk_partitions", false);
  public get diskPartitions() {
    return this._diskPartitions;
  }
  public putDiskPartitions(value: DedicatedServerV1PartitionsConfigDiskPartitions[] | cdktf.IResolvable) {
    this._diskPartitions.internalValue = value;
  }
  public resetDiskPartitions() {
    this._diskPartitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPartitionsInput() {
    return this._diskPartitions.internalValue;
  }

  // soft_raid_config - computed: false, optional: true, required: false
  private _softRaidConfig = new DedicatedServerV1PartitionsConfigSoftRaidConfigList(this, "soft_raid_config", false);
  public get softRaidConfig() {
    return this._softRaidConfig;
  }
  public putSoftRaidConfig(value: DedicatedServerV1PartitionsConfigSoftRaidConfig[] | cdktf.IResolvable) {
    this._softRaidConfig.internalValue = value;
  }
  public resetSoftRaidConfig() {
    this._softRaidConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softRaidConfigInput() {
    return this._softRaidConfig.internalValue;
  }
}

export class DedicatedServerV1PartitionsConfigList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerV1PartitionsConfig[] | cdktf.IResolvable

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
  public get(index: number): DedicatedServerV1PartitionsConfigOutputReference {
    return new DedicatedServerV1PartitionsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#create DedicatedServerV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#delete DedicatedServerV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#update DedicatedServerV1#update}
  */
  readonly update?: string;
}

export function dedicatedServerV1TimeoutsToTerraform(struct?: DedicatedServerV1Timeouts | cdktf.IResolvable): any {
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


export function dedicatedServerV1TimeoutsToHclTerraform(struct?: DedicatedServerV1Timeouts | cdktf.IResolvable): any {
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

export class DedicatedServerV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedServerV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DedicatedServerV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1 selectel_dedicated_server_v1}
*/
export class DedicatedServerV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "selectel_dedicated_server_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DedicatedServerV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DedicatedServerV1 to import
  * @param importFromId The id of the existing DedicatedServerV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DedicatedServerV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "selectel_dedicated_server_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/dedicated_server_v1 selectel_dedicated_server_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DedicatedServerV1Config
  */
  public constructor(scope: Construct, id: string, config: DedicatedServerV1Config) {
    super(scope, id, {
      terraformResourceType: 'selectel_dedicated_server_v1',
      terraformGeneratorMetadata: {
        providerName: 'selectel',
        providerVersion: '7.1.0',
        providerVersionConstraint: '7.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configurationId = config.configurationId;
    this._forceUpdateAdditionalParams = config.forceUpdateAdditionalParams;
    this._id = config.id;
    this._locationId = config.locationId;
    this._osHostName = config.osHostName;
    this._osId = config.osId;
    this._osPassword = config.osPassword;
    this._pricePlanName = config.pricePlanName;
    this._privateSubnet = config.privateSubnet;
    this._projectId = config.projectId;
    this._publicSubnetId = config.publicSubnetId;
    this._publicSubnetIp = config.publicSubnetIp;
    this._sshKey = config.sshKey;
    this._sshKeyName = config.sshKeyName;
    this._userData = config.userData;
    this._partitionsConfig.internalValue = config.partitionsConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_id - computed: false, optional: false, required: true
  private _configurationId?: string; 
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
  }

  // force_update_additional_params - computed: false, optional: true, required: false
  private _forceUpdateAdditionalParams?: boolean | cdktf.IResolvable; 
  public get forceUpdateAdditionalParams() {
    return this.getBooleanAttribute('force_update_additional_params');
  }
  public set forceUpdateAdditionalParams(value: boolean | cdktf.IResolvable) {
    this._forceUpdateAdditionalParams = value;
  }
  public resetForceUpdateAdditionalParams() {
    this._forceUpdateAdditionalParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateAdditionalParamsInput() {
    return this._forceUpdateAdditionalParams;
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

  // location_id - computed: false, optional: false, required: true
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // os_host_name - computed: false, optional: true, required: false
  private _osHostName?: string; 
  public get osHostName() {
    return this.getStringAttribute('os_host_name');
  }
  public set osHostName(value: string) {
    this._osHostName = value;
  }
  public resetOsHostName() {
    this._osHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osHostNameInput() {
    return this._osHostName;
  }

  // os_id - computed: false, optional: false, required: true
  private _osId?: string; 
  public get osId() {
    return this.getStringAttribute('os_id');
  }
  public set osId(value: string) {
    this._osId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osIdInput() {
    return this._osId;
  }

  // os_password - computed: false, optional: true, required: false
  private _osPassword?: string; 
  public get osPassword() {
    return this.getStringAttribute('os_password');
  }
  public set osPassword(value: string) {
    this._osPassword = value;
  }
  public resetOsPassword() {
    this._osPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osPasswordInput() {
    return this._osPassword;
  }

  // price_plan_name - computed: false, optional: false, required: true
  private _pricePlanName?: string; 
  public get pricePlanName() {
    return this.getStringAttribute('price_plan_name');
  }
  public set pricePlanName(value: string) {
    this._pricePlanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pricePlanNameInput() {
    return this._pricePlanName;
  }

  // private_subnet - computed: false, optional: true, required: false
  private _privateSubnet?: string; 
  public get privateSubnet() {
    return this.getStringAttribute('private_subnet');
  }
  public set privateSubnet(value: string) {
    this._privateSubnet = value;
  }
  public resetPrivateSubnet() {
    this._privateSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSubnetInput() {
    return this._privateSubnet;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public_subnet_id - computed: false, optional: true, required: false
  private _publicSubnetId?: string; 
  public get publicSubnetId() {
    return this.getStringAttribute('public_subnet_id');
  }
  public set publicSubnetId(value: string) {
    this._publicSubnetId = value;
  }
  public resetPublicSubnetId() {
    this._publicSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSubnetIdInput() {
    return this._publicSubnetId;
  }

  // public_subnet_ip - computed: false, optional: true, required: false
  private _publicSubnetIp?: string; 
  public get publicSubnetIp() {
    return this.getStringAttribute('public_subnet_ip');
  }
  public set publicSubnetIp(value: string) {
    this._publicSubnetIp = value;
  }
  public resetPublicSubnetIp() {
    this._publicSubnetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSubnetIpInput() {
    return this._publicSubnetIp;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // ssh_key_name - computed: false, optional: true, required: false
  private _sshKeyName?: string; 
  public get sshKeyName() {
    return this.getStringAttribute('ssh_key_name');
  }
  public set sshKeyName(value: string) {
    this._sshKeyName = value;
  }
  public resetSshKeyName() {
    this._sshKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyNameInput() {
    return this._sshKeyName;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // partitions_config - computed: false, optional: true, required: false
  private _partitionsConfig = new DedicatedServerV1PartitionsConfigList(this, "partitions_config", false);
  public get partitionsConfig() {
    return this._partitionsConfig;
  }
  public putPartitionsConfig(value: DedicatedServerV1PartitionsConfig[] | cdktf.IResolvable) {
    this._partitionsConfig.internalValue = value;
  }
  public resetPartitionsConfig() {
    this._partitionsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsConfigInput() {
    return this._partitionsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DedicatedServerV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DedicatedServerV1Timeouts) {
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
      configuration_id: cdktf.stringToTerraform(this._configurationId),
      force_update_additional_params: cdktf.booleanToTerraform(this._forceUpdateAdditionalParams),
      id: cdktf.stringToTerraform(this._id),
      location_id: cdktf.stringToTerraform(this._locationId),
      os_host_name: cdktf.stringToTerraform(this._osHostName),
      os_id: cdktf.stringToTerraform(this._osId),
      os_password: cdktf.stringToTerraform(this._osPassword),
      price_plan_name: cdktf.stringToTerraform(this._pricePlanName),
      private_subnet: cdktf.stringToTerraform(this._privateSubnet),
      project_id: cdktf.stringToTerraform(this._projectId),
      public_subnet_id: cdktf.stringToTerraform(this._publicSubnetId),
      public_subnet_ip: cdktf.stringToTerraform(this._publicSubnetIp),
      ssh_key: cdktf.stringToTerraform(this._sshKey),
      ssh_key_name: cdktf.stringToTerraform(this._sshKeyName),
      user_data: cdktf.stringToTerraform(this._userData),
      partitions_config: cdktf.listMapper(dedicatedServerV1PartitionsConfigToTerraform, true)(this._partitionsConfig.internalValue),
      timeouts: dedicatedServerV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_id: {
        value: cdktf.stringToHclTerraform(this._configurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_update_additional_params: {
        value: cdktf.booleanToHclTerraform(this._forceUpdateAdditionalParams),
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
      location_id: {
        value: cdktf.stringToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_host_name: {
        value: cdktf.stringToHclTerraform(this._osHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_id: {
        value: cdktf.stringToHclTerraform(this._osId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_password: {
        value: cdktf.stringToHclTerraform(this._osPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      price_plan_name: {
        value: cdktf.stringToHclTerraform(this._pricePlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_subnet: {
        value: cdktf.stringToHclTerraform(this._privateSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_subnet_id: {
        value: cdktf.stringToHclTerraform(this._publicSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_subnet_ip: {
        value: cdktf.stringToHclTerraform(this._publicSubnetIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key: {
        value: cdktf.stringToHclTerraform(this._sshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_name: {
        value: cdktf.stringToHclTerraform(this._sshKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partitions_config: {
        value: cdktf.listMapperHcl(dedicatedServerV1PartitionsConfigToHclTerraform, true)(this._partitionsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DedicatedServerV1PartitionsConfigList",
      },
      timeouts: {
        value: dedicatedServerV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DedicatedServerV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
