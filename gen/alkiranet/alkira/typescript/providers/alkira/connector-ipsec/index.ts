// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorIpsecConfig extends cdktf.TerraformMetaArguments {
  /**
  * The CXP where the connector should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#cxp ConnectorIpsec#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#description ConnectorIpsec#description}
  */
  readonly description?: string;
  /**
  * Is the connector enabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#enabled ConnectorIpsec#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The group of the connector. (see resource `alkira_group`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#group ConnectorIpsec#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#id ConnectorIpsec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#name ConnectorIpsec#name}
  */
  readonly name: string;
  /**
  * The ID of the scale group associated with the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#scale_group_id ConnectorIpsec#scale_group_id}
  */
  readonly scaleGroupId?: string;
  /**
  * The ID of the segment associated with the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#segment_id ConnectorIpsec#segment_id}
  */
  readonly segmentId: string;
  /**
  * The size of the connector, one of `SMALL`, `MEDIUM`, `LARGE`, `2LARGE`, `5LARGE`, `10LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#size ConnectorIpsec#size}
  */
  readonly size: string;
  /**
  * The mode can be configured either as `ROUTE_BASED` or `POLICY_BASED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#vpn_mode ConnectorIpsec#vpn_mode}
  */
  readonly vpnMode: string;
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#endpoint ConnectorIpsec#endpoint}
  */
  readonly endpoint: ConnectorIpsecEndpoint[] | cdktf.IResolvable;
  /**
  * policy_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#policy_options ConnectorIpsec#policy_options}
  */
  readonly policyOptions?: ConnectorIpsecPolicyOptions[] | cdktf.IResolvable;
  /**
  * routing_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#routing_options ConnectorIpsec#routing_options}
  */
  readonly routingOptions?: ConnectorIpsecRoutingOptions[] | cdktf.IResolvable;
  /**
  * segment_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#segment_options ConnectorIpsec#segment_options}
  */
  readonly segmentOptions?: ConnectorIpsecSegmentOptions[] | cdktf.IResolvable;
}
export interface ConnectorIpsecEndpointAdvancedOptions {
  /**
  * Diffie Hellman groups to use for IPsec SA. Value could `MODP1024`, `MODP2048`, `MODP3072`, `MODP4096`, `MODP6144`, `MODP8192`, `ECP256`, `ECP384`, `ECP521`, `CURVE25519` and `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#esp_dh_group_numbers ConnectorIpsec#esp_dh_group_numbers}
  */
  readonly espDhGroupNumbers: string[];
  /**
  * Encryption algorithms to use for IPsec SA. Value could be `AES256CBC`, `AES192CBC`, `AES128CBC`, `AES256GCM16` `3DESCBC`, or `NULL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#esp_encryption_algorithms ConnectorIpsec#esp_encryption_algorithms}
  */
  readonly espEncryptionAlgorithms: string[];
  /**
  * Integrity algorithms to use for IPsec SA. Value could `SHA1`, `SHA256`, `SHA384`, `SHA512` or `MD5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#esp_integrity_algorithms ConnectorIpsec#esp_integrity_algorithms}
  */
  readonly espIntegrityAlgorithms: string[];
  /**
  * Diffie Hellman groups to use for IKE SA, one of `MODP1024`, `MODP2048`, `MODP3072`, `MODP4096`, `MODP6144`, `MODP8192`, `ECP256`, `ECP384`, `ECP521`, or `CURVE25519`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#ike_dh_group_numbers ConnectorIpsec#ike_dh_group_numbers}
  */
  readonly ikeDhGroupNumbers: string[];
  /**
  * Encryption algorithms to use for IKE SA, one of `AES256CBC`, `AES192CBC`, `AES128CBC` and `3DESCBC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#ike_encryption_algorithms ConnectorIpsec#ike_encryption_algorithms}
  */
  readonly ikeEncryptionAlgorithms: string[];
  /**
  * Integrity algorithms to use for IKE SA, one of `SHA1`, `SHA256`, `SHA384`, `SHA512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#ike_integrity_algorithms ConnectorIpsec#ike_integrity_algorithms}
  */
  readonly ikeIntegrityAlgorithms: string[];
  /**
  * IKE version, either `IKEv1` or `IKEv2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#ike_version ConnectorIpsec#ike_version}
  */
  readonly ikeVersion: string;
  /**
  * When the value is `false`, CXP will initiate the IKE connection and in all other cases the customer gateway should initiate IKE connection. When `gateway_ip_type` is `DYNAMIC`, initiator must be `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#initiator ConnectorIpsec#initiator}
  */
  readonly initiator: boolean | cdktf.IResolvable;
  /**
  * IKE identity to use for authentication round, one of `FQDN`, `USER_FQDN`, `KEYID`, or `IP_ADDR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#remote_auth_type ConnectorIpsec#remote_auth_type}
  */
  readonly remoteAuthType: string;
  /**
  * Remote-ID value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#remote_auth_value ConnectorIpsec#remote_auth_value}
  */
  readonly remoteAuthValue: string;
}

export function connectorIpsecEndpointAdvancedOptionsToTerraform(struct?: ConnectorIpsecEndpointAdvancedOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    esp_dh_group_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.espDhGroupNumbers),
    esp_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.espEncryptionAlgorithms),
    esp_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.espIntegrityAlgorithms),
    ike_dh_group_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ikeDhGroupNumbers),
    ike_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ikeEncryptionAlgorithms),
    ike_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ikeIntegrityAlgorithms),
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    initiator: cdktf.booleanToTerraform(struct!.initiator),
    remote_auth_type: cdktf.stringToTerraform(struct!.remoteAuthType),
    remote_auth_value: cdktf.stringToTerraform(struct!.remoteAuthValue),
  }
}


export function connectorIpsecEndpointAdvancedOptionsToHclTerraform(struct?: ConnectorIpsecEndpointAdvancedOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    esp_dh_group_numbers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.espDhGroupNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    esp_encryption_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.espEncryptionAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    esp_integrity_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.espIntegrityAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ike_dh_group_numbers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ikeDhGroupNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ike_encryption_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ikeEncryptionAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ike_integrity_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ikeIntegrityAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ikeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator: {
      value: cdktf.booleanToHclTerraform(struct!.initiator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_auth_type: {
      value: cdktf.stringToHclTerraform(struct!.remoteAuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_auth_value: {
      value: cdktf.stringToHclTerraform(struct!.remoteAuthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorIpsecEndpointAdvancedOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorIpsecEndpointAdvancedOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._espDhGroupNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.espDhGroupNumbers = this._espDhGroupNumbers;
    }
    if (this._espEncryptionAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.espEncryptionAlgorithms = this._espEncryptionAlgorithms;
    }
    if (this._espIntegrityAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.espIntegrityAlgorithms = this._espIntegrityAlgorithms;
    }
    if (this._ikeDhGroupNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeDhGroupNumbers = this._ikeDhGroupNumbers;
    }
    if (this._ikeEncryptionAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeEncryptionAlgorithms = this._ikeEncryptionAlgorithms;
    }
    if (this._ikeIntegrityAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeIntegrityAlgorithms = this._ikeIntegrityAlgorithms;
    }
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._initiator !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiator = this._initiator;
    }
    if (this._remoteAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAuthType = this._remoteAuthType;
    }
    if (this._remoteAuthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAuthValue = this._remoteAuthValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorIpsecEndpointAdvancedOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._espDhGroupNumbers = undefined;
      this._espEncryptionAlgorithms = undefined;
      this._espIntegrityAlgorithms = undefined;
      this._ikeDhGroupNumbers = undefined;
      this._ikeEncryptionAlgorithms = undefined;
      this._ikeIntegrityAlgorithms = undefined;
      this._ikeVersion = undefined;
      this._initiator = undefined;
      this._remoteAuthType = undefined;
      this._remoteAuthValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._espDhGroupNumbers = value.espDhGroupNumbers;
      this._espEncryptionAlgorithms = value.espEncryptionAlgorithms;
      this._espIntegrityAlgorithms = value.espIntegrityAlgorithms;
      this._ikeDhGroupNumbers = value.ikeDhGroupNumbers;
      this._ikeEncryptionAlgorithms = value.ikeEncryptionAlgorithms;
      this._ikeIntegrityAlgorithms = value.ikeIntegrityAlgorithms;
      this._ikeVersion = value.ikeVersion;
      this._initiator = value.initiator;
      this._remoteAuthType = value.remoteAuthType;
      this._remoteAuthValue = value.remoteAuthValue;
    }
  }

  // esp_dh_group_numbers - computed: false, optional: false, required: true
  private _espDhGroupNumbers?: string[]; 
  public get espDhGroupNumbers() {
    return this.getListAttribute('esp_dh_group_numbers');
  }
  public set espDhGroupNumbers(value: string[]) {
    this._espDhGroupNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get espDhGroupNumbersInput() {
    return this._espDhGroupNumbers;
  }

  // esp_encryption_algorithms - computed: false, optional: false, required: true
  private _espEncryptionAlgorithms?: string[]; 
  public get espEncryptionAlgorithms() {
    return this.getListAttribute('esp_encryption_algorithms');
  }
  public set espEncryptionAlgorithms(value: string[]) {
    this._espEncryptionAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get espEncryptionAlgorithmsInput() {
    return this._espEncryptionAlgorithms;
  }

  // esp_integrity_algorithms - computed: false, optional: false, required: true
  private _espIntegrityAlgorithms?: string[]; 
  public get espIntegrityAlgorithms() {
    return this.getListAttribute('esp_integrity_algorithms');
  }
  public set espIntegrityAlgorithms(value: string[]) {
    this._espIntegrityAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get espIntegrityAlgorithmsInput() {
    return this._espIntegrityAlgorithms;
  }

  // ike_dh_group_numbers - computed: false, optional: false, required: true
  private _ikeDhGroupNumbers?: string[]; 
  public get ikeDhGroupNumbers() {
    return this.getListAttribute('ike_dh_group_numbers');
  }
  public set ikeDhGroupNumbers(value: string[]) {
    this._ikeDhGroupNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeDhGroupNumbersInput() {
    return this._ikeDhGroupNumbers;
  }

  // ike_encryption_algorithms - computed: false, optional: false, required: true
  private _ikeEncryptionAlgorithms?: string[]; 
  public get ikeEncryptionAlgorithms() {
    return this.getListAttribute('ike_encryption_algorithms');
  }
  public set ikeEncryptionAlgorithms(value: string[]) {
    this._ikeEncryptionAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEncryptionAlgorithmsInput() {
    return this._ikeEncryptionAlgorithms;
  }

  // ike_integrity_algorithms - computed: false, optional: false, required: true
  private _ikeIntegrityAlgorithms?: string[]; 
  public get ikeIntegrityAlgorithms() {
    return this.getListAttribute('ike_integrity_algorithms');
  }
  public set ikeIntegrityAlgorithms(value: string[]) {
    this._ikeIntegrityAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIntegrityAlgorithmsInput() {
    return this._ikeIntegrityAlgorithms;
  }

  // ike_version - computed: false, optional: false, required: true
  private _ikeVersion?: string; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string) {
    this._ikeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // initiator - computed: false, optional: false, required: true
  private _initiator?: boolean | cdktf.IResolvable; 
  public get initiator() {
    return this.getBooleanAttribute('initiator');
  }
  public set initiator(value: boolean | cdktf.IResolvable) {
    this._initiator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorInput() {
    return this._initiator;
  }

  // remote_auth_type - computed: false, optional: false, required: true
  private _remoteAuthType?: string; 
  public get remoteAuthType() {
    return this.getStringAttribute('remote_auth_type');
  }
  public set remoteAuthType(value: string) {
    this._remoteAuthType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthTypeInput() {
    return this._remoteAuthType;
  }

  // remote_auth_value - computed: false, optional: false, required: true
  private _remoteAuthValue?: string; 
  public get remoteAuthValue() {
    return this.getStringAttribute('remote_auth_value');
  }
  public set remoteAuthValue(value: string) {
    this._remoteAuthValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthValueInput() {
    return this._remoteAuthValue;
  }
}

export class ConnectorIpsecEndpointAdvancedOptionsList extends cdktf.ComplexList {
  public internalValue? : ConnectorIpsecEndpointAdvancedOptions[] | cdktf.IResolvable

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
  public get(index: number): ConnectorIpsecEndpointAdvancedOptionsOutputReference {
    return new ConnectorIpsecEndpointAdvancedOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorIpsecEndpoint {
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#billing_tag_ids ConnectorIpsec#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * The IP address of the customer gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#customer_gateway_ip ConnectorIpsec#customer_gateway_ip}
  */
  readonly customerGatewayIp: string;
  /**
  * The type of `customer_gateway_ip`. It could be either `STATIC` or `DYNAMIC`. Default value is `STATIC`. When it's `DYNAMIC`, `customer_gateway_ip` should be set to `0.0.0.0`. `remote_auth_type` in `advanced_options` is required as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#customer_ip_type ConnectorIpsec#customer_ip_type}
  */
  readonly customerIpType?: string;
  /**
  * Disable this if all tunnels will not be configured or enabled on the on-premise device. If it's set to `false`, connector health will be shown as `UP` if at least one of the tunnels is `UP`. If enabled, all tunnels need to be `UP` for the connectorhealth to be shown as `UP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#enable_tunnel_redundancy ConnectorIpsec#enable_tunnel_redundancy}
  */
  readonly enableTunnelRedundancy?: boolean | cdktf.IResolvable;
  /**
  * The value could be `ACTIVE` or `STANDBY`. A endpoint in `STANDBY` mode will not be used for traffic unless all other endpoints for the connector are down. There can only be one endpoint in `STANDBY` mode per connector and there must be at least one endpoint that isn't in `STANDBY` mode per connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#ha_mode ConnectorIpsec#ha_mode}
  */
  readonly haMode?: string;
  /**
  * The name of the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#name ConnectorIpsec#name}
  */
  readonly name: string;
  /**
  * An array of preshared keys, one per tunnel. The value needs to be provided explictly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#preshared_keys ConnectorIpsec#preshared_keys}
  */
  readonly presharedKeys: string[];
  /**
  * advanced_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#advanced_options ConnectorIpsec#advanced_options}
  */
  readonly advancedOptions?: ConnectorIpsecEndpointAdvancedOptions[] | cdktf.IResolvable;
}

export function connectorIpsecEndpointToTerraform(struct?: ConnectorIpsecEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.billingTagIds),
    customer_gateway_ip: cdktf.stringToTerraform(struct!.customerGatewayIp),
    customer_ip_type: cdktf.stringToTerraform(struct!.customerIpType),
    enable_tunnel_redundancy: cdktf.booleanToTerraform(struct!.enableTunnelRedundancy),
    ha_mode: cdktf.stringToTerraform(struct!.haMode),
    name: cdktf.stringToTerraform(struct!.name),
    preshared_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.presharedKeys),
    advanced_options: cdktf.listMapper(connectorIpsecEndpointAdvancedOptionsToTerraform, true)(struct!.advancedOptions),
  }
}


export function connectorIpsecEndpointToHclTerraform(struct?: ConnectorIpsecEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    billing_tag_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.billingTagIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    customer_gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.customerGatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_ip_type: {
      value: cdktf.stringToHclTerraform(struct!.customerIpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_tunnel_redundancy: {
      value: cdktf.booleanToHclTerraform(struct!.enableTunnelRedundancy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ha_mode: {
      value: cdktf.stringToHclTerraform(struct!.haMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preshared_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.presharedKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_options: {
      value: cdktf.listMapperHcl(connectorIpsecEndpointAdvancedOptionsToHclTerraform, true)(struct!.advancedOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorIpsecEndpointAdvancedOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorIpsecEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorIpsecEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._billingTagIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingTagIds = this._billingTagIds;
    }
    if (this._customerGatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerGatewayIp = this._customerGatewayIp;
    }
    if (this._customerIpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerIpType = this._customerIpType;
    }
    if (this._enableTunnelRedundancy !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTunnelRedundancy = this._enableTunnelRedundancy;
    }
    if (this._haMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.haMode = this._haMode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presharedKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.presharedKeys = this._presharedKeys;
    }
    if (this._advancedOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedOptions = this._advancedOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorIpsecEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._billingTagIds = undefined;
      this._customerGatewayIp = undefined;
      this._customerIpType = undefined;
      this._enableTunnelRedundancy = undefined;
      this._haMode = undefined;
      this._name = undefined;
      this._presharedKeys = undefined;
      this._advancedOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._billingTagIds = value.billingTagIds;
      this._customerGatewayIp = value.customerGatewayIp;
      this._customerIpType = value.customerIpType;
      this._enableTunnelRedundancy = value.enableTunnelRedundancy;
      this._haMode = value.haMode;
      this._name = value.name;
      this._presharedKeys = value.presharedKeys;
      this._advancedOptions.internalValue = value.advancedOptions;
    }
  }

  // billing_tag_ids - computed: false, optional: true, required: false
  private _billingTagIds?: number[]; 
  public get billingTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('billing_tag_ids')));
  }
  public set billingTagIds(value: number[]) {
    this._billingTagIds = value;
  }
  public resetBillingTagIds() {
    this._billingTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTagIdsInput() {
    return this._billingTagIds;
  }

  // customer_gateway_ip - computed: false, optional: false, required: true
  private _customerGatewayIp?: string; 
  public get customerGatewayIp() {
    return this.getStringAttribute('customer_gateway_ip');
  }
  public set customerGatewayIp(value: string) {
    this._customerGatewayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayIpInput() {
    return this._customerGatewayIp;
  }

  // customer_ip_type - computed: false, optional: true, required: false
  private _customerIpType?: string; 
  public get customerIpType() {
    return this.getStringAttribute('customer_ip_type');
  }
  public set customerIpType(value: string) {
    this._customerIpType = value;
  }
  public resetCustomerIpType() {
    this._customerIpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIpTypeInput() {
    return this._customerIpType;
  }

  // enable_tunnel_redundancy - computed: false, optional: true, required: false
  private _enableTunnelRedundancy?: boolean | cdktf.IResolvable; 
  public get enableTunnelRedundancy() {
    return this.getBooleanAttribute('enable_tunnel_redundancy');
  }
  public set enableTunnelRedundancy(value: boolean | cdktf.IResolvable) {
    this._enableTunnelRedundancy = value;
  }
  public resetEnableTunnelRedundancy() {
    this._enableTunnelRedundancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTunnelRedundancyInput() {
    return this._enableTunnelRedundancy;
  }

  // ha_mode - computed: false, optional: true, required: false
  private _haMode?: string; 
  public get haMode() {
    return this.getStringAttribute('ha_mode');
  }
  public set haMode(value: string) {
    this._haMode = value;
  }
  public resetHaMode() {
    this._haMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haModeInput() {
    return this._haMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // preshared_keys - computed: false, optional: false, required: true
  private _presharedKeys?: string[]; 
  public get presharedKeys() {
    return this.getListAttribute('preshared_keys');
  }
  public set presharedKeys(value: string[]) {
    this._presharedKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get presharedKeysInput() {
    return this._presharedKeys;
  }

  // advanced_options - computed: false, optional: true, required: false
  private _advancedOptions = new ConnectorIpsecEndpointAdvancedOptionsList(this, "advanced_options", false);
  public get advancedOptions() {
    return this._advancedOptions;
  }
  public putAdvancedOptions(value: ConnectorIpsecEndpointAdvancedOptions[] | cdktf.IResolvable) {
    this._advancedOptions.internalValue = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions.internalValue;
  }
}

export class ConnectorIpsecEndpointList extends cdktf.ComplexList {
  public internalValue? : ConnectorIpsecEndpoint[] | cdktf.IResolvable

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
  public get(index: number): ConnectorIpsecEndpointOutputReference {
    return new ConnectorIpsecEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorIpsecPolicyOptions {
  /**
  * CXP Prefix List IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#cxp_prefix_list_ids ConnectorIpsec#cxp_prefix_list_ids}
  */
  readonly cxpPrefixListIds: number[];
  /**
  * On Prem Prefix List IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#on_prem_prefix_list_ids ConnectorIpsec#on_prem_prefix_list_ids}
  */
  readonly onPremPrefixListIds: number[];
}

export function connectorIpsecPolicyOptionsToTerraform(struct?: ConnectorIpsecPolicyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cxp_prefix_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.cxpPrefixListIds),
    on_prem_prefix_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.onPremPrefixListIds),
  }
}


export function connectorIpsecPolicyOptionsToHclTerraform(struct?: ConnectorIpsecPolicyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cxp_prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.cxpPrefixListIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    on_prem_prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.onPremPrefixListIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorIpsecPolicyOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorIpsecPolicyOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cxpPrefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cxpPrefixListIds = this._cxpPrefixListIds;
    }
    if (this._onPremPrefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremPrefixListIds = this._onPremPrefixListIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorIpsecPolicyOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cxpPrefixListIds = undefined;
      this._onPremPrefixListIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cxpPrefixListIds = value.cxpPrefixListIds;
      this._onPremPrefixListIds = value.onPremPrefixListIds;
    }
  }

  // cxp_prefix_list_ids - computed: false, optional: false, required: true
  private _cxpPrefixListIds?: number[]; 
  public get cxpPrefixListIds() {
    return this.getNumberListAttribute('cxp_prefix_list_ids');
  }
  public set cxpPrefixListIds(value: number[]) {
    this._cxpPrefixListIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpPrefixListIdsInput() {
    return this._cxpPrefixListIds;
  }

  // on_prem_prefix_list_ids - computed: false, optional: false, required: true
  private _onPremPrefixListIds?: number[]; 
  public get onPremPrefixListIds() {
    return this.getNumberListAttribute('on_prem_prefix_list_ids');
  }
  public set onPremPrefixListIds(value: number[]) {
    this._onPremPrefixListIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremPrefixListIdsInput() {
    return this._onPremPrefixListIds;
  }
}

export class ConnectorIpsecPolicyOptionsList extends cdktf.ComplexList {
  public internalValue? : ConnectorIpsecPolicyOptions[] | cdktf.IResolvable

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
  public get(index: number): ConnectorIpsecPolicyOptionsOutputReference {
    return new ConnectorIpsecPolicyOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorIpsecRoutingOptions {
  /**
  * The method to determine the availability of the routes. The value could be `IKE_STATUS` or `IPSEC_INTERFACE_PING`. Default value is `IPSEC_INTERFACE_PING`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#availability ConnectorIpsec#availability}
  */
  readonly availability?: string;
  /**
  *  BGP MD5 auth key for Alkira to authenticate Alkira CXP (On Premise Gateway).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#bgp_auth_key ConnectorIpsec#bgp_auth_key}
  */
  readonly bgpAuthKey?: string;
  /**
  * The customer gateway ASN to use for dynamic route propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#customer_gateway_asn ConnectorIpsec#customer_gateway_asn}
  */
  readonly customerGatewayAsn?: string;
  /**
  * The ID of prefix list to use for static route propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#prefix_list_id ConnectorIpsec#prefix_list_id}
  */
  readonly prefixListId?: number;
  /**
  * Routing type, one of `STATIC`, `DYNAMIC`, or `BOTH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#type ConnectorIpsec#type}
  */
  readonly type: string;
}

export function connectorIpsecRoutingOptionsToTerraform(struct?: ConnectorIpsecRoutingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    bgp_auth_key: cdktf.stringToTerraform(struct!.bgpAuthKey),
    customer_gateway_asn: cdktf.stringToTerraform(struct!.customerGatewayAsn),
    prefix_list_id: cdktf.numberToTerraform(struct!.prefixListId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function connectorIpsecRoutingOptionsToHclTerraform(struct?: ConnectorIpsecRoutingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktf.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_auth_key: {
      value: cdktf.stringToHclTerraform(struct!.bgpAuthKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_gateway_asn: {
      value: cdktf.stringToHclTerraform(struct!.customerGatewayAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_id: {
      value: cdktf.numberToHclTerraform(struct!.prefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorIpsecRoutingOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorIpsecRoutingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._bgpAuthKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAuthKey = this._bgpAuthKey;
    }
    if (this._customerGatewayAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerGatewayAsn = this._customerGatewayAsn;
    }
    if (this._prefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListId = this._prefixListId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorIpsecRoutingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availability = undefined;
      this._bgpAuthKey = undefined;
      this._customerGatewayAsn = undefined;
      this._prefixListId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availability = value.availability;
      this._bgpAuthKey = value.bgpAuthKey;
      this._customerGatewayAsn = value.customerGatewayAsn;
      this._prefixListId = value.prefixListId;
      this._type = value.type;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // bgp_auth_key - computed: false, optional: true, required: false
  private _bgpAuthKey?: string; 
  public get bgpAuthKey() {
    return this.getStringAttribute('bgp_auth_key');
  }
  public set bgpAuthKey(value: string) {
    this._bgpAuthKey = value;
  }
  public resetBgpAuthKey() {
    this._bgpAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAuthKeyInput() {
    return this._bgpAuthKey;
  }

  // customer_gateway_asn - computed: false, optional: true, required: false
  private _customerGatewayAsn?: string; 
  public get customerGatewayAsn() {
    return this.getStringAttribute('customer_gateway_asn');
  }
  public set customerGatewayAsn(value: string) {
    this._customerGatewayAsn = value;
  }
  public resetCustomerGatewayAsn() {
    this._customerGatewayAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayAsnInput() {
    return this._customerGatewayAsn;
  }

  // prefix_list_id - computed: false, optional: true, required: false
  private _prefixListId?: number; 
  public get prefixListId() {
    return this.getNumberAttribute('prefix_list_id');
  }
  public set prefixListId(value: number) {
    this._prefixListId = value;
  }
  public resetPrefixListId() {
    this._prefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdInput() {
    return this._prefixListId;
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
}

export class ConnectorIpsecRoutingOptionsList extends cdktf.ComplexList {
  public internalValue? : ConnectorIpsecRoutingOptions[] | cdktf.IResolvable

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
  public get(index: number): ConnectorIpsecRoutingOptionsOutputReference {
    return new ConnectorIpsecRoutingOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorIpsecSegmentOptions {
  /**
  * Enable or disable access to the internet when traffic arrives via this connector. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#advertise_default_route ConnectorIpsec#advertise_default_route}
  */
  readonly advertiseDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Additional options for each segment associated with the connector. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#advertise_on_prem_routes ConnectorIpsec#advertise_on_prem_routes}
  */
  readonly advertiseOnPremRoutes?: boolean | cdktf.IResolvable;
  /**
  * Segment Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#name ConnectorIpsec#name}
  */
  readonly name: string;
}

export function connectorIpsecSegmentOptionsToTerraform(struct?: ConnectorIpsecSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_default_route: cdktf.booleanToTerraform(struct!.advertiseDefaultRoute),
    advertise_on_prem_routes: cdktf.booleanToTerraform(struct!.advertiseOnPremRoutes),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function connectorIpsecSegmentOptionsToHclTerraform(struct?: ConnectorIpsecSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_on_prem_routes: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseOnPremRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorIpsecSegmentOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorIpsecSegmentOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseDefaultRoute = this._advertiseDefaultRoute;
    }
    if (this._advertiseOnPremRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnPremRoutes = this._advertiseOnPremRoutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorIpsecSegmentOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseDefaultRoute = undefined;
      this._advertiseOnPremRoutes = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseDefaultRoute = value.advertiseDefaultRoute;
      this._advertiseOnPremRoutes = value.advertiseOnPremRoutes;
      this._name = value.name;
    }
  }

  // advertise_default_route - computed: false, optional: true, required: false
  private _advertiseDefaultRoute?: boolean | cdktf.IResolvable; 
  public get advertiseDefaultRoute() {
    return this.getBooleanAttribute('advertise_default_route');
  }
  public set advertiseDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._advertiseDefaultRoute = value;
  }
  public resetAdvertiseDefaultRoute() {
    this._advertiseDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseDefaultRouteInput() {
    return this._advertiseDefaultRoute;
  }

  // advertise_on_prem_routes - computed: false, optional: true, required: false
  private _advertiseOnPremRoutes?: boolean | cdktf.IResolvable; 
  public get advertiseOnPremRoutes() {
    return this.getBooleanAttribute('advertise_on_prem_routes');
  }
  public set advertiseOnPremRoutes(value: boolean | cdktf.IResolvable) {
    this._advertiseOnPremRoutes = value;
  }
  public resetAdvertiseOnPremRoutes() {
    this._advertiseOnPremRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnPremRoutesInput() {
    return this._advertiseOnPremRoutes;
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
}

export class ConnectorIpsecSegmentOptionsList extends cdktf.ComplexList {
  public internalValue? : ConnectorIpsecSegmentOptions[] | cdktf.IResolvable

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
  public get(index: number): ConnectorIpsecSegmentOptionsOutputReference {
    return new ConnectorIpsecSegmentOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec alkira_connector_ipsec}
*/
export class ConnectorIpsec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_ipsec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorIpsec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorIpsec to import
  * @param importFromId The id of the existing ConnectorIpsec that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorIpsec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_ipsec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec alkira_connector_ipsec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorIpsecConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorIpsecConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_ipsec',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxp = config.cxp;
    this._description = config.description;
    this._enabled = config.enabled;
    this._group = config.group;
    this._id = config.id;
    this._name = config.name;
    this._scaleGroupId = config.scaleGroupId;
    this._segmentId = config.segmentId;
    this._size = config.size;
    this._vpnMode = config.vpnMode;
    this._endpoint.internalValue = config.endpoint;
    this._policyOptions.internalValue = config.policyOptions;
    this._routingOptions.internalValue = config.routingOptions;
    this._segmentOptions.internalValue = config.segmentOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cxp - computed: false, optional: false, required: true
  private _cxp?: string; 
  public get cxp() {
    return this.getStringAttribute('cxp');
  }
  public set cxp(value: string) {
    this._cxp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpInput() {
    return this._cxp;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // implicit_group_id - computed: true, optional: false, required: false
  public get implicitGroupId() {
    return this.getNumberAttribute('implicit_group_id');
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

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // scale_group_id - computed: false, optional: true, required: false
  private _scaleGroupId?: string; 
  public get scaleGroupId() {
    return this.getStringAttribute('scale_group_id');
  }
  public set scaleGroupId(value: string) {
    this._scaleGroupId = value;
  }
  public resetScaleGroupId() {
    this._scaleGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleGroupIdInput() {
    return this._scaleGroupId;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // vpn_mode - computed: false, optional: false, required: true
  private _vpnMode?: string; 
  public get vpnMode() {
    return this.getStringAttribute('vpn_mode');
  }
  public set vpnMode(value: string) {
    this._vpnMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnModeInput() {
    return this._vpnMode;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint = new ConnectorIpsecEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: ConnectorIpsecEndpoint[] | cdktf.IResolvable) {
    this._endpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // policy_options - computed: false, optional: true, required: false
  private _policyOptions = new ConnectorIpsecPolicyOptionsList(this, "policy_options", true);
  public get policyOptions() {
    return this._policyOptions;
  }
  public putPolicyOptions(value: ConnectorIpsecPolicyOptions[] | cdktf.IResolvable) {
    this._policyOptions.internalValue = value;
  }
  public resetPolicyOptions() {
    this._policyOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOptionsInput() {
    return this._policyOptions.internalValue;
  }

  // routing_options - computed: false, optional: true, required: false
  private _routingOptions = new ConnectorIpsecRoutingOptionsList(this, "routing_options", true);
  public get routingOptions() {
    return this._routingOptions;
  }
  public putRoutingOptions(value: ConnectorIpsecRoutingOptions[] | cdktf.IResolvable) {
    this._routingOptions.internalValue = value;
  }
  public resetRoutingOptions() {
    this._routingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingOptionsInput() {
    return this._routingOptions.internalValue;
  }

  // segment_options - computed: false, optional: true, required: false
  private _segmentOptions = new ConnectorIpsecSegmentOptionsList(this, "segment_options", true);
  public get segmentOptions() {
    return this._segmentOptions;
  }
  public putSegmentOptions(value: ConnectorIpsecSegmentOptions[] | cdktf.IResolvable) {
    this._segmentOptions.internalValue = value;
  }
  public resetSegmentOptions() {
    this._segmentOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentOptionsInput() {
    return this._segmentOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scale_group_id: cdktf.stringToTerraform(this._scaleGroupId),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      size: cdktf.stringToTerraform(this._size),
      vpn_mode: cdktf.stringToTerraform(this._vpnMode),
      endpoint: cdktf.listMapper(connectorIpsecEndpointToTerraform, true)(this._endpoint.internalValue),
      policy_options: cdktf.listMapper(connectorIpsecPolicyOptionsToTerraform, true)(this._policyOptions.internalValue),
      routing_options: cdktf.listMapper(connectorIpsecRoutingOptionsToTerraform, true)(this._routingOptions.internalValue),
      segment_options: cdktf.listMapper(connectorIpsecSegmentOptionsToTerraform, true)(this._segmentOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cxp: {
        value: cdktf.stringToHclTerraform(this._cxp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_group_id: {
        value: cdktf.stringToHclTerraform(this._scaleGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_id: {
        value: cdktf.stringToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_mode: {
        value: cdktf.stringToHclTerraform(this._vpnMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.listMapperHcl(connectorIpsecEndpointToHclTerraform, true)(this._endpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectorIpsecEndpointList",
      },
      policy_options: {
        value: cdktf.listMapperHcl(connectorIpsecPolicyOptionsToHclTerraform, true)(this._policyOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorIpsecPolicyOptionsList",
      },
      routing_options: {
        value: cdktf.listMapperHcl(connectorIpsecRoutingOptionsToHclTerraform, true)(this._routingOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorIpsecRoutingOptionsList",
      },
      segment_options: {
        value: cdktf.listMapperHcl(connectorIpsecSegmentOptionsToHclTerraform, true)(this._segmentOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorIpsecSegmentOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
