// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_trust
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementSetTrustConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_trust#id ManagementSetTrust#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address of the object, for establishing trust with dynamic gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_trust#ipv4_address ManagementSetTrust#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_trust#name ManagementSetTrust#name}
  */
  readonly name?: string;
  /**
  * Shared password to establish SIC between the Security Management and the Security Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_trust#one_time_password ManagementSetTrust#one_time_password}
  */
  readonly oneTimePassword?: string;
  /**
  * Establish the trust communication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_trust#trust_method ManagementSetTrust#trust_method}
  */
  readonly trustMethod?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_trust#uid ManagementSetTrust#uid}
  */
  readonly uid?: string;
  /**
  * trust_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_trust#trust_settings ManagementSetTrust#trust_settings}
  */
  readonly trustSettings?: ManagementSetTrustTrustSettings;
}
export interface ManagementSetTrustTrustSettings {
  /**
  * Use the Security Gateway MAC address, relevant for the gateway_mac_address identification-method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_trust#gateway_mac_address ManagementSetTrust#gateway_mac_address}
  */
  readonly gatewayMacAddress?: string;
  /**
  * How to identify the gateway (relevant for Spark DAIP gateways only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_trust#identification_method ManagementSetTrust#identification_method}
  */
  readonly identificationMethod?: string;
  /**
  * Push the certificate to the Security Gateway immediately, or wait for the Security Gateway to pull the certificate. Default value for Spark Gateway is 'when_gateway_connects'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_trust#initiation_phase ManagementSetTrust#initiation_phase}
  */
  readonly initiationPhase?: string;
}

export function managementSetTrustTrustSettingsToTerraform(struct?: ManagementSetTrustTrustSettingsOutputReference | ManagementSetTrustTrustSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_mac_address: cdktf.stringToTerraform(struct!.gatewayMacAddress),
    identification_method: cdktf.stringToTerraform(struct!.identificationMethod),
    initiation_phase: cdktf.stringToTerraform(struct!.initiationPhase),
  }
}


export function managementSetTrustTrustSettingsToHclTerraform(struct?: ManagementSetTrustTrustSettingsOutputReference | ManagementSetTrustTrustSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_mac_address: {
      value: cdktf.stringToHclTerraform(struct!.gatewayMacAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identification_method: {
      value: cdktf.stringToHclTerraform(struct!.identificationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiation_phase: {
      value: cdktf.stringToHclTerraform(struct!.initiationPhase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSetTrustTrustSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSetTrustTrustSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayMacAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayMacAddress = this._gatewayMacAddress;
    }
    if (this._identificationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.identificationMethod = this._identificationMethod;
    }
    if (this._initiationPhase !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiationPhase = this._initiationPhase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSetTrustTrustSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gatewayMacAddress = undefined;
      this._identificationMethod = undefined;
      this._initiationPhase = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gatewayMacAddress = value.gatewayMacAddress;
      this._identificationMethod = value.identificationMethod;
      this._initiationPhase = value.initiationPhase;
    }
  }

  // gateway_mac_address - computed: false, optional: true, required: false
  private _gatewayMacAddress?: string; 
  public get gatewayMacAddress() {
    return this.getStringAttribute('gateway_mac_address');
  }
  public set gatewayMacAddress(value: string) {
    this._gatewayMacAddress = value;
  }
  public resetGatewayMacAddress() {
    this._gatewayMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayMacAddressInput() {
    return this._gatewayMacAddress;
  }

  // identification_method - computed: false, optional: true, required: false
  private _identificationMethod?: string; 
  public get identificationMethod() {
    return this.getStringAttribute('identification_method');
  }
  public set identificationMethod(value: string) {
    this._identificationMethod = value;
  }
  public resetIdentificationMethod() {
    this._identificationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationMethodInput() {
    return this._identificationMethod;
  }

  // initiation_phase - computed: false, optional: true, required: false
  private _initiationPhase?: string; 
  public get initiationPhase() {
    return this.getStringAttribute('initiation_phase');
  }
  public set initiationPhase(value: string) {
    this._initiationPhase = value;
  }
  public resetInitiationPhase() {
    this._initiationPhase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiationPhaseInput() {
    return this._initiationPhase;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_trust checkpoint_management_set_trust}
*/
export class ManagementSetTrust extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_set_trust";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementSetTrust resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementSetTrust to import
  * @param importFromId The id of the existing ManagementSetTrust that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_trust#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementSetTrust to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_set_trust", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_trust checkpoint_management_set_trust} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementSetTrustConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementSetTrustConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_set_trust',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
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
    this._ipv4Address = config.ipv4Address;
    this._name = config.name;
    this._oneTimePassword = config.oneTimePassword;
    this._trustMethod = config.trustMethod;
    this._uid = config.uid;
    this._trustSettings.internalValue = config.trustSettings;
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

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // name - computed: false, optional: true, required: false
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

  // one_time_password - computed: false, optional: true, required: false
  private _oneTimePassword?: string; 
  public get oneTimePassword() {
    return this.getStringAttribute('one_time_password');
  }
  public set oneTimePassword(value: string) {
    this._oneTimePassword = value;
  }
  public resetOneTimePassword() {
    this._oneTimePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimePasswordInput() {
    return this._oneTimePassword;
  }

  // trust_method - computed: false, optional: true, required: false
  private _trustMethod?: string; 
  public get trustMethod() {
    return this.getStringAttribute('trust_method');
  }
  public set trustMethod(value: string) {
    this._trustMethod = value;
  }
  public resetTrustMethod() {
    this._trustMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustMethodInput() {
    return this._trustMethod;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // trust_settings - computed: false, optional: true, required: false
  private _trustSettings = new ManagementSetTrustTrustSettingsOutputReference(this, "trust_settings");
  public get trustSettings() {
    return this._trustSettings;
  }
  public putTrustSettings(value: ManagementSetTrustTrustSettings) {
    this._trustSettings.internalValue = value;
  }
  public resetTrustSettings() {
    this._trustSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustSettingsInput() {
    return this._trustSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      name: cdktf.stringToTerraform(this._name),
      one_time_password: cdktf.stringToTerraform(this._oneTimePassword),
      trust_method: cdktf.stringToTerraform(this._trustMethod),
      uid: cdktf.stringToTerraform(this._uid),
      trust_settings: managementSetTrustTrustSettingsToTerraform(this._trustSettings.internalValue),
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
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
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
      one_time_password: {
        value: cdktf.stringToHclTerraform(this._oneTimePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_method: {
        value: cdktf.stringToHclTerraform(this._trustMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_settings: {
        value: managementSetTrustTrustSettingsToHclTerraform(this._trustSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSetTrustTrustSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
