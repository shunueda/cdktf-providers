// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NvmeTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The discovery port of the NVMe target (default: 8009).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_target#discovery_port NvmeTarget#discovery_port}
  */
  readonly discoveryPort?: number;
  /**
  * List of IPs associated with the NVMe target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_target#ip_list NvmeTarget#ip_list}
  */
  readonly ipList: NvmeTargetIpListStruct[] | cdktf.IResolvable;
  /**
  * The maintenance state of the NVMe target. Active to trigger enter maintenance mode; Inactive to exit maintenance mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_target#maintenance_state NvmeTarget#maintenance_state}
  */
  readonly maintenanceState?: string;
  /**
  * Name of the NVMe target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_target#name NvmeTarget#name}
  */
  readonly name: string;
  /**
  * The NVMe port of the NVMe target (default: 4420).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_target#nvme_port NvmeTarget#nvme_port}
  */
  readonly nvmePort?: number;
  /**
  * ID of the Protection Domain under which the NVMe target will be created. Conflicts with 'protection_domain_name'. Cannot be updated.**Note:** Either `protection_domain_id` or `protection_domain_name` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_target#protection_domain_id NvmeTarget#protection_domain_id}
  */
  readonly protectionDomainId?: string;
  /**
  * Name of the Protection Domain under which the NVMe target will be created. Conflicts with 'protection_domain_id'. Cannot be updated.**Note:** Either `protection_domain_id` or `protection_domain_name` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_target#protection_domain_name NvmeTarget#protection_domain_name}
  */
  readonly protectionDomainName?: string;
  /**
  * The storage port of the NVMe target (default: 12200).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_target#storage_port NvmeTarget#storage_port}
  */
  readonly storagePort?: number;
}
export interface NvmeTargetIpListStruct {
  /**
  * NVMe Target IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_target#ip NvmeTarget#ip}
  */
  readonly ip: string;
  /**
  * NVMe Target IP role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_target#role NvmeTarget#role}
  */
  readonly role: string;
}

export function nvmeTargetIpListStructToTerraform(struct?: NvmeTargetIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function nvmeTargetIpListStructToHclTerraform(struct?: NvmeTargetIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NvmeTargetIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NvmeTargetIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NvmeTargetIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._role = value.role;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class NvmeTargetIpListStructList extends cdktf.ComplexList {
  public internalValue? : NvmeTargetIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): NvmeTargetIpListStructOutputReference {
    return new NvmeTargetIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_target powerflex_nvme_target}
*/
export class NvmeTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_nvme_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NvmeTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NvmeTarget to import
  * @param importFromId The id of the existing NvmeTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NvmeTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_nvme_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_target powerflex_nvme_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NvmeTargetConfig
  */
  public constructor(scope: Construct, id: string, config: NvmeTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_nvme_target',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._discoveryPort = config.discoveryPort;
    this._ipList.internalValue = config.ipList;
    this._maintenanceState = config.maintenanceState;
    this._name = config.name;
    this._nvmePort = config.nvmePort;
    this._protectionDomainId = config.protectionDomainId;
    this._protectionDomainName = config.protectionDomainName;
    this._storagePort = config.storagePort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_error - computed: true, optional: false, required: false
  public get authenticationError() {
    return this.getStringAttribute('authentication_error');
  }

  // discovery_port - computed: true, optional: true, required: false
  private _discoveryPort?: number; 
  public get discoveryPort() {
    return this.getNumberAttribute('discovery_port');
  }
  public set discoveryPort(value: number) {
    this._discoveryPort = value;
  }
  public resetDiscoveryPort() {
    this._discoveryPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryPortInput() {
    return this._discoveryPort;
  }

  // fault_set_id - computed: true, optional: false, required: false
  public get faultSetId() {
    return this.getStringAttribute('fault_set_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_list - computed: false, optional: false, required: true
  private _ipList = new NvmeTargetIpListStructList(this, "ip_list", true);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: NvmeTargetIpListStruct[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // maintenance_state - computed: true, optional: true, required: false
  private _maintenanceState?: string; 
  public get maintenanceState() {
    return this.getStringAttribute('maintenance_state');
  }
  public set maintenanceState(value: string) {
    this._maintenanceState = value;
  }
  public resetMaintenanceState() {
    this._maintenanceState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceStateInput() {
    return this._maintenanceState;
  }

  // mdm_connection_state - computed: true, optional: false, required: false
  public get mdmConnectionState() {
    return this.getStringAttribute('mdm_connection_state');
  }

  // membership_state - computed: true, optional: false, required: false
  public get membershipState() {
    return this.getStringAttribute('membership_state');
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

  // nvme_port - computed: true, optional: true, required: false
  private _nvmePort?: number; 
  public get nvmePort() {
    return this.getNumberAttribute('nvme_port');
  }
  public set nvmePort(value: number) {
    this._nvmePort = value;
  }
  public resetNvmePort() {
    this._nvmePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvmePortInput() {
    return this._nvmePort;
  }

  // protection_domain_id - computed: true, optional: true, required: false
  private _protectionDomainId?: string; 
  public get protectionDomainId() {
    return this.getStringAttribute('protection_domain_id');
  }
  public set protectionDomainId(value: string) {
    this._protectionDomainId = value;
  }
  public resetProtectionDomainId() {
    this._protectionDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainIdInput() {
    return this._protectionDomainId;
  }

  // protection_domain_name - computed: false, optional: true, required: false
  private _protectionDomainName?: string; 
  public get protectionDomainName() {
    return this.getStringAttribute('protection_domain_name');
  }
  public set protectionDomainName(value: string) {
    this._protectionDomainName = value;
  }
  public resetProtectionDomainName() {
    this._protectionDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainNameInput() {
    return this._protectionDomainName;
  }

  // sdt_state - computed: true, optional: false, required: false
  public get sdtState() {
    return this.getStringAttribute('sdt_state');
  }

  // software_version_info - computed: true, optional: false, required: false
  public get softwareVersionInfo() {
    return this.getStringAttribute('software_version_info');
  }

  // storage_port - computed: true, optional: true, required: false
  private _storagePort?: number; 
  public get storagePort() {
    return this.getNumberAttribute('storage_port');
  }
  public set storagePort(value: number) {
    this._storagePort = value;
  }
  public resetStoragePort() {
    this._storagePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePortInput() {
    return this._storagePort;
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      discovery_port: cdktf.numberToTerraform(this._discoveryPort),
      ip_list: cdktf.listMapper(nvmeTargetIpListStructToTerraform, false)(this._ipList.internalValue),
      maintenance_state: cdktf.stringToTerraform(this._maintenanceState),
      name: cdktf.stringToTerraform(this._name),
      nvme_port: cdktf.numberToTerraform(this._nvmePort),
      protection_domain_id: cdktf.stringToTerraform(this._protectionDomainId),
      protection_domain_name: cdktf.stringToTerraform(this._protectionDomainName),
      storage_port: cdktf.numberToTerraform(this._storagePort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      discovery_port: {
        value: cdktf.numberToHclTerraform(this._discoveryPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_list: {
        value: cdktf.listMapperHcl(nvmeTargetIpListStructToHclTerraform, false)(this._ipList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NvmeTargetIpListStructList",
      },
      maintenance_state: {
        value: cdktf.stringToHclTerraform(this._maintenanceState),
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
      nvme_port: {
        value: cdktf.numberToHclTerraform(this._nvmePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protection_domain_id: {
        value: cdktf.stringToHclTerraform(this._protectionDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_domain_name: {
        value: cdktf.stringToHclTerraform(this._protectionDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_port: {
        value: cdktf.numberToHclTerraform(this._storagePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
