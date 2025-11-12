// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#id PolicyRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#rule_set_id PolicyRules#rule_set_id}
  */
  readonly ruleSetId: number;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#rule PolicyRules#rule}
  */
  readonly rule?: PolicyRulesRule[] | cdktf.IResolvable;
}
export interface PolicyRulesRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#action PolicyRules#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#anti_malware_profile PolicyRules#anti_malware_profile}
  */
  readonly antiMalwareProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#anti_virus_profile PolicyRules#anti_virus_profile}
  */
  readonly antiVirusProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#description PolicyRules#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#destination PolicyRules#destination}
  */
  readonly destination?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#dlp_profile PolicyRules#dlp_profile}
  */
  readonly dlpProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#fqdn_filter_profile PolicyRules#fqdn_filter_profile}
  */
  readonly fqdnFilterProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#fqdn_match_profile PolicyRules#fqdn_match_profile}
  */
  readonly fqdnMatchProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#malicious_ip_profile PolicyRules#malicious_ip_profile}
  */
  readonly maliciousIpProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#malicious_src_profile PolicyRules#malicious_src_profile}
  */
  readonly maliciousSrcProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#name PolicyRules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#network_intrusion_profile PolicyRules#network_intrusion_profile}
  */
  readonly networkIntrusionProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#packet_capture_enabled PolicyRules#packet_capture_enabled}
  */
  readonly packetCaptureEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#send_deny_reset PolicyRules#send_deny_reset}
  */
  readonly sendDenyReset?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#service PolicyRules#service}
  */
  readonly service: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#source PolicyRules#source}
  */
  readonly source?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#state PolicyRules#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#type PolicyRules#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#url_filter PolicyRules#url_filter}
  */
  readonly urlFilter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#web_protection_profile PolicyRules#web_protection_profile}
  */
  readonly webProtectionProfile?: number;
}

export function policyRulesRuleToTerraform(struct?: PolicyRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    anti_malware_profile: cdktf.numberToTerraform(struct!.antiMalwareProfile),
    anti_virus_profile: cdktf.numberToTerraform(struct!.antiVirusProfile),
    description: cdktf.stringToTerraform(struct!.description),
    destination: cdktf.numberToTerraform(struct!.destination),
    dlp_profile: cdktf.numberToTerraform(struct!.dlpProfile),
    fqdn_filter_profile: cdktf.numberToTerraform(struct!.fqdnFilterProfile),
    fqdn_match_profile: cdktf.numberToTerraform(struct!.fqdnMatchProfile),
    malicious_ip_profile: cdktf.numberToTerraform(struct!.maliciousIpProfile),
    malicious_src_profile: cdktf.numberToTerraform(struct!.maliciousSrcProfile),
    name: cdktf.stringToTerraform(struct!.name),
    network_intrusion_profile: cdktf.numberToTerraform(struct!.networkIntrusionProfile),
    packet_capture_enabled: cdktf.booleanToTerraform(struct!.packetCaptureEnabled),
    send_deny_reset: cdktf.booleanToTerraform(struct!.sendDenyReset),
    service: cdktf.numberToTerraform(struct!.service),
    source: cdktf.numberToTerraform(struct!.source),
    state: cdktf.stringToTerraform(struct!.state),
    type: cdktf.stringToTerraform(struct!.type),
    url_filter: cdktf.numberToTerraform(struct!.urlFilter),
    web_protection_profile: cdktf.numberToTerraform(struct!.webProtectionProfile),
  }
}


export function policyRulesRuleToHclTerraform(struct?: PolicyRulesRule | cdktf.IResolvable): any {
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
    anti_malware_profile: {
      value: cdktf.numberToHclTerraform(struct!.antiMalwareProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    anti_virus_profile: {
      value: cdktf.numberToHclTerraform(struct!.antiVirusProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.numberToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dlp_profile: {
      value: cdktf.numberToHclTerraform(struct!.dlpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_filter_profile: {
      value: cdktf.numberToHclTerraform(struct!.fqdnFilterProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_match_profile: {
      value: cdktf.numberToHclTerraform(struct!.fqdnMatchProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malicious_ip_profile: {
      value: cdktf.numberToHclTerraform(struct!.maliciousIpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malicious_src_profile: {
      value: cdktf.numberToHclTerraform(struct!.maliciousSrcProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_intrusion_profile: {
      value: cdktf.numberToHclTerraform(struct!.networkIntrusionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_capture_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.packetCaptureEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_deny_reset: {
      value: cdktf.booleanToHclTerraform(struct!.sendDenyReset),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service: {
      value: cdktf.numberToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.numberToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_filter: {
      value: cdktf.numberToHclTerraform(struct!.urlFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_protection_profile: {
      value: cdktf.numberToHclTerraform(struct!.webProtectionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._antiMalwareProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiMalwareProfile = this._antiMalwareProfile;
    }
    if (this._antiVirusProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiVirusProfile = this._antiVirusProfile;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._dlpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlpProfile = this._dlpProfile;
    }
    if (this._fqdnFilterProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnFilterProfile = this._fqdnFilterProfile;
    }
    if (this._fqdnMatchProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnMatchProfile = this._fqdnMatchProfile;
    }
    if (this._maliciousIpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.maliciousIpProfile = this._maliciousIpProfile;
    }
    if (this._maliciousSrcProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.maliciousSrcProfile = this._maliciousSrcProfile;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkIntrusionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkIntrusionProfile = this._networkIntrusionProfile;
    }
    if (this._packetCaptureEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCaptureEnabled = this._packetCaptureEnabled;
    }
    if (this._sendDenyReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendDenyReset = this._sendDenyReset;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urlFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFilter = this._urlFilter;
    }
    if (this._webProtectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.webProtectionProfile = this._webProtectionProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._antiMalwareProfile = undefined;
      this._antiVirusProfile = undefined;
      this._description = undefined;
      this._destination = undefined;
      this._dlpProfile = undefined;
      this._fqdnFilterProfile = undefined;
      this._fqdnMatchProfile = undefined;
      this._maliciousIpProfile = undefined;
      this._maliciousSrcProfile = undefined;
      this._name = undefined;
      this._networkIntrusionProfile = undefined;
      this._packetCaptureEnabled = undefined;
      this._sendDenyReset = undefined;
      this._service = undefined;
      this._source = undefined;
      this._state = undefined;
      this._type = undefined;
      this._urlFilter = undefined;
      this._webProtectionProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._antiMalwareProfile = value.antiMalwareProfile;
      this._antiVirusProfile = value.antiVirusProfile;
      this._description = value.description;
      this._destination = value.destination;
      this._dlpProfile = value.dlpProfile;
      this._fqdnFilterProfile = value.fqdnFilterProfile;
      this._fqdnMatchProfile = value.fqdnMatchProfile;
      this._maliciousIpProfile = value.maliciousIpProfile;
      this._maliciousSrcProfile = value.maliciousSrcProfile;
      this._name = value.name;
      this._networkIntrusionProfile = value.networkIntrusionProfile;
      this._packetCaptureEnabled = value.packetCaptureEnabled;
      this._sendDenyReset = value.sendDenyReset;
      this._service = value.service;
      this._source = value.source;
      this._state = value.state;
      this._type = value.type;
      this._urlFilter = value.urlFilter;
      this._webProtectionProfile = value.webProtectionProfile;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // anti_malware_profile - computed: false, optional: true, required: false
  private _antiMalwareProfile?: number; 
  public get antiMalwareProfile() {
    return this.getNumberAttribute('anti_malware_profile');
  }
  public set antiMalwareProfile(value: number) {
    this._antiMalwareProfile = value;
  }
  public resetAntiMalwareProfile() {
    this._antiMalwareProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiMalwareProfileInput() {
    return this._antiMalwareProfile;
  }

  // anti_virus_profile - computed: false, optional: true, required: false
  private _antiVirusProfile?: number; 
  public get antiVirusProfile() {
    return this.getNumberAttribute('anti_virus_profile');
  }
  public set antiVirusProfile(value: number) {
    this._antiVirusProfile = value;
  }
  public resetAntiVirusProfile() {
    this._antiVirusProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiVirusProfileInput() {
    return this._antiVirusProfile;
  }

  // description - computed: false, optional: true, required: false
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

  // destination - computed: false, optional: true, required: false
  private _destination?: number; 
  public get destination() {
    return this.getNumberAttribute('destination');
  }
  public set destination(value: number) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // dlp_profile - computed: false, optional: true, required: false
  private _dlpProfile?: number; 
  public get dlpProfile() {
    return this.getNumberAttribute('dlp_profile');
  }
  public set dlpProfile(value: number) {
    this._dlpProfile = value;
  }
  public resetDlpProfile() {
    this._dlpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpProfileInput() {
    return this._dlpProfile;
  }

  // fqdn_filter_profile - computed: false, optional: true, required: false
  private _fqdnFilterProfile?: number; 
  public get fqdnFilterProfile() {
    return this.getNumberAttribute('fqdn_filter_profile');
  }
  public set fqdnFilterProfile(value: number) {
    this._fqdnFilterProfile = value;
  }
  public resetFqdnFilterProfile() {
    this._fqdnFilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnFilterProfileInput() {
    return this._fqdnFilterProfile;
  }

  // fqdn_match_profile - computed: false, optional: true, required: false
  private _fqdnMatchProfile?: number; 
  public get fqdnMatchProfile() {
    return this.getNumberAttribute('fqdn_match_profile');
  }
  public set fqdnMatchProfile(value: number) {
    this._fqdnMatchProfile = value;
  }
  public resetFqdnMatchProfile() {
    this._fqdnMatchProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnMatchProfileInput() {
    return this._fqdnMatchProfile;
  }

  // malicious_ip_profile - computed: false, optional: true, required: false
  private _maliciousIpProfile?: number; 
  public get maliciousIpProfile() {
    return this.getNumberAttribute('malicious_ip_profile');
  }
  public set maliciousIpProfile(value: number) {
    this._maliciousIpProfile = value;
  }
  public resetMaliciousIpProfile() {
    this._maliciousIpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousIpProfileInput() {
    return this._maliciousIpProfile;
  }

  // malicious_src_profile - computed: false, optional: true, required: false
  private _maliciousSrcProfile?: number; 
  public get maliciousSrcProfile() {
    return this.getNumberAttribute('malicious_src_profile');
  }
  public set maliciousSrcProfile(value: number) {
    this._maliciousSrcProfile = value;
  }
  public resetMaliciousSrcProfile() {
    this._maliciousSrcProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousSrcProfileInput() {
    return this._maliciousSrcProfile;
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

  // network_intrusion_profile - computed: false, optional: true, required: false
  private _networkIntrusionProfile?: number; 
  public get networkIntrusionProfile() {
    return this.getNumberAttribute('network_intrusion_profile');
  }
  public set networkIntrusionProfile(value: number) {
    this._networkIntrusionProfile = value;
  }
  public resetNetworkIntrusionProfile() {
    this._networkIntrusionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIntrusionProfileInput() {
    return this._networkIntrusionProfile;
  }

  // packet_capture_enabled - computed: false, optional: true, required: false
  private _packetCaptureEnabled?: boolean | cdktf.IResolvable; 
  public get packetCaptureEnabled() {
    return this.getBooleanAttribute('packet_capture_enabled');
  }
  public set packetCaptureEnabled(value: boolean | cdktf.IResolvable) {
    this._packetCaptureEnabled = value;
  }
  public resetPacketCaptureEnabled() {
    this._packetCaptureEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureEnabledInput() {
    return this._packetCaptureEnabled;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }

  // send_deny_reset - computed: false, optional: true, required: false
  private _sendDenyReset?: boolean | cdktf.IResolvable; 
  public get sendDenyReset() {
    return this.getBooleanAttribute('send_deny_reset');
  }
  public set sendDenyReset(value: boolean | cdktf.IResolvable) {
    this._sendDenyReset = value;
  }
  public resetSendDenyReset() {
    this._sendDenyReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDenyResetInput() {
    return this._sendDenyReset;
  }

  // service - computed: false, optional: false, required: true
  private _service?: number; 
  public get service() {
    return this.getNumberAttribute('service');
  }
  public set service(value: number) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // source - computed: false, optional: true, required: false
  private _source?: number; 
  public get source() {
    return this.getNumberAttribute('source');
  }
  public set source(value: number) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url_filter - computed: false, optional: true, required: false
  private _urlFilter?: number; 
  public get urlFilter() {
    return this.getNumberAttribute('url_filter');
  }
  public set urlFilter(value: number) {
    this._urlFilter = value;
  }
  public resetUrlFilter() {
    this._urlFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilterInput() {
    return this._urlFilter;
  }

  // web_protection_profile - computed: false, optional: true, required: false
  private _webProtectionProfile?: number; 
  public get webProtectionProfile() {
    return this.getNumberAttribute('web_protection_profile');
  }
  public set webProtectionProfile(value: number) {
    this._webProtectionProfile = value;
  }
  public resetWebProtectionProfile() {
    this._webProtectionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webProtectionProfileInput() {
    return this._webProtectionProfile;
  }
}

export class PolicyRulesRuleList extends cdktf.ComplexList {
  public internalValue? : PolicyRulesRule[] | cdktf.IResolvable

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
  public get(index: number): PolicyRulesRuleOutputReference {
    return new PolicyRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules valtix_policy_rules}
*/
export class PolicyRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_policy_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyRules to import
  * @param importFromId The id of the existing PolicyRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_policy_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/policy_rules valtix_policy_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRulesConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_policy_rules',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.2',
        providerVersionConstraint: '25.9.2'
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
    this._ruleSetId = config.ruleSetId;
    this._rule.internalValue = config.rule;
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

  // rule_set_id - computed: false, optional: false, required: true
  private _ruleSetId?: number; 
  public get ruleSetId() {
    return this.getNumberAttribute('rule_set_id');
  }
  public set ruleSetId(value: number) {
    this._ruleSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetIdInput() {
    return this._ruleSetId;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new PolicyRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: PolicyRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rule_set_id: cdktf.numberToTerraform(this._ruleSetId),
      rule: cdktf.listMapper(policyRulesRuleToTerraform, true)(this._rule.internalValue),
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
      rule_set_id: {
        value: cdktf.numberToHclTerraform(this._ruleSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule: {
        value: cdktf.listMapperHcl(policyRulesRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyRulesRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
