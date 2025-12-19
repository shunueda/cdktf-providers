// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnIkeGatewayOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#id DataThunderVpnIkeGatewayOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IKE-gateway name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#name DataThunderVpnIkeGatewayOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#oper DataThunderVpnIkeGatewayOper#oper}
  */
  readonly oper?: DataThunderVpnIkeGatewayOperOper;
}
export interface DataThunderVpnIkeGatewayOperOperSaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#dh_group DataThunderVpnIkeGatewayOper#dh_group}
  */
  readonly dhGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#encryption DataThunderVpnIkeGatewayOper#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#fragment_message_generated DataThunderVpnIkeGatewayOper#fragment_message_generated}
  */
  readonly fragmentMessageGenerated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#fragment_message_received DataThunderVpnIkeGatewayOper#fragment_message_received}
  */
  readonly fragmentMessageReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#fragment_reassemble_error DataThunderVpnIkeGatewayOper#fragment_reassemble_error}
  */
  readonly fragmentReassembleError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#fragmentation_error DataThunderVpnIkeGatewayOper#fragmentation_error}
  */
  readonly fragmentationError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#hash DataThunderVpnIkeGatewayOper#hash}
  */
  readonly hash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#initiator_spi DataThunderVpnIkeGatewayOper#initiator_spi}
  */
  readonly initiatorSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#lifetime DataThunderVpnIkeGatewayOper#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#local_ip DataThunderVpnIkeGatewayOper#local_ip}
  */
  readonly localIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#nat_traversal DataThunderVpnIkeGatewayOper#nat_traversal}
  */
  readonly natTraversal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#remote_id DataThunderVpnIkeGatewayOper#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#remote_ip DataThunderVpnIkeGatewayOper#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#responder_spi DataThunderVpnIkeGatewayOper#responder_spi}
  */
  readonly responderSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#sign_hash DataThunderVpnIkeGatewayOper#sign_hash}
  */
  readonly signHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#status DataThunderVpnIkeGatewayOper#status}
  */
  readonly status?: string;
}

export function dataThunderVpnIkeGatewayOperOperSaListStructToTerraform(struct?: DataThunderVpnIkeGatewayOperOperSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dh_group: cdktf.numberToTerraform(struct!.dhGroup),
    encryption: cdktf.stringToTerraform(struct!.encryption),
    fragment_message_generated: cdktf.numberToTerraform(struct!.fragmentMessageGenerated),
    fragment_message_received: cdktf.numberToTerraform(struct!.fragmentMessageReceived),
    fragment_reassemble_error: cdktf.numberToTerraform(struct!.fragmentReassembleError),
    fragmentation_error: cdktf.numberToTerraform(struct!.fragmentationError),
    hash: cdktf.stringToTerraform(struct!.hash),
    initiator_spi: cdktf.stringToTerraform(struct!.initiatorSpi),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    nat_traversal: cdktf.numberToTerraform(struct!.natTraversal),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    responder_spi: cdktf.stringToTerraform(struct!.responderSpi),
    sign_hash: cdktf.stringToTerraform(struct!.signHash),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderVpnIkeGatewayOperOperSaListStructToHclTerraform(struct?: DataThunderVpnIkeGatewayOperOperSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dh_group: {
      value: cdktf.numberToHclTerraform(struct!.dhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encryption: {
      value: cdktf.stringToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fragment_message_generated: {
      value: cdktf.numberToHclTerraform(struct!.fragmentMessageGenerated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fragment_message_received: {
      value: cdktf.numberToHclTerraform(struct!.fragmentMessageReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fragment_reassemble_error: {
      value: cdktf.numberToHclTerraform(struct!.fragmentReassembleError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fragmentation_error: {
      value: cdktf.numberToHclTerraform(struct!.fragmentationError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator_spi: {
      value: cdktf.stringToHclTerraform(struct!.initiatorSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ip: {
      value: cdktf.stringToHclTerraform(struct!.localIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_traversal: {
      value: cdktf.numberToHclTerraform(struct!.natTraversal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    responder_spi: {
      value: cdktf.stringToHclTerraform(struct!.responderSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_hash: {
      value: cdktf.stringToHclTerraform(struct!.signHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIkeGatewayOperOperSaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnIkeGatewayOperOperSaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._fragmentMessageGenerated !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentMessageGenerated = this._fragmentMessageGenerated;
    }
    if (this._fragmentMessageReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentMessageReceived = this._fragmentMessageReceived;
    }
    if (this._fragmentReassembleError !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentReassembleError = this._fragmentReassembleError;
    }
    if (this._fragmentationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentationError = this._fragmentationError;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._initiatorSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatorSpi = this._initiatorSpi;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._localIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIp = this._localIp;
    }
    if (this._natTraversal !== undefined) {
      hasAnyValues = true;
      internalValueResult.natTraversal = this._natTraversal;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._responderSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderSpi = this._responderSpi;
    }
    if (this._signHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.signHash = this._signHash;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIkeGatewayOperOperSaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhGroup = undefined;
      this._encryption = undefined;
      this._fragmentMessageGenerated = undefined;
      this._fragmentMessageReceived = undefined;
      this._fragmentReassembleError = undefined;
      this._fragmentationError = undefined;
      this._hash = undefined;
      this._initiatorSpi = undefined;
      this._lifetime = undefined;
      this._localIp = undefined;
      this._natTraversal = undefined;
      this._remoteId = undefined;
      this._remoteIp = undefined;
      this._responderSpi = undefined;
      this._signHash = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhGroup = value.dhGroup;
      this._encryption = value.encryption;
      this._fragmentMessageGenerated = value.fragmentMessageGenerated;
      this._fragmentMessageReceived = value.fragmentMessageReceived;
      this._fragmentReassembleError = value.fragmentReassembleError;
      this._fragmentationError = value.fragmentationError;
      this._hash = value.hash;
      this._initiatorSpi = value.initiatorSpi;
      this._lifetime = value.lifetime;
      this._localIp = value.localIp;
      this._natTraversal = value.natTraversal;
      this._remoteId = value.remoteId;
      this._remoteIp = value.remoteIp;
      this._responderSpi = value.responderSpi;
      this._signHash = value.signHash;
      this._status = value.status;
    }
  }

  // dh_group - computed: false, optional: true, required: false
  private _dhGroup?: number; 
  public get dhGroup() {
    return this.getNumberAttribute('dh_group');
  }
  public set dhGroup(value: number) {
    this._dhGroup = value;
  }
  public resetDhGroup() {
    this._dhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // fragment_message_generated - computed: false, optional: true, required: false
  private _fragmentMessageGenerated?: number; 
  public get fragmentMessageGenerated() {
    return this.getNumberAttribute('fragment_message_generated');
  }
  public set fragmentMessageGenerated(value: number) {
    this._fragmentMessageGenerated = value;
  }
  public resetFragmentMessageGenerated() {
    this._fragmentMessageGenerated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentMessageGeneratedInput() {
    return this._fragmentMessageGenerated;
  }

  // fragment_message_received - computed: false, optional: true, required: false
  private _fragmentMessageReceived?: number; 
  public get fragmentMessageReceived() {
    return this.getNumberAttribute('fragment_message_received');
  }
  public set fragmentMessageReceived(value: number) {
    this._fragmentMessageReceived = value;
  }
  public resetFragmentMessageReceived() {
    this._fragmentMessageReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentMessageReceivedInput() {
    return this._fragmentMessageReceived;
  }

  // fragment_reassemble_error - computed: false, optional: true, required: false
  private _fragmentReassembleError?: number; 
  public get fragmentReassembleError() {
    return this.getNumberAttribute('fragment_reassemble_error');
  }
  public set fragmentReassembleError(value: number) {
    this._fragmentReassembleError = value;
  }
  public resetFragmentReassembleError() {
    this._fragmentReassembleError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentReassembleErrorInput() {
    return this._fragmentReassembleError;
  }

  // fragmentation_error - computed: false, optional: true, required: false
  private _fragmentationError?: number; 
  public get fragmentationError() {
    return this.getNumberAttribute('fragmentation_error');
  }
  public set fragmentationError(value: number) {
    this._fragmentationError = value;
  }
  public resetFragmentationError() {
    this._fragmentationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentationErrorInput() {
    return this._fragmentationError;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // initiator_spi - computed: false, optional: true, required: false
  private _initiatorSpi?: string; 
  public get initiatorSpi() {
    return this.getStringAttribute('initiator_spi');
  }
  public set initiatorSpi(value: string) {
    this._initiatorSpi = value;
  }
  public resetInitiatorSpi() {
    this._initiatorSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorSpiInput() {
    return this._initiatorSpi;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // local_ip - computed: false, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
  }

  // nat_traversal - computed: false, optional: true, required: false
  private _natTraversal?: number; 
  public get natTraversal() {
    return this.getNumberAttribute('nat_traversal');
  }
  public set natTraversal(value: number) {
    this._natTraversal = value;
  }
  public resetNatTraversal() {
    this._natTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTraversalInput() {
    return this._natTraversal;
  }

  // remote_id - computed: false, optional: true, required: false
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // remote_ip - computed: false, optional: true, required: false
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  public resetRemoteIp() {
    this._remoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // responder_spi - computed: false, optional: true, required: false
  private _responderSpi?: string; 
  public get responderSpi() {
    return this.getStringAttribute('responder_spi');
  }
  public set responderSpi(value: string) {
    this._responderSpi = value;
  }
  public resetResponderSpi() {
    this._responderSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderSpiInput() {
    return this._responderSpi;
  }

  // sign_hash - computed: false, optional: true, required: false
  private _signHash?: string; 
  public get signHash() {
    return this.getStringAttribute('sign_hash');
  }
  public set signHash(value: string) {
    this._signHash = value;
  }
  public resetSignHash() {
    this._signHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signHashInput() {
    return this._signHash;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataThunderVpnIkeGatewayOperOperSaListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnIkeGatewayOperOperSaListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnIkeGatewayOperOperSaListStructOutputReference {
    return new DataThunderVpnIkeGatewayOperOperSaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnIkeGatewayOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#brief_filter DataThunderVpnIkeGatewayOper#brief_filter}
  */
  readonly briefFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#remote_id_filter DataThunderVpnIkeGatewayOper#remote_id_filter}
  */
  readonly remoteIdFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#remote_ip_filter DataThunderVpnIkeGatewayOper#remote_ip_filter}
  */
  readonly remoteIpFilter?: string;
  /**
  * sa_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#sa_list DataThunderVpnIkeGatewayOper#sa_list}
  */
  readonly saList?: DataThunderVpnIkeGatewayOperOperSaListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnIkeGatewayOperOperToTerraform(struct?: DataThunderVpnIkeGatewayOperOperOutputReference | DataThunderVpnIkeGatewayOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brief_filter: cdktf.stringToTerraform(struct!.briefFilter),
    remote_id_filter: cdktf.stringToTerraform(struct!.remoteIdFilter),
    remote_ip_filter: cdktf.stringToTerraform(struct!.remoteIpFilter),
    sa_list: cdktf.listMapper(dataThunderVpnIkeGatewayOperOperSaListStructToTerraform, true)(struct!.saList),
  }
}


export function dataThunderVpnIkeGatewayOperOperToHclTerraform(struct?: DataThunderVpnIkeGatewayOperOperOutputReference | DataThunderVpnIkeGatewayOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    brief_filter: {
      value: cdktf.stringToHclTerraform(struct!.briefFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_id_filter: {
      value: cdktf.stringToHclTerraform(struct!.remoteIdFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip_filter: {
      value: cdktf.stringToHclTerraform(struct!.remoteIpFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sa_list: {
      value: cdktf.listMapperHcl(dataThunderVpnIkeGatewayOperOperSaListStructToHclTerraform, true)(struct!.saList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnIkeGatewayOperOperSaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIkeGatewayOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnIkeGatewayOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._briefFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.briefFilter = this._briefFilter;
    }
    if (this._remoteIdFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIdFilter = this._remoteIdFilter;
    }
    if (this._remoteIpFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpFilter = this._remoteIpFilter;
    }
    if (this._saList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saList = this._saList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIkeGatewayOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._briefFilter = undefined;
      this._remoteIdFilter = undefined;
      this._remoteIpFilter = undefined;
      this._saList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._briefFilter = value.briefFilter;
      this._remoteIdFilter = value.remoteIdFilter;
      this._remoteIpFilter = value.remoteIpFilter;
      this._saList.internalValue = value.saList;
    }
  }

  // brief_filter - computed: false, optional: true, required: false
  private _briefFilter?: string; 
  public get briefFilter() {
    return this.getStringAttribute('brief_filter');
  }
  public set briefFilter(value: string) {
    this._briefFilter = value;
  }
  public resetBriefFilter() {
    this._briefFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get briefFilterInput() {
    return this._briefFilter;
  }

  // remote_id_filter - computed: false, optional: true, required: false
  private _remoteIdFilter?: string; 
  public get remoteIdFilter() {
    return this.getStringAttribute('remote_id_filter');
  }
  public set remoteIdFilter(value: string) {
    this._remoteIdFilter = value;
  }
  public resetRemoteIdFilter() {
    this._remoteIdFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdFilterInput() {
    return this._remoteIdFilter;
  }

  // remote_ip_filter - computed: false, optional: true, required: false
  private _remoteIpFilter?: string; 
  public get remoteIpFilter() {
    return this.getStringAttribute('remote_ip_filter');
  }
  public set remoteIpFilter(value: string) {
    this._remoteIpFilter = value;
  }
  public resetRemoteIpFilter() {
    this._remoteIpFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpFilterInput() {
    return this._remoteIpFilter;
  }

  // sa_list - computed: false, optional: true, required: false
  private _saList = new DataThunderVpnIkeGatewayOperOperSaListStructList(this, "sa_list", false);
  public get saList() {
    return this._saList;
  }
  public putSaList(value: DataThunderVpnIkeGatewayOperOperSaListStruct[] | cdktf.IResolvable) {
    this._saList.internalValue = value;
  }
  public resetSaList() {
    this._saList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saListInput() {
    return this._saList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper thunder_vpn_ike_gateway_oper}
*/
export class DataThunderVpnIkeGatewayOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_ike_gateway_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnIkeGatewayOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnIkeGatewayOper to import
  * @param importFromId The id of the existing DataThunderVpnIkeGatewayOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnIkeGatewayOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_ike_gateway_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_gateway_oper thunder_vpn_ike_gateway_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnIkeGatewayOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnIkeGatewayOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_ike_gateway_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._name = config.name;
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVpnIkeGatewayOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnIkeGatewayOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oper: dataThunderVpnIkeGatewayOperOperToTerraform(this._oper.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderVpnIkeGatewayOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnIkeGatewayOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
