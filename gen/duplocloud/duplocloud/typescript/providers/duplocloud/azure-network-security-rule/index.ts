// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureNetworkSecurityRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether network traffic is allowed or denied. Possible values are `Allow` and `Deny`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#access AzureNetworkSecurityRule#access}
  */
  readonly access: string;
  /**
  * CIDR or destination IP range or * to match any IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#destination_address_prefix AzureNetworkSecurityRule#destination_address_prefix}
  */
  readonly destinationAddressPrefix?: string;
  /**
  * Destination Port or Range. Integer or range between `0` and `65535` or `*` to match any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#destination_port_range AzureNetworkSecurityRule#destination_port_range}
  */
  readonly destinationPortRange?: string;
  /**
  * Type of the destination security rule. Possible values include `0(IP Address)`, `1(Service Tag)`, `2(Application Security Group)`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#destination_rule_type AzureNetworkSecurityRule#destination_rule_type}
  */
  readonly destinationRuleType: number;
  /**
  * The direction specifies if rule will be evaluated on incoming or outgoing traffic. Possible values are `Inbound` and `Outbound`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#direction AzureNetworkSecurityRule#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#id AzureNetworkSecurityRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the infrastructure.  Infrastructure names are globally unique and less than 13 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#infra_name AzureNetworkSecurityRule#infra_name}
  */
  readonly infraName: string;
  /**
  * The name of the security group rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#name AzureNetworkSecurityRule#name}
  */
  readonly name: string;
  /**
  * The name of the Network Security Group that we want to attach the rule to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#network_security_group_name AzureNetworkSecurityRule#network_security_group_name}
  */
  readonly networkSecurityGroupName: string;
  /**
  * Specifies the priority of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#priority AzureNetworkSecurityRule#priority}
  */
  readonly priority: number;
  /**
  * Network protocol this rule applies to. Possible values include `tcp`, `udp`, `icmp`, `esp`, `ah` or `*` (which matches all).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#protocol AzureNetworkSecurityRule#protocol}
  */
  readonly protocol: string;
  /**
  * CIDR or source IP range or * to match any IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#source_address_prefix AzureNetworkSecurityRule#source_address_prefix}
  */
  readonly sourceAddressPrefix?: string;
  /**
  * Source Port or Range. Integer or range between `0` and `65535` or `*` to match any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#source_port_range AzureNetworkSecurityRule#source_port_range}
  */
  readonly sourcePortRange?: string;
  /**
  * Type of the source security rule. Possible values include `0(IP Address)`, `1(Service Tag)`, `2(Application Security Group)`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#source_rule_type AzureNetworkSecurityRule#source_rule_type}
  */
  readonly sourceRuleType: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#timeouts AzureNetworkSecurityRule#timeouts}
  */
  readonly timeouts?: AzureNetworkSecurityRuleTimeouts;
}
export interface AzureNetworkSecurityRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#create AzureNetworkSecurityRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#delete AzureNetworkSecurityRule#delete}
  */
  readonly delete?: string;
}

export function azureNetworkSecurityRuleTimeoutsToTerraform(struct?: AzureNetworkSecurityRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function azureNetworkSecurityRuleTimeoutsToHclTerraform(struct?: AzureNetworkSecurityRuleTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureNetworkSecurityRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AzureNetworkSecurityRuleTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureNetworkSecurityRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule duplocloud_azure_network_security_rule}
*/
export class AzureNetworkSecurityRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_azure_network_security_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureNetworkSecurityRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureNetworkSecurityRule to import
  * @param importFromId The id of the existing AzureNetworkSecurityRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureNetworkSecurityRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_azure_network_security_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/azure_network_security_rule duplocloud_azure_network_security_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureNetworkSecurityRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AzureNetworkSecurityRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_azure_network_security_rule',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.29',
        providerVersionConstraint: '0.11.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access = config.access;
    this._destinationAddressPrefix = config.destinationAddressPrefix;
    this._destinationPortRange = config.destinationPortRange;
    this._destinationRuleType = config.destinationRuleType;
    this._direction = config.direction;
    this._id = config.id;
    this._infraName = config.infraName;
    this._name = config.name;
    this._networkSecurityGroupName = config.networkSecurityGroupName;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._sourceAddressPrefix = config.sourceAddressPrefix;
    this._sourcePortRange = config.sourcePortRange;
    this._sourceRuleType = config.sourceRuleType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // destination_address_prefix - computed: false, optional: true, required: false
  private _destinationAddressPrefix?: string; 
  public get destinationAddressPrefix() {
    return this.getStringAttribute('destination_address_prefix');
  }
  public set destinationAddressPrefix(value: string) {
    this._destinationAddressPrefix = value;
  }
  public resetDestinationAddressPrefix() {
    this._destinationAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressPrefixInput() {
    return this._destinationAddressPrefix;
  }

  // destination_port_range - computed: false, optional: true, required: false
  private _destinationPortRange?: string; 
  public get destinationPortRange() {
    return this.getStringAttribute('destination_port_range');
  }
  public set destinationPortRange(value: string) {
    this._destinationPortRange = value;
  }
  public resetDestinationPortRange() {
    this._destinationPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeInput() {
    return this._destinationPortRange;
  }

  // destination_rule_type - computed: false, optional: false, required: true
  private _destinationRuleType?: number; 
  public get destinationRuleType() {
    return this.getNumberAttribute('destination_rule_type');
  }
  public set destinationRuleType(value: number) {
    this._destinationRuleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRuleTypeInput() {
    return this._destinationRuleType;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // fullname - computed: true, optional: false, required: false
  public get fullname() {
    return this.getStringAttribute('fullname');
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

  // infra_name - computed: false, optional: false, required: true
  private _infraName?: string; 
  public get infraName() {
    return this.getStringAttribute('infra_name');
  }
  public set infraName(value: string) {
    this._infraName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infraNameInput() {
    return this._infraName;
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

  // network_security_group_name - computed: false, optional: false, required: true
  private _networkSecurityGroupName?: string; 
  public get networkSecurityGroupName() {
    return this.getStringAttribute('network_security_group_name');
  }
  public set networkSecurityGroupName(value: string) {
    this._networkSecurityGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupNameInput() {
    return this._networkSecurityGroupName;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // source_address_prefix - computed: false, optional: true, required: false
  private _sourceAddressPrefix?: string; 
  public get sourceAddressPrefix() {
    return this.getStringAttribute('source_address_prefix');
  }
  public set sourceAddressPrefix(value: string) {
    this._sourceAddressPrefix = value;
  }
  public resetSourceAddressPrefix() {
    this._sourceAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressPrefixInput() {
    return this._sourceAddressPrefix;
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange?: string; 
  public get sourcePortRange() {
    return this.getStringAttribute('source_port_range');
  }
  public set sourcePortRange(value: string) {
    this._sourcePortRange = value;
  }
  public resetSourcePortRange() {
    this._sourcePortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeInput() {
    return this._sourcePortRange;
  }

  // source_rule_type - computed: false, optional: false, required: true
  private _sourceRuleType?: number; 
  public get sourceRuleType() {
    return this.getNumberAttribute('source_rule_type');
  }
  public set sourceRuleType(value: number) {
    this._sourceRuleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRuleTypeInput() {
    return this._sourceRuleType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AzureNetworkSecurityRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AzureNetworkSecurityRuleTimeouts) {
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
      access: cdktf.stringToTerraform(this._access),
      destination_address_prefix: cdktf.stringToTerraform(this._destinationAddressPrefix),
      destination_port_range: cdktf.stringToTerraform(this._destinationPortRange),
      destination_rule_type: cdktf.numberToTerraform(this._destinationRuleType),
      direction: cdktf.stringToTerraform(this._direction),
      id: cdktf.stringToTerraform(this._id),
      infra_name: cdktf.stringToTerraform(this._infraName),
      name: cdktf.stringToTerraform(this._name),
      network_security_group_name: cdktf.stringToTerraform(this._networkSecurityGroupName),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.stringToTerraform(this._protocol),
      source_address_prefix: cdktf.stringToTerraform(this._sourceAddressPrefix),
      source_port_range: cdktf.stringToTerraform(this._sourcePortRange),
      source_rule_type: cdktf.numberToTerraform(this._sourceRuleType),
      timeouts: azureNetworkSecurityRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.stringToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_address_prefix: {
        value: cdktf.stringToHclTerraform(this._destinationAddressPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port_range: {
        value: cdktf.stringToHclTerraform(this._destinationPortRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_rule_type: {
        value: cdktf.numberToHclTerraform(this._destinationRuleType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
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
      infra_name: {
        value: cdktf.stringToHclTerraform(this._infraName),
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
      network_security_group_name: {
        value: cdktf.stringToHclTerraform(this._networkSecurityGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_address_prefix: {
        value: cdktf.stringToHclTerraform(this._sourceAddressPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port_range: {
        value: cdktf.stringToHclTerraform(this._sourcePortRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_rule_type: {
        value: cdktf.numberToHclTerraform(this._sourceRuleType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: azureNetworkSecurityRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AzureNetworkSecurityRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
