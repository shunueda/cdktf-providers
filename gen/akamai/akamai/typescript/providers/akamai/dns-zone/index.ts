// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#comment DnsZone#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#contract DnsZone#contract}
  */
  readonly contract: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#end_customer_id DnsZone#end_customer_id}
  */
  readonly endCustomerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#group DnsZone#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#id DnsZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#masters DnsZone#masters}
  */
  readonly masters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#sign_and_serve DnsZone#sign_and_serve}
  */
  readonly signAndServe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#sign_and_serve_algorithm DnsZone#sign_and_serve_algorithm}
  */
  readonly signAndServeAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#target DnsZone#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#type DnsZone#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#zone DnsZone#zone}
  */
  readonly zone: string;
  /**
  * outbound_zone_transfer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#outbound_zone_transfer DnsZone#outbound_zone_transfer}
  */
  readonly outboundZoneTransfer?: DnsZoneOutboundZoneTransfer;
  /**
  * tsig_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#tsig_key DnsZone#tsig_key}
  */
  readonly tsigKey?: DnsZoneTsigKey;
}
export interface DnsZoneOutboundZoneTransferTsigKey {
  /**
  * The algorithm used to encode the TSIG key's secret data. Possible values are: hmac-md5, hmac-sha1, hmac-sha224, hmac-sha256, hmac-sha384, hmac-sha512, or HMAC-MD5.SIG-ALG.REG.INT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#algorithm DnsZone#algorithm}
  */
  readonly algorithm: string;
  /**
  * The zone name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name: string;
  /**
  * A Base64-encoded string of data. When decoded, it needs to contain the correct number of bits for the chosen algorithm. If the input isn't correctly padded, the server applies the padding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#secret DnsZone#secret}
  */
  readonly secret: string;
}

export function dnsZoneOutboundZoneTransferTsigKeyToTerraform(struct?: DnsZoneOutboundZoneTransferTsigKeyOutputReference | DnsZoneOutboundZoneTransferTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    name: cdktf.stringToTerraform(struct!.name),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dnsZoneOutboundZoneTransferTsigKeyToHclTerraform(struct?: DnsZoneOutboundZoneTransferTsigKeyOutputReference | DnsZoneOutboundZoneTransferTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
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
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneOutboundZoneTransferTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZoneOutboundZoneTransferTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneOutboundZoneTransferTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._name = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._name = value.name;
      this._secret = value.secret;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DnsZoneOutboundZoneTransfer {
  /**
  * The access control list, defined as IPv4 and IPv6 CIDR blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#acl DnsZone#acl}
  */
  readonly acl?: string[];
  /**
  * Enables outbound zone transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#enabled DnsZone#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Customer secondary nameservers to notify, if NOTIFY requests are desired. Up to 64 IPv4 or IPv6 addresses. If no targets are specified, you can manually request zone transfer updates as needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#notify_targets DnsZone#notify_targets}
  */
  readonly notifyTargets?: string[];
  /**
  * tsig_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#tsig_key DnsZone#tsig_key}
  */
  readonly tsigKey?: DnsZoneOutboundZoneTransferTsigKey;
}

export function dnsZoneOutboundZoneTransferToTerraform(struct?: DnsZoneOutboundZoneTransferOutputReference | DnsZoneOutboundZoneTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acl),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    notify_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifyTargets),
    tsig_key: dnsZoneOutboundZoneTransferTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsZoneOutboundZoneTransferToHclTerraform(struct?: DnsZoneOutboundZoneTransferOutputReference | DnsZoneOutboundZoneTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acl),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifyTargets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tsig_key: {
      value: dnsZoneOutboundZoneTransferTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneOutboundZoneTransferTsigKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneOutboundZoneTransferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZoneOutboundZoneTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._notifyTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyTargets = this._notifyTargets;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneOutboundZoneTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acl = undefined;
      this._enabled = undefined;
      this._notifyTargets = undefined;
      this._tsigKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acl = value.acl;
      this._enabled = value.enabled;
      this._notifyTargets = value.notifyTargets;
      this._tsigKey.internalValue = value.tsigKey;
    }
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string[]; 
  public get acl() {
    return cdktf.Fn.tolist(this.getListAttribute('acl'));
  }
  public set acl(value: string[]) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
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

  // notify_targets - computed: false, optional: true, required: false
  private _notifyTargets?: string[]; 
  public get notifyTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('notify_targets'));
  }
  public set notifyTargets(value: string[]) {
    this._notifyTargets = value;
  }
  public resetNotifyTargets() {
    this._notifyTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyTargetsInput() {
    return this._notifyTargets;
  }

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsZoneOutboundZoneTransferTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsZoneOutboundZoneTransferTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }
}
export interface DnsZoneTsigKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#algorithm DnsZone#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#secret DnsZone#secret}
  */
  readonly secret: string;
}

export function dnsZoneTsigKeyToTerraform(struct?: DnsZoneTsigKeyOutputReference | DnsZoneTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    name: cdktf.stringToTerraform(struct!.name),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dnsZoneTsigKeyToHclTerraform(struct?: DnsZoneTsigKeyOutputReference | DnsZoneTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
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
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZoneTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._name = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._name = value.name;
      this._secret = value.secret;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone akamai_dns_zone}
*/
export class DnsZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_dns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsZone to import
  * @param importFromId The id of the existing DnsZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_dns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_zone akamai_dns_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_dns_zone',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._contract = config.contract;
    this._endCustomerId = config.endCustomerId;
    this._group = config.group;
    this._id = config.id;
    this._masters = config.masters;
    this._signAndServe = config.signAndServe;
    this._signAndServeAlgorithm = config.signAndServeAlgorithm;
    this._target = config.target;
    this._type = config.type;
    this._zone = config.zone;
    this._outboundZoneTransfer.internalValue = config.outboundZoneTransfer;
    this._tsigKey.internalValue = config.tsigKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_state - computed: true, optional: false, required: false
  public get activationState() {
    return this.getStringAttribute('activation_state');
  }

  // alias_count - computed: true, optional: false, required: false
  public get aliasCount() {
    return this.getNumberAttribute('alias_count');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // contract - computed: false, optional: false, required: true
  private _contract?: string; 
  public get contract() {
    return this.getStringAttribute('contract');
  }
  public set contract(value: string) {
    this._contract = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractInput() {
    return this._contract;
  }

  // end_customer_id - computed: false, optional: true, required: false
  private _endCustomerId?: string; 
  public get endCustomerId() {
    return this.getStringAttribute('end_customer_id');
  }
  public set endCustomerId(value: string) {
    this._endCustomerId = value;
  }
  public resetEndCustomerId() {
    this._endCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endCustomerIdInput() {
    return this._endCustomerId;
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

  // masters - computed: false, optional: true, required: false
  private _masters?: string[]; 
  public get masters() {
    return cdktf.Fn.tolist(this.getListAttribute('masters'));
  }
  public set masters(value: string[]) {
    this._masters = value;
  }
  public resetMasters() {
    this._masters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mastersInput() {
    return this._masters;
  }

  // sign_and_serve - computed: false, optional: true, required: false
  private _signAndServe?: boolean | cdktf.IResolvable; 
  public get signAndServe() {
    return this.getBooleanAttribute('sign_and_serve');
  }
  public set signAndServe(value: boolean | cdktf.IResolvable) {
    this._signAndServe = value;
  }
  public resetSignAndServe() {
    this._signAndServe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAndServeInput() {
    return this._signAndServe;
  }

  // sign_and_serve_algorithm - computed: false, optional: true, required: false
  private _signAndServeAlgorithm?: string; 
  public get signAndServeAlgorithm() {
    return this.getStringAttribute('sign_and_serve_algorithm');
  }
  public set signAndServeAlgorithm(value: string) {
    this._signAndServeAlgorithm = value;
  }
  public resetSignAndServeAlgorithm() {
    this._signAndServeAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAndServeAlgorithmInput() {
    return this._signAndServeAlgorithm;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // outbound_zone_transfer - computed: false, optional: true, required: false
  private _outboundZoneTransfer = new DnsZoneOutboundZoneTransferOutputReference(this, "outbound_zone_transfer");
  public get outboundZoneTransfer() {
    return this._outboundZoneTransfer;
  }
  public putOutboundZoneTransfer(value: DnsZoneOutboundZoneTransfer) {
    this._outboundZoneTransfer.internalValue = value;
  }
  public resetOutboundZoneTransfer() {
    this._outboundZoneTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundZoneTransferInput() {
    return this._outboundZoneTransfer.internalValue;
  }

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsZoneTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsZoneTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      contract: cdktf.stringToTerraform(this._contract),
      end_customer_id: cdktf.stringToTerraform(this._endCustomerId),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      masters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._masters),
      sign_and_serve: cdktf.booleanToTerraform(this._signAndServe),
      sign_and_serve_algorithm: cdktf.stringToTerraform(this._signAndServeAlgorithm),
      target: cdktf.stringToTerraform(this._target),
      type: cdktf.stringToTerraform(this._type),
      zone: cdktf.stringToTerraform(this._zone),
      outbound_zone_transfer: dnsZoneOutboundZoneTransferToTerraform(this._outboundZoneTransfer.internalValue),
      tsig_key: dnsZoneTsigKeyToTerraform(this._tsigKey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract: {
        value: cdktf.stringToHclTerraform(this._contract),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_customer_id: {
        value: cdktf.stringToHclTerraform(this._endCustomerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      masters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._masters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sign_and_serve: {
        value: cdktf.booleanToHclTerraform(this._signAndServe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sign_and_serve_algorithm: {
        value: cdktf.stringToHclTerraform(this._signAndServeAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_zone_transfer: {
        value: dnsZoneOutboundZoneTransferToHclTerraform(this._outboundZoneTransfer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsZoneOutboundZoneTransferList",
      },
      tsig_key: {
        value: dnsZoneTsigKeyToHclTerraform(this._tsigKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsZoneTsigKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
