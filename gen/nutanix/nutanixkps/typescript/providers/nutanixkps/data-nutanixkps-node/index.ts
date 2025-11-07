// https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixkpsNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node#description DataNutanixkpsNode#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node#gateway DataNutanixkpsNode#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node#id DataNutanixkpsNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node#ip_address DataNutanixkpsNode#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node#is_bootstrap_master DataNutanixkpsNode#is_bootstrap_master}
  */
  readonly isBootstrapMaster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node#name DataNutanixkpsNode#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node#node_id DataNutanixkpsNode#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node#node_name DataNutanixkpsNode#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node#serial_number DataNutanixkpsNode#serial_number}
  */
  readonly serialNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node#service_domain_id DataNutanixkpsNode#service_domain_id}
  */
  readonly serviceDomainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node#subnet DataNutanixkpsNode#subnet}
  */
  readonly subnet?: string;
  /**
  * role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node#role DataNutanixkpsNode#role}
  */
  readonly role?: DataNutanixkpsNodeRole;
}
export interface DataNutanixkpsNodeRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node#master DataNutanixkpsNode#master}
  */
  readonly master?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node#worker DataNutanixkpsNode#worker}
  */
  readonly worker?: boolean | cdktf.IResolvable;
}

export function dataNutanixkpsNodeRoleToTerraform(struct?: DataNutanixkpsNodeRoleOutputReference | DataNutanixkpsNodeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master: cdktf.booleanToTerraform(struct!.master),
    worker: cdktf.booleanToTerraform(struct!.worker),
  }
}


export function dataNutanixkpsNodeRoleToHclTerraform(struct?: DataNutanixkpsNodeRoleOutputReference | DataNutanixkpsNodeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    master: {
      value: cdktf.booleanToHclTerraform(struct!.master),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    worker: {
      value: cdktf.booleanToHclTerraform(struct!.worker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNutanixkpsNodeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNutanixkpsNodeRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._master !== undefined) {
      hasAnyValues = true;
      internalValueResult.master = this._master;
    }
    if (this._worker !== undefined) {
      hasAnyValues = true;
      internalValueResult.worker = this._worker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixkpsNodeRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._master = undefined;
      this._worker = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._master = value.master;
      this._worker = value.worker;
    }
  }

  // master - computed: true, optional: true, required: false
  private _master?: boolean | cdktf.IResolvable; 
  public get master() {
    return this.getBooleanAttribute('master');
  }
  public set master(value: boolean | cdktf.IResolvable) {
    this._master = value;
  }
  public resetMaster() {
    this._master = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInput() {
    return this._master;
  }

  // worker - computed: true, optional: true, required: false
  private _worker?: boolean | cdktf.IResolvable; 
  public get worker() {
    return this.getBooleanAttribute('worker');
  }
  public set worker(value: boolean | cdktf.IResolvable) {
    this._worker = value;
  }
  public resetWorker() {
    this._worker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInput() {
    return this._worker;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node nutanixkps_node}
*/
export class DataNutanixkpsNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanixkps_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixkpsNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixkpsNode to import
  * @param importFromId The id of the existing DataNutanixkpsNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixkpsNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanixkps_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/data-sources/node nutanixkps_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixkpsNodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataNutanixkpsNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanixkps_node',
      terraformGeneratorMetadata: {
        providerName: 'nutanixkps',
        providerVersion: '1.1.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._gateway = config.gateway;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._isBootstrapMaster = config.isBootstrapMaster;
    this._name = config.name;
    this._nodeId = config.nodeId;
    this._nodeName = config.nodeName;
    this._serialNumber = config.serialNumber;
    this._serviceDomainId = config.serviceDomainId;
    this._subnet = config.subnet;
    this._role.internalValue = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // is_bootstrap_master - computed: true, optional: true, required: false
  private _isBootstrapMaster?: boolean | cdktf.IResolvable; 
  public get isBootstrapMaster() {
    return this.getBooleanAttribute('is_bootstrap_master');
  }
  public set isBootstrapMaster(value: boolean | cdktf.IResolvable) {
    this._isBootstrapMaster = value;
  }
  public resetIsBootstrapMaster() {
    this._isBootstrapMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBootstrapMasterInput() {
    return this._isBootstrapMaster;
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

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // serial_number - computed: false, optional: false, required: true
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // service_domain_id - computed: true, optional: true, required: false
  private _serviceDomainId?: string; 
  public get serviceDomainId() {
    return this.getStringAttribute('service_domain_id');
  }
  public set serviceDomainId(value: string) {
    this._serviceDomainId = value;
  }
  public resetServiceDomainId() {
    this._serviceDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDomainIdInput() {
    return this._serviceDomainId;
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // role - computed: false, optional: true, required: false
  private _role = new DataNutanixkpsNodeRoleOutputReference(this, "role");
  public get role() {
    return this._role;
  }
  public putRole(value: DataNutanixkpsNodeRole) {
    this._role.internalValue = value;
  }
  public resetRole() {
    this._role.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      is_bootstrap_master: cdktf.booleanToTerraform(this._isBootstrapMaster),
      name: cdktf.stringToTerraform(this._name),
      node_id: cdktf.stringToTerraform(this._nodeId),
      node_name: cdktf.stringToTerraform(this._nodeName),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      service_domain_id: cdktf.stringToTerraform(this._serviceDomainId),
      subnet: cdktf.stringToTerraform(this._subnet),
      role: dataNutanixkpsNodeRoleToTerraform(this._role.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_bootstrap_master: {
        value: cdktf.booleanToHclTerraform(this._isBootstrapMaster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_id: {
        value: cdktf.stringToHclTerraform(this._nodeId),
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
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_domain_id: {
        value: cdktf.stringToHclTerraform(this._serviceDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: dataNutanixkpsNodeRoleToHclTerraform(this._role.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNutanixkpsNodeRoleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
