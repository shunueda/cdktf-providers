// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudRouterConnectionIpsecConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID for the billing account that should be billed. Can also be set with the PF_ACCOUNT_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#account_uuid CloudRouterConnectionIpsec#account_uuid}
  */
  readonly accountUuid: string;
  /**
  * Circuit ID of the target cloud router. This starts with "PF-L3-CUST-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#circuit_id CloudRouterConnectionIpsec#circuit_id}
  */
  readonly circuitId: string;
  /**
  * A brief description of this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#description CloudRouterConnectionIpsec#description}
  */
  readonly description: string;
  /**
  * The gateway address of your VPN device. Because VPNs traverse the public internet, this must be a public IP address owned by you.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#gateway_address CloudRouterConnectionIpsec#gateway_address}
  */
  readonly gatewayAddress: string;
  /**
  * The Internet Key Exchange (IKE) version supported by your device. In most cases, this is v2 (v1 is deprecated).
  * 
  * 	Enum: 1, 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#ike_version CloudRouterConnectionIpsec#ike_version}
  */
  readonly ikeVersion: number;
  /**
  * Label value linked to an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#labels CloudRouterConnectionIpsec#labels}
  */
  readonly labels?: string[];
  /**
  * The authentication algorithm to use during phase 1.
  * 
  * 	Enum: "md5" "sha-256" "sha-384" "sha1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#phase1_authentication_algo CloudRouterConnectionIpsec#phase1_authentication_algo}
  */
  readonly phase1AuthenticationAlgo: string;
  /**
  * The authentication method to use during phase 1. For example, "pre-shared-key".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#phase1_authentication_method CloudRouterConnectionIpsec#phase1_authentication_method}
  */
  readonly phase1AuthenticationMethod: string;
  /**
  * The encryption algorithm to use during phase 1.
  * 
  * 	Enum: "3des-cbc" "aes-128-cbc" "aes-192-cbc" "aes-256-cbc" "des-cbc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#phase1_encryption_algo CloudRouterConnectionIpsec#phase1_encryption_algo}
  */
  readonly phase1EncryptionAlgo: string;
  /**
  * Phase 1 is when the VPN peers are authenticated and we establish security associations (SAs) to protect IKE messaging between the two endpoints (which in this case is PacketFabric and your VPN device). This is also known as the IKE phase.
  * 
  * 	The Phase 1 group is the Diffie-Hellman (DH) algorithm used to create a shared secret between the endpoints.
  * 
  * 	Enum: "group1" "group14" "group15" "group16" "group19" "group2" "group20" "group24" "group5"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#phase1_group CloudRouterConnectionIpsec#phase1_group}
  */
  readonly phase1Group: string;
  /**
  * The time in seconds before a tunnel will need to re-authenticate. The phase 1 lifetime should be equal to or longer than phase 2. This can be between 180 and 86400.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#phase1_lifetime CloudRouterConnectionIpsec#phase1_lifetime}
  */
  readonly phase1Lifetime: number;
  /**
  * The authentication algorithm to use during phase 2. It cannot be null if phase2_encryption_algo is CBC. 
  * 
  * 	Enum: "hmac-md5-96" "hmac-sha-256-128" "hmac-sha1-96"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#phase2_authentication_algo CloudRouterConnectionIpsec#phase2_authentication_algo}
  */
  readonly phase2AuthenticationAlgo?: string;
  /**
  * The encryption algorithm to use during phase 2.
  * 
  * 	Enum: "3des-cbc" "aes-128-cbc" "aes-128-gcm" "aes-192-cbc" "aes-192-gcm" "aes-256-cbc" "aes-256-gcm" "des-cbc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#phase2_encryption_algo CloudRouterConnectionIpsec#phase2_encryption_algo}
  */
  readonly phase2EncryptionAlgo: string;
  /**
  * The time in seconds before phase 2 expires and needs to reauthenticate. We recommend that the phase 2 lifetime is equal to or shorter than phase 1. This can be between 180 and 86400.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#phase2_lifetime CloudRouterConnectionIpsec#phase2_lifetime}
  */
  readonly phase2Lifetime: number;
  /**
  * Phase 2 is when SAs are further established to protect and encrypt IP traffic within the tunnel. This is also known as the IPsec phase.
  * 
  * 	The PFS group is the Perfect Forward Secrecy group. This means that rather than using the keys from phase 1, new keys are generated per the selected Diffie-Hellman algorithm (same as those listed above).
  * 
  * 	Enum: "group1" "group14" "group15" "group16" "group19" "group2" "group20" "group24" "group5"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#phase2_pfs_group CloudRouterConnectionIpsec#phase2_pfs_group}
  */
  readonly phase2PfsGroup: string;
  /**
  * Purchase order number or identifier of a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#po_number CloudRouterConnectionIpsec#po_number}
  */
  readonly poNumber?: string;
  /**
  * The POP in which you want to provision the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#pop CloudRouterConnectionIpsec#pop}
  */
  readonly pop: string;
  /**
  * UUID of the published quote line with which this connection should be associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#published_quote_line_uuid CloudRouterConnectionIpsec#published_quote_line_uuid}
  */
  readonly publishedQuoteLineUuid?: string;
  /**
  * The pre-shared-key to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#shared_key CloudRouterConnectionIpsec#shared_key}
  */
  readonly sharedKey: string;
  /**
  * The desired speed of the new connection.
  * 
  * 	Enum: ["50Mbps" "100Mbps" "200Mbps" "300Mbps" "400Mbps" "500Mbps" "1Gbps" "2Gbps"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#speed CloudRouterConnectionIpsec#speed}
  */
  readonly speed: string;
  /**
  * Subscription term of the Cloud Router Connection
  * 
  * 	Enum: ["1", "12", "24", "36"] Defaults: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#subscription_term CloudRouterConnectionIpsec#subscription_term}
  */
  readonly subscriptionTerm?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#timeouts CloudRouterConnectionIpsec#timeouts}
  */
  readonly timeouts?: CloudRouterConnectionIpsecTimeouts;
}
export interface CloudRouterConnectionIpsecTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#create CloudRouterConnectionIpsec#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#delete CloudRouterConnectionIpsec#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#read CloudRouterConnectionIpsec#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#update CloudRouterConnectionIpsec#update}
  */
  readonly update?: string;
}

export function cloudRouterConnectionIpsecTimeoutsToTerraform(struct?: CloudRouterConnectionIpsecTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudRouterConnectionIpsecTimeoutsToHclTerraform(struct?: CloudRouterConnectionIpsecTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterConnectionIpsecTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudRouterConnectionIpsecTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterConnectionIpsecTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
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
      this._read = value.read;
      this._update = value.update;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec packetfabric_cloud_router_connection_ipsec}
*/
export class CloudRouterConnectionIpsec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cloud_router_connection_ipsec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudRouterConnectionIpsec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudRouterConnectionIpsec to import
  * @param importFromId The id of the existing CloudRouterConnectionIpsec that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudRouterConnectionIpsec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cloud_router_connection_ipsec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_ipsec packetfabric_cloud_router_connection_ipsec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudRouterConnectionIpsecConfig
  */
  public constructor(scope: Construct, id: string, config: CloudRouterConnectionIpsecConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cloud_router_connection_ipsec',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3',
        providerVersionConstraint: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountUuid = config.accountUuid;
    this._circuitId = config.circuitId;
    this._description = config.description;
    this._gatewayAddress = config.gatewayAddress;
    this._ikeVersion = config.ikeVersion;
    this._labels = config.labels;
    this._phase1AuthenticationAlgo = config.phase1AuthenticationAlgo;
    this._phase1AuthenticationMethod = config.phase1AuthenticationMethod;
    this._phase1EncryptionAlgo = config.phase1EncryptionAlgo;
    this._phase1Group = config.phase1Group;
    this._phase1Lifetime = config.phase1Lifetime;
    this._phase2AuthenticationAlgo = config.phase2AuthenticationAlgo;
    this._phase2EncryptionAlgo = config.phase2EncryptionAlgo;
    this._phase2Lifetime = config.phase2Lifetime;
    this._phase2PfsGroup = config.phase2PfsGroup;
    this._poNumber = config.poNumber;
    this._pop = config.pop;
    this._publishedQuoteLineUuid = config.publishedQuoteLineUuid;
    this._sharedKey = config.sharedKey;
    this._speed = config.speed;
    this._subscriptionTerm = config.subscriptionTerm;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_uuid - computed: false, optional: false, required: true
  private _accountUuid?: string; 
  public get accountUuid() {
    return this.getStringAttribute('account_uuid');
  }
  public set accountUuid(value: string) {
    this._accountUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUuidInput() {
    return this._accountUuid;
  }

  // circuit_id - computed: false, optional: false, required: true
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
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

  // etl - computed: true, optional: false, required: false
  public get etl() {
    return this.getNumberAttribute('etl');
  }

  // gateway_address - computed: false, optional: false, required: true
  private _gatewayAddress?: string; 
  public get gatewayAddress() {
    return this.getStringAttribute('gateway_address');
  }
  public set gatewayAddress(value: string) {
    this._gatewayAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAddressInput() {
    return this._gatewayAddress;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ike_version - computed: false, optional: false, required: true
  private _ikeVersion?: number; 
  public get ikeVersion() {
    return this.getNumberAttribute('ike_version');
  }
  public set ikeVersion(value: number) {
    this._ikeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // phase1_authentication_algo - computed: false, optional: false, required: true
  private _phase1AuthenticationAlgo?: string; 
  public get phase1AuthenticationAlgo() {
    return this.getStringAttribute('phase1_authentication_algo');
  }
  public set phase1AuthenticationAlgo(value: string) {
    this._phase1AuthenticationAlgo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1AuthenticationAlgoInput() {
    return this._phase1AuthenticationAlgo;
  }

  // phase1_authentication_method - computed: false, optional: false, required: true
  private _phase1AuthenticationMethod?: string; 
  public get phase1AuthenticationMethod() {
    return this.getStringAttribute('phase1_authentication_method');
  }
  public set phase1AuthenticationMethod(value: string) {
    this._phase1AuthenticationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1AuthenticationMethodInput() {
    return this._phase1AuthenticationMethod;
  }

  // phase1_encryption_algo - computed: false, optional: false, required: true
  private _phase1EncryptionAlgo?: string; 
  public get phase1EncryptionAlgo() {
    return this.getStringAttribute('phase1_encryption_algo');
  }
  public set phase1EncryptionAlgo(value: string) {
    this._phase1EncryptionAlgo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1EncryptionAlgoInput() {
    return this._phase1EncryptionAlgo;
  }

  // phase1_group - computed: false, optional: false, required: true
  private _phase1Group?: string; 
  public get phase1Group() {
    return this.getStringAttribute('phase1_group');
  }
  public set phase1Group(value: string) {
    this._phase1Group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1GroupInput() {
    return this._phase1Group;
  }

  // phase1_lifetime - computed: false, optional: false, required: true
  private _phase1Lifetime?: number; 
  public get phase1Lifetime() {
    return this.getNumberAttribute('phase1_lifetime');
  }
  public set phase1Lifetime(value: number) {
    this._phase1Lifetime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1LifetimeInput() {
    return this._phase1Lifetime;
  }

  // phase2_authentication_algo - computed: false, optional: true, required: false
  private _phase2AuthenticationAlgo?: string; 
  public get phase2AuthenticationAlgo() {
    return this.getStringAttribute('phase2_authentication_algo');
  }
  public set phase2AuthenticationAlgo(value: string) {
    this._phase2AuthenticationAlgo = value;
  }
  public resetPhase2AuthenticationAlgo() {
    this._phase2AuthenticationAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase2AuthenticationAlgoInput() {
    return this._phase2AuthenticationAlgo;
  }

  // phase2_encryption_algo - computed: false, optional: false, required: true
  private _phase2EncryptionAlgo?: string; 
  public get phase2EncryptionAlgo() {
    return this.getStringAttribute('phase2_encryption_algo');
  }
  public set phase2EncryptionAlgo(value: string) {
    this._phase2EncryptionAlgo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phase2EncryptionAlgoInput() {
    return this._phase2EncryptionAlgo;
  }

  // phase2_lifetime - computed: false, optional: false, required: true
  private _phase2Lifetime?: number; 
  public get phase2Lifetime() {
    return this.getNumberAttribute('phase2_lifetime');
  }
  public set phase2Lifetime(value: number) {
    this._phase2Lifetime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phase2LifetimeInput() {
    return this._phase2Lifetime;
  }

  // phase2_pfs_group - computed: false, optional: false, required: true
  private _phase2PfsGroup?: string; 
  public get phase2PfsGroup() {
    return this.getStringAttribute('phase2_pfs_group');
  }
  public set phase2PfsGroup(value: string) {
    this._phase2PfsGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phase2PfsGroupInput() {
    return this._phase2PfsGroup;
  }

  // po_number - computed: false, optional: true, required: false
  private _poNumber?: string; 
  public get poNumber() {
    return this.getStringAttribute('po_number');
  }
  public set poNumber(value: string) {
    this._poNumber = value;
  }
  public resetPoNumber() {
    this._poNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poNumberInput() {
    return this._poNumber;
  }

  // pop - computed: false, optional: false, required: true
  private _pop?: string; 
  public get pop() {
    return this.getStringAttribute('pop');
  }
  public set pop(value: string) {
    this._pop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get popInput() {
    return this._pop;
  }

  // published_quote_line_uuid - computed: false, optional: true, required: false
  private _publishedQuoteLineUuid?: string; 
  public get publishedQuoteLineUuid() {
    return this.getStringAttribute('published_quote_line_uuid');
  }
  public set publishedQuoteLineUuid(value: string) {
    this._publishedQuoteLineUuid = value;
  }
  public resetPublishedQuoteLineUuid() {
    this._publishedQuoteLineUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedQuoteLineUuidInput() {
    return this._publishedQuoteLineUuid;
  }

  // shared_key - computed: false, optional: false, required: true
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
  }

  // speed - computed: false, optional: false, required: true
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // subscription_term - computed: false, optional: true, required: false
  private _subscriptionTerm?: number; 
  public get subscriptionTerm() {
    return this.getNumberAttribute('subscription_term');
  }
  public set subscriptionTerm(value: number) {
    this._subscriptionTerm = value;
  }
  public resetSubscriptionTerm() {
    this._subscriptionTerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTermInput() {
    return this._subscriptionTerm;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudRouterConnectionIpsecTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudRouterConnectionIpsecTimeouts) {
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
      account_uuid: cdktf.stringToTerraform(this._accountUuid),
      circuit_id: cdktf.stringToTerraform(this._circuitId),
      description: cdktf.stringToTerraform(this._description),
      gateway_address: cdktf.stringToTerraform(this._gatewayAddress),
      ike_version: cdktf.numberToTerraform(this._ikeVersion),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      phase1_authentication_algo: cdktf.stringToTerraform(this._phase1AuthenticationAlgo),
      phase1_authentication_method: cdktf.stringToTerraform(this._phase1AuthenticationMethod),
      phase1_encryption_algo: cdktf.stringToTerraform(this._phase1EncryptionAlgo),
      phase1_group: cdktf.stringToTerraform(this._phase1Group),
      phase1_lifetime: cdktf.numberToTerraform(this._phase1Lifetime),
      phase2_authentication_algo: cdktf.stringToTerraform(this._phase2AuthenticationAlgo),
      phase2_encryption_algo: cdktf.stringToTerraform(this._phase2EncryptionAlgo),
      phase2_lifetime: cdktf.numberToTerraform(this._phase2Lifetime),
      phase2_pfs_group: cdktf.stringToTerraform(this._phase2PfsGroup),
      po_number: cdktf.stringToTerraform(this._poNumber),
      pop: cdktf.stringToTerraform(this._pop),
      published_quote_line_uuid: cdktf.stringToTerraform(this._publishedQuoteLineUuid),
      shared_key: cdktf.stringToTerraform(this._sharedKey),
      speed: cdktf.stringToTerraform(this._speed),
      subscription_term: cdktf.numberToTerraform(this._subscriptionTerm),
      timeouts: cloudRouterConnectionIpsecTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_uuid: {
        value: cdktf.stringToHclTerraform(this._accountUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      circuit_id: {
        value: cdktf.stringToHclTerraform(this._circuitId),
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
      gateway_address: {
        value: cdktf.stringToHclTerraform(this._gatewayAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_version: {
        value: cdktf.numberToHclTerraform(this._ikeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      phase1_authentication_algo: {
        value: cdktf.stringToHclTerraform(this._phase1AuthenticationAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase1_authentication_method: {
        value: cdktf.stringToHclTerraform(this._phase1AuthenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase1_encryption_algo: {
        value: cdktf.stringToHclTerraform(this._phase1EncryptionAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase1_group: {
        value: cdktf.stringToHclTerraform(this._phase1Group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase1_lifetime: {
        value: cdktf.numberToHclTerraform(this._phase1Lifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      phase2_authentication_algo: {
        value: cdktf.stringToHclTerraform(this._phase2AuthenticationAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase2_encryption_algo: {
        value: cdktf.stringToHclTerraform(this._phase2EncryptionAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase2_lifetime: {
        value: cdktf.numberToHclTerraform(this._phase2Lifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      phase2_pfs_group: {
        value: cdktf.stringToHclTerraform(this._phase2PfsGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      po_number: {
        value: cdktf.stringToHclTerraform(this._poNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pop: {
        value: cdktf.stringToHclTerraform(this._pop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      published_quote_line_uuid: {
        value: cdktf.stringToHclTerraform(this._publishedQuoteLineUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_key: {
        value: cdktf.stringToHclTerraform(this._sharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_term: {
        value: cdktf.numberToHclTerraform(this._subscriptionTerm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: cloudRouterConnectionIpsecTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudRouterConnectionIpsecTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
