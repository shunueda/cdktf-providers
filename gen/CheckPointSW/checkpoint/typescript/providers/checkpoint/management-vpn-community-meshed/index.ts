// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementVpnCommunityMeshedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#color ManagementVpnCommunityMeshed#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#comments ManagementVpnCommunityMeshed#comments}
  */
  readonly comments?: string;
  /**
  * The encryption method to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#encryption_method ManagementVpnCommunityMeshed#encryption_method}
  */
  readonly encryptionMethod?: string;
  /**
  * The encryption suite to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#encryption_suite ManagementVpnCommunityMeshed#encryption_suite}
  */
  readonly encryptionSuite?: string;
  /**
  * Collection of Gateway objects identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#gateways ManagementVpnCommunityMeshed#gateways}
  */
  readonly gateways?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#id ManagementVpnCommunityMeshed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#ignore_errors ManagementVpnCommunityMeshed#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#ignore_warnings ManagementVpnCommunityMeshed#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Ike Phase 1 settings. Only applicable when the encryption-suite is set to [custom].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#ike_phase_1 ManagementVpnCommunityMeshed#ike_phase_1}
  */
  readonly ikePhase1?: { [key: string]: string };
  /**
  * Ike Phase 2 settings. Only applicable when the encryption-suite is set to [custom].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#ike_phase_2 ManagementVpnCommunityMeshed#ike_phase_2}
  */
  readonly ikePhase2?: { [key: string]: string };
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#name ManagementVpnCommunityMeshed#name}
  */
  readonly name: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#tags ManagementVpnCommunityMeshed#tags}
  */
  readonly tags?: string[];
  /**
  * VPN tunnel sharing option to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#tunnel_granularity ManagementVpnCommunityMeshed#tunnel_granularity}
  */
  readonly tunnelGranularity?: string;
  /**
  * Indicates whether the shared secret should be used for all external gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#use_shared_secret ManagementVpnCommunityMeshed#use_shared_secret}
  */
  readonly useSharedSecret?: boolean | cdktf.IResolvable;
  /**
  * granular_encryptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#granular_encryptions ManagementVpnCommunityMeshed#granular_encryptions}
  */
  readonly granularEncryptions?: ManagementVpnCommunityMeshedGranularEncryptions[] | cdktf.IResolvable;
  /**
  * override_vpn_domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#override_vpn_domains ManagementVpnCommunityMeshed#override_vpn_domains}
  */
  readonly overrideVpnDomains?: ManagementVpnCommunityMeshedOverrideVpnDomains[] | cdktf.IResolvable;
  /**
  * shared_secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#shared_secrets ManagementVpnCommunityMeshed#shared_secrets}
  */
  readonly sharedSecrets?: ManagementVpnCommunityMeshedSharedSecrets[] | cdktf.IResolvable;
}
export interface ManagementVpnCommunityMeshedGranularEncryptions {
  /**
  * The encryption method to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#encryption_method ManagementVpnCommunityMeshed#encryption_method}
  */
  readonly encryptionMethod?: string;
  /**
  * The encryption suite to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#encryption_suite ManagementVpnCommunityMeshed#encryption_suite}
  */
  readonly encryptionSuite?: string;
  /**
  * Externally managed or 3rd party gateway identified by name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#external_gateway ManagementVpnCommunityMeshed#external_gateway}
  */
  readonly externalGateway: string;
  /**
  * Ike Phase 1 settings. Only applicable when the encryption-suite is set to [custom].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#ike_phase_1 ManagementVpnCommunityMeshed#ike_phase_1}
  */
  readonly ikePhase1?: { [key: string]: string };
  /**
  * Ike Phase 2 settings. Only applicable when the encryption-suite is set to [custom].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#ike_phase_2 ManagementVpnCommunityMeshed#ike_phase_2}
  */
  readonly ikePhase2?: { [key: string]: string };
  /**
  * Internally managed Check Point gateway identified by name or UID, or 'Any' for all internal-gateways participants in this community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#internal_gateway ManagementVpnCommunityMeshed#internal_gateway}
  */
  readonly internalGateway: string;
}

export function managementVpnCommunityMeshedGranularEncryptionsToTerraform(struct?: ManagementVpnCommunityMeshedGranularEncryptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_method: cdktf.stringToTerraform(struct!.encryptionMethod),
    encryption_suite: cdktf.stringToTerraform(struct!.encryptionSuite),
    external_gateway: cdktf.stringToTerraform(struct!.externalGateway),
    ike_phase_1: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ikePhase1),
    ike_phase_2: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ikePhase2),
    internal_gateway: cdktf.stringToTerraform(struct!.internalGateway),
  }
}


export function managementVpnCommunityMeshedGranularEncryptionsToHclTerraform(struct?: ManagementVpnCommunityMeshedGranularEncryptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_method: {
      value: cdktf.stringToHclTerraform(struct!.encryptionMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_suite: {
      value: cdktf.stringToHclTerraform(struct!.encryptionSuite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_gateway: {
      value: cdktf.stringToHclTerraform(struct!.externalGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_phase_1: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ikePhase1),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ike_phase_2: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ikePhase2),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    internal_gateway: {
      value: cdktf.stringToHclTerraform(struct!.internalGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityMeshedGranularEncryptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementVpnCommunityMeshedGranularEncryptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionMethod = this._encryptionMethod;
    }
    if (this._encryptionSuite !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionSuite = this._encryptionSuite;
    }
    if (this._externalGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalGateway = this._externalGateway;
    }
    if (this._ikePhase1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePhase1 = this._ikePhase1;
    }
    if (this._ikePhase2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePhase2 = this._ikePhase2;
    }
    if (this._internalGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalGateway = this._internalGateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityMeshedGranularEncryptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionMethod = undefined;
      this._encryptionSuite = undefined;
      this._externalGateway = undefined;
      this._ikePhase1 = undefined;
      this._ikePhase2 = undefined;
      this._internalGateway = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionMethod = value.encryptionMethod;
      this._encryptionSuite = value.encryptionSuite;
      this._externalGateway = value.externalGateway;
      this._ikePhase1 = value.ikePhase1;
      this._ikePhase2 = value.ikePhase2;
      this._internalGateway = value.internalGateway;
    }
  }

  // encryption_method - computed: false, optional: true, required: false
  private _encryptionMethod?: string; 
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }
  public set encryptionMethod(value: string) {
    this._encryptionMethod = value;
  }
  public resetEncryptionMethod() {
    this._encryptionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionMethodInput() {
    return this._encryptionMethod;
  }

  // encryption_suite - computed: false, optional: true, required: false
  private _encryptionSuite?: string; 
  public get encryptionSuite() {
    return this.getStringAttribute('encryption_suite');
  }
  public set encryptionSuite(value: string) {
    this._encryptionSuite = value;
  }
  public resetEncryptionSuite() {
    this._encryptionSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSuiteInput() {
    return this._encryptionSuite;
  }

  // external_gateway - computed: false, optional: false, required: true
  private _externalGateway?: string; 
  public get externalGateway() {
    return this.getStringAttribute('external_gateway');
  }
  public set externalGateway(value: string) {
    this._externalGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalGatewayInput() {
    return this._externalGateway;
  }

  // ike_phase_1 - computed: false, optional: true, required: false
  private _ikePhase1?: { [key: string]: string }; 
  public get ikePhase1() {
    return this.getStringMapAttribute('ike_phase_1');
  }
  public set ikePhase1(value: { [key: string]: string }) {
    this._ikePhase1 = value;
  }
  public resetIkePhase1() {
    this._ikePhase1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePhase1Input() {
    return this._ikePhase1;
  }

  // ike_phase_2 - computed: false, optional: true, required: false
  private _ikePhase2?: { [key: string]: string }; 
  public get ikePhase2() {
    return this.getStringMapAttribute('ike_phase_2');
  }
  public set ikePhase2(value: { [key: string]: string }) {
    this._ikePhase2 = value;
  }
  public resetIkePhase2() {
    this._ikePhase2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePhase2Input() {
    return this._ikePhase2;
  }

  // internal_gateway - computed: false, optional: false, required: true
  private _internalGateway?: string; 
  public get internalGateway() {
    return this.getStringAttribute('internal_gateway');
  }
  public set internalGateway(value: string) {
    this._internalGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalGatewayInput() {
    return this._internalGateway;
  }
}

export class ManagementVpnCommunityMeshedGranularEncryptionsList extends cdktf.ComplexList {
  public internalValue? : ManagementVpnCommunityMeshedGranularEncryptions[] | cdktf.IResolvable

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
  public get(index: number): ManagementVpnCommunityMeshedGranularEncryptionsOutputReference {
    return new ManagementVpnCommunityMeshedGranularEncryptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementVpnCommunityMeshedOverrideVpnDomains {
  /**
  * Participant gateway in override VPN domain identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#gateway ManagementVpnCommunityMeshed#gateway}
  */
  readonly gateway?: string;
  /**
  * VPN domain network identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#vpn_domain ManagementVpnCommunityMeshed#vpn_domain}
  */
  readonly vpnDomain?: string;
}

export function managementVpnCommunityMeshedOverrideVpnDomainsToTerraform(struct?: ManagementVpnCommunityMeshedOverrideVpnDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    vpn_domain: cdktf.stringToTerraform(struct!.vpnDomain),
  }
}


export function managementVpnCommunityMeshedOverrideVpnDomainsToHclTerraform(struct?: ManagementVpnCommunityMeshedOverrideVpnDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_domain: {
      value: cdktf.stringToHclTerraform(struct!.vpnDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityMeshedOverrideVpnDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementVpnCommunityMeshedOverrideVpnDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._vpnDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnDomain = this._vpnDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityMeshedOverrideVpnDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._vpnDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._vpnDomain = value.vpnDomain;
    }
  }

  // gateway - computed: false, optional: true, required: false
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

  // vpn_domain - computed: false, optional: true, required: false
  private _vpnDomain?: string; 
  public get vpnDomain() {
    return this.getStringAttribute('vpn_domain');
  }
  public set vpnDomain(value: string) {
    this._vpnDomain = value;
  }
  public resetVpnDomain() {
    this._vpnDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnDomainInput() {
    return this._vpnDomain;
  }
}

export class ManagementVpnCommunityMeshedOverrideVpnDomainsList extends cdktf.ComplexList {
  public internalValue? : ManagementVpnCommunityMeshedOverrideVpnDomains[] | cdktf.IResolvable

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
  public get(index: number): ManagementVpnCommunityMeshedOverrideVpnDomainsOutputReference {
    return new ManagementVpnCommunityMeshedOverrideVpnDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementVpnCommunityMeshedSharedSecrets {
  /**
  * External gateway identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#external_gateway ManagementVpnCommunityMeshed#external_gateway}
  */
  readonly externalGateway?: string;
  /**
  * Shared secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#shared_secret ManagementVpnCommunityMeshed#shared_secret}
  */
  readonly sharedSecret?: string;
}

export function managementVpnCommunityMeshedSharedSecretsToTerraform(struct?: ManagementVpnCommunityMeshedSharedSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_gateway: cdktf.stringToTerraform(struct!.externalGateway),
    shared_secret: cdktf.stringToTerraform(struct!.sharedSecret),
  }
}


export function managementVpnCommunityMeshedSharedSecretsToHclTerraform(struct?: ManagementVpnCommunityMeshedSharedSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_gateway: {
      value: cdktf.stringToHclTerraform(struct!.externalGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_secret: {
      value: cdktf.stringToHclTerraform(struct!.sharedSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityMeshedSharedSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementVpnCommunityMeshedSharedSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalGateway = this._externalGateway;
    }
    if (this._sharedSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSecret = this._sharedSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityMeshedSharedSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalGateway = undefined;
      this._sharedSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalGateway = value.externalGateway;
      this._sharedSecret = value.sharedSecret;
    }
  }

  // external_gateway - computed: false, optional: true, required: false
  private _externalGateway?: string; 
  public get externalGateway() {
    return this.getStringAttribute('external_gateway');
  }
  public set externalGateway(value: string) {
    this._externalGateway = value;
  }
  public resetExternalGateway() {
    this._externalGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalGatewayInput() {
    return this._externalGateway;
  }

  // shared_secret - computed: false, optional: true, required: false
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  public resetSharedSecret() {
    this._sharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }
}

export class ManagementVpnCommunityMeshedSharedSecretsList extends cdktf.ComplexList {
  public internalValue? : ManagementVpnCommunityMeshedSharedSecrets[] | cdktf.IResolvable

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
  public get(index: number): ManagementVpnCommunityMeshedSharedSecretsOutputReference {
    return new ManagementVpnCommunityMeshedSharedSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed checkpoint_management_vpn_community_meshed}
*/
export class ManagementVpnCommunityMeshed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_vpn_community_meshed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementVpnCommunityMeshed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementVpnCommunityMeshed to import
  * @param importFromId The id of the existing ManagementVpnCommunityMeshed that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementVpnCommunityMeshed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_vpn_community_meshed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_vpn_community_meshed checkpoint_management_vpn_community_meshed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementVpnCommunityMeshedConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementVpnCommunityMeshedConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_vpn_community_meshed',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comments = config.comments;
    this._encryptionMethod = config.encryptionMethod;
    this._encryptionSuite = config.encryptionSuite;
    this._gateways = config.gateways;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._ikePhase1 = config.ikePhase1;
    this._ikePhase2 = config.ikePhase2;
    this._name = config.name;
    this._tags = config.tags;
    this._tunnelGranularity = config.tunnelGranularity;
    this._useSharedSecret = config.useSharedSecret;
    this._granularEncryptions.internalValue = config.granularEncryptions;
    this._overrideVpnDomains.internalValue = config.overrideVpnDomains;
    this._sharedSecrets.internalValue = config.sharedSecrets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // encryption_method - computed: false, optional: true, required: false
  private _encryptionMethod?: string; 
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }
  public set encryptionMethod(value: string) {
    this._encryptionMethod = value;
  }
  public resetEncryptionMethod() {
    this._encryptionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionMethodInput() {
    return this._encryptionMethod;
  }

  // encryption_suite - computed: false, optional: true, required: false
  private _encryptionSuite?: string; 
  public get encryptionSuite() {
    return this.getStringAttribute('encryption_suite');
  }
  public set encryptionSuite(value: string) {
    this._encryptionSuite = value;
  }
  public resetEncryptionSuite() {
    this._encryptionSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSuiteInput() {
    return this._encryptionSuite;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways?: string[]; 
  public get gateways() {
    return cdktf.Fn.tolist(this.getListAttribute('gateways'));
  }
  public set gateways(value: string[]) {
    this._gateways = value;
  }
  public resetGateways() {
    this._gateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // ike_phase_1 - computed: false, optional: true, required: false
  private _ikePhase1?: { [key: string]: string }; 
  public get ikePhase1() {
    return this.getStringMapAttribute('ike_phase_1');
  }
  public set ikePhase1(value: { [key: string]: string }) {
    this._ikePhase1 = value;
  }
  public resetIkePhase1() {
    this._ikePhase1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePhase1Input() {
    return this._ikePhase1;
  }

  // ike_phase_2 - computed: false, optional: true, required: false
  private _ikePhase2?: { [key: string]: string }; 
  public get ikePhase2() {
    return this.getStringMapAttribute('ike_phase_2');
  }
  public set ikePhase2(value: { [key: string]: string }) {
    this._ikePhase2 = value;
  }
  public resetIkePhase2() {
    this._ikePhase2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePhase2Input() {
    return this._ikePhase2;
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

  // tags - computed: false, optional: true, required: false
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

  // tunnel_granularity - computed: false, optional: true, required: false
  private _tunnelGranularity?: string; 
  public get tunnelGranularity() {
    return this.getStringAttribute('tunnel_granularity');
  }
  public set tunnelGranularity(value: string) {
    this._tunnelGranularity = value;
  }
  public resetTunnelGranularity() {
    this._tunnelGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelGranularityInput() {
    return this._tunnelGranularity;
  }

  // use_shared_secret - computed: false, optional: true, required: false
  private _useSharedSecret?: boolean | cdktf.IResolvable; 
  public get useSharedSecret() {
    return this.getBooleanAttribute('use_shared_secret');
  }
  public set useSharedSecret(value: boolean | cdktf.IResolvable) {
    this._useSharedSecret = value;
  }
  public resetUseSharedSecret() {
    this._useSharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSharedSecretInput() {
    return this._useSharedSecret;
  }

  // granular_encryptions - computed: false, optional: true, required: false
  private _granularEncryptions = new ManagementVpnCommunityMeshedGranularEncryptionsList(this, "granular_encryptions", false);
  public get granularEncryptions() {
    return this._granularEncryptions;
  }
  public putGranularEncryptions(value: ManagementVpnCommunityMeshedGranularEncryptions[] | cdktf.IResolvable) {
    this._granularEncryptions.internalValue = value;
  }
  public resetGranularEncryptions() {
    this._granularEncryptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularEncryptionsInput() {
    return this._granularEncryptions.internalValue;
  }

  // override_vpn_domains - computed: false, optional: true, required: false
  private _overrideVpnDomains = new ManagementVpnCommunityMeshedOverrideVpnDomainsList(this, "override_vpn_domains", false);
  public get overrideVpnDomains() {
    return this._overrideVpnDomains;
  }
  public putOverrideVpnDomains(value: ManagementVpnCommunityMeshedOverrideVpnDomains[] | cdktf.IResolvable) {
    this._overrideVpnDomains.internalValue = value;
  }
  public resetOverrideVpnDomains() {
    this._overrideVpnDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVpnDomainsInput() {
    return this._overrideVpnDomains.internalValue;
  }

  // shared_secrets - computed: false, optional: true, required: false
  private _sharedSecrets = new ManagementVpnCommunityMeshedSharedSecretsList(this, "shared_secrets", false);
  public get sharedSecrets() {
    return this._sharedSecrets;
  }
  public putSharedSecrets(value: ManagementVpnCommunityMeshedSharedSecrets[] | cdktf.IResolvable) {
    this._sharedSecrets.internalValue = value;
  }
  public resetSharedSecrets() {
    this._sharedSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretsInput() {
    return this._sharedSecrets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      encryption_method: cdktf.stringToTerraform(this._encryptionMethod),
      encryption_suite: cdktf.stringToTerraform(this._encryptionSuite),
      gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gateways),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      ike_phase_1: cdktf.hashMapper(cdktf.stringToTerraform)(this._ikePhase1),
      ike_phase_2: cdktf.hashMapper(cdktf.stringToTerraform)(this._ikePhase2),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tunnel_granularity: cdktf.stringToTerraform(this._tunnelGranularity),
      use_shared_secret: cdktf.booleanToTerraform(this._useSharedSecret),
      granular_encryptions: cdktf.listMapper(managementVpnCommunityMeshedGranularEncryptionsToTerraform, true)(this._granularEncryptions.internalValue),
      override_vpn_domains: cdktf.listMapper(managementVpnCommunityMeshedOverrideVpnDomainsToTerraform, true)(this._overrideVpnDomains.internalValue),
      shared_secrets: cdktf.listMapper(managementVpnCommunityMeshedSharedSecretsToTerraform, true)(this._sharedSecrets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_method: {
        value: cdktf.stringToHclTerraform(this._encryptionMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_suite: {
        value: cdktf.stringToHclTerraform(this._encryptionSuite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateways: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gateways),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ike_phase_1: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ikePhase1),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ike_phase_2: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ikePhase2),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel_granularity: {
        value: cdktf.stringToHclTerraform(this._tunnelGranularity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_shared_secret: {
        value: cdktf.booleanToHclTerraform(this._useSharedSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      granular_encryptions: {
        value: cdktf.listMapperHcl(managementVpnCommunityMeshedGranularEncryptionsToHclTerraform, true)(this._granularEncryptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVpnCommunityMeshedGranularEncryptionsList",
      },
      override_vpn_domains: {
        value: cdktf.listMapperHcl(managementVpnCommunityMeshedOverrideVpnDomainsToHclTerraform, true)(this._overrideVpnDomains.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVpnCommunityMeshedOverrideVpnDomainsList",
      },
      shared_secrets: {
        value: cdktf.listMapperHcl(managementVpnCommunityMeshedSharedSecretsToHclTerraform, true)(this._sharedSecrets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVpnCommunityMeshedSharedSecretsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
