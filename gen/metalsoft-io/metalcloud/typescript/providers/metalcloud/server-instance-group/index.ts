// https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerInstanceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom variables for the server instance group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#custom_variables ServerInstanceGroup#custom_variables}
  */
  readonly customVariables?: ServerInstanceGroupCustomVariables[] | cdktf.IResolvable;
  /**
  * Server Instance Group infrastructure Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#infrastructure_id ServerInstanceGroup#infrastructure_id}
  */
  readonly infrastructureId: string;
  /**
  * Server Instance Group instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#instance_count ServerInstanceGroup#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Server Instance Group label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#label ServerInstanceGroup#label}
  */
  readonly label: string;
  /**
  * Server Instance Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#name ServerInstanceGroup#name}
  */
  readonly name?: string;
  /**
  * Network connections for the server instance group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#network_connections ServerInstanceGroup#network_connections}
  */
  readonly networkConnections?: ServerInstanceGroupNetworkConnections[] | cdktf.IResolvable;
  /**
  * Server Instance Group OS template Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#os_template_id ServerInstanceGroup#os_template_id}
  */
  readonly osTemplateId: string;
  /**
  * Server type Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#server_type_id ServerInstanceGroup#server_type_id}
  */
  readonly serverTypeId: string;
  /**
  * Storage controllers configuration for the server instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#storage_controllers ServerInstanceGroup#storage_controllers}
  */
  readonly storageControllers?: ServerInstanceGroupStorageControllers[] | cdktf.IResolvable;
}
export interface ServerInstanceGroupCustomVariables {
  /**
  * Name of the custom variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#name ServerInstanceGroup#name}
  */
  readonly name: string;
  /**
  * Value of the custom variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#value ServerInstanceGroup#value}
  */
  readonly value: string;
}

export function serverInstanceGroupCustomVariablesToTerraform(struct?: ServerInstanceGroupCustomVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serverInstanceGroupCustomVariablesToHclTerraform(struct?: ServerInstanceGroupCustomVariables | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerInstanceGroupCustomVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerInstanceGroupCustomVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerInstanceGroupCustomVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServerInstanceGroupCustomVariablesList extends cdktf.ComplexList {
  public internalValue? : ServerInstanceGroupCustomVariables[] | cdktf.IResolvable

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
  public get(index: number): ServerInstanceGroupCustomVariablesOutputReference {
    return new ServerInstanceGroupCustomVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerInstanceGroupNetworkConnections {
  /**
  * Access mode for the network connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#access_mode ServerInstanceGroup#access_mode}
  */
  readonly accessMode: string;
  /**
  * Logical Network Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#logical_network_id ServerInstanceGroup#logical_network_id}
  */
  readonly logicalNetworkId: string;
  /**
  * MTU for the network connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#mtu ServerInstanceGroup#mtu}
  */
  readonly mtu?: number;
  /**
  * Whether the network connection is tagged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#tagged ServerInstanceGroup#tagged}
  */
  readonly tagged: boolean | cdktf.IResolvable;
}

export function serverInstanceGroupNetworkConnectionsToTerraform(struct?: ServerInstanceGroupNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    logical_network_id: cdktf.stringToTerraform(struct!.logicalNetworkId),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    tagged: cdktf.booleanToTerraform(struct!.tagged),
  }
}


export function serverInstanceGroupNetworkConnectionsToHclTerraform(struct?: ServerInstanceGroupNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_network_id: {
      value: cdktf.stringToHclTerraform(struct!.logicalNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tagged: {
      value: cdktf.booleanToHclTerraform(struct!.tagged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerInstanceGroupNetworkConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerInstanceGroupNetworkConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._logicalNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalNetworkId = this._logicalNetworkId;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._tagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagged = this._tagged;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerInstanceGroupNetworkConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._logicalNetworkId = undefined;
      this._mtu = undefined;
      this._tagged = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
      this._logicalNetworkId = value.logicalNetworkId;
      this._mtu = value.mtu;
      this._tagged = value.tagged;
    }
  }

  // access_mode - computed: false, optional: false, required: true
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // logical_network_id - computed: false, optional: false, required: true
  private _logicalNetworkId?: string; 
  public get logicalNetworkId() {
    return this.getStringAttribute('logical_network_id');
  }
  public set logicalNetworkId(value: string) {
    this._logicalNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalNetworkIdInput() {
    return this._logicalNetworkId;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // tagged - computed: false, optional: false, required: true
  private _tagged?: boolean | cdktf.IResolvable; 
  public get tagged() {
    return this.getBooleanAttribute('tagged');
  }
  public set tagged(value: boolean | cdktf.IResolvable) {
    this._tagged = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedInput() {
    return this._tagged;
  }
}

export class ServerInstanceGroupNetworkConnectionsList extends cdktf.ComplexList {
  public internalValue? : ServerInstanceGroupNetworkConnections[] | cdktf.IResolvable

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
  public get(index: number): ServerInstanceGroupNetworkConnectionsOutputReference {
    return new ServerInstanceGroupNetworkConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerInstanceGroupStorageControllersVolumes {
  /**
  * Storage controller name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#controller_name ServerInstanceGroup#controller_name}
  */
  readonly controllerName: string;
  /**
  * Volume disk count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#disk_count ServerInstanceGroup#disk_count}
  */
  readonly diskCount: number;
  /**
  * Volume disk size in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#disk_size_gb ServerInstanceGroup#disk_size_gb}
  */
  readonly diskSizeGb: number;
  /**
  * Volume disk type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#disk_type ServerInstanceGroup#disk_type}
  */
  readonly diskType: string;
  /**
  * Volume RAID type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#raid_type ServerInstanceGroup#raid_type}
  */
  readonly raidType: string;
  /**
  * Storage volume name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#volume_name ServerInstanceGroup#volume_name}
  */
  readonly volumeName: string;
}

export function serverInstanceGroupStorageControllersVolumesToTerraform(struct?: ServerInstanceGroupStorageControllersVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_name: cdktf.stringToTerraform(struct!.controllerName),
    disk_count: cdktf.numberToTerraform(struct!.diskCount),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    raid_type: cdktf.stringToTerraform(struct!.raidType),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function serverInstanceGroupStorageControllersVolumesToHclTerraform(struct?: ServerInstanceGroupStorageControllersVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_name: {
      value: cdktf.stringToHclTerraform(struct!.controllerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_count: {
      value: cdktf.numberToHclTerraform(struct!.diskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raid_type: {
      value: cdktf.stringToHclTerraform(struct!.raidType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerInstanceGroupStorageControllersVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerInstanceGroupStorageControllersVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerName = this._controllerName;
    }
    if (this._diskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskCount = this._diskCount;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._raidType !== undefined) {
      hasAnyValues = true;
      internalValueResult.raidType = this._raidType;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerInstanceGroupStorageControllersVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerName = undefined;
      this._diskCount = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._raidType = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerName = value.controllerName;
      this._diskCount = value.diskCount;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._raidType = value.raidType;
      this._volumeName = value.volumeName;
    }
  }

  // controller_name - computed: false, optional: false, required: true
  private _controllerName?: string; 
  public get controllerName() {
    return this.getStringAttribute('controller_name');
  }
  public set controllerName(value: string) {
    this._controllerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerNameInput() {
    return this._controllerName;
  }

  // disk_count - computed: false, optional: false, required: true
  private _diskCount?: number; 
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }
  public set diskCount(value: number) {
    this._diskCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCountInput() {
    return this._diskCount;
  }

  // disk_size_gb - computed: false, optional: false, required: true
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
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

  // raid_type - computed: false, optional: false, required: true
  private _raidType?: string; 
  public get raidType() {
    return this.getStringAttribute('raid_type');
  }
  public set raidType(value: string) {
    this._raidType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get raidTypeInput() {
    return this._raidType;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class ServerInstanceGroupStorageControllersVolumesList extends cdktf.ComplexList {
  public internalValue? : ServerInstanceGroupStorageControllersVolumes[] | cdktf.IResolvable

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
  public get(index: number): ServerInstanceGroupStorageControllersVolumesOutputReference {
    return new ServerInstanceGroupStorageControllersVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerInstanceGroupStorageControllers {
  /**
  * Storage controller mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#mode ServerInstanceGroup#mode}
  */
  readonly mode: string;
  /**
  * Storage controller Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#storage_controller_id ServerInstanceGroup#storage_controller_id}
  */
  readonly storageControllerId: string;
  /**
  * Storage volumes configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#volumes ServerInstanceGroup#volumes}
  */
  readonly volumes: ServerInstanceGroupStorageControllersVolumes[] | cdktf.IResolvable;
}

export function serverInstanceGroupStorageControllersToTerraform(struct?: ServerInstanceGroupStorageControllers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    storage_controller_id: cdktf.stringToTerraform(struct!.storageControllerId),
    volumes: cdktf.listMapper(serverInstanceGroupStorageControllersVolumesToTerraform, false)(struct!.volumes),
  }
}


export function serverInstanceGroupStorageControllersToHclTerraform(struct?: ServerInstanceGroupStorageControllers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_controller_id: {
      value: cdktf.stringToHclTerraform(struct!.storageControllerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes: {
      value: cdktf.listMapperHcl(serverInstanceGroupStorageControllersVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "set",
      storageClassType: "ServerInstanceGroupStorageControllersVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerInstanceGroupStorageControllersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerInstanceGroupStorageControllers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._storageControllerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageControllerId = this._storageControllerId;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerInstanceGroupStorageControllers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._storageControllerId = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._storageControllerId = value.storageControllerId;
      this._volumes.internalValue = value.volumes;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // storage_controller_id - computed: false, optional: false, required: true
  private _storageControllerId?: string; 
  public get storageControllerId() {
    return this.getStringAttribute('storage_controller_id');
  }
  public set storageControllerId(value: string) {
    this._storageControllerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageControllerIdInput() {
    return this._storageControllerId;
  }

  // volumes - computed: false, optional: false, required: true
  private _volumes = new ServerInstanceGroupStorageControllersVolumesList(this, "volumes", true);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: ServerInstanceGroupStorageControllersVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}

export class ServerInstanceGroupStorageControllersList extends cdktf.ComplexList {
  public internalValue? : ServerInstanceGroupStorageControllers[] | cdktf.IResolvable

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
  public get(index: number): ServerInstanceGroupStorageControllersOutputReference {
    return new ServerInstanceGroupStorageControllersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group metalcloud_server_instance_group}
*/
export class ServerInstanceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metalcloud_server_instance_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerInstanceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerInstanceGroup to import
  * @param importFromId The id of the existing ServerInstanceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerInstanceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metalcloud_server_instance_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/server_instance_group metalcloud_server_instance_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerInstanceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ServerInstanceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'metalcloud_server_instance_group',
      terraformGeneratorMetadata: {
        providerName: 'metalcloud',
        providerVersion: '7.0.10',
        providerVersionConstraint: '7.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customVariables.internalValue = config.customVariables;
    this._infrastructureId = config.infrastructureId;
    this._instanceCount = config.instanceCount;
    this._label = config.label;
    this._name = config.name;
    this._networkConnections.internalValue = config.networkConnections;
    this._osTemplateId = config.osTemplateId;
    this._serverTypeId = config.serverTypeId;
    this._storageControllers.internalValue = config.storageControllers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_variables - computed: false, optional: true, required: false
  private _customVariables = new ServerInstanceGroupCustomVariablesList(this, "custom_variables", true);
  public get customVariables() {
    return this._customVariables;
  }
  public putCustomVariables(value: ServerInstanceGroupCustomVariables[] | cdktf.IResolvable) {
    this._customVariables.internalValue = value;
  }
  public resetCustomVariables() {
    this._customVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVariablesInput() {
    return this._customVariables.internalValue;
  }

  // infrastructure_id - computed: false, optional: false, required: true
  private _infrastructureId?: string; 
  public get infrastructureId() {
    return this.getStringAttribute('infrastructure_id');
  }
  public set infrastructureId(value: string) {
    this._infrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureIdInput() {
    return this._infrastructureId;
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // network_connections - computed: false, optional: true, required: false
  private _networkConnections = new ServerInstanceGroupNetworkConnectionsList(this, "network_connections", true);
  public get networkConnections() {
    return this._networkConnections;
  }
  public putNetworkConnections(value: ServerInstanceGroupNetworkConnections[] | cdktf.IResolvable) {
    this._networkConnections.internalValue = value;
  }
  public resetNetworkConnections() {
    this._networkConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectionsInput() {
    return this._networkConnections.internalValue;
  }

  // os_template_id - computed: false, optional: false, required: true
  private _osTemplateId?: string; 
  public get osTemplateId() {
    return this.getStringAttribute('os_template_id');
  }
  public set osTemplateId(value: string) {
    this._osTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osTemplateIdInput() {
    return this._osTemplateId;
  }

  // server_instance_group_id - computed: true, optional: false, required: false
  public get serverInstanceGroupId() {
    return this.getStringAttribute('server_instance_group_id');
  }

  // server_type_id - computed: false, optional: false, required: true
  private _serverTypeId?: string; 
  public get serverTypeId() {
    return this.getStringAttribute('server_type_id');
  }
  public set serverTypeId(value: string) {
    this._serverTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeIdInput() {
    return this._serverTypeId;
  }

  // storage_controllers - computed: false, optional: true, required: false
  private _storageControllers = new ServerInstanceGroupStorageControllersList(this, "storage_controllers", true);
  public get storageControllers() {
    return this._storageControllers;
  }
  public putStorageControllers(value: ServerInstanceGroupStorageControllers[] | cdktf.IResolvable) {
    this._storageControllers.internalValue = value;
  }
  public resetStorageControllers() {
    this._storageControllers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageControllersInput() {
    return this._storageControllers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_variables: cdktf.listMapper(serverInstanceGroupCustomVariablesToTerraform, false)(this._customVariables.internalValue),
      infrastructure_id: cdktf.stringToTerraform(this._infrastructureId),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      network_connections: cdktf.listMapper(serverInstanceGroupNetworkConnectionsToTerraform, false)(this._networkConnections.internalValue),
      os_template_id: cdktf.stringToTerraform(this._osTemplateId),
      server_type_id: cdktf.stringToTerraform(this._serverTypeId),
      storage_controllers: cdktf.listMapper(serverInstanceGroupStorageControllersToTerraform, false)(this._storageControllers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_variables: {
        value: cdktf.listMapperHcl(serverInstanceGroupCustomVariablesToHclTerraform, false)(this._customVariables.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServerInstanceGroupCustomVariablesList",
      },
      infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._infrastructureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_count: {
        value: cdktf.numberToHclTerraform(this._instanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      network_connections: {
        value: cdktf.listMapperHcl(serverInstanceGroupNetworkConnectionsToHclTerraform, false)(this._networkConnections.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServerInstanceGroupNetworkConnectionsList",
      },
      os_template_id: {
        value: cdktf.stringToHclTerraform(this._osTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_type_id: {
        value: cdktf.stringToHclTerraform(this._serverTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_controllers: {
        value: cdktf.listMapperHcl(serverInstanceGroupStorageControllersToHclTerraform, false)(this._storageControllers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServerInstanceGroupStorageControllersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
