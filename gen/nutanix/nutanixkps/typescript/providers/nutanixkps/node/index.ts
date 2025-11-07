// https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Describe the node. For example, the main purpose or use case of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node#description Node#description}
  */
  readonly description: string;
  /**
  * Gateway IPv4 address for this node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node#gateway Node#gateway}
  */
  readonly gateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node#id Node#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPv4 address of this node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node#ip_address Node#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Default setting is true. Set to false indicates this node is not a bootstrap master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node#is_bootstrap_master Node#is_bootstrap_master}
  */
  readonly isBootstrapMaster?: boolean | cdktf.IResolvable;
  /**
  * Name of the node: 
  * 				Name must include lowercase alphanumeric characters and must start and end with an lowercase alphanumeric character.
  * 				Dash (-) and dot (.) characters are allowed as delimiters. Maximum length of 60 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node#name Node#name}
  */
  readonly name: string;
  /**
  * Node serial number. Any alpha characters must be in all capitals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node#serial_number Node#serial_number}
  */
  readonly serialNumber: string;
  /**
  * Id of the service domain to which this node belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node#service_domain_id Node#service_domain_id}
  */
  readonly serviceDomainId: string;
  /**
  * Subnet mask for this node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node#subnet Node#subnet}
  */
  readonly subnet: string;
  /**
  * Default setting is false and the terraform provider does not wait for the node to be onboarded. 
  * 				Set to true indicates that the terraform provider waits for the node to be onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node#wait_for_onboarding Node#wait_for_onboarding}
  */
  readonly waitForOnboarding?: boolean | cdktf.IResolvable;
  /**
  * Wait timeout in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node#wait_timeout_minutes Node#wait_timeout_minutes}
  */
  readonly waitTimeoutMinutes?: number;
  /**
  * role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node#role Node#role}
  */
  readonly role: NodeRole;
}
export interface NodeRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node#master Node#master}
  */
  readonly master: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node#worker Node#worker}
  */
  readonly worker: boolean | cdktf.IResolvable;
}

export function nodeRoleToTerraform(struct?: NodeRoleOutputReference | NodeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master: cdktf.booleanToTerraform(struct!.master),
    worker: cdktf.booleanToTerraform(struct!.worker),
  }
}


export function nodeRoleToHclTerraform(struct?: NodeRoleOutputReference | NodeRole): any {
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

export class NodeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeRole | undefined {
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

  public set internalValue(value: NodeRole | undefined) {
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

  // master - computed: false, optional: false, required: true
  private _master?: boolean | cdktf.IResolvable; 
  public get master() {
    return this.getBooleanAttribute('master');
  }
  public set master(value: boolean | cdktf.IResolvable) {
    this._master = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInput() {
    return this._master;
  }

  // worker - computed: false, optional: false, required: true
  private _worker?: boolean | cdktf.IResolvable; 
  public get worker() {
    return this.getBooleanAttribute('worker');
  }
  public set worker(value: boolean | cdktf.IResolvable) {
    this._worker = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInput() {
    return this._worker;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node nutanixkps_node}
*/
export class Node extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanixkps_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Node resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Node to import
  * @param importFromId The id of the existing Node that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Node to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanixkps_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/node nutanixkps_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodeConfig
  */
  public constructor(scope: Construct, id: string, config: NodeConfig) {
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
    this._serialNumber = config.serialNumber;
    this._serviceDomainId = config.serviceDomainId;
    this._subnet = config.subnet;
    this._waitForOnboarding = config.waitForOnboarding;
    this._waitTimeoutMinutes = config.waitTimeoutMinutes;
    this._role.internalValue = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
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

  // service_domain_id - computed: false, optional: false, required: true
  private _serviceDomainId?: string; 
  public get serviceDomainId() {
    return this.getStringAttribute('service_domain_id');
  }
  public set serviceDomainId(value: string) {
    this._serviceDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDomainIdInput() {
    return this._serviceDomainId;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // wait_for_onboarding - computed: false, optional: true, required: false
  private _waitForOnboarding?: boolean | cdktf.IResolvable; 
  public get waitForOnboarding() {
    return this.getBooleanAttribute('wait_for_onboarding');
  }
  public set waitForOnboarding(value: boolean | cdktf.IResolvable) {
    this._waitForOnboarding = value;
  }
  public resetWaitForOnboarding() {
    this._waitForOnboarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForOnboardingInput() {
    return this._waitForOnboarding;
  }

  // wait_timeout_minutes - computed: false, optional: true, required: false
  private _waitTimeoutMinutes?: number; 
  public get waitTimeoutMinutes() {
    return this.getNumberAttribute('wait_timeout_minutes');
  }
  public set waitTimeoutMinutes(value: number) {
    this._waitTimeoutMinutes = value;
  }
  public resetWaitTimeoutMinutes() {
    this._waitTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutMinutesInput() {
    return this._waitTimeoutMinutes;
  }

  // role - computed: false, optional: false, required: true
  private _role = new NodeRoleOutputReference(this, "role");
  public get role() {
    return this._role;
  }
  public putRole(value: NodeRole) {
    this._role.internalValue = value;
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
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      service_domain_id: cdktf.stringToTerraform(this._serviceDomainId),
      subnet: cdktf.stringToTerraform(this._subnet),
      wait_for_onboarding: cdktf.booleanToTerraform(this._waitForOnboarding),
      wait_timeout_minutes: cdktf.numberToTerraform(this._waitTimeoutMinutes),
      role: nodeRoleToTerraform(this._role.internalValue),
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
      wait_for_onboarding: {
        value: cdktf.booleanToHclTerraform(this._waitForOnboarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_timeout_minutes: {
        value: cdktf.numberToHclTerraform(this._waitTimeoutMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: nodeRoleToHclTerraform(this._role.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeRoleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
