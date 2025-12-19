// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkTwampResponderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable both IP and IPv6 TWAMP packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder#enable_both_ip_ipv6 NetworkTwampResponder#enable_both_ip_ipv6}
  */
  readonly enableBothIpIpv6?: number;
  /**
  * Enable IP TWAMP packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder#enable_ip NetworkTwampResponder#enable_ip}
  */
  readonly enableIp?: number;
  /**
  * Enable IPv6 TWAMP packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder#enable_ipv6 NetworkTwampResponder#enable_ipv6}
  */
  readonly enableIpv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder#id NetworkTwampResponder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder#port NetworkTwampResponder#port}
  */
  readonly port?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder#uuid NetworkTwampResponder#uuid}
  */
  readonly uuid?: string;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder#ip NetworkTwampResponder#ip}
  */
  readonly ip?: NetworkTwampResponderIp;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder#ipv6 NetworkTwampResponder#ipv6}
  */
  readonly ipv6?: NetworkTwampResponderIpv6;
}
export interface NetworkTwampResponderIp {
  /**
  * ACL id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder#acl_id NetworkTwampResponder#acl_id}
  */
  readonly aclId?: number;
  /**
  * Apply a named access list (Access List name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder#acl_name NetworkTwampResponder#acl_name}
  */
  readonly aclName?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder#uuid NetworkTwampResponder#uuid}
  */
  readonly uuid?: string;
}

export function networkTwampResponderIpToTerraform(struct?: NetworkTwampResponderIpOutputReference | NetworkTwampResponderIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_id: cdktf.numberToTerraform(struct!.aclId),
    acl_name: cdktf.stringToTerraform(struct!.aclName),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function networkTwampResponderIpToHclTerraform(struct?: NetworkTwampResponderIpOutputReference | NetworkTwampResponderIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_id: {
      value: cdktf.numberToHclTerraform(struct!.aclId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkTwampResponderIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkTwampResponderIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclId = this._aclId;
    }
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkTwampResponderIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aclId = undefined;
      this._aclName = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aclId = value.aclId;
      this._aclName = value.aclName;
      this._uuid = value.uuid;
    }
  }

  // acl_id - computed: false, optional: true, required: false
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface NetworkTwampResponderIpv6 {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder#uuid NetworkTwampResponder#uuid}
  */
  readonly uuid?: string;
  /**
  * Apply an access list (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder#v6_acl_name NetworkTwampResponder#v6_acl_name}
  */
  readonly v6AclName?: string;
}

export function networkTwampResponderIpv6ToTerraform(struct?: NetworkTwampResponderIpv6OutputReference | NetworkTwampResponderIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    v6_acl_name: cdktf.stringToTerraform(struct!.v6AclName),
  }
}


export function networkTwampResponderIpv6ToHclTerraform(struct?: NetworkTwampResponderIpv6OutputReference | NetworkTwampResponderIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6_acl_name: {
      value: cdktf.stringToHclTerraform(struct!.v6AclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkTwampResponderIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkTwampResponderIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._v6AclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6AclName = this._v6AclName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkTwampResponderIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._v6AclName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._v6AclName = value.v6AclName;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // v6_acl_name - computed: false, optional: true, required: false
  private _v6AclName?: string; 
  public get v6AclName() {
    return this.getStringAttribute('v6_acl_name');
  }
  public set v6AclName(value: string) {
    this._v6AclName = value;
  }
  public resetV6AclName() {
    this._v6AclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AclNameInput() {
    return this._v6AclName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder thunder_network_twamp_responder}
*/
export class NetworkTwampResponder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_twamp_responder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkTwampResponder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkTwampResponder to import
  * @param importFromId The id of the existing NetworkTwampResponder that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkTwampResponder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_twamp_responder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_twamp_responder thunder_network_twamp_responder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkTwampResponderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkTwampResponderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_twamp_responder',
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
    this._enableBothIpIpv6 = config.enableBothIpIpv6;
    this._enableIp = config.enableIp;
    this._enableIpv6 = config.enableIpv6;
    this._id = config.id;
    this._port = config.port;
    this._uuid = config.uuid;
    this._ip.internalValue = config.ip;
    this._ipv6.internalValue = config.ipv6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_both_ip_ipv6 - computed: false, optional: true, required: false
  private _enableBothIpIpv6?: number; 
  public get enableBothIpIpv6() {
    return this.getNumberAttribute('enable_both_ip_ipv6');
  }
  public set enableBothIpIpv6(value: number) {
    this._enableBothIpIpv6 = value;
  }
  public resetEnableBothIpIpv6() {
    this._enableBothIpIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBothIpIpv6Input() {
    return this._enableBothIpIpv6;
  }

  // enable_ip - computed: false, optional: true, required: false
  private _enableIp?: number; 
  public get enableIp() {
    return this.getNumberAttribute('enable_ip');
  }
  public set enableIp(value: number) {
    this._enableIp = value;
  }
  public resetEnableIp() {
    this._enableIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpInput() {
    return this._enableIp;
  }

  // enable_ipv6 - computed: false, optional: true, required: false
  private _enableIpv6?: number; 
  public get enableIpv6() {
    return this.getNumberAttribute('enable_ipv6');
  }
  public set enableIpv6(value: number) {
    this._enableIpv6 = value;
  }
  public resetEnableIpv6() {
    this._enableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new NetworkTwampResponderIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: NetworkTwampResponderIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new NetworkTwampResponderIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: NetworkTwampResponderIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_both_ip_ipv6: cdktf.numberToTerraform(this._enableBothIpIpv6),
      enable_ip: cdktf.numberToTerraform(this._enableIp),
      enable_ipv6: cdktf.numberToTerraform(this._enableIpv6),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      uuid: cdktf.stringToTerraform(this._uuid),
      ip: networkTwampResponderIpToTerraform(this._ip.internalValue),
      ipv6: networkTwampResponderIpv6ToTerraform(this._ipv6.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_both_ip_ipv6: {
        value: cdktf.numberToHclTerraform(this._enableBothIpIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_ip: {
        value: cdktf.numberToHclTerraform(this._enableIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_ipv6: {
        value: cdktf.numberToHclTerraform(this._enableIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: networkTwampResponderIpToHclTerraform(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkTwampResponderIpList",
      },
      ipv6: {
        value: networkTwampResponderIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkTwampResponderIpv6List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
