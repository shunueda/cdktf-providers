// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterDeviceAllocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation#blueprint_id DatacenterDeviceAllocation#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Set the [deploy mode](https://www.juniper.net/documentation/us/en/software/apstra4.1/apstra-user-guide/topics/topic-map/datacenter-deploy-mode-set.html) of the associated fabric node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation#deploy_mode DatacenterDeviceAllocation#deploy_mode}
  */
  readonly deployMode?: string;
  /**
  * Unique ID for a Managed Device, generally the serial number, used to assign a Managed Device to a fabric role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation#device_key DatacenterDeviceAllocation#device_key}
  */
  readonly deviceKey?: string;
  /**
  * Interface Maps link a Logical Device (fabric design element) to a Device Profile (description of a specific hardware model). The value of this field must be the graph node ID (bootstrapped from Global Catalog ID) of an Interface Map. A value is required when `device_key` is omitted, or when `device_key` is supplied, but does not provide enough information to automatically select an Interface Map. The ID is used only at resource creation (in the initial `apply` operation) and for replacement when the configuration is modified. Apstra flexible fabric expansion operations should not trigger state churn due to the current Interface Map ID being inconsistent with the configured value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation#initial_interface_map_id DatacenterDeviceAllocation#initial_interface_map_id}
  */
  readonly initialInterfaceMapId?: string;
  /**
  * Graph node label which identifies the system at the time this resource is initially created. Strings like 'spine1' and 'rack_002_leaf_1' are appropriate here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation#node_name DatacenterDeviceAllocation#node_name}
  */
  readonly nodeName: string;
  /**
  * Attributes which should be set on the pre-existing system node may be configured here.
  *   
  *   Note that omitting a previously configured value (e.g. setting and then subsequently clearing `asn` from the configuration) will not cause the system to revert to an Apstra-assigned value. Omitting a configuration element says "I have no opinion about this value" to Terraform. There is no mechanism to revert to Apstra-assigned values for the attributes in this block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation#system_attributes DatacenterDeviceAllocation#system_attributes}
  */
  readonly systemAttributes?: DatacenterDeviceAllocationSystemAttributes;
}
export interface DatacenterDeviceAllocationSystemAttributes {
  /**
  * ASN of the system node. Setting ASN is supported only for Spine and Leaf switches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation#asn DatacenterDeviceAllocation#asn}
  */
  readonly asn?: number;
  /**
  * Set the [deploy mode](https://www.juniper.net/documentation/us/en/software/apstra4.1/apstra-user-guide/topics/topic-map/datacenter-deploy-mode-set.html) of the associated fabric node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation#deploy_mode DatacenterDeviceAllocation#deploy_mode}
  */
  readonly deployMode?: string;
  /**
  * Hostname of the System node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation#hostname DatacenterDeviceAllocation#hostname}
  */
  readonly hostname?: string;
  /**
  * IPv4 address of loopback interface in CIDR notation, must use 32-bit mask. Setting loopback addresses is supported only for Spine and Leaf switches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation#loopback_ipv4 DatacenterDeviceAllocation#loopback_ipv4}
  */
  readonly loopbackIpv4?: string;
  /**
  * IPv6 address of loopback interface in CIDR notation, must use 128-bit mask. Setting loopback addresses is supported only for Spine and Leaf switches. IPv6 must be enabled in the Blueprint to use this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation#loopback_ipv6 DatacenterDeviceAllocation#loopback_ipv6}
  */
  readonly loopbackIpv6?: string;
  /**
  * Web UI label for the system node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation#name DatacenterDeviceAllocation#name}
  */
  readonly name?: string;
  /**
  * Tag labels to be applied to the System node. If a Tag doesn't exist in the Blueprint it will be created automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation#tags DatacenterDeviceAllocation#tags}
  */
  readonly tags?: string[];
}

export function datacenterDeviceAllocationSystemAttributesToTerraform(struct?: DatacenterDeviceAllocationSystemAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    deploy_mode: cdktf.stringToTerraform(struct!.deployMode),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    loopback_ipv4: cdktf.stringToTerraform(struct!.loopbackIpv4),
    loopback_ipv6: cdktf.stringToTerraform(struct!.loopbackIpv6),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function datacenterDeviceAllocationSystemAttributesToHclTerraform(struct?: DatacenterDeviceAllocationSystemAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deploy_mode: {
      value: cdktf.stringToHclTerraform(struct!.deployMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loopback_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.loopbackIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loopback_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.loopbackIpv6),
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
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterDeviceAllocationSystemAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatacenterDeviceAllocationSystemAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._deployMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployMode = this._deployMode;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._loopbackIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackIpv4 = this._loopbackIpv4;
    }
    if (this._loopbackIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackIpv6 = this._loopbackIpv6;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterDeviceAllocationSystemAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._deployMode = undefined;
      this._hostname = undefined;
      this._loopbackIpv4 = undefined;
      this._loopbackIpv6 = undefined;
      this._name = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._deployMode = value.deployMode;
      this._hostname = value.hostname;
      this._loopbackIpv4 = value.loopbackIpv4;
      this._loopbackIpv6 = value.loopbackIpv6;
      this._name = value.name;
      this._tags = value.tags;
    }
  }

  // asn - computed: true, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // deploy_mode - computed: true, optional: true, required: false
  private _deployMode?: string; 
  public get deployMode() {
    return this.getStringAttribute('deploy_mode');
  }
  public set deployMode(value: string) {
    this._deployMode = value;
  }
  public resetDeployMode() {
    this._deployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployModeInput() {
    return this._deployMode;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // loopback_ipv4 - computed: true, optional: true, required: false
  private _loopbackIpv4?: string; 
  public get loopbackIpv4() {
    return this.getStringAttribute('loopback_ipv4');
  }
  public set loopbackIpv4(value: string) {
    this._loopbackIpv4 = value;
  }
  public resetLoopbackIpv4() {
    this._loopbackIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIpv4Input() {
    return this._loopbackIpv4;
  }

  // loopback_ipv6 - computed: true, optional: true, required: false
  private _loopbackIpv6?: string; 
  public get loopbackIpv6() {
    return this.getStringAttribute('loopback_ipv6');
  }
  public set loopbackIpv6(value: string) {
    this._loopbackIpv6 = value;
  }
  public resetLoopbackIpv6() {
    this._loopbackIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIpv6Input() {
    return this._loopbackIpv6;
  }

  // name - computed: true, optional: true, required: false
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

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation apstra_datacenter_device_allocation}
*/
export class DatacenterDeviceAllocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_device_allocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterDeviceAllocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterDeviceAllocation to import
  * @param importFromId The id of the existing DatacenterDeviceAllocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterDeviceAllocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_device_allocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_device_allocation apstra_datacenter_device_allocation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterDeviceAllocationConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterDeviceAllocationConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_device_allocation',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._deployMode = config.deployMode;
    this._deviceKey = config.deviceKey;
    this._initialInterfaceMapId = config.initialInterfaceMapId;
    this._nodeName = config.nodeName;
    this._systemAttributes.internalValue = config.systemAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // deploy_mode - computed: true, optional: true, required: false
  private _deployMode?: string; 
  public get deployMode() {
    return this.getStringAttribute('deploy_mode');
  }
  public set deployMode(value: string) {
    this._deployMode = value;
  }
  public resetDeployMode() {
    this._deployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployModeInput() {
    return this._deployMode;
  }

  // device_key - computed: false, optional: true, required: false
  private _deviceKey?: string; 
  public get deviceKey() {
    return this.getStringAttribute('device_key');
  }
  public set deviceKey(value: string) {
    this._deviceKey = value;
  }
  public resetDeviceKey() {
    this._deviceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceKeyInput() {
    return this._deviceKey;
  }

  // device_profile_node_id - computed: true, optional: false, required: false
  public get deviceProfileNodeId() {
    return this.getStringAttribute('device_profile_node_id');
  }

  // initial_interface_map_id - computed: true, optional: true, required: false
  private _initialInterfaceMapId?: string; 
  public get initialInterfaceMapId() {
    return this.getStringAttribute('initial_interface_map_id');
  }
  public set initialInterfaceMapId(value: string) {
    this._initialInterfaceMapId = value;
  }
  public resetInitialInterfaceMapId() {
    this._initialInterfaceMapId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialInterfaceMapIdInput() {
    return this._initialInterfaceMapId;
  }

  // interface_map_name - computed: true, optional: false, required: false
  public get interfaceMapName() {
    return this.getStringAttribute('interface_map_name');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // system_attributes - computed: true, optional: true, required: false
  private _systemAttributes = new DatacenterDeviceAllocationSystemAttributesOutputReference(this, "system_attributes");
  public get systemAttributes() {
    return this._systemAttributes;
  }
  public putSystemAttributes(value: DatacenterDeviceAllocationSystemAttributes) {
    this._systemAttributes.internalValue = value;
  }
  public resetSystemAttributes() {
    this._systemAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributesInput() {
    return this._systemAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      deploy_mode: cdktf.stringToTerraform(this._deployMode),
      device_key: cdktf.stringToTerraform(this._deviceKey),
      initial_interface_map_id: cdktf.stringToTerraform(this._initialInterfaceMapId),
      node_name: cdktf.stringToTerraform(this._nodeName),
      system_attributes: datacenterDeviceAllocationSystemAttributesToTerraform(this._systemAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_mode: {
        value: cdktf.stringToHclTerraform(this._deployMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_key: {
        value: cdktf.stringToHclTerraform(this._deviceKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_interface_map_id: {
        value: cdktf.stringToHclTerraform(this._initialInterfaceMapId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_attributes: {
        value: datacenterDeviceAllocationSystemAttributesToHclTerraform(this._systemAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatacenterDeviceAllocationSystemAttributes",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
