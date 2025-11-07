// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/nat_dnat_rule_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatDnatRuleV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/nat_dnat_rule_v2#description NatDnatRuleV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/nat_dnat_rule_v2#external_service_port NatDnatRuleV2#external_service_port}
  */
  readonly externalServicePort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/nat_dnat_rule_v2#floating_ip_id NatDnatRuleV2#floating_ip_id}
  */
  readonly floatingIpId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/nat_dnat_rule_v2#id NatDnatRuleV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/nat_dnat_rule_v2#internal_service_port NatDnatRuleV2#internal_service_port}
  */
  readonly internalServicePort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/nat_dnat_rule_v2#nat_gateway_id NatDnatRuleV2#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/nat_dnat_rule_v2#port_id NatDnatRuleV2#port_id}
  */
  readonly portId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/nat_dnat_rule_v2#private_ip NatDnatRuleV2#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/nat_dnat_rule_v2#protocol NatDnatRuleV2#protocol}
  */
  readonly protocol: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/nat_dnat_rule_v2 flexibleengine_nat_dnat_rule_v2}
*/
export class NatDnatRuleV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_nat_dnat_rule_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NatDnatRuleV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NatDnatRuleV2 to import
  * @param importFromId The id of the existing NatDnatRuleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/nat_dnat_rule_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NatDnatRuleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_nat_dnat_rule_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/nat_dnat_rule_v2 flexibleengine_nat_dnat_rule_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatDnatRuleV2Config
  */
  public constructor(scope: Construct, id: string, config: NatDnatRuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_nat_dnat_rule_v2',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
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
    this._externalServicePort = config.externalServicePort;
    this._floatingIpId = config.floatingIpId;
    this._id = config.id;
    this._internalServicePort = config.internalServicePort;
    this._natGatewayId = config.natGatewayId;
    this._portId = config.portId;
    this._privateIp = config.privateIp;
    this._protocol = config.protocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

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

  // external_service_port - computed: false, optional: false, required: true
  private _externalServicePort?: number; 
  public get externalServicePort() {
    return this.getNumberAttribute('external_service_port');
  }
  public set externalServicePort(value: number) {
    this._externalServicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalServicePortInput() {
    return this._externalServicePort;
  }

  // floating_ip_address - computed: true, optional: false, required: false
  public get floatingIpAddress() {
    return this.getStringAttribute('floating_ip_address');
  }

  // floating_ip_id - computed: false, optional: false, required: true
  private _floatingIpId?: string; 
  public get floatingIpId() {
    return this.getStringAttribute('floating_ip_id');
  }
  public set floatingIpId(value: string) {
    this._floatingIpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpIdInput() {
    return this._floatingIpId;
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

  // internal_service_port - computed: false, optional: false, required: true
  private _internalServicePort?: number; 
  public get internalServicePort() {
    return this.getNumberAttribute('internal_service_port');
  }
  public set internalServicePort(value: number) {
    this._internalServicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalServicePortInput() {
    return this._internalServicePort;
  }

  // nat_gateway_id - computed: false, optional: false, required: true
  private _natGatewayId?: string; 
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId;
  }

  // port_id - computed: false, optional: true, required: false
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  public resetPortId() {
    this._portId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      external_service_port: cdktf.numberToTerraform(this._externalServicePort),
      floating_ip_id: cdktf.stringToTerraform(this._floatingIpId),
      id: cdktf.stringToTerraform(this._id),
      internal_service_port: cdktf.numberToTerraform(this._internalServicePort),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      port_id: cdktf.stringToTerraform(this._portId),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      protocol: cdktf.stringToTerraform(this._protocol),
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
      external_service_port: {
        value: cdktf.numberToHclTerraform(this._externalServicePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      floating_ip_id: {
        value: cdktf.stringToHclTerraform(this._floatingIpId),
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
      internal_service_port: {
        value: cdktf.numberToHclTerraform(this._internalServicePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_gateway_id: {
        value: cdktf.stringToHclTerraform(this._natGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_id: {
        value: cdktf.stringToHclTerraform(this._portId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip: {
        value: cdktf.stringToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
