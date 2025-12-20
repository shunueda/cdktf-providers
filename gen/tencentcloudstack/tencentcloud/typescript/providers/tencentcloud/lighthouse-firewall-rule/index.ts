// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/lighthouse_firewall_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LighthouseFirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/lighthouse_firewall_rule#id LighthouseFirewallRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/lighthouse_firewall_rule#instance_id LighthouseFirewallRule#instance_id}
  */
  readonly instanceId: string;
  /**
  * firewall_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/lighthouse_firewall_rule#firewall_rules LighthouseFirewallRule#firewall_rules}
  */
  readonly firewallRules: LighthouseFirewallRuleFirewallRules[] | cdktf.IResolvable;
}
export interface LighthouseFirewallRuleFirewallRules {
  /**
  * Valid values are ACCEPT, DROP. Default value is ACCEPT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/lighthouse_firewall_rule#action LighthouseFirewallRule#action}
  */
  readonly action?: string;
  /**
  * IP range or IP (mutually exclusive). Default value is 0.0.0.0/0, which indicates all sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/lighthouse_firewall_rule#cidr_block LighthouseFirewallRule#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Firewall rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/lighthouse_firewall_rule#firewall_rule_description LighthouseFirewallRule#firewall_rule_description}
  */
  readonly firewallRuleDescription?: string;
  /**
  * Port. Valid values are ALL, one single port, multiple ports separated by commas, or port range indicated by a minus sign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/lighthouse_firewall_rule#port LighthouseFirewallRule#port}
  */
  readonly port?: string;
  /**
  * Protocol. Valid values are TCP, UDP, ICMP, ALL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/lighthouse_firewall_rule#protocol LighthouseFirewallRule#protocol}
  */
  readonly protocol: string;
}

export function lighthouseFirewallRuleFirewallRulesToTerraform(struct?: LighthouseFirewallRuleFirewallRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    firewall_rule_description: cdktf.stringToTerraform(struct!.firewallRuleDescription),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function lighthouseFirewallRuleFirewallRulesToHclTerraform(struct?: LighthouseFirewallRuleFirewallRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firewall_rule_description: {
      value: cdktf.stringToHclTerraform(struct!.firewallRuleDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LighthouseFirewallRuleFirewallRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LighthouseFirewallRuleFirewallRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._firewallRuleDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallRuleDescription = this._firewallRuleDescription;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LighthouseFirewallRuleFirewallRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._cidrBlock = undefined;
      this._firewallRuleDescription = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._cidrBlock = value.cidrBlock;
      this._firewallRuleDescription = value.firewallRuleDescription;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cidr_block - computed: false, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // firewall_rule_description - computed: false, optional: true, required: false
  private _firewallRuleDescription?: string; 
  public get firewallRuleDescription() {
    return this.getStringAttribute('firewall_rule_description');
  }
  public set firewallRuleDescription(value: string) {
    this._firewallRuleDescription = value;
  }
  public resetFirewallRuleDescription() {
    this._firewallRuleDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRuleDescriptionInput() {
    return this._firewallRuleDescription;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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
}

export class LighthouseFirewallRuleFirewallRulesList extends cdktf.ComplexList {
  public internalValue? : LighthouseFirewallRuleFirewallRules[] | cdktf.IResolvable

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
  public get(index: number): LighthouseFirewallRuleFirewallRulesOutputReference {
    return new LighthouseFirewallRuleFirewallRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/lighthouse_firewall_rule tencentcloud_lighthouse_firewall_rule}
*/
export class LighthouseFirewallRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_lighthouse_firewall_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LighthouseFirewallRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LighthouseFirewallRule to import
  * @param importFromId The id of the existing LighthouseFirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/lighthouse_firewall_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LighthouseFirewallRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_lighthouse_firewall_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/lighthouse_firewall_rule tencentcloud_lighthouse_firewall_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LighthouseFirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: LighthouseFirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_lighthouse_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._firewallRules.internalValue = config.firewallRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // firewall_rules - computed: false, optional: false, required: true
  private _firewallRules = new LighthouseFirewallRuleFirewallRulesList(this, "firewall_rules", false);
  public get firewallRules() {
    return this._firewallRules;
  }
  public putFirewallRules(value: LighthouseFirewallRuleFirewallRules[] | cdktf.IResolvable) {
    this._firewallRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRulesInput() {
    return this._firewallRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      firewall_rules: cdktf.listMapper(lighthouseFirewallRuleFirewallRulesToTerraform, true)(this._firewallRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_rules: {
        value: cdktf.listMapperHcl(lighthouseFirewallRuleFirewallRulesToHclTerraform, true)(this._firewallRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LighthouseFirewallRuleFirewallRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
