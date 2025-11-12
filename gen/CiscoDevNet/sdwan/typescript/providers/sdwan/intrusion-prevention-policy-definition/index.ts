// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntrusionPreventionPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition#custom_signature IntrusionPreventionPolicyDefinition#custom_signature}
  */
  readonly customSignature?: boolean | cdktf.IResolvable;
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition#description IntrusionPreventionPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * The inspection mode
  *   - Choices: `protection`, `detection`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition#inspection_mode IntrusionPreventionPolicyDefinition#inspection_mode}
  */
  readonly inspectionMode?: string;
  /**
  * IPS signature list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition#ips_signature_list_id IntrusionPreventionPolicyDefinition#ips_signature_list_id}
  */
  readonly ipsSignatureListId?: string;
  /**
  * IPS signature list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition#ips_signature_list_version IntrusionPreventionPolicyDefinition#ips_signature_list_version}
  */
  readonly ipsSignatureListVersion?: number;
  /**
  * Log level
  *   - Choices: `emergency`, `alert`, `critical`, `error`, `warning`, `notice`, `info`, `debug`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition#log_level IntrusionPreventionPolicyDefinition#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition#logging IntrusionPreventionPolicyDefinition#logging}
  */
  readonly logging?: IntrusionPreventionPolicyDefinitionLogging[] | cdktf.IResolvable;
  /**
  * The policy mode
  *   - Choices: `security`, `unified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition#mode IntrusionPreventionPolicyDefinition#mode}
  */
  readonly mode?: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition#name IntrusionPreventionPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * Signature set
  *   - Choices: `balanced`, `connectivity`, `security`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition#signature_set IntrusionPreventionPolicyDefinition#signature_set}
  */
  readonly signatureSet?: string;
  /**
  * List of VPN IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition#target_vpns IntrusionPreventionPolicyDefinition#target_vpns}
  */
  readonly targetVpns?: string[];
}
export interface IntrusionPreventionPolicyDefinitionLogging {
  /**
  * External Syslog Server IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition#external_syslog_server_ip IntrusionPreventionPolicyDefinition#external_syslog_server_ip}
  */
  readonly externalSyslogServerIp?: string;
  /**
  * External Syslog Server VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition#external_syslog_server_vpn IntrusionPreventionPolicyDefinition#external_syslog_server_vpn}
  */
  readonly externalSyslogServerVpn?: string;
}

export function intrusionPreventionPolicyDefinitionLoggingToTerraform(struct?: IntrusionPreventionPolicyDefinitionLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_syslog_server_ip: cdktf.stringToTerraform(struct!.externalSyslogServerIp),
    external_syslog_server_vpn: cdktf.stringToTerraform(struct!.externalSyslogServerVpn),
  }
}


export function intrusionPreventionPolicyDefinitionLoggingToHclTerraform(struct?: IntrusionPreventionPolicyDefinitionLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_syslog_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.externalSyslogServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_syslog_server_vpn: {
      value: cdktf.stringToHclTerraform(struct!.externalSyslogServerVpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntrusionPreventionPolicyDefinitionLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntrusionPreventionPolicyDefinitionLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalSyslogServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSyslogServerIp = this._externalSyslogServerIp;
    }
    if (this._externalSyslogServerVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSyslogServerVpn = this._externalSyslogServerVpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntrusionPreventionPolicyDefinitionLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalSyslogServerIp = undefined;
      this._externalSyslogServerVpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalSyslogServerIp = value.externalSyslogServerIp;
      this._externalSyslogServerVpn = value.externalSyslogServerVpn;
    }
  }

  // external_syslog_server_ip - computed: false, optional: true, required: false
  private _externalSyslogServerIp?: string; 
  public get externalSyslogServerIp() {
    return this.getStringAttribute('external_syslog_server_ip');
  }
  public set externalSyslogServerIp(value: string) {
    this._externalSyslogServerIp = value;
  }
  public resetExternalSyslogServerIp() {
    this._externalSyslogServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSyslogServerIpInput() {
    return this._externalSyslogServerIp;
  }

  // external_syslog_server_vpn - computed: false, optional: true, required: false
  private _externalSyslogServerVpn?: string; 
  public get externalSyslogServerVpn() {
    return this.getStringAttribute('external_syslog_server_vpn');
  }
  public set externalSyslogServerVpn(value: string) {
    this._externalSyslogServerVpn = value;
  }
  public resetExternalSyslogServerVpn() {
    this._externalSyslogServerVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSyslogServerVpnInput() {
    return this._externalSyslogServerVpn;
  }
}

export class IntrusionPreventionPolicyDefinitionLoggingList extends cdktf.ComplexList {
  public internalValue? : IntrusionPreventionPolicyDefinitionLogging[] | cdktf.IResolvable

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
  public get(index: number): IntrusionPreventionPolicyDefinitionLoggingOutputReference {
    return new IntrusionPreventionPolicyDefinitionLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition sdwan_intrusion_prevention_policy_definition}
*/
export class IntrusionPreventionPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_intrusion_prevention_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntrusionPreventionPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntrusionPreventionPolicyDefinition to import
  * @param importFromId The id of the existing IntrusionPreventionPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntrusionPreventionPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_intrusion_prevention_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/intrusion_prevention_policy_definition sdwan_intrusion_prevention_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntrusionPreventionPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: IntrusionPreventionPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_intrusion_prevention_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customSignature = config.customSignature;
    this._description = config.description;
    this._inspectionMode = config.inspectionMode;
    this._ipsSignatureListId = config.ipsSignatureListId;
    this._ipsSignatureListVersion = config.ipsSignatureListVersion;
    this._logLevel = config.logLevel;
    this._logging.internalValue = config.logging;
    this._mode = config.mode;
    this._name = config.name;
    this._signatureSet = config.signatureSet;
    this._targetVpns = config.targetVpns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_signature - computed: false, optional: true, required: false
  private _customSignature?: boolean | cdktf.IResolvable; 
  public get customSignature() {
    return this.getBooleanAttribute('custom_signature');
  }
  public set customSignature(value: boolean | cdktf.IResolvable) {
    this._customSignature = value;
  }
  public resetCustomSignature() {
    this._customSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSignatureInput() {
    return this._customSignature;
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inspection_mode - computed: false, optional: true, required: false
  private _inspectionMode?: string; 
  public get inspectionMode() {
    return this.getStringAttribute('inspection_mode');
  }
  public set inspectionMode(value: string) {
    this._inspectionMode = value;
  }
  public resetInspectionMode() {
    this._inspectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionModeInput() {
    return this._inspectionMode;
  }

  // ips_signature_list_id - computed: false, optional: true, required: false
  private _ipsSignatureListId?: string; 
  public get ipsSignatureListId() {
    return this.getStringAttribute('ips_signature_list_id');
  }
  public set ipsSignatureListId(value: string) {
    this._ipsSignatureListId = value;
  }
  public resetIpsSignatureListId() {
    this._ipsSignatureListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSignatureListIdInput() {
    return this._ipsSignatureListId;
  }

  // ips_signature_list_version - computed: false, optional: true, required: false
  private _ipsSignatureListVersion?: number; 
  public get ipsSignatureListVersion() {
    return this.getNumberAttribute('ips_signature_list_version');
  }
  public set ipsSignatureListVersion(value: number) {
    this._ipsSignatureListVersion = value;
  }
  public resetIpsSignatureListVersion() {
    this._ipsSignatureListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSignatureListVersionInput() {
    return this._ipsSignatureListVersion;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new IntrusionPreventionPolicyDefinitionLoggingList(this, "logging", false);
  public get logging() {
    return this._logging;
  }
  public putLogging(value: IntrusionPreventionPolicyDefinitionLogging[] | cdktf.IResolvable) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // signature_set - computed: false, optional: true, required: false
  private _signatureSet?: string; 
  public get signatureSet() {
    return this.getStringAttribute('signature_set');
  }
  public set signatureSet(value: string) {
    this._signatureSet = value;
  }
  public resetSignatureSet() {
    this._signatureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureSetInput() {
    return this._signatureSet;
  }

  // target_vpns - computed: false, optional: true, required: false
  private _targetVpns?: string[]; 
  public get targetVpns() {
    return cdktf.Fn.tolist(this.getListAttribute('target_vpns'));
  }
  public set targetVpns(value: string[]) {
    this._targetVpns = value;
  }
  public resetTargetVpns() {
    this._targetVpns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVpnsInput() {
    return this._targetVpns;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_signature: cdktf.booleanToTerraform(this._customSignature),
      description: cdktf.stringToTerraform(this._description),
      inspection_mode: cdktf.stringToTerraform(this._inspectionMode),
      ips_signature_list_id: cdktf.stringToTerraform(this._ipsSignatureListId),
      ips_signature_list_version: cdktf.numberToTerraform(this._ipsSignatureListVersion),
      log_level: cdktf.stringToTerraform(this._logLevel),
      logging: cdktf.listMapper(intrusionPreventionPolicyDefinitionLoggingToTerraform, false)(this._logging.internalValue),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      signature_set: cdktf.stringToTerraform(this._signatureSet),
      target_vpns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetVpns),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_signature: {
        value: cdktf.booleanToHclTerraform(this._customSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inspection_mode: {
        value: cdktf.stringToHclTerraform(this._inspectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_signature_list_id: {
        value: cdktf.stringToHclTerraform(this._ipsSignatureListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_signature_list_version: {
        value: cdktf.numberToHclTerraform(this._ipsSignatureListVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging: {
        value: cdktf.listMapperHcl(intrusionPreventionPolicyDefinitionLoggingToHclTerraform, false)(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntrusionPreventionPolicyDefinitionLoggingList",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      signature_set: {
        value: cdktf.stringToHclTerraform(this._signatureSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_vpns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetVpns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
