// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoTrustsecFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the TrustSec Network Access Device ID, should be same as mentioned in the Identity Services Engine (upto 32 char)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#credentials_id CiscoTrustsecFeatureTemplate#credentials_id}
  */
  readonly credentialsId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#credentials_id_variable CiscoTrustsecFeatureTemplate#credentials_id_variable}
  */
  readonly credentialsIdVariable?: string;
  /**
  * Set the password for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#credentials_password CiscoTrustsecFeatureTemplate#credentials_password}
  */
  readonly credentialsPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#credentials_password_variable CiscoTrustsecFeatureTemplate#credentials_password_variable}
  */
  readonly credentialsPasswordVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#description CiscoTrustsecFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * Configure Local device security group <2..65519>
  *   - Range: `2`-`65519`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#device_sgt CiscoTrustsecFeatureTemplate#device_sgt}
  */
  readonly deviceSgt?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#device_sgt_variable CiscoTrustsecFeatureTemplate#device_sgt_variable}
  */
  readonly deviceSgtVariable?: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#device_types CiscoTrustsecFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Enable Role-based Access Control enforcement
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#enable_enforcement CiscoTrustsecFeatureTemplate#enable_enforcement}
  */
  readonly enableEnforcement?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#enable_enforcement_variable CiscoTrustsecFeatureTemplate#enable_enforcement_variable}
  */
  readonly enableEnforcementVariable?: string;
  /**
  * Enable CTS SXP support
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#enable_sxp CiscoTrustsecFeatureTemplate#enable_sxp}
  */
  readonly enableSxp?: boolean | cdktf.IResolvable;
  /**
  * Configure Maximum allowed hold-time for listener in seconds <1..65534>
  *   - Range: `1`-`65534`
  *   - Default value: `180`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#maximum_listener_hold_time CiscoTrustsecFeatureTemplate#maximum_listener_hold_time}
  */
  readonly maximumListenerHoldTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#maximum_listener_hold_time_variable CiscoTrustsecFeatureTemplate#maximum_listener_hold_time_variable}
  */
  readonly maximumListenerHoldTimeVariable?: string;
  /**
  * Configure Minimum allowed hold-time for listener in seconds <1..65534>
  *   - Range: `1`-`65534`
  *   - Default value: `90`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#minimum_listener_hold_time CiscoTrustsecFeatureTemplate#minimum_listener_hold_time}
  */
  readonly minimumListenerHoldTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#minimum_listener_hold_time_variable CiscoTrustsecFeatureTemplate#minimum_listener_hold_time_variable}
  */
  readonly minimumListenerHoldTimeVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#name CiscoTrustsecFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Configure Speaker hold-time in seconds <1..65534>
  *   - Range: `1`-`65534`
  *   - Default value: `120`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#speaker_hold_time CiscoTrustsecFeatureTemplate#speaker_hold_time}
  */
  readonly speakerHoldTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#speaker_hold_time_variable CiscoTrustsecFeatureTemplate#speaker_hold_time_variable}
  */
  readonly speakerHoldTimeVariable?: string;
  /**
  * Configure SXP Connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_connections CiscoTrustsecFeatureTemplate#sxp_connections}
  */
  readonly sxpConnections?: CiscoTrustsecFeatureTemplateSxpConnections[] | cdktf.IResolvable;
  /**
  * Configure SXP default password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_default_password CiscoTrustsecFeatureTemplate#sxp_default_password}
  */
  readonly sxpDefaultPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_default_password_variable CiscoTrustsecFeatureTemplate#sxp_default_password_variable}
  */
  readonly sxpDefaultPasswordVariable?: string;
  /**
  * Configure SXP key-chain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_key_chain CiscoTrustsecFeatureTemplate#sxp_key_chain}
  */
  readonly sxpKeyChain?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_key_chain_variable CiscoTrustsecFeatureTemplate#sxp_key_chain_variable}
  */
  readonly sxpKeyChainVariable?: string;
  /**
  * Enables logging for IP-to-SGT binding changes
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_log_binding_changes CiscoTrustsecFeatureTemplate#sxp_log_binding_changes}
  */
  readonly sxpLogBindingChanges?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_log_binding_changes_variable CiscoTrustsecFeatureTemplate#sxp_log_binding_changes_variable}
  */
  readonly sxpLogBindingChangesVariable?: string;
  /**
  * Configure SXP Node ID <IP, 8 char string or interface name>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_node_id CiscoTrustsecFeatureTemplate#sxp_node_id}
  */
  readonly sxpNodeId?: string;
  /**
  * Define SXP Node ID type <IP, 8 char string or interface name>
  *   - Choices: `ip`, `interface-name`, `8-char-hex-string`
  *   - Default value: `ip`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_node_id_type CiscoTrustsecFeatureTemplate#sxp_node_id_type}
  */
  readonly sxpNodeIdType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_node_id_variable CiscoTrustsecFeatureTemplate#sxp_node_id_variable}
  */
  readonly sxpNodeIdVariable?: string;
  /**
  * Configure the SXP reconciliation period in seconds <0..64000>
  *   - Range: `0`-`64000`
  *   - Default value: `120`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_reconciliation_period CiscoTrustsecFeatureTemplate#sxp_reconciliation_period}
  */
  readonly sxpReconciliationPeriod?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_reconciliation_period_variable CiscoTrustsecFeatureTemplate#sxp_reconciliation_period_variable}
  */
  readonly sxpReconciliationPeriodVariable?: string;
  /**
  * Configure Retry period for SXP connection in seconds <0..64000>
  *   - Range: `0`-`64000`
  *   - Default value: `120`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_retry_period CiscoTrustsecFeatureTemplate#sxp_retry_period}
  */
  readonly sxpRetryPeriod?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_retry_period_variable CiscoTrustsecFeatureTemplate#sxp_retry_period_variable}
  */
  readonly sxpRetryPeriodVariable?: string;
  /**
  * SXP Source IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_source_ip CiscoTrustsecFeatureTemplate#sxp_source_ip}
  */
  readonly sxpSourceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#sxp_source_ip_variable CiscoTrustsecFeatureTemplate#sxp_source_ip_variable}
  */
  readonly sxpSourceIpVariable?: string;
}
export interface CiscoTrustsecFeatureTemplateSxpConnections {
  /**
  * Configure Connection Maximum hold time <0..65535>
  *   - Range: `0`-`65535`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#maximum_hold_time CiscoTrustsecFeatureTemplate#maximum_hold_time}
  */
  readonly maximumHoldTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#maximum_hold_time_variable CiscoTrustsecFeatureTemplate#maximum_hold_time_variable}
  */
  readonly maximumHoldTimeVariable?: string;
  /**
  * Configure Connection Minimum hold time <0..65535>
  *   - Range: `0`-`65535`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#minimum_hold_time CiscoTrustsecFeatureTemplate#minimum_hold_time}
  */
  readonly minimumHoldTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#minimum_hold_time_variable CiscoTrustsecFeatureTemplate#minimum_hold_time_variable}
  */
  readonly minimumHoldTimeVariable?: string;
  /**
  * Define Mode of connection
  *   - Choices: `local`, `peer`
  *   - Default value: `local`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#mode CiscoTrustsecFeatureTemplate#mode}
  */
  readonly mode?: string;
  /**
  * Define Role of a device <speaker/listener/both>
  *   - Choices: `listener`, `speaker`, `both`
  *   - Default value: `speaker`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#mode_type CiscoTrustsecFeatureTemplate#mode_type}
  */
  readonly modeType?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#optional CiscoTrustsecFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Configure SXP Peer IP address (IPv4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#peer_ip CiscoTrustsecFeatureTemplate#peer_ip}
  */
  readonly peerIp?: string;
  /**
  * Define Preshared Key type
  *   - Choices: `default`, `key-chain`, `none`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#preshared_key CiscoTrustsecFeatureTemplate#preshared_key}
  */
  readonly presharedKey?: string;
  /**
  * Configure SXP Source IP address (IPv4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#source_ip CiscoTrustsecFeatureTemplate#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#source_ip_variable CiscoTrustsecFeatureTemplate#source_ip_variable}
  */
  readonly sourceIpVariable?: string;
  /**
  * Configure Connection VPN (VRF) ID
  *   - Range: `0`-`65527`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#vpn_id CiscoTrustsecFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#vpn_id_variable CiscoTrustsecFeatureTemplate#vpn_id_variable}
  */
  readonly vpnIdVariable?: string;
}

export function ciscoTrustsecFeatureTemplateSxpConnectionsToTerraform(struct?: CiscoTrustsecFeatureTemplateSxpConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_hold_time: cdktf.numberToTerraform(struct!.maximumHoldTime),
    maximum_hold_time_variable: cdktf.stringToTerraform(struct!.maximumHoldTimeVariable),
    minimum_hold_time: cdktf.numberToTerraform(struct!.minimumHoldTime),
    minimum_hold_time_variable: cdktf.stringToTerraform(struct!.minimumHoldTimeVariable),
    mode: cdktf.stringToTerraform(struct!.mode),
    mode_type: cdktf.stringToTerraform(struct!.modeType),
    optional: cdktf.booleanToTerraform(struct!.optional),
    peer_ip: cdktf.stringToTerraform(struct!.peerIp),
    preshared_key: cdktf.stringToTerraform(struct!.presharedKey),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_ip_variable: cdktf.stringToTerraform(struct!.sourceIpVariable),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
    vpn_id_variable: cdktf.stringToTerraform(struct!.vpnIdVariable),
  }
}


export function ciscoTrustsecFeatureTemplateSxpConnectionsToHclTerraform(struct?: CiscoTrustsecFeatureTemplateSxpConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_hold_time: {
      value: cdktf.numberToHclTerraform(struct!.maximumHoldTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_hold_time_variable: {
      value: cdktf.stringToHclTerraform(struct!.maximumHoldTimeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_hold_time: {
      value: cdktf.numberToHclTerraform(struct!.minimumHoldTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_hold_time_variable: {
      value: cdktf.stringToHclTerraform(struct!.minimumHoldTimeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode_type: {
      value: cdktf.stringToHclTerraform(struct!.modeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    peer_ip: {
      value: cdktf.stringToHclTerraform(struct!.peerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preshared_key: {
      value: cdktf.stringToHclTerraform(struct!.presharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.vpnIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoTrustsecFeatureTemplateSxpConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoTrustsecFeatureTemplateSxpConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumHoldTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumHoldTime = this._maximumHoldTime;
    }
    if (this._maximumHoldTimeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumHoldTimeVariable = this._maximumHoldTimeVariable;
    }
    if (this._minimumHoldTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumHoldTime = this._minimumHoldTime;
    }
    if (this._minimumHoldTimeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumHoldTimeVariable = this._minimumHoldTimeVariable;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._modeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeType = this._modeType;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._peerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIp = this._peerIp;
    }
    if (this._presharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.presharedKey = this._presharedKey;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourceIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpVariable = this._sourceIpVariable;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    if (this._vpnIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIdVariable = this._vpnIdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoTrustsecFeatureTemplateSxpConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumHoldTime = undefined;
      this._maximumHoldTimeVariable = undefined;
      this._minimumHoldTime = undefined;
      this._minimumHoldTimeVariable = undefined;
      this._mode = undefined;
      this._modeType = undefined;
      this._optional = undefined;
      this._peerIp = undefined;
      this._presharedKey = undefined;
      this._sourceIp = undefined;
      this._sourceIpVariable = undefined;
      this._vpnId = undefined;
      this._vpnIdVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumHoldTime = value.maximumHoldTime;
      this._maximumHoldTimeVariable = value.maximumHoldTimeVariable;
      this._minimumHoldTime = value.minimumHoldTime;
      this._minimumHoldTimeVariable = value.minimumHoldTimeVariable;
      this._mode = value.mode;
      this._modeType = value.modeType;
      this._optional = value.optional;
      this._peerIp = value.peerIp;
      this._presharedKey = value.presharedKey;
      this._sourceIp = value.sourceIp;
      this._sourceIpVariable = value.sourceIpVariable;
      this._vpnId = value.vpnId;
      this._vpnIdVariable = value.vpnIdVariable;
    }
  }

  // maximum_hold_time - computed: false, optional: true, required: false
  private _maximumHoldTime?: number; 
  public get maximumHoldTime() {
    return this.getNumberAttribute('maximum_hold_time');
  }
  public set maximumHoldTime(value: number) {
    this._maximumHoldTime = value;
  }
  public resetMaximumHoldTime() {
    this._maximumHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumHoldTimeInput() {
    return this._maximumHoldTime;
  }

  // maximum_hold_time_variable - computed: false, optional: true, required: false
  private _maximumHoldTimeVariable?: string; 
  public get maximumHoldTimeVariable() {
    return this.getStringAttribute('maximum_hold_time_variable');
  }
  public set maximumHoldTimeVariable(value: string) {
    this._maximumHoldTimeVariable = value;
  }
  public resetMaximumHoldTimeVariable() {
    this._maximumHoldTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumHoldTimeVariableInput() {
    return this._maximumHoldTimeVariable;
  }

  // minimum_hold_time - computed: false, optional: true, required: false
  private _minimumHoldTime?: number; 
  public get minimumHoldTime() {
    return this.getNumberAttribute('minimum_hold_time');
  }
  public set minimumHoldTime(value: number) {
    this._minimumHoldTime = value;
  }
  public resetMinimumHoldTime() {
    this._minimumHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumHoldTimeInput() {
    return this._minimumHoldTime;
  }

  // minimum_hold_time_variable - computed: false, optional: true, required: false
  private _minimumHoldTimeVariable?: string; 
  public get minimumHoldTimeVariable() {
    return this.getStringAttribute('minimum_hold_time_variable');
  }
  public set minimumHoldTimeVariable(value: string) {
    this._minimumHoldTimeVariable = value;
  }
  public resetMinimumHoldTimeVariable() {
    this._minimumHoldTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumHoldTimeVariableInput() {
    return this._minimumHoldTimeVariable;
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

  // mode_type - computed: false, optional: true, required: false
  private _modeType?: string; 
  public get modeType() {
    return this.getStringAttribute('mode_type');
  }
  public set modeType(value: string) {
    this._modeType = value;
  }
  public resetModeType() {
    this._modeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeTypeInput() {
    return this._modeType;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // peer_ip - computed: false, optional: true, required: false
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  public resetPeerIp() {
    this._peerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
  }

  // preshared_key - computed: false, optional: true, required: false
  private _presharedKey?: string; 
  public get presharedKey() {
    return this.getStringAttribute('preshared_key');
  }
  public set presharedKey(value: string) {
    this._presharedKey = value;
  }
  public resetPresharedKey() {
    this._presharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presharedKeyInput() {
    return this._presharedKey;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip_variable - computed: false, optional: true, required: false
  private _sourceIpVariable?: string; 
  public get sourceIpVariable() {
    return this.getStringAttribute('source_ip_variable');
  }
  public set sourceIpVariable(value: string) {
    this._sourceIpVariable = value;
  }
  public resetSourceIpVariable() {
    this._sourceIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpVariableInput() {
    return this._sourceIpVariable;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // vpn_id_variable - computed: false, optional: true, required: false
  private _vpnIdVariable?: string; 
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
  public set vpnIdVariable(value: string) {
    this._vpnIdVariable = value;
  }
  public resetVpnIdVariable() {
    this._vpnIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdVariableInput() {
    return this._vpnIdVariable;
  }
}

export class CiscoTrustsecFeatureTemplateSxpConnectionsList extends cdktf.ComplexList {
  public internalValue? : CiscoTrustsecFeatureTemplateSxpConnections[] | cdktf.IResolvable

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
  public get(index: number): CiscoTrustsecFeatureTemplateSxpConnectionsOutputReference {
    return new CiscoTrustsecFeatureTemplateSxpConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template sdwan_cisco_trustsec_feature_template}
*/
export class CiscoTrustsecFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_trustsec_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoTrustsecFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoTrustsecFeatureTemplate to import
  * @param importFromId The id of the existing CiscoTrustsecFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoTrustsecFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_trustsec_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_trustsec_feature_template sdwan_cisco_trustsec_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoTrustsecFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoTrustsecFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_trustsec_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialsId = config.credentialsId;
    this._credentialsIdVariable = config.credentialsIdVariable;
    this._credentialsPassword = config.credentialsPassword;
    this._credentialsPasswordVariable = config.credentialsPasswordVariable;
    this._description = config.description;
    this._deviceSgt = config.deviceSgt;
    this._deviceSgtVariable = config.deviceSgtVariable;
    this._deviceTypes = config.deviceTypes;
    this._enableEnforcement = config.enableEnforcement;
    this._enableEnforcementVariable = config.enableEnforcementVariable;
    this._enableSxp = config.enableSxp;
    this._maximumListenerHoldTime = config.maximumListenerHoldTime;
    this._maximumListenerHoldTimeVariable = config.maximumListenerHoldTimeVariable;
    this._minimumListenerHoldTime = config.minimumListenerHoldTime;
    this._minimumListenerHoldTimeVariable = config.minimumListenerHoldTimeVariable;
    this._name = config.name;
    this._speakerHoldTime = config.speakerHoldTime;
    this._speakerHoldTimeVariable = config.speakerHoldTimeVariable;
    this._sxpConnections.internalValue = config.sxpConnections;
    this._sxpDefaultPassword = config.sxpDefaultPassword;
    this._sxpDefaultPasswordVariable = config.sxpDefaultPasswordVariable;
    this._sxpKeyChain = config.sxpKeyChain;
    this._sxpKeyChainVariable = config.sxpKeyChainVariable;
    this._sxpLogBindingChanges = config.sxpLogBindingChanges;
    this._sxpLogBindingChangesVariable = config.sxpLogBindingChangesVariable;
    this._sxpNodeId = config.sxpNodeId;
    this._sxpNodeIdType = config.sxpNodeIdType;
    this._sxpNodeIdVariable = config.sxpNodeIdVariable;
    this._sxpReconciliationPeriod = config.sxpReconciliationPeriod;
    this._sxpReconciliationPeriodVariable = config.sxpReconciliationPeriodVariable;
    this._sxpRetryPeriod = config.sxpRetryPeriod;
    this._sxpRetryPeriodVariable = config.sxpRetryPeriodVariable;
    this._sxpSourceIp = config.sxpSourceIp;
    this._sxpSourceIpVariable = config.sxpSourceIpVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials_id - computed: false, optional: true, required: false
  private _credentialsId?: string; 
  public get credentialsId() {
    return this.getStringAttribute('credentials_id');
  }
  public set credentialsId(value: string) {
    this._credentialsId = value;
  }
  public resetCredentialsId() {
    this._credentialsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsIdInput() {
    return this._credentialsId;
  }

  // credentials_id_variable - computed: false, optional: true, required: false
  private _credentialsIdVariable?: string; 
  public get credentialsIdVariable() {
    return this.getStringAttribute('credentials_id_variable');
  }
  public set credentialsIdVariable(value: string) {
    this._credentialsIdVariable = value;
  }
  public resetCredentialsIdVariable() {
    this._credentialsIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsIdVariableInput() {
    return this._credentialsIdVariable;
  }

  // credentials_password - computed: false, optional: true, required: false
  private _credentialsPassword?: string; 
  public get credentialsPassword() {
    return this.getStringAttribute('credentials_password');
  }
  public set credentialsPassword(value: string) {
    this._credentialsPassword = value;
  }
  public resetCredentialsPassword() {
    this._credentialsPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsPasswordInput() {
    return this._credentialsPassword;
  }

  // credentials_password_variable - computed: false, optional: true, required: false
  private _credentialsPasswordVariable?: string; 
  public get credentialsPasswordVariable() {
    return this.getStringAttribute('credentials_password_variable');
  }
  public set credentialsPasswordVariable(value: string) {
    this._credentialsPasswordVariable = value;
  }
  public resetCredentialsPasswordVariable() {
    this._credentialsPasswordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsPasswordVariableInput() {
    return this._credentialsPasswordVariable;
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

  // device_sgt - computed: false, optional: true, required: false
  private _deviceSgt?: number; 
  public get deviceSgt() {
    return this.getNumberAttribute('device_sgt');
  }
  public set deviceSgt(value: number) {
    this._deviceSgt = value;
  }
  public resetDeviceSgt() {
    this._deviceSgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceSgtInput() {
    return this._deviceSgt;
  }

  // device_sgt_variable - computed: false, optional: true, required: false
  private _deviceSgtVariable?: string; 
  public get deviceSgtVariable() {
    return this.getStringAttribute('device_sgt_variable');
  }
  public set deviceSgtVariable(value: string) {
    this._deviceSgtVariable = value;
  }
  public resetDeviceSgtVariable() {
    this._deviceSgtVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceSgtVariableInput() {
    return this._deviceSgtVariable;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // enable_enforcement - computed: false, optional: true, required: false
  private _enableEnforcement?: boolean | cdktf.IResolvable; 
  public get enableEnforcement() {
    return this.getBooleanAttribute('enable_enforcement');
  }
  public set enableEnforcement(value: boolean | cdktf.IResolvable) {
    this._enableEnforcement = value;
  }
  public resetEnableEnforcement() {
    this._enableEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEnforcementInput() {
    return this._enableEnforcement;
  }

  // enable_enforcement_variable - computed: false, optional: true, required: false
  private _enableEnforcementVariable?: string; 
  public get enableEnforcementVariable() {
    return this.getStringAttribute('enable_enforcement_variable');
  }
  public set enableEnforcementVariable(value: string) {
    this._enableEnforcementVariable = value;
  }
  public resetEnableEnforcementVariable() {
    this._enableEnforcementVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEnforcementVariableInput() {
    return this._enableEnforcementVariable;
  }

  // enable_sxp - computed: false, optional: true, required: false
  private _enableSxp?: boolean | cdktf.IResolvable; 
  public get enableSxp() {
    return this.getBooleanAttribute('enable_sxp');
  }
  public set enableSxp(value: boolean | cdktf.IResolvable) {
    this._enableSxp = value;
  }
  public resetEnableSxp() {
    this._enableSxp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSxpInput() {
    return this._enableSxp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maximum_listener_hold_time - computed: false, optional: true, required: false
  private _maximumListenerHoldTime?: number; 
  public get maximumListenerHoldTime() {
    return this.getNumberAttribute('maximum_listener_hold_time');
  }
  public set maximumListenerHoldTime(value: number) {
    this._maximumListenerHoldTime = value;
  }
  public resetMaximumListenerHoldTime() {
    this._maximumListenerHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumListenerHoldTimeInput() {
    return this._maximumListenerHoldTime;
  }

  // maximum_listener_hold_time_variable - computed: false, optional: true, required: false
  private _maximumListenerHoldTimeVariable?: string; 
  public get maximumListenerHoldTimeVariable() {
    return this.getStringAttribute('maximum_listener_hold_time_variable');
  }
  public set maximumListenerHoldTimeVariable(value: string) {
    this._maximumListenerHoldTimeVariable = value;
  }
  public resetMaximumListenerHoldTimeVariable() {
    this._maximumListenerHoldTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumListenerHoldTimeVariableInput() {
    return this._maximumListenerHoldTimeVariable;
  }

  // minimum_listener_hold_time - computed: false, optional: true, required: false
  private _minimumListenerHoldTime?: number; 
  public get minimumListenerHoldTime() {
    return this.getNumberAttribute('minimum_listener_hold_time');
  }
  public set minimumListenerHoldTime(value: number) {
    this._minimumListenerHoldTime = value;
  }
  public resetMinimumListenerHoldTime() {
    this._minimumListenerHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumListenerHoldTimeInput() {
    return this._minimumListenerHoldTime;
  }

  // minimum_listener_hold_time_variable - computed: false, optional: true, required: false
  private _minimumListenerHoldTimeVariable?: string; 
  public get minimumListenerHoldTimeVariable() {
    return this.getStringAttribute('minimum_listener_hold_time_variable');
  }
  public set minimumListenerHoldTimeVariable(value: string) {
    this._minimumListenerHoldTimeVariable = value;
  }
  public resetMinimumListenerHoldTimeVariable() {
    this._minimumListenerHoldTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumListenerHoldTimeVariableInput() {
    return this._minimumListenerHoldTimeVariable;
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

  // speaker_hold_time - computed: false, optional: true, required: false
  private _speakerHoldTime?: number; 
  public get speakerHoldTime() {
    return this.getNumberAttribute('speaker_hold_time');
  }
  public set speakerHoldTime(value: number) {
    this._speakerHoldTime = value;
  }
  public resetSpeakerHoldTime() {
    this._speakerHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speakerHoldTimeInput() {
    return this._speakerHoldTime;
  }

  // speaker_hold_time_variable - computed: false, optional: true, required: false
  private _speakerHoldTimeVariable?: string; 
  public get speakerHoldTimeVariable() {
    return this.getStringAttribute('speaker_hold_time_variable');
  }
  public set speakerHoldTimeVariable(value: string) {
    this._speakerHoldTimeVariable = value;
  }
  public resetSpeakerHoldTimeVariable() {
    this._speakerHoldTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speakerHoldTimeVariableInput() {
    return this._speakerHoldTimeVariable;
  }

  // sxp_connections - computed: false, optional: true, required: false
  private _sxpConnections = new CiscoTrustsecFeatureTemplateSxpConnectionsList(this, "sxp_connections", false);
  public get sxpConnections() {
    return this._sxpConnections;
  }
  public putSxpConnections(value: CiscoTrustsecFeatureTemplateSxpConnections[] | cdktf.IResolvable) {
    this._sxpConnections.internalValue = value;
  }
  public resetSxpConnections() {
    this._sxpConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpConnectionsInput() {
    return this._sxpConnections.internalValue;
  }

  // sxp_default_password - computed: false, optional: true, required: false
  private _sxpDefaultPassword?: string; 
  public get sxpDefaultPassword() {
    return this.getStringAttribute('sxp_default_password');
  }
  public set sxpDefaultPassword(value: string) {
    this._sxpDefaultPassword = value;
  }
  public resetSxpDefaultPassword() {
    this._sxpDefaultPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpDefaultPasswordInput() {
    return this._sxpDefaultPassword;
  }

  // sxp_default_password_variable - computed: false, optional: true, required: false
  private _sxpDefaultPasswordVariable?: string; 
  public get sxpDefaultPasswordVariable() {
    return this.getStringAttribute('sxp_default_password_variable');
  }
  public set sxpDefaultPasswordVariable(value: string) {
    this._sxpDefaultPasswordVariable = value;
  }
  public resetSxpDefaultPasswordVariable() {
    this._sxpDefaultPasswordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpDefaultPasswordVariableInput() {
    return this._sxpDefaultPasswordVariable;
  }

  // sxp_key_chain - computed: false, optional: true, required: false
  private _sxpKeyChain?: string; 
  public get sxpKeyChain() {
    return this.getStringAttribute('sxp_key_chain');
  }
  public set sxpKeyChain(value: string) {
    this._sxpKeyChain = value;
  }
  public resetSxpKeyChain() {
    this._sxpKeyChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpKeyChainInput() {
    return this._sxpKeyChain;
  }

  // sxp_key_chain_variable - computed: false, optional: true, required: false
  private _sxpKeyChainVariable?: string; 
  public get sxpKeyChainVariable() {
    return this.getStringAttribute('sxp_key_chain_variable');
  }
  public set sxpKeyChainVariable(value: string) {
    this._sxpKeyChainVariable = value;
  }
  public resetSxpKeyChainVariable() {
    this._sxpKeyChainVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpKeyChainVariableInput() {
    return this._sxpKeyChainVariable;
  }

  // sxp_log_binding_changes - computed: false, optional: true, required: false
  private _sxpLogBindingChanges?: boolean | cdktf.IResolvable; 
  public get sxpLogBindingChanges() {
    return this.getBooleanAttribute('sxp_log_binding_changes');
  }
  public set sxpLogBindingChanges(value: boolean | cdktf.IResolvable) {
    this._sxpLogBindingChanges = value;
  }
  public resetSxpLogBindingChanges() {
    this._sxpLogBindingChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpLogBindingChangesInput() {
    return this._sxpLogBindingChanges;
  }

  // sxp_log_binding_changes_variable - computed: false, optional: true, required: false
  private _sxpLogBindingChangesVariable?: string; 
  public get sxpLogBindingChangesVariable() {
    return this.getStringAttribute('sxp_log_binding_changes_variable');
  }
  public set sxpLogBindingChangesVariable(value: string) {
    this._sxpLogBindingChangesVariable = value;
  }
  public resetSxpLogBindingChangesVariable() {
    this._sxpLogBindingChangesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpLogBindingChangesVariableInput() {
    return this._sxpLogBindingChangesVariable;
  }

  // sxp_node_id - computed: false, optional: true, required: false
  private _sxpNodeId?: string; 
  public get sxpNodeId() {
    return this.getStringAttribute('sxp_node_id');
  }
  public set sxpNodeId(value: string) {
    this._sxpNodeId = value;
  }
  public resetSxpNodeId() {
    this._sxpNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpNodeIdInput() {
    return this._sxpNodeId;
  }

  // sxp_node_id_type - computed: false, optional: true, required: false
  private _sxpNodeIdType?: string; 
  public get sxpNodeIdType() {
    return this.getStringAttribute('sxp_node_id_type');
  }
  public set sxpNodeIdType(value: string) {
    this._sxpNodeIdType = value;
  }
  public resetSxpNodeIdType() {
    this._sxpNodeIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpNodeIdTypeInput() {
    return this._sxpNodeIdType;
  }

  // sxp_node_id_variable - computed: false, optional: true, required: false
  private _sxpNodeIdVariable?: string; 
  public get sxpNodeIdVariable() {
    return this.getStringAttribute('sxp_node_id_variable');
  }
  public set sxpNodeIdVariable(value: string) {
    this._sxpNodeIdVariable = value;
  }
  public resetSxpNodeIdVariable() {
    this._sxpNodeIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpNodeIdVariableInput() {
    return this._sxpNodeIdVariable;
  }

  // sxp_reconciliation_period - computed: false, optional: true, required: false
  private _sxpReconciliationPeriod?: number; 
  public get sxpReconciliationPeriod() {
    return this.getNumberAttribute('sxp_reconciliation_period');
  }
  public set sxpReconciliationPeriod(value: number) {
    this._sxpReconciliationPeriod = value;
  }
  public resetSxpReconciliationPeriod() {
    this._sxpReconciliationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpReconciliationPeriodInput() {
    return this._sxpReconciliationPeriod;
  }

  // sxp_reconciliation_period_variable - computed: false, optional: true, required: false
  private _sxpReconciliationPeriodVariable?: string; 
  public get sxpReconciliationPeriodVariable() {
    return this.getStringAttribute('sxp_reconciliation_period_variable');
  }
  public set sxpReconciliationPeriodVariable(value: string) {
    this._sxpReconciliationPeriodVariable = value;
  }
  public resetSxpReconciliationPeriodVariable() {
    this._sxpReconciliationPeriodVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpReconciliationPeriodVariableInput() {
    return this._sxpReconciliationPeriodVariable;
  }

  // sxp_retry_period - computed: false, optional: true, required: false
  private _sxpRetryPeriod?: number; 
  public get sxpRetryPeriod() {
    return this.getNumberAttribute('sxp_retry_period');
  }
  public set sxpRetryPeriod(value: number) {
    this._sxpRetryPeriod = value;
  }
  public resetSxpRetryPeriod() {
    this._sxpRetryPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpRetryPeriodInput() {
    return this._sxpRetryPeriod;
  }

  // sxp_retry_period_variable - computed: false, optional: true, required: false
  private _sxpRetryPeriodVariable?: string; 
  public get sxpRetryPeriodVariable() {
    return this.getStringAttribute('sxp_retry_period_variable');
  }
  public set sxpRetryPeriodVariable(value: string) {
    this._sxpRetryPeriodVariable = value;
  }
  public resetSxpRetryPeriodVariable() {
    this._sxpRetryPeriodVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpRetryPeriodVariableInput() {
    return this._sxpRetryPeriodVariable;
  }

  // sxp_source_ip - computed: false, optional: true, required: false
  private _sxpSourceIp?: string; 
  public get sxpSourceIp() {
    return this.getStringAttribute('sxp_source_ip');
  }
  public set sxpSourceIp(value: string) {
    this._sxpSourceIp = value;
  }
  public resetSxpSourceIp() {
    this._sxpSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpSourceIpInput() {
    return this._sxpSourceIp;
  }

  // sxp_source_ip_variable - computed: false, optional: true, required: false
  private _sxpSourceIpVariable?: string; 
  public get sxpSourceIpVariable() {
    return this.getStringAttribute('sxp_source_ip_variable');
  }
  public set sxpSourceIpVariable(value: string) {
    this._sxpSourceIpVariable = value;
  }
  public resetSxpSourceIpVariable() {
    this._sxpSourceIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpSourceIpVariableInput() {
    return this._sxpSourceIpVariable;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
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
      credentials_id: cdktf.stringToTerraform(this._credentialsId),
      credentials_id_variable: cdktf.stringToTerraform(this._credentialsIdVariable),
      credentials_password: cdktf.stringToTerraform(this._credentialsPassword),
      credentials_password_variable: cdktf.stringToTerraform(this._credentialsPasswordVariable),
      description: cdktf.stringToTerraform(this._description),
      device_sgt: cdktf.numberToTerraform(this._deviceSgt),
      device_sgt_variable: cdktf.stringToTerraform(this._deviceSgtVariable),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      enable_enforcement: cdktf.booleanToTerraform(this._enableEnforcement),
      enable_enforcement_variable: cdktf.stringToTerraform(this._enableEnforcementVariable),
      enable_sxp: cdktf.booleanToTerraform(this._enableSxp),
      maximum_listener_hold_time: cdktf.numberToTerraform(this._maximumListenerHoldTime),
      maximum_listener_hold_time_variable: cdktf.stringToTerraform(this._maximumListenerHoldTimeVariable),
      minimum_listener_hold_time: cdktf.numberToTerraform(this._minimumListenerHoldTime),
      minimum_listener_hold_time_variable: cdktf.stringToTerraform(this._minimumListenerHoldTimeVariable),
      name: cdktf.stringToTerraform(this._name),
      speaker_hold_time: cdktf.numberToTerraform(this._speakerHoldTime),
      speaker_hold_time_variable: cdktf.stringToTerraform(this._speakerHoldTimeVariable),
      sxp_connections: cdktf.listMapper(ciscoTrustsecFeatureTemplateSxpConnectionsToTerraform, false)(this._sxpConnections.internalValue),
      sxp_default_password: cdktf.stringToTerraform(this._sxpDefaultPassword),
      sxp_default_password_variable: cdktf.stringToTerraform(this._sxpDefaultPasswordVariable),
      sxp_key_chain: cdktf.stringToTerraform(this._sxpKeyChain),
      sxp_key_chain_variable: cdktf.stringToTerraform(this._sxpKeyChainVariable),
      sxp_log_binding_changes: cdktf.booleanToTerraform(this._sxpLogBindingChanges),
      sxp_log_binding_changes_variable: cdktf.stringToTerraform(this._sxpLogBindingChangesVariable),
      sxp_node_id: cdktf.stringToTerraform(this._sxpNodeId),
      sxp_node_id_type: cdktf.stringToTerraform(this._sxpNodeIdType),
      sxp_node_id_variable: cdktf.stringToTerraform(this._sxpNodeIdVariable),
      sxp_reconciliation_period: cdktf.numberToTerraform(this._sxpReconciliationPeriod),
      sxp_reconciliation_period_variable: cdktf.stringToTerraform(this._sxpReconciliationPeriodVariable),
      sxp_retry_period: cdktf.numberToTerraform(this._sxpRetryPeriod),
      sxp_retry_period_variable: cdktf.stringToTerraform(this._sxpRetryPeriodVariable),
      sxp_source_ip: cdktf.stringToTerraform(this._sxpSourceIp),
      sxp_source_ip_variable: cdktf.stringToTerraform(this._sxpSourceIpVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials_id: {
        value: cdktf.stringToHclTerraform(this._credentialsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials_id_variable: {
        value: cdktf.stringToHclTerraform(this._credentialsIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials_password: {
        value: cdktf.stringToHclTerraform(this._credentialsPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials_password_variable: {
        value: cdktf.stringToHclTerraform(this._credentialsPasswordVariable),
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
      device_sgt: {
        value: cdktf.numberToHclTerraform(this._deviceSgt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_sgt_variable: {
        value: cdktf.stringToHclTerraform(this._deviceSgtVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_enforcement: {
        value: cdktf.booleanToHclTerraform(this._enableEnforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_enforcement_variable: {
        value: cdktf.stringToHclTerraform(this._enableEnforcementVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_sxp: {
        value: cdktf.booleanToHclTerraform(this._enableSxp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maximum_listener_hold_time: {
        value: cdktf.numberToHclTerraform(this._maximumListenerHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_listener_hold_time_variable: {
        value: cdktf.stringToHclTerraform(this._maximumListenerHoldTimeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_listener_hold_time: {
        value: cdktf.numberToHclTerraform(this._minimumListenerHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_listener_hold_time_variable: {
        value: cdktf.stringToHclTerraform(this._minimumListenerHoldTimeVariable),
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
      speaker_hold_time: {
        value: cdktf.numberToHclTerraform(this._speakerHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      speaker_hold_time_variable: {
        value: cdktf.stringToHclTerraform(this._speakerHoldTimeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sxp_connections: {
        value: cdktf.listMapperHcl(ciscoTrustsecFeatureTemplateSxpConnectionsToHclTerraform, false)(this._sxpConnections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoTrustsecFeatureTemplateSxpConnectionsList",
      },
      sxp_default_password: {
        value: cdktf.stringToHclTerraform(this._sxpDefaultPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sxp_default_password_variable: {
        value: cdktf.stringToHclTerraform(this._sxpDefaultPasswordVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sxp_key_chain: {
        value: cdktf.stringToHclTerraform(this._sxpKeyChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sxp_key_chain_variable: {
        value: cdktf.stringToHclTerraform(this._sxpKeyChainVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sxp_log_binding_changes: {
        value: cdktf.booleanToHclTerraform(this._sxpLogBindingChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sxp_log_binding_changes_variable: {
        value: cdktf.stringToHclTerraform(this._sxpLogBindingChangesVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sxp_node_id: {
        value: cdktf.stringToHclTerraform(this._sxpNodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sxp_node_id_type: {
        value: cdktf.stringToHclTerraform(this._sxpNodeIdType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sxp_node_id_variable: {
        value: cdktf.stringToHclTerraform(this._sxpNodeIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sxp_reconciliation_period: {
        value: cdktf.numberToHclTerraform(this._sxpReconciliationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sxp_reconciliation_period_variable: {
        value: cdktf.stringToHclTerraform(this._sxpReconciliationPeriodVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sxp_retry_period: {
        value: cdktf.numberToHclTerraform(this._sxpRetryPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sxp_retry_period_variable: {
        value: cdktf.stringToHclTerraform(this._sxpRetryPeriodVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sxp_source_ip: {
        value: cdktf.stringToHclTerraform(this._sxpSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sxp_source_ip_variable: {
        value: cdktf.stringToHclTerraform(this._sxpSourceIpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
