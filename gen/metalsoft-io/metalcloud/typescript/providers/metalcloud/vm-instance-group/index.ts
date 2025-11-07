// https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmInstanceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom variables for the VM instance group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group#custom_variables VmInstanceGroup#custom_variables}
  */
  readonly customVariables?: VmInstanceGroupCustomVariables[] | cdktf.IResolvable;
  /**
  * Disk size in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group#disk_size_gbytes VmInstanceGroup#disk_size_gbytes}
  */
  readonly diskSizeGbytes: number;
  /**
  * Infrastructure Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group#infrastructure_id VmInstanceGroup#infrastructure_id}
  */
  readonly infrastructureId: string;
  /**
  * VM Instance Group instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group#instance_count VmInstanceGroup#instance_count}
  */
  readonly instanceCount: number;
  /**
  * VM Instance Group label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group#label VmInstanceGroup#label}
  */
  readonly label: string;
  /**
  * Network connections for the VM instance group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group#network_connections VmInstanceGroup#network_connections}
  */
  readonly networkConnections?: VmInstanceGroupNetworkConnections[] | cdktf.IResolvable;
  /**
  * OS template Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group#os_template_id VmInstanceGroup#os_template_id}
  */
  readonly osTemplateId: string;
  /**
  * VM Type Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group#vm_type_id VmInstanceGroup#vm_type_id}
  */
  readonly vmTypeId: string;
}
export interface VmInstanceGroupCustomVariables {
  /**
  * Name of the custom variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group#name VmInstanceGroup#name}
  */
  readonly name: string;
  /**
  * Value of the custom variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group#value VmInstanceGroup#value}
  */
  readonly value: string;
}

export function vmInstanceGroupCustomVariablesToTerraform(struct?: VmInstanceGroupCustomVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vmInstanceGroupCustomVariablesToHclTerraform(struct?: VmInstanceGroupCustomVariables | cdktf.IResolvable): any {
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

export class VmInstanceGroupCustomVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmInstanceGroupCustomVariables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmInstanceGroupCustomVariables | cdktf.IResolvable | undefined) {
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

export class VmInstanceGroupCustomVariablesList extends cdktf.ComplexList {
  public internalValue? : VmInstanceGroupCustomVariables[] | cdktf.IResolvable

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
  public get(index: number): VmInstanceGroupCustomVariablesOutputReference {
    return new VmInstanceGroupCustomVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmInstanceGroupNetworkConnections {
  /**
  * Access mode for the network connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group#access_mode VmInstanceGroup#access_mode}
  */
  readonly accessMode: string;
  /**
  * Logical Network Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group#logical_network_id VmInstanceGroup#logical_network_id}
  */
  readonly logicalNetworkId: string;
  /**
  * MTU for the network connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group#mtu VmInstanceGroup#mtu}
  */
  readonly mtu?: number;
  /**
  * Whether the network connection is tagged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group#tagged VmInstanceGroup#tagged}
  */
  readonly tagged: boolean | cdktf.IResolvable;
}

export function vmInstanceGroupNetworkConnectionsToTerraform(struct?: VmInstanceGroupNetworkConnections | cdktf.IResolvable): any {
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


export function vmInstanceGroupNetworkConnectionsToHclTerraform(struct?: VmInstanceGroupNetworkConnections | cdktf.IResolvable): any {
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

export class VmInstanceGroupNetworkConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmInstanceGroupNetworkConnections | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmInstanceGroupNetworkConnections | cdktf.IResolvable | undefined) {
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

export class VmInstanceGroupNetworkConnectionsList extends cdktf.ComplexList {
  public internalValue? : VmInstanceGroupNetworkConnections[] | cdktf.IResolvable

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
  public get(index: number): VmInstanceGroupNetworkConnectionsOutputReference {
    return new VmInstanceGroupNetworkConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group metalcloud_vm_instance_group}
*/
export class VmInstanceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metalcloud_vm_instance_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmInstanceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmInstanceGroup to import
  * @param importFromId The id of the existing VmInstanceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmInstanceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metalcloud_vm_instance_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/vm_instance_group metalcloud_vm_instance_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmInstanceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: VmInstanceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'metalcloud_vm_instance_group',
      terraformGeneratorMetadata: {
        providerName: 'metalcloud',
        providerVersion: '7.0.10'
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
    this._diskSizeGbytes = config.diskSizeGbytes;
    this._infrastructureId = config.infrastructureId;
    this._instanceCount = config.instanceCount;
    this._label = config.label;
    this._networkConnections.internalValue = config.networkConnections;
    this._osTemplateId = config.osTemplateId;
    this._vmTypeId = config.vmTypeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_variables - computed: false, optional: true, required: false
  private _customVariables = new VmInstanceGroupCustomVariablesList(this, "custom_variables", true);
  public get customVariables() {
    return this._customVariables;
  }
  public putCustomVariables(value: VmInstanceGroupCustomVariables[] | cdktf.IResolvable) {
    this._customVariables.internalValue = value;
  }
  public resetCustomVariables() {
    this._customVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVariablesInput() {
    return this._customVariables.internalValue;
  }

  // disk_size_gbytes - computed: false, optional: false, required: true
  private _diskSizeGbytes?: number; 
  public get diskSizeGbytes() {
    return this.getNumberAttribute('disk_size_gbytes');
  }
  public set diskSizeGbytes(value: number) {
    this._diskSizeGbytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbytesInput() {
    return this._diskSizeGbytes;
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

  // network_connections - computed: false, optional: true, required: false
  private _networkConnections = new VmInstanceGroupNetworkConnectionsList(this, "network_connections", true);
  public get networkConnections() {
    return this._networkConnections;
  }
  public putNetworkConnections(value: VmInstanceGroupNetworkConnections[] | cdktf.IResolvable) {
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

  // vm_instance_group_id - computed: true, optional: false, required: false
  public get vmInstanceGroupId() {
    return this.getStringAttribute('vm_instance_group_id');
  }

  // vm_type_id - computed: false, optional: false, required: true
  private _vmTypeId?: string; 
  public get vmTypeId() {
    return this.getStringAttribute('vm_type_id');
  }
  public set vmTypeId(value: string) {
    this._vmTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTypeIdInput() {
    return this._vmTypeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_variables: cdktf.listMapper(vmInstanceGroupCustomVariablesToTerraform, false)(this._customVariables.internalValue),
      disk_size_gbytes: cdktf.numberToTerraform(this._diskSizeGbytes),
      infrastructure_id: cdktf.stringToTerraform(this._infrastructureId),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      label: cdktf.stringToTerraform(this._label),
      network_connections: cdktf.listMapper(vmInstanceGroupNetworkConnectionsToTerraform, false)(this._networkConnections.internalValue),
      os_template_id: cdktf.stringToTerraform(this._osTemplateId),
      vm_type_id: cdktf.stringToTerraform(this._vmTypeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_variables: {
        value: cdktf.listMapperHcl(vmInstanceGroupCustomVariablesToHclTerraform, false)(this._customVariables.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VmInstanceGroupCustomVariablesList",
      },
      disk_size_gbytes: {
        value: cdktf.numberToHclTerraform(this._diskSizeGbytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      network_connections: {
        value: cdktf.listMapperHcl(vmInstanceGroupNetworkConnectionsToHclTerraform, false)(this._networkConnections.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VmInstanceGroupNetworkConnectionsList",
      },
      os_template_id: {
        value: cdktf.stringToHclTerraform(this._osTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_type_id: {
        value: cdktf.stringToHclTerraform(this._vmTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
