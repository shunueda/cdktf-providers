// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateSslL4Config extends cdktf.TerraformMetaArguments {
  /**
  * Allow Non-TLS (SSLv3 and lower) traffic (Warning: security may be compromised)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#allow_non_tls DdosZoneTemplateSslL4#allow_non_tls}
  */
  readonly allowNonTls?: number;
  /**
  * Disable this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#disable DdosZoneTemplateSslL4#disable}
  */
  readonly disable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#id DdosZoneTemplateSslL4#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#ssl_l4_tmpl_name DdosZoneTemplateSslL4#ssl_l4_tmpl_name}
  */
  readonly sslL4TmplName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#user_tag DdosZoneTemplateSslL4#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#uuid DdosZoneTemplateSslL4#uuid}
  */
  readonly uuid?: string;
  /**
  * auth_handshake block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#auth_handshake DdosZoneTemplateSslL4#auth_handshake}
  */
  readonly authHandshake?: DdosZoneTemplateSslL4AuthHandshake;
  /**
  * dst block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#dst DdosZoneTemplateSslL4#dst}
  */
  readonly dst?: DdosZoneTemplateSslL4Dst;
  /**
  * multi_pu_threshold_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#multi_pu_threshold_distribution DdosZoneTemplateSslL4#multi_pu_threshold_distribution}
  */
  readonly multiPuThresholdDistribution?: DdosZoneTemplateSslL4MultiPuThresholdDistribution;
  /**
  * renegotiation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#renegotiation DdosZoneTemplateSslL4#renegotiation}
  */
  readonly renegotiation?: DdosZoneTemplateSslL4Renegotiation;
  /**
  * src block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#src DdosZoneTemplateSslL4#src}
  */
  readonly src?: DdosZoneTemplateSslL4Src;
  /**
  * ssl_traffic_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#ssl_traffic_check DdosZoneTemplateSslL4#ssl_traffic_check}
  */
  readonly sslTrafficCheck?: DdosZoneTemplateSslL4SslTrafficCheck;
}
export interface DdosZoneTemplateSslL4AuthHandshakeCertCfg {
  /**
  * SSL certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#cert DdosZoneTemplateSslL4#cert}
  */
  readonly cert?: string;
  /**
  * SSL key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#key DdosZoneTemplateSslL4#key}
  */
  readonly key?: string;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#key_passphrase DdosZoneTemplateSslL4#key_passphrase}
  */
  readonly keyPassphrase?: string;
}

export function ddosZoneTemplateSslL4AuthHandshakeCertCfgToTerraform(struct?: DdosZoneTemplateSslL4AuthHandshakeCertCfgOutputReference | DdosZoneTemplateSslL4AuthHandshakeCertCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    key: cdktf.stringToTerraform(struct!.key),
    key_passphrase: cdktf.stringToTerraform(struct!.keyPassphrase),
  }
}


export function ddosZoneTemplateSslL4AuthHandshakeCertCfgToHclTerraform(struct?: DdosZoneTemplateSslL4AuthHandshakeCertCfgOutputReference | DdosZoneTemplateSslL4AuthHandshakeCertCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.keyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSslL4AuthHandshakeCertCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSslL4AuthHandshakeCertCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassphrase = this._keyPassphrase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSslL4AuthHandshakeCertCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cert = undefined;
      this._key = undefined;
      this._keyPassphrase = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cert = value.cert;
      this._key = value.key;
      this._keyPassphrase = value.keyPassphrase;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_passphrase - computed: false, optional: true, required: false
  private _keyPassphrase?: string; 
  public get keyPassphrase() {
    return this.getStringAttribute('key_passphrase');
  }
  public set keyPassphrase(value: string) {
    this._keyPassphrase = value;
  }
  public resetKeyPassphrase() {
    this._keyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassphraseInput() {
    return this._keyPassphrase;
  }
}
export interface DdosZoneTemplateSslL4AuthHandshakeServerNameListStruct {
  /**
  * Server Certificate associated to SNI (Server Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#server_cert DdosZoneTemplateSslL4#server_cert}
  */
  readonly serverCert?: string;
  /**
  * Server Private Key associated to SNI (Server Private Key Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#server_key DdosZoneTemplateSslL4#server_key}
  */
  readonly serverKey?: string;
  /**
  * Server name indication in Client hello extension (Server name String)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#server_name DdosZoneTemplateSslL4#server_name}
  */
  readonly serverName?: string;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#server_passphrase DdosZoneTemplateSslL4#server_passphrase}
  */
  readonly serverPassphrase?: string;
}

export function ddosZoneTemplateSslL4AuthHandshakeServerNameListStructToTerraform(struct?: DdosZoneTemplateSslL4AuthHandshakeServerNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_cert: cdktf.stringToTerraform(struct!.serverCert),
    server_key: cdktf.stringToTerraform(struct!.serverKey),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    server_passphrase: cdktf.stringToTerraform(struct!.serverPassphrase),
  }
}


export function ddosZoneTemplateSslL4AuthHandshakeServerNameListStructToHclTerraform(struct?: DdosZoneTemplateSslL4AuthHandshakeServerNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_cert: {
      value: cdktf.stringToHclTerraform(struct!.serverCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_key: {
      value: cdktf.stringToHclTerraform(struct!.serverKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.serverPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSslL4AuthHandshakeServerNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateSslL4AuthHandshakeServerNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCert = this._serverCert;
    }
    if (this._serverKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKey = this._serverKey;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._serverPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPassphrase = this._serverPassphrase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSslL4AuthHandshakeServerNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverCert = undefined;
      this._serverKey = undefined;
      this._serverName = undefined;
      this._serverPassphrase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverCert = value.serverCert;
      this._serverKey = value.serverKey;
      this._serverName = value.serverName;
      this._serverPassphrase = value.serverPassphrase;
    }
  }

  // server_cert - computed: false, optional: true, required: false
  private _serverCert?: string; 
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
  public set serverCert(value: string) {
    this._serverCert = value;
  }
  public resetServerCert() {
    this._serverCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertInput() {
    return this._serverCert;
  }

  // server_key - computed: false, optional: true, required: false
  private _serverKey?: string; 
  public get serverKey() {
    return this.getStringAttribute('server_key');
  }
  public set serverKey(value: string) {
    this._serverKey = value;
  }
  public resetServerKey() {
    this._serverKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeyInput() {
    return this._serverKey;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // server_passphrase - computed: false, optional: true, required: false
  private _serverPassphrase?: string; 
  public get serverPassphrase() {
    return this.getStringAttribute('server_passphrase');
  }
  public set serverPassphrase(value: string) {
    this._serverPassphrase = value;
  }
  public resetServerPassphrase() {
    this._serverPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPassphraseInput() {
    return this._serverPassphrase;
  }
}

export class DdosZoneTemplateSslL4AuthHandshakeServerNameListStructList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateSslL4AuthHandshakeServerNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateSslL4AuthHandshakeServerNameListStructOutputReference {
    return new DdosZoneTemplateSslL4AuthHandshakeServerNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateSslL4AuthHandshake {
  /**
  * 'drop': Drop packets (Default); 'blacklist-src': Blacklist-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#auth_handshake_fail_action DdosZoneTemplateSslL4#auth_handshake_fail_action}
  */
  readonly authHandshakeFailAction?: string;
  /**
  * Configure action-list to take for failing the authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#auth_handshake_fail_action_list_name DdosZoneTemplateSslL4#auth_handshake_fail_action_list_name}
  */
  readonly authHandshakeFailActionListName?: string;
  /**
  * 'authenticate-src': authenticate-src (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#auth_handshake_pass_action DdosZoneTemplateSslL4#auth_handshake_pass_action}
  */
  readonly authHandshakePassAction?: string;
  /**
  * Configure action-list to take for passing the authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#auth_handshake_pass_action_list_name DdosZoneTemplateSslL4#auth_handshake_pass_action_list_name}
  */
  readonly authHandshakePassActionListName?: string;
  /**
  * Connection timeout (default 5 seconds) and trials (default 5 times) (DST support only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#auth_handshake_timeout DdosZoneTemplateSslL4#auth_handshake_timeout}
  */
  readonly authHandshakeTimeout?: number;
  /**
  * Number of failed handshakes before entry marked black
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#auth_handshake_trials DdosZoneTemplateSslL4#auth_handshake_trials}
  */
  readonly authHandshakeTrials?: number;
  /**
  * cert_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#cert_cfg DdosZoneTemplateSslL4#cert_cfg}
  */
  readonly certCfg?: DdosZoneTemplateSslL4AuthHandshakeCertCfg;
  /**
  * server_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#server_name_list DdosZoneTemplateSslL4#server_name_list}
  */
  readonly serverNameList?: DdosZoneTemplateSslL4AuthHandshakeServerNameListStruct[] | cdktf.IResolvable;
}

export function ddosZoneTemplateSslL4AuthHandshakeToTerraform(struct?: DdosZoneTemplateSslL4AuthHandshakeOutputReference | DdosZoneTemplateSslL4AuthHandshake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_handshake_fail_action: cdktf.stringToTerraform(struct!.authHandshakeFailAction),
    auth_handshake_fail_action_list_name: cdktf.stringToTerraform(struct!.authHandshakeFailActionListName),
    auth_handshake_pass_action: cdktf.stringToTerraform(struct!.authHandshakePassAction),
    auth_handshake_pass_action_list_name: cdktf.stringToTerraform(struct!.authHandshakePassActionListName),
    auth_handshake_timeout: cdktf.numberToTerraform(struct!.authHandshakeTimeout),
    auth_handshake_trials: cdktf.numberToTerraform(struct!.authHandshakeTrials),
    cert_cfg: ddosZoneTemplateSslL4AuthHandshakeCertCfgToTerraform(struct!.certCfg),
    server_name_list: cdktf.listMapper(ddosZoneTemplateSslL4AuthHandshakeServerNameListStructToTerraform, true)(struct!.serverNameList),
  }
}


export function ddosZoneTemplateSslL4AuthHandshakeToHclTerraform(struct?: DdosZoneTemplateSslL4AuthHandshakeOutputReference | DdosZoneTemplateSslL4AuthHandshake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_handshake_fail_action: {
      value: cdktf.stringToHclTerraform(struct!.authHandshakeFailAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_handshake_fail_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.authHandshakeFailActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_handshake_pass_action: {
      value: cdktf.stringToHclTerraform(struct!.authHandshakePassAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_handshake_pass_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.authHandshakePassActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_handshake_timeout: {
      value: cdktf.numberToHclTerraform(struct!.authHandshakeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_handshake_trials: {
      value: cdktf.numberToHclTerraform(struct!.authHandshakeTrials),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_cfg: {
      value: ddosZoneTemplateSslL4AuthHandshakeCertCfgToHclTerraform(struct!.certCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSslL4AuthHandshakeCertCfgList",
    },
    server_name_list: {
      value: cdktf.listMapperHcl(ddosZoneTemplateSslL4AuthHandshakeServerNameListStructToHclTerraform, true)(struct!.serverNameList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSslL4AuthHandshakeServerNameListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSslL4AuthHandshakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSslL4AuthHandshake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authHandshakeFailAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.authHandshakeFailAction = this._authHandshakeFailAction;
    }
    if (this._authHandshakeFailActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authHandshakeFailActionListName = this._authHandshakeFailActionListName;
    }
    if (this._authHandshakePassAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.authHandshakePassAction = this._authHandshakePassAction;
    }
    if (this._authHandshakePassActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authHandshakePassActionListName = this._authHandshakePassActionListName;
    }
    if (this._authHandshakeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.authHandshakeTimeout = this._authHandshakeTimeout;
    }
    if (this._authHandshakeTrials !== undefined) {
      hasAnyValues = true;
      internalValueResult.authHandshakeTrials = this._authHandshakeTrials;
    }
    if (this._certCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certCfg = this._certCfg?.internalValue;
    }
    if (this._serverNameList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNameList = this._serverNameList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSslL4AuthHandshake | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authHandshakeFailAction = undefined;
      this._authHandshakeFailActionListName = undefined;
      this._authHandshakePassAction = undefined;
      this._authHandshakePassActionListName = undefined;
      this._authHandshakeTimeout = undefined;
      this._authHandshakeTrials = undefined;
      this._certCfg.internalValue = undefined;
      this._serverNameList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authHandshakeFailAction = value.authHandshakeFailAction;
      this._authHandshakeFailActionListName = value.authHandshakeFailActionListName;
      this._authHandshakePassAction = value.authHandshakePassAction;
      this._authHandshakePassActionListName = value.authHandshakePassActionListName;
      this._authHandshakeTimeout = value.authHandshakeTimeout;
      this._authHandshakeTrials = value.authHandshakeTrials;
      this._certCfg.internalValue = value.certCfg;
      this._serverNameList.internalValue = value.serverNameList;
    }
  }

  // auth_handshake_fail_action - computed: false, optional: true, required: false
  private _authHandshakeFailAction?: string; 
  public get authHandshakeFailAction() {
    return this.getStringAttribute('auth_handshake_fail_action');
  }
  public set authHandshakeFailAction(value: string) {
    this._authHandshakeFailAction = value;
  }
  public resetAuthHandshakeFailAction() {
    this._authHandshakeFailAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHandshakeFailActionInput() {
    return this._authHandshakeFailAction;
  }

  // auth_handshake_fail_action_list_name - computed: false, optional: true, required: false
  private _authHandshakeFailActionListName?: string; 
  public get authHandshakeFailActionListName() {
    return this.getStringAttribute('auth_handshake_fail_action_list_name');
  }
  public set authHandshakeFailActionListName(value: string) {
    this._authHandshakeFailActionListName = value;
  }
  public resetAuthHandshakeFailActionListName() {
    this._authHandshakeFailActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHandshakeFailActionListNameInput() {
    return this._authHandshakeFailActionListName;
  }

  // auth_handshake_pass_action - computed: false, optional: true, required: false
  private _authHandshakePassAction?: string; 
  public get authHandshakePassAction() {
    return this.getStringAttribute('auth_handshake_pass_action');
  }
  public set authHandshakePassAction(value: string) {
    this._authHandshakePassAction = value;
  }
  public resetAuthHandshakePassAction() {
    this._authHandshakePassAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHandshakePassActionInput() {
    return this._authHandshakePassAction;
  }

  // auth_handshake_pass_action_list_name - computed: false, optional: true, required: false
  private _authHandshakePassActionListName?: string; 
  public get authHandshakePassActionListName() {
    return this.getStringAttribute('auth_handshake_pass_action_list_name');
  }
  public set authHandshakePassActionListName(value: string) {
    this._authHandshakePassActionListName = value;
  }
  public resetAuthHandshakePassActionListName() {
    this._authHandshakePassActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHandshakePassActionListNameInput() {
    return this._authHandshakePassActionListName;
  }

  // auth_handshake_timeout - computed: false, optional: true, required: false
  private _authHandshakeTimeout?: number; 
  public get authHandshakeTimeout() {
    return this.getNumberAttribute('auth_handshake_timeout');
  }
  public set authHandshakeTimeout(value: number) {
    this._authHandshakeTimeout = value;
  }
  public resetAuthHandshakeTimeout() {
    this._authHandshakeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHandshakeTimeoutInput() {
    return this._authHandshakeTimeout;
  }

  // auth_handshake_trials - computed: false, optional: true, required: false
  private _authHandshakeTrials?: number; 
  public get authHandshakeTrials() {
    return this.getNumberAttribute('auth_handshake_trials');
  }
  public set authHandshakeTrials(value: number) {
    this._authHandshakeTrials = value;
  }
  public resetAuthHandshakeTrials() {
    this._authHandshakeTrials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHandshakeTrialsInput() {
    return this._authHandshakeTrials;
  }

  // cert_cfg - computed: false, optional: true, required: false
  private _certCfg = new DdosZoneTemplateSslL4AuthHandshakeCertCfgOutputReference(this, "cert_cfg");
  public get certCfg() {
    return this._certCfg;
  }
  public putCertCfg(value: DdosZoneTemplateSslL4AuthHandshakeCertCfg) {
    this._certCfg.internalValue = value;
  }
  public resetCertCfg() {
    this._certCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCfgInput() {
    return this._certCfg.internalValue;
  }

  // server_name_list - computed: false, optional: true, required: false
  private _serverNameList = new DdosZoneTemplateSslL4AuthHandshakeServerNameListStructList(this, "server_name_list", false);
  public get serverNameList() {
    return this._serverNameList;
  }
  public putServerNameList(value: DdosZoneTemplateSslL4AuthHandshakeServerNameListStruct[] | cdktf.IResolvable) {
    this._serverNameList.internalValue = value;
  }
  public resetServerNameList() {
    this._serverNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameListInput() {
    return this._serverNameList.internalValue;
  }
}
export interface DdosZoneTemplateSslL4DstRateLimitRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#dst_request_rate_limit DdosZoneTemplateSslL4#dst_request_rate_limit}
  */
  readonly dstRequestRateLimit?: number;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#dst_request_rate_limit_action DdosZoneTemplateSslL4#dst_request_rate_limit_action}
  */
  readonly dstRequestRateLimitAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#dst_request_rate_limit_action_list_name DdosZoneTemplateSslL4#dst_request_rate_limit_action_list_name}
  */
  readonly dstRequestRateLimitActionListName?: string;
}

export function ddosZoneTemplateSslL4DstRateLimitRequestToTerraform(struct?: DdosZoneTemplateSslL4DstRateLimitRequestOutputReference | DdosZoneTemplateSslL4DstRateLimitRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_request_rate_limit: cdktf.numberToTerraform(struct!.dstRequestRateLimit),
    dst_request_rate_limit_action: cdktf.stringToTerraform(struct!.dstRequestRateLimitAction),
    dst_request_rate_limit_action_list_name: cdktf.stringToTerraform(struct!.dstRequestRateLimitActionListName),
  }
}


export function ddosZoneTemplateSslL4DstRateLimitRequestToHclTerraform(struct?: DdosZoneTemplateSslL4DstRateLimitRequestOutputReference | DdosZoneTemplateSslL4DstRateLimitRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_request_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.dstRequestRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_request_rate_limit_action: {
      value: cdktf.stringToHclTerraform(struct!.dstRequestRateLimitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_request_rate_limit_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.dstRequestRateLimitActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSslL4DstRateLimitRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSslL4DstRateLimitRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstRequestRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstRequestRateLimit = this._dstRequestRateLimit;
    }
    if (this._dstRequestRateLimitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstRequestRateLimitAction = this._dstRequestRateLimitAction;
    }
    if (this._dstRequestRateLimitActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstRequestRateLimitActionListName = this._dstRequestRateLimitActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSslL4DstRateLimitRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstRequestRateLimit = undefined;
      this._dstRequestRateLimitAction = undefined;
      this._dstRequestRateLimitActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstRequestRateLimit = value.dstRequestRateLimit;
      this._dstRequestRateLimitAction = value.dstRequestRateLimitAction;
      this._dstRequestRateLimitActionListName = value.dstRequestRateLimitActionListName;
    }
  }

  // dst_request_rate_limit - computed: false, optional: true, required: false
  private _dstRequestRateLimit?: number; 
  public get dstRequestRateLimit() {
    return this.getNumberAttribute('dst_request_rate_limit');
  }
  public set dstRequestRateLimit(value: number) {
    this._dstRequestRateLimit = value;
  }
  public resetDstRequestRateLimit() {
    this._dstRequestRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRequestRateLimitInput() {
    return this._dstRequestRateLimit;
  }

  // dst_request_rate_limit_action - computed: false, optional: true, required: false
  private _dstRequestRateLimitAction?: string; 
  public get dstRequestRateLimitAction() {
    return this.getStringAttribute('dst_request_rate_limit_action');
  }
  public set dstRequestRateLimitAction(value: string) {
    this._dstRequestRateLimitAction = value;
  }
  public resetDstRequestRateLimitAction() {
    this._dstRequestRateLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRequestRateLimitActionInput() {
    return this._dstRequestRateLimitAction;
  }

  // dst_request_rate_limit_action_list_name - computed: false, optional: true, required: false
  private _dstRequestRateLimitActionListName?: string; 
  public get dstRequestRateLimitActionListName() {
    return this.getStringAttribute('dst_request_rate_limit_action_list_name');
  }
  public set dstRequestRateLimitActionListName(value: string) {
    this._dstRequestRateLimitActionListName = value;
  }
  public resetDstRequestRateLimitActionListName() {
    this._dstRequestRateLimitActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRequestRateLimitActionListNameInput() {
    return this._dstRequestRateLimitActionListName;
  }
}
export interface DdosZoneTemplateSslL4DstRateLimit {
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#request DdosZoneTemplateSslL4#request}
  */
  readonly request?: DdosZoneTemplateSslL4DstRateLimitRequest;
}

export function ddosZoneTemplateSslL4DstRateLimitToTerraform(struct?: DdosZoneTemplateSslL4DstRateLimitOutputReference | DdosZoneTemplateSslL4DstRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request: ddosZoneTemplateSslL4DstRateLimitRequestToTerraform(struct!.request),
  }
}


export function ddosZoneTemplateSslL4DstRateLimitToHclTerraform(struct?: DdosZoneTemplateSslL4DstRateLimitOutputReference | DdosZoneTemplateSslL4DstRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request: {
      value: ddosZoneTemplateSslL4DstRateLimitRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSslL4DstRateLimitRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSslL4DstRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSslL4DstRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSslL4DstRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._request.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._request.internalValue = value.request;
    }
  }

  // request - computed: false, optional: true, required: false
  private _request = new DdosZoneTemplateSslL4DstRateLimitRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DdosZoneTemplateSslL4DstRateLimitRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }
}
export interface DdosZoneTemplateSslL4Dst {
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#rate_limit DdosZoneTemplateSslL4#rate_limit}
  */
  readonly rateLimit?: DdosZoneTemplateSslL4DstRateLimit;
}

export function ddosZoneTemplateSslL4DstToTerraform(struct?: DdosZoneTemplateSslL4DstOutputReference | DdosZoneTemplateSslL4Dst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limit: ddosZoneTemplateSslL4DstRateLimitToTerraform(struct!.rateLimit),
  }
}


export function ddosZoneTemplateSslL4DstToHclTerraform(struct?: DdosZoneTemplateSslL4DstOutputReference | DdosZoneTemplateSslL4Dst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limit: {
      value: ddosZoneTemplateSslL4DstRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSslL4DstRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSslL4DstOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSslL4Dst | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSslL4Dst | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rateLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rateLimit.internalValue = value.rateLimit;
    }
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new DdosZoneTemplateSslL4DstRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: DdosZoneTemplateSslL4DstRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }
}
export interface DdosZoneTemplateSslL4MultiPuThresholdDistribution {
  /**
  * 'disable': Destination side rate limit only. Default: Enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#multi_pu_threshold_distribution_disable DdosZoneTemplateSslL4#multi_pu_threshold_distribution_disable}
  */
  readonly multiPuThresholdDistributionDisable?: string;
  /**
  * Destination side rate limit only. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#multi_pu_threshold_distribution_value DdosZoneTemplateSslL4#multi_pu_threshold_distribution_value}
  */
  readonly multiPuThresholdDistributionValue?: number;
}

export function ddosZoneTemplateSslL4MultiPuThresholdDistributionToTerraform(struct?: DdosZoneTemplateSslL4MultiPuThresholdDistributionOutputReference | DdosZoneTemplateSslL4MultiPuThresholdDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multi_pu_threshold_distribution_disable: cdktf.stringToTerraform(struct!.multiPuThresholdDistributionDisable),
    multi_pu_threshold_distribution_value: cdktf.numberToTerraform(struct!.multiPuThresholdDistributionValue),
  }
}


export function ddosZoneTemplateSslL4MultiPuThresholdDistributionToHclTerraform(struct?: DdosZoneTemplateSslL4MultiPuThresholdDistributionOutputReference | DdosZoneTemplateSslL4MultiPuThresholdDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multi_pu_threshold_distribution_disable: {
      value: cdktf.stringToHclTerraform(struct!.multiPuThresholdDistributionDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_pu_threshold_distribution_value: {
      value: cdktf.numberToHclTerraform(struct!.multiPuThresholdDistributionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSslL4MultiPuThresholdDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSslL4MultiPuThresholdDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiPuThresholdDistributionDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiPuThresholdDistributionDisable = this._multiPuThresholdDistributionDisable;
    }
    if (this._multiPuThresholdDistributionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiPuThresholdDistributionValue = this._multiPuThresholdDistributionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSslL4MultiPuThresholdDistribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._multiPuThresholdDistributionDisable = undefined;
      this._multiPuThresholdDistributionValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._multiPuThresholdDistributionDisable = value.multiPuThresholdDistributionDisable;
      this._multiPuThresholdDistributionValue = value.multiPuThresholdDistributionValue;
    }
  }

  // multi_pu_threshold_distribution_disable - computed: false, optional: true, required: false
  private _multiPuThresholdDistributionDisable?: string; 
  public get multiPuThresholdDistributionDisable() {
    return this.getStringAttribute('multi_pu_threshold_distribution_disable');
  }
  public set multiPuThresholdDistributionDisable(value: string) {
    this._multiPuThresholdDistributionDisable = value;
  }
  public resetMultiPuThresholdDistributionDisable() {
    this._multiPuThresholdDistributionDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuThresholdDistributionDisableInput() {
    return this._multiPuThresholdDistributionDisable;
  }

  // multi_pu_threshold_distribution_value - computed: false, optional: true, required: false
  private _multiPuThresholdDistributionValue?: number; 
  public get multiPuThresholdDistributionValue() {
    return this.getNumberAttribute('multi_pu_threshold_distribution_value');
  }
  public set multiPuThresholdDistributionValue(value: number) {
    this._multiPuThresholdDistributionValue = value;
  }
  public resetMultiPuThresholdDistributionValue() {
    this._multiPuThresholdDistributionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuThresholdDistributionValueInput() {
    return this._multiPuThresholdDistributionValue;
  }
}
export interface DdosZoneTemplateSslL4Renegotiation {
  /**
  * Number of renegotiation allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#num_renegotiation DdosZoneTemplateSslL4#num_renegotiation}
  */
  readonly numRenegotiation?: number;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#ssl_l4_reneg_action DdosZoneTemplateSslL4#ssl_l4_reneg_action}
  */
  readonly sslL4RenegAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#ssl_l4_reneg_action_list_name DdosZoneTemplateSslL4#ssl_l4_reneg_action_list_name}
  */
  readonly sslL4RenegActionListName?: string;
}

export function ddosZoneTemplateSslL4RenegotiationToTerraform(struct?: DdosZoneTemplateSslL4RenegotiationOutputReference | DdosZoneTemplateSslL4Renegotiation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_renegotiation: cdktf.numberToTerraform(struct!.numRenegotiation),
    ssl_l4_reneg_action: cdktf.stringToTerraform(struct!.sslL4RenegAction),
    ssl_l4_reneg_action_list_name: cdktf.stringToTerraform(struct!.sslL4RenegActionListName),
  }
}


export function ddosZoneTemplateSslL4RenegotiationToHclTerraform(struct?: DdosZoneTemplateSslL4RenegotiationOutputReference | DdosZoneTemplateSslL4Renegotiation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_renegotiation: {
      value: cdktf.numberToHclTerraform(struct!.numRenegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_reneg_action: {
      value: cdktf.stringToHclTerraform(struct!.sslL4RenegAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4_reneg_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.sslL4RenegActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSslL4RenegotiationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSslL4Renegotiation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRenegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRenegotiation = this._numRenegotiation;
    }
    if (this._sslL4RenegAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4RenegAction = this._sslL4RenegAction;
    }
    if (this._sslL4RenegActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4RenegActionListName = this._sslL4RenegActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSslL4Renegotiation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRenegotiation = undefined;
      this._sslL4RenegAction = undefined;
      this._sslL4RenegActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRenegotiation = value.numRenegotiation;
      this._sslL4RenegAction = value.sslL4RenegAction;
      this._sslL4RenegActionListName = value.sslL4RenegActionListName;
    }
  }

  // num_renegotiation - computed: false, optional: true, required: false
  private _numRenegotiation?: number; 
  public get numRenegotiation() {
    return this.getNumberAttribute('num_renegotiation');
  }
  public set numRenegotiation(value: number) {
    this._numRenegotiation = value;
  }
  public resetNumRenegotiation() {
    this._numRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRenegotiationInput() {
    return this._numRenegotiation;
  }

  // ssl_l4_reneg_action - computed: false, optional: true, required: false
  private _sslL4RenegAction?: string; 
  public get sslL4RenegAction() {
    return this.getStringAttribute('ssl_l4_reneg_action');
  }
  public set sslL4RenegAction(value: string) {
    this._sslL4RenegAction = value;
  }
  public resetSslL4RenegAction() {
    this._sslL4RenegAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4RenegActionInput() {
    return this._sslL4RenegAction;
  }

  // ssl_l4_reneg_action_list_name - computed: false, optional: true, required: false
  private _sslL4RenegActionListName?: string; 
  public get sslL4RenegActionListName() {
    return this.getStringAttribute('ssl_l4_reneg_action_list_name');
  }
  public set sslL4RenegActionListName(value: string) {
    this._sslL4RenegActionListName = value;
  }
  public resetSslL4RenegActionListName() {
    this._sslL4RenegActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4RenegActionListNameInput() {
    return this._sslL4RenegActionListName;
  }
}
export interface DdosZoneTemplateSslL4SrcRateLimitRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#src_request_rate_limit DdosZoneTemplateSslL4#src_request_rate_limit}
  */
  readonly srcRequestRateLimit?: number;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#src_request_rate_limit_action DdosZoneTemplateSslL4#src_request_rate_limit_action}
  */
  readonly srcRequestRateLimitAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#src_request_rate_limit_action_list_name DdosZoneTemplateSslL4#src_request_rate_limit_action_list_name}
  */
  readonly srcRequestRateLimitActionListName?: string;
}

export function ddosZoneTemplateSslL4SrcRateLimitRequestToTerraform(struct?: DdosZoneTemplateSslL4SrcRateLimitRequestOutputReference | DdosZoneTemplateSslL4SrcRateLimitRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_request_rate_limit: cdktf.numberToTerraform(struct!.srcRequestRateLimit),
    src_request_rate_limit_action: cdktf.stringToTerraform(struct!.srcRequestRateLimitAction),
    src_request_rate_limit_action_list_name: cdktf.stringToTerraform(struct!.srcRequestRateLimitActionListName),
  }
}


export function ddosZoneTemplateSslL4SrcRateLimitRequestToHclTerraform(struct?: DdosZoneTemplateSslL4SrcRateLimitRequestOutputReference | DdosZoneTemplateSslL4SrcRateLimitRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_request_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.srcRequestRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_request_rate_limit_action: {
      value: cdktf.stringToHclTerraform(struct!.srcRequestRateLimitAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_request_rate_limit_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.srcRequestRateLimitActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSslL4SrcRateLimitRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSslL4SrcRateLimitRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcRequestRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRequestRateLimit = this._srcRequestRateLimit;
    }
    if (this._srcRequestRateLimitAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRequestRateLimitAction = this._srcRequestRateLimitAction;
    }
    if (this._srcRequestRateLimitActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRequestRateLimitActionListName = this._srcRequestRateLimitActionListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSslL4SrcRateLimitRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcRequestRateLimit = undefined;
      this._srcRequestRateLimitAction = undefined;
      this._srcRequestRateLimitActionListName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcRequestRateLimit = value.srcRequestRateLimit;
      this._srcRequestRateLimitAction = value.srcRequestRateLimitAction;
      this._srcRequestRateLimitActionListName = value.srcRequestRateLimitActionListName;
    }
  }

  // src_request_rate_limit - computed: false, optional: true, required: false
  private _srcRequestRateLimit?: number; 
  public get srcRequestRateLimit() {
    return this.getNumberAttribute('src_request_rate_limit');
  }
  public set srcRequestRateLimit(value: number) {
    this._srcRequestRateLimit = value;
  }
  public resetSrcRequestRateLimit() {
    this._srcRequestRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRequestRateLimitInput() {
    return this._srcRequestRateLimit;
  }

  // src_request_rate_limit_action - computed: false, optional: true, required: false
  private _srcRequestRateLimitAction?: string; 
  public get srcRequestRateLimitAction() {
    return this.getStringAttribute('src_request_rate_limit_action');
  }
  public set srcRequestRateLimitAction(value: string) {
    this._srcRequestRateLimitAction = value;
  }
  public resetSrcRequestRateLimitAction() {
    this._srcRequestRateLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRequestRateLimitActionInput() {
    return this._srcRequestRateLimitAction;
  }

  // src_request_rate_limit_action_list_name - computed: false, optional: true, required: false
  private _srcRequestRateLimitActionListName?: string; 
  public get srcRequestRateLimitActionListName() {
    return this.getStringAttribute('src_request_rate_limit_action_list_name');
  }
  public set srcRequestRateLimitActionListName(value: string) {
    this._srcRequestRateLimitActionListName = value;
  }
  public resetSrcRequestRateLimitActionListName() {
    this._srcRequestRateLimitActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRequestRateLimitActionListNameInput() {
    return this._srcRequestRateLimitActionListName;
  }
}
export interface DdosZoneTemplateSslL4SrcRateLimit {
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#request DdosZoneTemplateSslL4#request}
  */
  readonly request?: DdosZoneTemplateSslL4SrcRateLimitRequest;
}

export function ddosZoneTemplateSslL4SrcRateLimitToTerraform(struct?: DdosZoneTemplateSslL4SrcRateLimitOutputReference | DdosZoneTemplateSslL4SrcRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request: ddosZoneTemplateSslL4SrcRateLimitRequestToTerraform(struct!.request),
  }
}


export function ddosZoneTemplateSslL4SrcRateLimitToHclTerraform(struct?: DdosZoneTemplateSslL4SrcRateLimitOutputReference | DdosZoneTemplateSslL4SrcRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request: {
      value: ddosZoneTemplateSslL4SrcRateLimitRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSslL4SrcRateLimitRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSslL4SrcRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSslL4SrcRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSslL4SrcRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._request.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._request.internalValue = value.request;
    }
  }

  // request - computed: false, optional: true, required: false
  private _request = new DdosZoneTemplateSslL4SrcRateLimitRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DdosZoneTemplateSslL4SrcRateLimitRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }
}
export interface DdosZoneTemplateSslL4Src {
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#rate_limit DdosZoneTemplateSslL4#rate_limit}
  */
  readonly rateLimit?: DdosZoneTemplateSslL4SrcRateLimit;
}

export function ddosZoneTemplateSslL4SrcToTerraform(struct?: DdosZoneTemplateSslL4SrcOutputReference | DdosZoneTemplateSslL4Src): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limit: ddosZoneTemplateSslL4SrcRateLimitToTerraform(struct!.rateLimit),
  }
}


export function ddosZoneTemplateSslL4SrcToHclTerraform(struct?: DdosZoneTemplateSslL4SrcOutputReference | DdosZoneTemplateSslL4Src): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limit: {
      value: ddosZoneTemplateSslL4SrcRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSslL4SrcRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSslL4SrcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSslL4Src | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSslL4Src | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rateLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rateLimit.internalValue = value.rateLimit;
    }
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new DdosZoneTemplateSslL4SrcRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: DdosZoneTemplateSslL4SrcRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }
}
export interface DdosZoneTemplateSslL4SslTrafficCheck {
  /**
  * Apply checks to SSL connections initialized by ACK packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#check_resumed_connection DdosZoneTemplateSslL4#check_resumed_connection}
  */
  readonly checkResumedConnection?: number;
  /**
  * 'drop': Drop packets with bad ssl header; 'ignore': Forward packets with bad ssl header;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#header_action DdosZoneTemplateSslL4#header_action}
  */
  readonly headerAction?: string;
  /**
  * Inspect ssl header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#header_inspection DdosZoneTemplateSslL4#header_inspection}
  */
  readonly headerInspection?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#uuid DdosZoneTemplateSslL4#uuid}
  */
  readonly uuid?: string;
}

export function ddosZoneTemplateSslL4SslTrafficCheckToTerraform(struct?: DdosZoneTemplateSslL4SslTrafficCheckOutputReference | DdosZoneTemplateSslL4SslTrafficCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_resumed_connection: cdktf.numberToTerraform(struct!.checkResumedConnection),
    header_action: cdktf.stringToTerraform(struct!.headerAction),
    header_inspection: cdktf.numberToTerraform(struct!.headerInspection),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosZoneTemplateSslL4SslTrafficCheckToHclTerraform(struct?: DdosZoneTemplateSslL4SslTrafficCheckOutputReference | DdosZoneTemplateSslL4SslTrafficCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_resumed_connection: {
      value: cdktf.numberToHclTerraform(struct!.checkResumedConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_action: {
      value: cdktf.stringToHclTerraform(struct!.headerAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_inspection: {
      value: cdktf.numberToHclTerraform(struct!.headerInspection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DdosZoneTemplateSslL4SslTrafficCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSslL4SslTrafficCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkResumedConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkResumedConnection = this._checkResumedConnection;
    }
    if (this._headerAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction;
    }
    if (this._headerInspection !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerInspection = this._headerInspection;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSslL4SslTrafficCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkResumedConnection = undefined;
      this._headerAction = undefined;
      this._headerInspection = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkResumedConnection = value.checkResumedConnection;
      this._headerAction = value.headerAction;
      this._headerInspection = value.headerInspection;
      this._uuid = value.uuid;
    }
  }

  // check_resumed_connection - computed: false, optional: true, required: false
  private _checkResumedConnection?: number; 
  public get checkResumedConnection() {
    return this.getNumberAttribute('check_resumed_connection');
  }
  public set checkResumedConnection(value: number) {
    this._checkResumedConnection = value;
  }
  public resetCheckResumedConnection() {
    this._checkResumedConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkResumedConnectionInput() {
    return this._checkResumedConnection;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction?: string; 
  public get headerAction() {
    return this.getStringAttribute('header_action');
  }
  public set headerAction(value: string) {
    this._headerAction = value;
  }
  public resetHeaderAction() {
    this._headerAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction;
  }

  // header_inspection - computed: false, optional: true, required: false
  private _headerInspection?: number; 
  public get headerInspection() {
    return this.getNumberAttribute('header_inspection');
  }
  public set headerInspection(value: number) {
    this._headerInspection = value;
  }
  public resetHeaderInspection() {
    this._headerInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInspectionInput() {
    return this._headerInspection;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4 thunder_ddos_zone_template_ssl_l4}
*/
export class DdosZoneTemplateSslL4 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_ssl_l4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateSslL4 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateSslL4 to import
  * @param importFromId The id of the existing DdosZoneTemplateSslL4 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateSslL4 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_ssl_l4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_ssl_l4 thunder_ddos_zone_template_ssl_l4} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateSslL4Config
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateSslL4Config) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_ssl_l4',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowNonTls = config.allowNonTls;
    this._disable = config.disable;
    this._id = config.id;
    this._sslL4TmplName = config.sslL4TmplName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._authHandshake.internalValue = config.authHandshake;
    this._dst.internalValue = config.dst;
    this._multiPuThresholdDistribution.internalValue = config.multiPuThresholdDistribution;
    this._renegotiation.internalValue = config.renegotiation;
    this._src.internalValue = config.src;
    this._sslTrafficCheck.internalValue = config.sslTrafficCheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_non_tls - computed: false, optional: true, required: false
  private _allowNonTls?: number; 
  public get allowNonTls() {
    return this.getNumberAttribute('allow_non_tls');
  }
  public set allowNonTls(value: number) {
    this._allowNonTls = value;
  }
  public resetAllowNonTls() {
    this._allowNonTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNonTlsInput() {
    return this._allowNonTls;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // ssl_l4_tmpl_name - computed: false, optional: false, required: true
  private _sslL4TmplName?: string; 
  public get sslL4TmplName() {
    return this.getStringAttribute('ssl_l4_tmpl_name');
  }
  public set sslL4TmplName(value: string) {
    this._sslL4TmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4TmplNameInput() {
    return this._sslL4TmplName;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // auth_handshake - computed: false, optional: true, required: false
  private _authHandshake = new DdosZoneTemplateSslL4AuthHandshakeOutputReference(this, "auth_handshake");
  public get authHandshake() {
    return this._authHandshake;
  }
  public putAuthHandshake(value: DdosZoneTemplateSslL4AuthHandshake) {
    this._authHandshake.internalValue = value;
  }
  public resetAuthHandshake() {
    this._authHandshake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHandshakeInput() {
    return this._authHandshake.internalValue;
  }

  // dst - computed: false, optional: true, required: false
  private _dst = new DdosZoneTemplateSslL4DstOutputReference(this, "dst");
  public get dst() {
    return this._dst;
  }
  public putDst(value: DdosZoneTemplateSslL4Dst) {
    this._dst.internalValue = value;
  }
  public resetDst() {
    this._dst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst.internalValue;
  }

  // multi_pu_threshold_distribution - computed: false, optional: true, required: false
  private _multiPuThresholdDistribution = new DdosZoneTemplateSslL4MultiPuThresholdDistributionOutputReference(this, "multi_pu_threshold_distribution");
  public get multiPuThresholdDistribution() {
    return this._multiPuThresholdDistribution;
  }
  public putMultiPuThresholdDistribution(value: DdosZoneTemplateSslL4MultiPuThresholdDistribution) {
    this._multiPuThresholdDistribution.internalValue = value;
  }
  public resetMultiPuThresholdDistribution() {
    this._multiPuThresholdDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuThresholdDistributionInput() {
    return this._multiPuThresholdDistribution.internalValue;
  }

  // renegotiation - computed: false, optional: true, required: false
  private _renegotiation = new DdosZoneTemplateSslL4RenegotiationOutputReference(this, "renegotiation");
  public get renegotiation() {
    return this._renegotiation;
  }
  public putRenegotiation(value: DdosZoneTemplateSslL4Renegotiation) {
    this._renegotiation.internalValue = value;
  }
  public resetRenegotiation() {
    this._renegotiation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegotiationInput() {
    return this._renegotiation.internalValue;
  }

  // src - computed: false, optional: true, required: false
  private _src = new DdosZoneTemplateSslL4SrcOutputReference(this, "src");
  public get src() {
    return this._src;
  }
  public putSrc(value: DdosZoneTemplateSslL4Src) {
    this._src.internalValue = value;
  }
  public resetSrc() {
    this._src.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src.internalValue;
  }

  // ssl_traffic_check - computed: false, optional: true, required: false
  private _sslTrafficCheck = new DdosZoneTemplateSslL4SslTrafficCheckOutputReference(this, "ssl_traffic_check");
  public get sslTrafficCheck() {
    return this._sslTrafficCheck;
  }
  public putSslTrafficCheck(value: DdosZoneTemplateSslL4SslTrafficCheck) {
    this._sslTrafficCheck.internalValue = value;
  }
  public resetSslTrafficCheck() {
    this._sslTrafficCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTrafficCheckInput() {
    return this._sslTrafficCheck.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_non_tls: cdktf.numberToTerraform(this._allowNonTls),
      disable: cdktf.numberToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      ssl_l4_tmpl_name: cdktf.stringToTerraform(this._sslL4TmplName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      auth_handshake: ddosZoneTemplateSslL4AuthHandshakeToTerraform(this._authHandshake.internalValue),
      dst: ddosZoneTemplateSslL4DstToTerraform(this._dst.internalValue),
      multi_pu_threshold_distribution: ddosZoneTemplateSslL4MultiPuThresholdDistributionToTerraform(this._multiPuThresholdDistribution.internalValue),
      renegotiation: ddosZoneTemplateSslL4RenegotiationToTerraform(this._renegotiation.internalValue),
      src: ddosZoneTemplateSslL4SrcToTerraform(this._src.internalValue),
      ssl_traffic_check: ddosZoneTemplateSslL4SslTrafficCheckToTerraform(this._sslTrafficCheck.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_non_tls: {
        value: cdktf.numberToHclTerraform(this._allowNonTls),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
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
      ssl_l4_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._sslL4TmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_handshake: {
        value: ddosZoneTemplateSslL4AuthHandshakeToHclTerraform(this._authHandshake.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateSslL4AuthHandshakeList",
      },
      dst: {
        value: ddosZoneTemplateSslL4DstToHclTerraform(this._dst.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateSslL4DstList",
      },
      multi_pu_threshold_distribution: {
        value: ddosZoneTemplateSslL4MultiPuThresholdDistributionToHclTerraform(this._multiPuThresholdDistribution.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateSslL4MultiPuThresholdDistributionList",
      },
      renegotiation: {
        value: ddosZoneTemplateSslL4RenegotiationToHclTerraform(this._renegotiation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateSslL4RenegotiationList",
      },
      src: {
        value: ddosZoneTemplateSslL4SrcToHclTerraform(this._src.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateSslL4SrcList",
      },
      ssl_traffic_check: {
        value: ddosZoneTemplateSslL4SslTrafficCheckToHclTerraform(this._sslTrafficCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateSslL4SslTrafficCheckList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
