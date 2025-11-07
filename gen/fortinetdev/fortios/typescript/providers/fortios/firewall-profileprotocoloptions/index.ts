// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallProfileprotocoloptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#comment FirewallProfileprotocoloptions#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#feature_set FirewallProfileprotocoloptions#feature_set}
  */
  readonly featureSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#get_all_tables FirewallProfileprotocoloptions#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#id FirewallProfileprotocoloptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#name FirewallProfileprotocoloptions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#oversize_log FirewallProfileprotocoloptions#oversize_log}
  */
  readonly oversizeLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#replacemsg_group FirewallProfileprotocoloptions#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#rpc_over_http FirewallProfileprotocoloptions#rpc_over_http}
  */
  readonly rpcOverHttp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#switching_protocols_log FirewallProfileprotocoloptions#switching_protocols_log}
  */
  readonly switchingProtocolsLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#vdomparam FirewallProfileprotocoloptions#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * cifs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#cifs FirewallProfileprotocoloptions#cifs}
  */
  readonly cifs?: FirewallProfileprotocoloptionsCifs;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#dns FirewallProfileprotocoloptions#dns}
  */
  readonly dns?: FirewallProfileprotocoloptionsDns;
  /**
  * ftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ftp FirewallProfileprotocoloptions#ftp}
  */
  readonly ftp?: FirewallProfileprotocoloptionsFtp;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#http FirewallProfileprotocoloptions#http}
  */
  readonly http?: FirewallProfileprotocoloptionsHttp;
  /**
  * imap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#imap FirewallProfileprotocoloptions#imap}
  */
  readonly imap?: FirewallProfileprotocoloptionsImap;
  /**
  * mail_signature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#mail_signature FirewallProfileprotocoloptions#mail_signature}
  */
  readonly mailSignature?: FirewallProfileprotocoloptionsMailSignature;
  /**
  * mapi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#mapi FirewallProfileprotocoloptions#mapi}
  */
  readonly mapi?: FirewallProfileprotocoloptionsMapi;
  /**
  * nntp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#nntp FirewallProfileprotocoloptions#nntp}
  */
  readonly nntp?: FirewallProfileprotocoloptionsNntp;
  /**
  * pop3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#pop3 FirewallProfileprotocoloptions#pop3}
  */
  readonly pop3?: FirewallProfileprotocoloptionsPop3;
  /**
  * smtp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#smtp FirewallProfileprotocoloptions#smtp}
  */
  readonly smtp?: FirewallProfileprotocoloptionsSmtp;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ssh FirewallProfileprotocoloptions#ssh}
  */
  readonly ssh?: FirewallProfileprotocoloptionsSsh;
}
export interface FirewallProfileprotocoloptionsCifsServerKeytab {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#keytab FirewallProfileprotocoloptions#keytab}
  */
  readonly keytab?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#principal FirewallProfileprotocoloptions#principal}
  */
  readonly principal?: string;
}

export function firewallProfileprotocoloptionsCifsServerKeytabToTerraform(struct?: FirewallProfileprotocoloptionsCifsServerKeytab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keytab: cdktf.stringToTerraform(struct!.keytab),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}


export function firewallProfileprotocoloptionsCifsServerKeytabToHclTerraform(struct?: FirewallProfileprotocoloptionsCifsServerKeytab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keytab: {
      value: cdktf.stringToHclTerraform(struct!.keytab),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallProfileprotocoloptionsCifsServerKeytabOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallProfileprotocoloptionsCifsServerKeytab | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keytab !== undefined) {
      hasAnyValues = true;
      internalValueResult.keytab = this._keytab;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallProfileprotocoloptionsCifsServerKeytab | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keytab = undefined;
      this._principal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keytab = value.keytab;
      this._principal = value.principal;
    }
  }

  // keytab - computed: false, optional: true, required: false
  private _keytab?: string; 
  public get keytab() {
    return this.getStringAttribute('keytab');
  }
  public set keytab(value: string) {
    this._keytab = value;
  }
  public resetKeytab() {
    this._keytab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keytabInput() {
    return this._keytab;
  }

  // principal - computed: false, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }
}

export class FirewallProfileprotocoloptionsCifsServerKeytabList extends cdktf.ComplexList {
  public internalValue? : FirewallProfileprotocoloptionsCifsServerKeytab[] | cdktf.IResolvable

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
  public get(index: number): FirewallProfileprotocoloptionsCifsServerKeytabOutputReference {
    return new FirewallProfileprotocoloptionsCifsServerKeytabOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallProfileprotocoloptionsCifs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#domain_controller FirewallProfileprotocoloptions#domain_controller}
  */
  readonly domainController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#options FirewallProfileprotocoloptions#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#oversize_limit FirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ports FirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#scan_bzip2 FirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#server_credential_type FirewallProfileprotocoloptions#server_credential_type}
  */
  readonly serverCredentialType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#status FirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_maximum FirewallProfileprotocoloptions#tcp_window_maximum}
  */
  readonly tcpWindowMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_minimum FirewallProfileprotocoloptions#tcp_window_minimum}
  */
  readonly tcpWindowMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_size FirewallProfileprotocoloptions#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_type FirewallProfileprotocoloptions#tcp_window_type}
  */
  readonly tcpWindowType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_nest_limit FirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_oversize_limit FirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
  /**
  * server_keytab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#server_keytab FirewallProfileprotocoloptions#server_keytab}
  */
  readonly serverKeytab?: FirewallProfileprotocoloptionsCifsServerKeytab[] | cdktf.IResolvable;
}

export function firewallProfileprotocoloptionsCifsToTerraform(struct?: FirewallProfileprotocoloptionsCifsOutputReference | FirewallProfileprotocoloptionsCifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_controller: cdktf.stringToTerraform(struct!.domainController),
    options: cdktf.stringToTerraform(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.numberToTerraform(struct!.ports),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    server_credential_type: cdktf.stringToTerraform(struct!.serverCredentialType),
    status: cdktf.stringToTerraform(struct!.status),
    tcp_window_maximum: cdktf.numberToTerraform(struct!.tcpWindowMaximum),
    tcp_window_minimum: cdktf.numberToTerraform(struct!.tcpWindowMinimum),
    tcp_window_size: cdktf.numberToTerraform(struct!.tcpWindowSize),
    tcp_window_type: cdktf.stringToTerraform(struct!.tcpWindowType),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
    server_keytab: cdktf.listMapper(firewallProfileprotocoloptionsCifsServerKeytabToTerraform, true)(struct!.serverKeytab),
  }
}


export function firewallProfileprotocoloptionsCifsToHclTerraform(struct?: FirewallProfileprotocoloptionsCifsOutputReference | FirewallProfileprotocoloptionsCifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_controller: {
      value: cdktf.stringToHclTerraform(struct!.domainController),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.numberToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_credential_type: {
      value: cdktf.stringToHclTerraform(struct!.serverCredentialType),
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
    tcp_window_maximum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_minimum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_size: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_type: {
      value: cdktf.stringToHclTerraform(struct!.tcpWindowType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_keytab: {
      value: cdktf.listMapperHcl(firewallProfileprotocoloptionsCifsServerKeytabToHclTerraform, true)(struct!.serverKeytab),
      isBlock: true,
      type: "list",
      storageClassType: "FirewallProfileprotocoloptionsCifsServerKeytabList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallProfileprotocoloptionsCifsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallProfileprotocoloptionsCifs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainController !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainController = this._domainController;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._serverCredentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCredentialType = this._serverCredentialType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tcpWindowMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMaximum = this._tcpWindowMaximum;
    }
    if (this._tcpWindowMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMinimum = this._tcpWindowMinimum;
    }
    if (this._tcpWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowSize = this._tcpWindowSize;
    }
    if (this._tcpWindowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowType = this._tcpWindowType;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    if (this._serverKeytab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKeytab = this._serverKeytab?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallProfileprotocoloptionsCifs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainController = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._scanBzip2 = undefined;
      this._serverCredentialType = undefined;
      this._status = undefined;
      this._tcpWindowMaximum = undefined;
      this._tcpWindowMinimum = undefined;
      this._tcpWindowSize = undefined;
      this._tcpWindowType = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
      this._serverKeytab.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainController = value.domainController;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._scanBzip2 = value.scanBzip2;
      this._serverCredentialType = value.serverCredentialType;
      this._status = value.status;
      this._tcpWindowMaximum = value.tcpWindowMaximum;
      this._tcpWindowMinimum = value.tcpWindowMinimum;
      this._tcpWindowSize = value.tcpWindowSize;
      this._tcpWindowType = value.tcpWindowType;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
      this._serverKeytab.internalValue = value.serverKeytab;
    }
  }

  // domain_controller - computed: false, optional: true, required: false
  private _domainController?: string; 
  public get domainController() {
    return this.getStringAttribute('domain_controller');
  }
  public set domainController(value: string) {
    this._domainController = value;
  }
  public resetDomainController() {
    this._domainController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainControllerInput() {
    return this._domainController;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // oversize_limit - computed: true, optional: true, required: false
  private _oversizeLimit?: number; 
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }
  public set oversizeLimit(value: number) {
    this._oversizeLimit = value;
  }
  public resetOversizeLimit() {
    this._oversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeLimitInput() {
    return this._oversizeLimit;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number; 
  public get ports() {
    return this.getNumberAttribute('ports');
  }
  public set ports(value: number) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // scan_bzip2 - computed: true, optional: true, required: false
  private _scanBzip2?: string; 
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }
  public set scanBzip2(value: string) {
    this._scanBzip2 = value;
  }
  public resetScanBzip2() {
    this._scanBzip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBzip2Input() {
    return this._scanBzip2;
  }

  // server_credential_type - computed: true, optional: true, required: false
  private _serverCredentialType?: string; 
  public get serverCredentialType() {
    return this.getStringAttribute('server_credential_type');
  }
  public set serverCredentialType(value: string) {
    this._serverCredentialType = value;
  }
  public resetServerCredentialType() {
    this._serverCredentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCredentialTypeInput() {
    return this._serverCredentialType;
  }

  // status - computed: true, optional: true, required: false
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

  // tcp_window_maximum - computed: true, optional: true, required: false
  private _tcpWindowMaximum?: number; 
  public get tcpWindowMaximum() {
    return this.getNumberAttribute('tcp_window_maximum');
  }
  public set tcpWindowMaximum(value: number) {
    this._tcpWindowMaximum = value;
  }
  public resetTcpWindowMaximum() {
    this._tcpWindowMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowMaximumInput() {
    return this._tcpWindowMaximum;
  }

  // tcp_window_minimum - computed: true, optional: true, required: false
  private _tcpWindowMinimum?: number; 
  public get tcpWindowMinimum() {
    return this.getNumberAttribute('tcp_window_minimum');
  }
  public set tcpWindowMinimum(value: number) {
    this._tcpWindowMinimum = value;
  }
  public resetTcpWindowMinimum() {
    this._tcpWindowMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowMinimumInput() {
    return this._tcpWindowMinimum;
  }

  // tcp_window_size - computed: true, optional: true, required: false
  private _tcpWindowSize?: number; 
  public get tcpWindowSize() {
    return this.getNumberAttribute('tcp_window_size');
  }
  public set tcpWindowSize(value: number) {
    this._tcpWindowSize = value;
  }
  public resetTcpWindowSize() {
    this._tcpWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowSizeInput() {
    return this._tcpWindowSize;
  }

  // tcp_window_type - computed: true, optional: true, required: false
  private _tcpWindowType?: string; 
  public get tcpWindowType() {
    return this.getStringAttribute('tcp_window_type');
  }
  public set tcpWindowType(value: string) {
    this._tcpWindowType = value;
  }
  public resetTcpWindowType() {
    this._tcpWindowType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowTypeInput() {
    return this._tcpWindowType;
  }

  // uncompressed_nest_limit - computed: true, optional: true, required: false
  private _uncompressedNestLimit?: number; 
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }
  public set uncompressedNestLimit(value: number) {
    this._uncompressedNestLimit = value;
  }
  public resetUncompressedNestLimit() {
    this._uncompressedNestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedNestLimitInput() {
    return this._uncompressedNestLimit;
  }

  // uncompressed_oversize_limit - computed: true, optional: true, required: false
  private _uncompressedOversizeLimit?: number; 
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
  public set uncompressedOversizeLimit(value: number) {
    this._uncompressedOversizeLimit = value;
  }
  public resetUncompressedOversizeLimit() {
    this._uncompressedOversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedOversizeLimitInput() {
    return this._uncompressedOversizeLimit;
  }

  // server_keytab - computed: false, optional: true, required: false
  private _serverKeytab = new FirewallProfileprotocoloptionsCifsServerKeytabList(this, "server_keytab", false);
  public get serverKeytab() {
    return this._serverKeytab;
  }
  public putServerKeytab(value: FirewallProfileprotocoloptionsCifsServerKeytab[] | cdktf.IResolvable) {
    this._serverKeytab.internalValue = value;
  }
  public resetServerKeytab() {
    this._serverKeytab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeytabInput() {
    return this._serverKeytab.internalValue;
  }
}
export interface FirewallProfileprotocoloptionsDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ports FirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#status FirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
}

export function firewallProfileprotocoloptionsDnsToTerraform(struct?: FirewallProfileprotocoloptionsDnsOutputReference | FirewallProfileprotocoloptionsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.numberToTerraform(struct!.ports),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function firewallProfileprotocoloptionsDnsToHclTerraform(struct?: FirewallProfileprotocoloptionsDnsOutputReference | FirewallProfileprotocoloptionsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.numberToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class FirewallProfileprotocoloptionsDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallProfileprotocoloptionsDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallProfileprotocoloptionsDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ports = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ports = value.ports;
      this._status = value.status;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number; 
  public get ports() {
    return this.getNumberAttribute('ports');
  }
  public set ports(value: number) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // status - computed: true, optional: true, required: false
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
export interface FirewallProfileprotocoloptionsFtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#comfort_amount FirewallProfileprotocoloptions#comfort_amount}
  */
  readonly comfortAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#comfort_interval FirewallProfileprotocoloptions#comfort_interval}
  */
  readonly comfortInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#explicit_ftp_tls FirewallProfileprotocoloptions#explicit_ftp_tls}
  */
  readonly explicitFtpTls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#inspect_all FirewallProfileprotocoloptions#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#options FirewallProfileprotocoloptions#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#oversize_limit FirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ports FirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#scan_bzip2 FirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ssl_offloaded FirewallProfileprotocoloptions#ssl_offloaded}
  */
  readonly sslOffloaded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#status FirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#stream_based_uncompressed_limit FirewallProfileprotocoloptions#stream_based_uncompressed_limit}
  */
  readonly streamBasedUncompressedLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_maximum FirewallProfileprotocoloptions#tcp_window_maximum}
  */
  readonly tcpWindowMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_minimum FirewallProfileprotocoloptions#tcp_window_minimum}
  */
  readonly tcpWindowMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_size FirewallProfileprotocoloptions#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_type FirewallProfileprotocoloptions#tcp_window_type}
  */
  readonly tcpWindowType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_nest_limit FirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_oversize_limit FirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

export function firewallProfileprotocoloptionsFtpToTerraform(struct?: FirewallProfileprotocoloptionsFtpOutputReference | FirewallProfileprotocoloptionsFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comfort_amount: cdktf.numberToTerraform(struct!.comfortAmount),
    comfort_interval: cdktf.numberToTerraform(struct!.comfortInterval),
    explicit_ftp_tls: cdktf.stringToTerraform(struct!.explicitFtpTls),
    inspect_all: cdktf.stringToTerraform(struct!.inspectAll),
    options: cdktf.stringToTerraform(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.numberToTerraform(struct!.ports),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    ssl_offloaded: cdktf.stringToTerraform(struct!.sslOffloaded),
    status: cdktf.stringToTerraform(struct!.status),
    stream_based_uncompressed_limit: cdktf.numberToTerraform(struct!.streamBasedUncompressedLimit),
    tcp_window_maximum: cdktf.numberToTerraform(struct!.tcpWindowMaximum),
    tcp_window_minimum: cdktf.numberToTerraform(struct!.tcpWindowMinimum),
    tcp_window_size: cdktf.numberToTerraform(struct!.tcpWindowSize),
    tcp_window_type: cdktf.stringToTerraform(struct!.tcpWindowType),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
  }
}


export function firewallProfileprotocoloptionsFtpToHclTerraform(struct?: FirewallProfileprotocoloptionsFtpOutputReference | FirewallProfileprotocoloptionsFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comfort_amount: {
      value: cdktf.numberToHclTerraform(struct!.comfortAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comfort_interval: {
      value: cdktf.numberToHclTerraform(struct!.comfortInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    explicit_ftp_tls: {
      value: cdktf.stringToHclTerraform(struct!.explicitFtpTls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspect_all: {
      value: cdktf.stringToHclTerraform(struct!.inspectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.numberToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_offloaded: {
      value: cdktf.stringToHclTerraform(struct!.sslOffloaded),
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
    stream_based_uncompressed_limit: {
      value: cdktf.numberToHclTerraform(struct!.streamBasedUncompressedLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_maximum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_minimum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_size: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_type: {
      value: cdktf.stringToHclTerraform(struct!.tcpWindowType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallProfileprotocoloptionsFtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallProfileprotocoloptionsFtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comfortAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.comfortAmount = this._comfortAmount;
    }
    if (this._comfortInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.comfortInterval = this._comfortInterval;
    }
    if (this._explicitFtpTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitFtpTls = this._explicitFtpTls;
    }
    if (this._inspectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectAll = this._inspectAll;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._sslOffloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslOffloaded = this._sslOffloaded;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._streamBasedUncompressedLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamBasedUncompressedLimit = this._streamBasedUncompressedLimit;
    }
    if (this._tcpWindowMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMaximum = this._tcpWindowMaximum;
    }
    if (this._tcpWindowMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMinimum = this._tcpWindowMinimum;
    }
    if (this._tcpWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowSize = this._tcpWindowSize;
    }
    if (this._tcpWindowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowType = this._tcpWindowType;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallProfileprotocoloptionsFtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comfortAmount = undefined;
      this._comfortInterval = undefined;
      this._explicitFtpTls = undefined;
      this._inspectAll = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._scanBzip2 = undefined;
      this._sslOffloaded = undefined;
      this._status = undefined;
      this._streamBasedUncompressedLimit = undefined;
      this._tcpWindowMaximum = undefined;
      this._tcpWindowMinimum = undefined;
      this._tcpWindowSize = undefined;
      this._tcpWindowType = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comfortAmount = value.comfortAmount;
      this._comfortInterval = value.comfortInterval;
      this._explicitFtpTls = value.explicitFtpTls;
      this._inspectAll = value.inspectAll;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._scanBzip2 = value.scanBzip2;
      this._sslOffloaded = value.sslOffloaded;
      this._status = value.status;
      this._streamBasedUncompressedLimit = value.streamBasedUncompressedLimit;
      this._tcpWindowMaximum = value.tcpWindowMaximum;
      this._tcpWindowMinimum = value.tcpWindowMinimum;
      this._tcpWindowSize = value.tcpWindowSize;
      this._tcpWindowType = value.tcpWindowType;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
    }
  }

  // comfort_amount - computed: true, optional: true, required: false
  private _comfortAmount?: number; 
  public get comfortAmount() {
    return this.getNumberAttribute('comfort_amount');
  }
  public set comfortAmount(value: number) {
    this._comfortAmount = value;
  }
  public resetComfortAmount() {
    this._comfortAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortAmountInput() {
    return this._comfortAmount;
  }

  // comfort_interval - computed: true, optional: true, required: false
  private _comfortInterval?: number; 
  public get comfortInterval() {
    return this.getNumberAttribute('comfort_interval');
  }
  public set comfortInterval(value: number) {
    this._comfortInterval = value;
  }
  public resetComfortInterval() {
    this._comfortInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortIntervalInput() {
    return this._comfortInterval;
  }

  // explicit_ftp_tls - computed: true, optional: true, required: false
  private _explicitFtpTls?: string; 
  public get explicitFtpTls() {
    return this.getStringAttribute('explicit_ftp_tls');
  }
  public set explicitFtpTls(value: string) {
    this._explicitFtpTls = value;
  }
  public resetExplicitFtpTls() {
    this._explicitFtpTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitFtpTlsInput() {
    return this._explicitFtpTls;
  }

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // oversize_limit - computed: true, optional: true, required: false
  private _oversizeLimit?: number; 
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }
  public set oversizeLimit(value: number) {
    this._oversizeLimit = value;
  }
  public resetOversizeLimit() {
    this._oversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeLimitInput() {
    return this._oversizeLimit;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number; 
  public get ports() {
    return this.getNumberAttribute('ports');
  }
  public set ports(value: number) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // scan_bzip2 - computed: true, optional: true, required: false
  private _scanBzip2?: string; 
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }
  public set scanBzip2(value: string) {
    this._scanBzip2 = value;
  }
  public resetScanBzip2() {
    this._scanBzip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBzip2Input() {
    return this._scanBzip2;
  }

  // ssl_offloaded - computed: true, optional: true, required: false
  private _sslOffloaded?: string; 
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }
  public set sslOffloaded(value: string) {
    this._sslOffloaded = value;
  }
  public resetSslOffloaded() {
    this._sslOffloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOffloadedInput() {
    return this._sslOffloaded;
  }

  // status - computed: true, optional: true, required: false
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

  // stream_based_uncompressed_limit - computed: false, optional: true, required: false
  private _streamBasedUncompressedLimit?: number; 
  public get streamBasedUncompressedLimit() {
    return this.getNumberAttribute('stream_based_uncompressed_limit');
  }
  public set streamBasedUncompressedLimit(value: number) {
    this._streamBasedUncompressedLimit = value;
  }
  public resetStreamBasedUncompressedLimit() {
    this._streamBasedUncompressedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamBasedUncompressedLimitInput() {
    return this._streamBasedUncompressedLimit;
  }

  // tcp_window_maximum - computed: true, optional: true, required: false
  private _tcpWindowMaximum?: number; 
  public get tcpWindowMaximum() {
    return this.getNumberAttribute('tcp_window_maximum');
  }
  public set tcpWindowMaximum(value: number) {
    this._tcpWindowMaximum = value;
  }
  public resetTcpWindowMaximum() {
    this._tcpWindowMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowMaximumInput() {
    return this._tcpWindowMaximum;
  }

  // tcp_window_minimum - computed: true, optional: true, required: false
  private _tcpWindowMinimum?: number; 
  public get tcpWindowMinimum() {
    return this.getNumberAttribute('tcp_window_minimum');
  }
  public set tcpWindowMinimum(value: number) {
    this._tcpWindowMinimum = value;
  }
  public resetTcpWindowMinimum() {
    this._tcpWindowMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowMinimumInput() {
    return this._tcpWindowMinimum;
  }

  // tcp_window_size - computed: true, optional: true, required: false
  private _tcpWindowSize?: number; 
  public get tcpWindowSize() {
    return this.getNumberAttribute('tcp_window_size');
  }
  public set tcpWindowSize(value: number) {
    this._tcpWindowSize = value;
  }
  public resetTcpWindowSize() {
    this._tcpWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowSizeInput() {
    return this._tcpWindowSize;
  }

  // tcp_window_type - computed: true, optional: true, required: false
  private _tcpWindowType?: string; 
  public get tcpWindowType() {
    return this.getStringAttribute('tcp_window_type');
  }
  public set tcpWindowType(value: string) {
    this._tcpWindowType = value;
  }
  public resetTcpWindowType() {
    this._tcpWindowType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowTypeInput() {
    return this._tcpWindowType;
  }

  // uncompressed_nest_limit - computed: true, optional: true, required: false
  private _uncompressedNestLimit?: number; 
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }
  public set uncompressedNestLimit(value: number) {
    this._uncompressedNestLimit = value;
  }
  public resetUncompressedNestLimit() {
    this._uncompressedNestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedNestLimitInput() {
    return this._uncompressedNestLimit;
  }

  // uncompressed_oversize_limit - computed: true, optional: true, required: false
  private _uncompressedOversizeLimit?: number; 
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
  public set uncompressedOversizeLimit(value: number) {
    this._uncompressedOversizeLimit = value;
  }
  public resetUncompressedOversizeLimit() {
    this._uncompressedOversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedOversizeLimitInput() {
    return this._uncompressedOversizeLimit;
  }
}
export interface FirewallProfileprotocoloptionsHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#address_ip_rating FirewallProfileprotocoloptions#address_ip_rating}
  */
  readonly addressIpRating?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#block_page_status_code FirewallProfileprotocoloptions#block_page_status_code}
  */
  readonly blockPageStatusCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#comfort_amount FirewallProfileprotocoloptions#comfort_amount}
  */
  readonly comfortAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#comfort_interval FirewallProfileprotocoloptions#comfort_interval}
  */
  readonly comfortInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#domain_fronting FirewallProfileprotocoloptions#domain_fronting}
  */
  readonly domainFronting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#fortinet_bar FirewallProfileprotocoloptions#fortinet_bar}
  */
  readonly fortinetBar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#fortinet_bar_port FirewallProfileprotocoloptions#fortinet_bar_port}
  */
  readonly fortinetBarPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#h2c FirewallProfileprotocoloptions#h2c}
  */
  readonly h2C?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#http_09 FirewallProfileprotocoloptions#http_09}
  */
  readonly http09?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#http_policy FirewallProfileprotocoloptions#http_policy}
  */
  readonly httpPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#inspect_all FirewallProfileprotocoloptions#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#options FirewallProfileprotocoloptions#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#oversize_limit FirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ports FirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#post_lang FirewallProfileprotocoloptions#post_lang}
  */
  readonly postLang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#proxy_after_tcp_handshake FirewallProfileprotocoloptions#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#range_block FirewallProfileprotocoloptions#range_block}
  */
  readonly rangeBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#retry_count FirewallProfileprotocoloptions#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#scan_bzip2 FirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ssl_offloaded FirewallProfileprotocoloptions#ssl_offloaded}
  */
  readonly sslOffloaded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#status FirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#stream_based_uncompressed_limit FirewallProfileprotocoloptions#stream_based_uncompressed_limit}
  */
  readonly streamBasedUncompressedLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#streaming_content_bypass FirewallProfileprotocoloptions#streaming_content_bypass}
  */
  readonly streamingContentBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#strip_x_forwarded_for FirewallProfileprotocoloptions#strip_x_forwarded_for}
  */
  readonly stripXForwardedFor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#switching_protocols FirewallProfileprotocoloptions#switching_protocols}
  */
  readonly switchingProtocols?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_maximum FirewallProfileprotocoloptions#tcp_window_maximum}
  */
  readonly tcpWindowMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_minimum FirewallProfileprotocoloptions#tcp_window_minimum}
  */
  readonly tcpWindowMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_size FirewallProfileprotocoloptions#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_type FirewallProfileprotocoloptions#tcp_window_type}
  */
  readonly tcpWindowType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tunnel_non_http FirewallProfileprotocoloptions#tunnel_non_http}
  */
  readonly tunnelNonHttp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_nest_limit FirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_oversize_limit FirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#unknown_content_encoding FirewallProfileprotocoloptions#unknown_content_encoding}
  */
  readonly unknownContentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#unknown_http_version FirewallProfileprotocoloptions#unknown_http_version}
  */
  readonly unknownHttpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#verify_dns_for_policy_matching FirewallProfileprotocoloptions#verify_dns_for_policy_matching}
  */
  readonly verifyDnsForPolicyMatching?: string;
}

export function firewallProfileprotocoloptionsHttpToTerraform(struct?: FirewallProfileprotocoloptionsHttpOutputReference | FirewallProfileprotocoloptionsHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_ip_rating: cdktf.stringToTerraform(struct!.addressIpRating),
    block_page_status_code: cdktf.numberToTerraform(struct!.blockPageStatusCode),
    comfort_amount: cdktf.numberToTerraform(struct!.comfortAmount),
    comfort_interval: cdktf.numberToTerraform(struct!.comfortInterval),
    domain_fronting: cdktf.stringToTerraform(struct!.domainFronting),
    fortinet_bar: cdktf.stringToTerraform(struct!.fortinetBar),
    fortinet_bar_port: cdktf.numberToTerraform(struct!.fortinetBarPort),
    h2c: cdktf.stringToTerraform(struct!.h2C),
    http_09: cdktf.stringToTerraform(struct!.http09),
    http_policy: cdktf.stringToTerraform(struct!.httpPolicy),
    inspect_all: cdktf.stringToTerraform(struct!.inspectAll),
    options: cdktf.stringToTerraform(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.numberToTerraform(struct!.ports),
    post_lang: cdktf.stringToTerraform(struct!.postLang),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    range_block: cdktf.stringToTerraform(struct!.rangeBlock),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    ssl_offloaded: cdktf.stringToTerraform(struct!.sslOffloaded),
    status: cdktf.stringToTerraform(struct!.status),
    stream_based_uncompressed_limit: cdktf.numberToTerraform(struct!.streamBasedUncompressedLimit),
    streaming_content_bypass: cdktf.stringToTerraform(struct!.streamingContentBypass),
    strip_x_forwarded_for: cdktf.stringToTerraform(struct!.stripXForwardedFor),
    switching_protocols: cdktf.stringToTerraform(struct!.switchingProtocols),
    tcp_window_maximum: cdktf.numberToTerraform(struct!.tcpWindowMaximum),
    tcp_window_minimum: cdktf.numberToTerraform(struct!.tcpWindowMinimum),
    tcp_window_size: cdktf.numberToTerraform(struct!.tcpWindowSize),
    tcp_window_type: cdktf.stringToTerraform(struct!.tcpWindowType),
    tunnel_non_http: cdktf.stringToTerraform(struct!.tunnelNonHttp),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
    unknown_content_encoding: cdktf.stringToTerraform(struct!.unknownContentEncoding),
    unknown_http_version: cdktf.stringToTerraform(struct!.unknownHttpVersion),
    verify_dns_for_policy_matching: cdktf.stringToTerraform(struct!.verifyDnsForPolicyMatching),
  }
}


export function firewallProfileprotocoloptionsHttpToHclTerraform(struct?: FirewallProfileprotocoloptionsHttpOutputReference | FirewallProfileprotocoloptionsHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_ip_rating: {
      value: cdktf.stringToHclTerraform(struct!.addressIpRating),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_page_status_code: {
      value: cdktf.numberToHclTerraform(struct!.blockPageStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comfort_amount: {
      value: cdktf.numberToHclTerraform(struct!.comfortAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comfort_interval: {
      value: cdktf.numberToHclTerraform(struct!.comfortInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_fronting: {
      value: cdktf.stringToHclTerraform(struct!.domainFronting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortinet_bar: {
      value: cdktf.stringToHclTerraform(struct!.fortinetBar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortinet_bar_port: {
      value: cdktf.numberToHclTerraform(struct!.fortinetBarPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h2c: {
      value: cdktf.stringToHclTerraform(struct!.h2C),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_09: {
      value: cdktf.stringToHclTerraform(struct!.http09),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_policy: {
      value: cdktf.stringToHclTerraform(struct!.httpPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspect_all: {
      value: cdktf.stringToHclTerraform(struct!.inspectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.numberToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    post_lang: {
      value: cdktf.stringToHclTerraform(struct!.postLang),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_block: {
      value: cdktf.stringToHclTerraform(struct!.rangeBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_offloaded: {
      value: cdktf.stringToHclTerraform(struct!.sslOffloaded),
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
    stream_based_uncompressed_limit: {
      value: cdktf.numberToHclTerraform(struct!.streamBasedUncompressedLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    streaming_content_bypass: {
      value: cdktf.stringToHclTerraform(struct!.streamingContentBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_x_forwarded_for: {
      value: cdktf.stringToHclTerraform(struct!.stripXForwardedFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switching_protocols: {
      value: cdktf.stringToHclTerraform(struct!.switchingProtocols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_window_maximum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_minimum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_size: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_type: {
      value: cdktf.stringToHclTerraform(struct!.tcpWindowType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_non_http: {
      value: cdktf.stringToHclTerraform(struct!.tunnelNonHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_content_encoding: {
      value: cdktf.stringToHclTerraform(struct!.unknownContentEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknown_http_version: {
      value: cdktf.stringToHclTerraform(struct!.unknownHttpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_dns_for_policy_matching: {
      value: cdktf.stringToHclTerraform(struct!.verifyDnsForPolicyMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallProfileprotocoloptionsHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallProfileprotocoloptionsHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressIpRating !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressIpRating = this._addressIpRating;
    }
    if (this._blockPageStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPageStatusCode = this._blockPageStatusCode;
    }
    if (this._comfortAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.comfortAmount = this._comfortAmount;
    }
    if (this._comfortInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.comfortInterval = this._comfortInterval;
    }
    if (this._domainFronting !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainFronting = this._domainFronting;
    }
    if (this._fortinetBar !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortinetBar = this._fortinetBar;
    }
    if (this._fortinetBarPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortinetBarPort = this._fortinetBarPort;
    }
    if (this._h2C !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2C = this._h2C;
    }
    if (this._http09 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http09 = this._http09;
    }
    if (this._httpPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPolicy = this._httpPolicy;
    }
    if (this._inspectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectAll = this._inspectAll;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._postLang !== undefined) {
      hasAnyValues = true;
      internalValueResult.postLang = this._postLang;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._rangeBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeBlock = this._rangeBlock;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._sslOffloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslOffloaded = this._sslOffloaded;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._streamBasedUncompressedLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamBasedUncompressedLimit = this._streamBasedUncompressedLimit;
    }
    if (this._streamingContentBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamingContentBypass = this._streamingContentBypass;
    }
    if (this._stripXForwardedFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripXForwardedFor = this._stripXForwardedFor;
    }
    if (this._switchingProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchingProtocols = this._switchingProtocols;
    }
    if (this._tcpWindowMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMaximum = this._tcpWindowMaximum;
    }
    if (this._tcpWindowMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMinimum = this._tcpWindowMinimum;
    }
    if (this._tcpWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowSize = this._tcpWindowSize;
    }
    if (this._tcpWindowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowType = this._tcpWindowType;
    }
    if (this._tunnelNonHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelNonHttp = this._tunnelNonHttp;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    if (this._unknownContentEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownContentEncoding = this._unknownContentEncoding;
    }
    if (this._unknownHttpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownHttpVersion = this._unknownHttpVersion;
    }
    if (this._verifyDnsForPolicyMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyDnsForPolicyMatching = this._verifyDnsForPolicyMatching;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallProfileprotocoloptionsHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressIpRating = undefined;
      this._blockPageStatusCode = undefined;
      this._comfortAmount = undefined;
      this._comfortInterval = undefined;
      this._domainFronting = undefined;
      this._fortinetBar = undefined;
      this._fortinetBarPort = undefined;
      this._h2C = undefined;
      this._http09 = undefined;
      this._httpPolicy = undefined;
      this._inspectAll = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._postLang = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._rangeBlock = undefined;
      this._retryCount = undefined;
      this._scanBzip2 = undefined;
      this._sslOffloaded = undefined;
      this._status = undefined;
      this._streamBasedUncompressedLimit = undefined;
      this._streamingContentBypass = undefined;
      this._stripXForwardedFor = undefined;
      this._switchingProtocols = undefined;
      this._tcpWindowMaximum = undefined;
      this._tcpWindowMinimum = undefined;
      this._tcpWindowSize = undefined;
      this._tcpWindowType = undefined;
      this._tunnelNonHttp = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
      this._unknownContentEncoding = undefined;
      this._unknownHttpVersion = undefined;
      this._verifyDnsForPolicyMatching = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressIpRating = value.addressIpRating;
      this._blockPageStatusCode = value.blockPageStatusCode;
      this._comfortAmount = value.comfortAmount;
      this._comfortInterval = value.comfortInterval;
      this._domainFronting = value.domainFronting;
      this._fortinetBar = value.fortinetBar;
      this._fortinetBarPort = value.fortinetBarPort;
      this._h2C = value.h2C;
      this._http09 = value.http09;
      this._httpPolicy = value.httpPolicy;
      this._inspectAll = value.inspectAll;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._postLang = value.postLang;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._rangeBlock = value.rangeBlock;
      this._retryCount = value.retryCount;
      this._scanBzip2 = value.scanBzip2;
      this._sslOffloaded = value.sslOffloaded;
      this._status = value.status;
      this._streamBasedUncompressedLimit = value.streamBasedUncompressedLimit;
      this._streamingContentBypass = value.streamingContentBypass;
      this._stripXForwardedFor = value.stripXForwardedFor;
      this._switchingProtocols = value.switchingProtocols;
      this._tcpWindowMaximum = value.tcpWindowMaximum;
      this._tcpWindowMinimum = value.tcpWindowMinimum;
      this._tcpWindowSize = value.tcpWindowSize;
      this._tcpWindowType = value.tcpWindowType;
      this._tunnelNonHttp = value.tunnelNonHttp;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
      this._unknownContentEncoding = value.unknownContentEncoding;
      this._unknownHttpVersion = value.unknownHttpVersion;
      this._verifyDnsForPolicyMatching = value.verifyDnsForPolicyMatching;
    }
  }

  // address_ip_rating - computed: true, optional: true, required: false
  private _addressIpRating?: string; 
  public get addressIpRating() {
    return this.getStringAttribute('address_ip_rating');
  }
  public set addressIpRating(value: string) {
    this._addressIpRating = value;
  }
  public resetAddressIpRating() {
    this._addressIpRating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpRatingInput() {
    return this._addressIpRating;
  }

  // block_page_status_code - computed: true, optional: true, required: false
  private _blockPageStatusCode?: number; 
  public get blockPageStatusCode() {
    return this.getNumberAttribute('block_page_status_code');
  }
  public set blockPageStatusCode(value: number) {
    this._blockPageStatusCode = value;
  }
  public resetBlockPageStatusCode() {
    this._blockPageStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageStatusCodeInput() {
    return this._blockPageStatusCode;
  }

  // comfort_amount - computed: true, optional: true, required: false
  private _comfortAmount?: number; 
  public get comfortAmount() {
    return this.getNumberAttribute('comfort_amount');
  }
  public set comfortAmount(value: number) {
    this._comfortAmount = value;
  }
  public resetComfortAmount() {
    this._comfortAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortAmountInput() {
    return this._comfortAmount;
  }

  // comfort_interval - computed: true, optional: true, required: false
  private _comfortInterval?: number; 
  public get comfortInterval() {
    return this.getNumberAttribute('comfort_interval');
  }
  public set comfortInterval(value: number) {
    this._comfortInterval = value;
  }
  public resetComfortInterval() {
    this._comfortInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortIntervalInput() {
    return this._comfortInterval;
  }

  // domain_fronting - computed: true, optional: true, required: false
  private _domainFronting?: string; 
  public get domainFronting() {
    return this.getStringAttribute('domain_fronting');
  }
  public set domainFronting(value: string) {
    this._domainFronting = value;
  }
  public resetDomainFronting() {
    this._domainFronting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainFrontingInput() {
    return this._domainFronting;
  }

  // fortinet_bar - computed: false, optional: true, required: false
  private _fortinetBar?: string; 
  public get fortinetBar() {
    return this.getStringAttribute('fortinet_bar');
  }
  public set fortinetBar(value: string) {
    this._fortinetBar = value;
  }
  public resetFortinetBar() {
    this._fortinetBar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortinetBarInput() {
    return this._fortinetBar;
  }

  // fortinet_bar_port - computed: false, optional: true, required: false
  private _fortinetBarPort?: number; 
  public get fortinetBarPort() {
    return this.getNumberAttribute('fortinet_bar_port');
  }
  public set fortinetBarPort(value: number) {
    this._fortinetBarPort = value;
  }
  public resetFortinetBarPort() {
    this._fortinetBarPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortinetBarPortInput() {
    return this._fortinetBarPort;
  }

  // h2c - computed: true, optional: true, required: false
  private _h2C?: string; 
  public get h2C() {
    return this.getStringAttribute('h2c');
  }
  public set h2C(value: string) {
    this._h2C = value;
  }
  public resetH2C() {
    this._h2C = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2CInput() {
    return this._h2C;
  }

  // http_09 - computed: true, optional: true, required: false
  private _http09?: string; 
  public get http09() {
    return this.getStringAttribute('http_09');
  }
  public set http09(value: string) {
    this._http09 = value;
  }
  public resetHttp09() {
    this._http09 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http09Input() {
    return this._http09;
  }

  // http_policy - computed: false, optional: true, required: false
  private _httpPolicy?: string; 
  public get httpPolicy() {
    return this.getStringAttribute('http_policy');
  }
  public set httpPolicy(value: string) {
    this._httpPolicy = value;
  }
  public resetHttpPolicy() {
    this._httpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPolicyInput() {
    return this._httpPolicy;
  }

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // oversize_limit - computed: true, optional: true, required: false
  private _oversizeLimit?: number; 
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }
  public set oversizeLimit(value: number) {
    this._oversizeLimit = value;
  }
  public resetOversizeLimit() {
    this._oversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeLimitInput() {
    return this._oversizeLimit;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number; 
  public get ports() {
    return this.getNumberAttribute('ports');
  }
  public set ports(value: number) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // post_lang - computed: false, optional: true, required: false
  private _postLang?: string; 
  public get postLang() {
    return this.getStringAttribute('post_lang');
  }
  public set postLang(value: string) {
    this._postLang = value;
  }
  public resetPostLang() {
    this._postLang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLangInput() {
    return this._postLang;
  }

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
  }

  // range_block - computed: true, optional: true, required: false
  private _rangeBlock?: string; 
  public get rangeBlock() {
    return this.getStringAttribute('range_block');
  }
  public set rangeBlock(value: string) {
    this._rangeBlock = value;
  }
  public resetRangeBlock() {
    this._rangeBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeBlockInput() {
    return this._rangeBlock;
  }

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // scan_bzip2 - computed: true, optional: true, required: false
  private _scanBzip2?: string; 
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }
  public set scanBzip2(value: string) {
    this._scanBzip2 = value;
  }
  public resetScanBzip2() {
    this._scanBzip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBzip2Input() {
    return this._scanBzip2;
  }

  // ssl_offloaded - computed: true, optional: true, required: false
  private _sslOffloaded?: string; 
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }
  public set sslOffloaded(value: string) {
    this._sslOffloaded = value;
  }
  public resetSslOffloaded() {
    this._sslOffloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOffloadedInput() {
    return this._sslOffloaded;
  }

  // status - computed: true, optional: true, required: false
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

  // stream_based_uncompressed_limit - computed: false, optional: true, required: false
  private _streamBasedUncompressedLimit?: number; 
  public get streamBasedUncompressedLimit() {
    return this.getNumberAttribute('stream_based_uncompressed_limit');
  }
  public set streamBasedUncompressedLimit(value: number) {
    this._streamBasedUncompressedLimit = value;
  }
  public resetStreamBasedUncompressedLimit() {
    this._streamBasedUncompressedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamBasedUncompressedLimitInput() {
    return this._streamBasedUncompressedLimit;
  }

  // streaming_content_bypass - computed: true, optional: true, required: false
  private _streamingContentBypass?: string; 
  public get streamingContentBypass() {
    return this.getStringAttribute('streaming_content_bypass');
  }
  public set streamingContentBypass(value: string) {
    this._streamingContentBypass = value;
  }
  public resetStreamingContentBypass() {
    this._streamingContentBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingContentBypassInput() {
    return this._streamingContentBypass;
  }

  // strip_x_forwarded_for - computed: true, optional: true, required: false
  private _stripXForwardedFor?: string; 
  public get stripXForwardedFor() {
    return this.getStringAttribute('strip_x_forwarded_for');
  }
  public set stripXForwardedFor(value: string) {
    this._stripXForwardedFor = value;
  }
  public resetStripXForwardedFor() {
    this._stripXForwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripXForwardedForInput() {
    return this._stripXForwardedFor;
  }

  // switching_protocols - computed: true, optional: true, required: false
  private _switchingProtocols?: string; 
  public get switchingProtocols() {
    return this.getStringAttribute('switching_protocols');
  }
  public set switchingProtocols(value: string) {
    this._switchingProtocols = value;
  }
  public resetSwitchingProtocols() {
    this._switchingProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingProtocolsInput() {
    return this._switchingProtocols;
  }

  // tcp_window_maximum - computed: true, optional: true, required: false
  private _tcpWindowMaximum?: number; 
  public get tcpWindowMaximum() {
    return this.getNumberAttribute('tcp_window_maximum');
  }
  public set tcpWindowMaximum(value: number) {
    this._tcpWindowMaximum = value;
  }
  public resetTcpWindowMaximum() {
    this._tcpWindowMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowMaximumInput() {
    return this._tcpWindowMaximum;
  }

  // tcp_window_minimum - computed: true, optional: true, required: false
  private _tcpWindowMinimum?: number; 
  public get tcpWindowMinimum() {
    return this.getNumberAttribute('tcp_window_minimum');
  }
  public set tcpWindowMinimum(value: number) {
    this._tcpWindowMinimum = value;
  }
  public resetTcpWindowMinimum() {
    this._tcpWindowMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowMinimumInput() {
    return this._tcpWindowMinimum;
  }

  // tcp_window_size - computed: true, optional: true, required: false
  private _tcpWindowSize?: number; 
  public get tcpWindowSize() {
    return this.getNumberAttribute('tcp_window_size');
  }
  public set tcpWindowSize(value: number) {
    this._tcpWindowSize = value;
  }
  public resetTcpWindowSize() {
    this._tcpWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowSizeInput() {
    return this._tcpWindowSize;
  }

  // tcp_window_type - computed: true, optional: true, required: false
  private _tcpWindowType?: string; 
  public get tcpWindowType() {
    return this.getStringAttribute('tcp_window_type');
  }
  public set tcpWindowType(value: string) {
    this._tcpWindowType = value;
  }
  public resetTcpWindowType() {
    this._tcpWindowType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowTypeInput() {
    return this._tcpWindowType;
  }

  // tunnel_non_http - computed: true, optional: true, required: false
  private _tunnelNonHttp?: string; 
  public get tunnelNonHttp() {
    return this.getStringAttribute('tunnel_non_http');
  }
  public set tunnelNonHttp(value: string) {
    this._tunnelNonHttp = value;
  }
  public resetTunnelNonHttp() {
    this._tunnelNonHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelNonHttpInput() {
    return this._tunnelNonHttp;
  }

  // uncompressed_nest_limit - computed: true, optional: true, required: false
  private _uncompressedNestLimit?: number; 
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }
  public set uncompressedNestLimit(value: number) {
    this._uncompressedNestLimit = value;
  }
  public resetUncompressedNestLimit() {
    this._uncompressedNestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedNestLimitInput() {
    return this._uncompressedNestLimit;
  }

  // uncompressed_oversize_limit - computed: true, optional: true, required: false
  private _uncompressedOversizeLimit?: number; 
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
  public set uncompressedOversizeLimit(value: number) {
    this._uncompressedOversizeLimit = value;
  }
  public resetUncompressedOversizeLimit() {
    this._uncompressedOversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedOversizeLimitInput() {
    return this._uncompressedOversizeLimit;
  }

  // unknown_content_encoding - computed: true, optional: true, required: false
  private _unknownContentEncoding?: string; 
  public get unknownContentEncoding() {
    return this.getStringAttribute('unknown_content_encoding');
  }
  public set unknownContentEncoding(value: string) {
    this._unknownContentEncoding = value;
  }
  public resetUnknownContentEncoding() {
    this._unknownContentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownContentEncodingInput() {
    return this._unknownContentEncoding;
  }

  // unknown_http_version - computed: true, optional: true, required: false
  private _unknownHttpVersion?: string; 
  public get unknownHttpVersion() {
    return this.getStringAttribute('unknown_http_version');
  }
  public set unknownHttpVersion(value: string) {
    this._unknownHttpVersion = value;
  }
  public resetUnknownHttpVersion() {
    this._unknownHttpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownHttpVersionInput() {
    return this._unknownHttpVersion;
  }

  // verify_dns_for_policy_matching - computed: true, optional: true, required: false
  private _verifyDnsForPolicyMatching?: string; 
  public get verifyDnsForPolicyMatching() {
    return this.getStringAttribute('verify_dns_for_policy_matching');
  }
  public set verifyDnsForPolicyMatching(value: string) {
    this._verifyDnsForPolicyMatching = value;
  }
  public resetVerifyDnsForPolicyMatching() {
    this._verifyDnsForPolicyMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyDnsForPolicyMatchingInput() {
    return this._verifyDnsForPolicyMatching;
  }
}
export interface FirewallProfileprotocoloptionsImap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#inspect_all FirewallProfileprotocoloptions#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#options FirewallProfileprotocoloptions#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#oversize_limit FirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ports FirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#proxy_after_tcp_handshake FirewallProfileprotocoloptions#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#scan_bzip2 FirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ssl_offloaded FirewallProfileprotocoloptions#ssl_offloaded}
  */
  readonly sslOffloaded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#status FirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_nest_limit FirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_oversize_limit FirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

export function firewallProfileprotocoloptionsImapToTerraform(struct?: FirewallProfileprotocoloptionsImapOutputReference | FirewallProfileprotocoloptionsImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspect_all: cdktf.stringToTerraform(struct!.inspectAll),
    options: cdktf.stringToTerraform(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.numberToTerraform(struct!.ports),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    ssl_offloaded: cdktf.stringToTerraform(struct!.sslOffloaded),
    status: cdktf.stringToTerraform(struct!.status),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
  }
}


export function firewallProfileprotocoloptionsImapToHclTerraform(struct?: FirewallProfileprotocoloptionsImapOutputReference | FirewallProfileprotocoloptionsImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspect_all: {
      value: cdktf.stringToHclTerraform(struct!.inspectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.numberToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_offloaded: {
      value: cdktf.stringToHclTerraform(struct!.sslOffloaded),
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
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallProfileprotocoloptionsImapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallProfileprotocoloptionsImap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectAll = this._inspectAll;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._sslOffloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslOffloaded = this._sslOffloaded;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallProfileprotocoloptionsImap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inspectAll = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._scanBzip2 = undefined;
      this._sslOffloaded = undefined;
      this._status = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inspectAll = value.inspectAll;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._scanBzip2 = value.scanBzip2;
      this._sslOffloaded = value.sslOffloaded;
      this._status = value.status;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
    }
  }

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // oversize_limit - computed: true, optional: true, required: false
  private _oversizeLimit?: number; 
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }
  public set oversizeLimit(value: number) {
    this._oversizeLimit = value;
  }
  public resetOversizeLimit() {
    this._oversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeLimitInput() {
    return this._oversizeLimit;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number; 
  public get ports() {
    return this.getNumberAttribute('ports');
  }
  public set ports(value: number) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
  }

  // scan_bzip2 - computed: true, optional: true, required: false
  private _scanBzip2?: string; 
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }
  public set scanBzip2(value: string) {
    this._scanBzip2 = value;
  }
  public resetScanBzip2() {
    this._scanBzip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBzip2Input() {
    return this._scanBzip2;
  }

  // ssl_offloaded - computed: true, optional: true, required: false
  private _sslOffloaded?: string; 
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }
  public set sslOffloaded(value: string) {
    this._sslOffloaded = value;
  }
  public resetSslOffloaded() {
    this._sslOffloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOffloadedInput() {
    return this._sslOffloaded;
  }

  // status - computed: true, optional: true, required: false
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

  // uncompressed_nest_limit - computed: true, optional: true, required: false
  private _uncompressedNestLimit?: number; 
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }
  public set uncompressedNestLimit(value: number) {
    this._uncompressedNestLimit = value;
  }
  public resetUncompressedNestLimit() {
    this._uncompressedNestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedNestLimitInput() {
    return this._uncompressedNestLimit;
  }

  // uncompressed_oversize_limit - computed: true, optional: true, required: false
  private _uncompressedOversizeLimit?: number; 
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
  public set uncompressedOversizeLimit(value: number) {
    this._uncompressedOversizeLimit = value;
  }
  public resetUncompressedOversizeLimit() {
    this._uncompressedOversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedOversizeLimitInput() {
    return this._uncompressedOversizeLimit;
  }
}
export interface FirewallProfileprotocoloptionsMailSignature {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#signature FirewallProfileprotocoloptions#signature}
  */
  readonly signature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#status FirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
}

export function firewallProfileprotocoloptionsMailSignatureToTerraform(struct?: FirewallProfileprotocoloptionsMailSignatureOutputReference | FirewallProfileprotocoloptionsMailSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signature: cdktf.stringToTerraform(struct!.signature),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function firewallProfileprotocoloptionsMailSignatureToHclTerraform(struct?: FirewallProfileprotocoloptionsMailSignatureOutputReference | FirewallProfileprotocoloptionsMailSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    signature: {
      value: cdktf.stringToHclTerraform(struct!.signature),
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

export class FirewallProfileprotocoloptionsMailSignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallProfileprotocoloptionsMailSignature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signature !== undefined) {
      hasAnyValues = true;
      internalValueResult.signature = this._signature;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallProfileprotocoloptionsMailSignature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._signature = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._signature = value.signature;
      this._status = value.status;
    }
  }

  // signature - computed: false, optional: true, required: false
  private _signature?: string; 
  public get signature() {
    return this.getStringAttribute('signature');
  }
  public set signature(value: string) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }

  // status - computed: true, optional: true, required: false
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
export interface FirewallProfileprotocoloptionsMapi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#options FirewallProfileprotocoloptions#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#oversize_limit FirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ports FirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#scan_bzip2 FirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#status FirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_nest_limit FirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_oversize_limit FirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

export function firewallProfileprotocoloptionsMapiToTerraform(struct?: FirewallProfileprotocoloptionsMapiOutputReference | FirewallProfileprotocoloptionsMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.stringToTerraform(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.numberToTerraform(struct!.ports),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    status: cdktf.stringToTerraform(struct!.status),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
  }
}


export function firewallProfileprotocoloptionsMapiToHclTerraform(struct?: FirewallProfileprotocoloptionsMapiOutputReference | FirewallProfileprotocoloptionsMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.numberToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
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
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallProfileprotocoloptionsMapiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallProfileprotocoloptionsMapi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallProfileprotocoloptionsMapi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._scanBzip2 = undefined;
      this._status = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._scanBzip2 = value.scanBzip2;
      this._status = value.status;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // oversize_limit - computed: true, optional: true, required: false
  private _oversizeLimit?: number; 
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }
  public set oversizeLimit(value: number) {
    this._oversizeLimit = value;
  }
  public resetOversizeLimit() {
    this._oversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeLimitInput() {
    return this._oversizeLimit;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number; 
  public get ports() {
    return this.getNumberAttribute('ports');
  }
  public set ports(value: number) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // scan_bzip2 - computed: true, optional: true, required: false
  private _scanBzip2?: string; 
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }
  public set scanBzip2(value: string) {
    this._scanBzip2 = value;
  }
  public resetScanBzip2() {
    this._scanBzip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBzip2Input() {
    return this._scanBzip2;
  }

  // status - computed: true, optional: true, required: false
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

  // uncompressed_nest_limit - computed: true, optional: true, required: false
  private _uncompressedNestLimit?: number; 
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }
  public set uncompressedNestLimit(value: number) {
    this._uncompressedNestLimit = value;
  }
  public resetUncompressedNestLimit() {
    this._uncompressedNestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedNestLimitInput() {
    return this._uncompressedNestLimit;
  }

  // uncompressed_oversize_limit - computed: true, optional: true, required: false
  private _uncompressedOversizeLimit?: number; 
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
  public set uncompressedOversizeLimit(value: number) {
    this._uncompressedOversizeLimit = value;
  }
  public resetUncompressedOversizeLimit() {
    this._uncompressedOversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedOversizeLimitInput() {
    return this._uncompressedOversizeLimit;
  }
}
export interface FirewallProfileprotocoloptionsNntp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#inspect_all FirewallProfileprotocoloptions#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#options FirewallProfileprotocoloptions#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#oversize_limit FirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ports FirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#proxy_after_tcp_handshake FirewallProfileprotocoloptions#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#scan_bzip2 FirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#status FirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_nest_limit FirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_oversize_limit FirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

export function firewallProfileprotocoloptionsNntpToTerraform(struct?: FirewallProfileprotocoloptionsNntpOutputReference | FirewallProfileprotocoloptionsNntp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspect_all: cdktf.stringToTerraform(struct!.inspectAll),
    options: cdktf.stringToTerraform(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.numberToTerraform(struct!.ports),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    status: cdktf.stringToTerraform(struct!.status),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
  }
}


export function firewallProfileprotocoloptionsNntpToHclTerraform(struct?: FirewallProfileprotocoloptionsNntpOutputReference | FirewallProfileprotocoloptionsNntp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspect_all: {
      value: cdktf.stringToHclTerraform(struct!.inspectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.numberToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
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
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallProfileprotocoloptionsNntpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallProfileprotocoloptionsNntp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectAll = this._inspectAll;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallProfileprotocoloptionsNntp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inspectAll = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._scanBzip2 = undefined;
      this._status = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inspectAll = value.inspectAll;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._scanBzip2 = value.scanBzip2;
      this._status = value.status;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
    }
  }

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // oversize_limit - computed: true, optional: true, required: false
  private _oversizeLimit?: number; 
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }
  public set oversizeLimit(value: number) {
    this._oversizeLimit = value;
  }
  public resetOversizeLimit() {
    this._oversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeLimitInput() {
    return this._oversizeLimit;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number; 
  public get ports() {
    return this.getNumberAttribute('ports');
  }
  public set ports(value: number) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
  }

  // scan_bzip2 - computed: true, optional: true, required: false
  private _scanBzip2?: string; 
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }
  public set scanBzip2(value: string) {
    this._scanBzip2 = value;
  }
  public resetScanBzip2() {
    this._scanBzip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBzip2Input() {
    return this._scanBzip2;
  }

  // status - computed: true, optional: true, required: false
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

  // uncompressed_nest_limit - computed: true, optional: true, required: false
  private _uncompressedNestLimit?: number; 
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }
  public set uncompressedNestLimit(value: number) {
    this._uncompressedNestLimit = value;
  }
  public resetUncompressedNestLimit() {
    this._uncompressedNestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedNestLimitInput() {
    return this._uncompressedNestLimit;
  }

  // uncompressed_oversize_limit - computed: true, optional: true, required: false
  private _uncompressedOversizeLimit?: number; 
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
  public set uncompressedOversizeLimit(value: number) {
    this._uncompressedOversizeLimit = value;
  }
  public resetUncompressedOversizeLimit() {
    this._uncompressedOversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedOversizeLimitInput() {
    return this._uncompressedOversizeLimit;
  }
}
export interface FirewallProfileprotocoloptionsPop3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#inspect_all FirewallProfileprotocoloptions#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#options FirewallProfileprotocoloptions#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#oversize_limit FirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ports FirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#proxy_after_tcp_handshake FirewallProfileprotocoloptions#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#scan_bzip2 FirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ssl_offloaded FirewallProfileprotocoloptions#ssl_offloaded}
  */
  readonly sslOffloaded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#status FirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_nest_limit FirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_oversize_limit FirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

export function firewallProfileprotocoloptionsPop3ToTerraform(struct?: FirewallProfileprotocoloptionsPop3OutputReference | FirewallProfileprotocoloptionsPop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspect_all: cdktf.stringToTerraform(struct!.inspectAll),
    options: cdktf.stringToTerraform(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.numberToTerraform(struct!.ports),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    ssl_offloaded: cdktf.stringToTerraform(struct!.sslOffloaded),
    status: cdktf.stringToTerraform(struct!.status),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
  }
}


export function firewallProfileprotocoloptionsPop3ToHclTerraform(struct?: FirewallProfileprotocoloptionsPop3OutputReference | FirewallProfileprotocoloptionsPop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspect_all: {
      value: cdktf.stringToHclTerraform(struct!.inspectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.numberToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_offloaded: {
      value: cdktf.stringToHclTerraform(struct!.sslOffloaded),
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
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallProfileprotocoloptionsPop3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallProfileprotocoloptionsPop3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectAll = this._inspectAll;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._sslOffloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslOffloaded = this._sslOffloaded;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallProfileprotocoloptionsPop3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inspectAll = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._scanBzip2 = undefined;
      this._sslOffloaded = undefined;
      this._status = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inspectAll = value.inspectAll;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._scanBzip2 = value.scanBzip2;
      this._sslOffloaded = value.sslOffloaded;
      this._status = value.status;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
    }
  }

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // oversize_limit - computed: true, optional: true, required: false
  private _oversizeLimit?: number; 
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }
  public set oversizeLimit(value: number) {
    this._oversizeLimit = value;
  }
  public resetOversizeLimit() {
    this._oversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeLimitInput() {
    return this._oversizeLimit;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number; 
  public get ports() {
    return this.getNumberAttribute('ports');
  }
  public set ports(value: number) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
  }

  // scan_bzip2 - computed: true, optional: true, required: false
  private _scanBzip2?: string; 
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }
  public set scanBzip2(value: string) {
    this._scanBzip2 = value;
  }
  public resetScanBzip2() {
    this._scanBzip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBzip2Input() {
    return this._scanBzip2;
  }

  // ssl_offloaded - computed: true, optional: true, required: false
  private _sslOffloaded?: string; 
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }
  public set sslOffloaded(value: string) {
    this._sslOffloaded = value;
  }
  public resetSslOffloaded() {
    this._sslOffloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOffloadedInput() {
    return this._sslOffloaded;
  }

  // status - computed: true, optional: true, required: false
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

  // uncompressed_nest_limit - computed: true, optional: true, required: false
  private _uncompressedNestLimit?: number; 
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }
  public set uncompressedNestLimit(value: number) {
    this._uncompressedNestLimit = value;
  }
  public resetUncompressedNestLimit() {
    this._uncompressedNestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedNestLimitInput() {
    return this._uncompressedNestLimit;
  }

  // uncompressed_oversize_limit - computed: true, optional: true, required: false
  private _uncompressedOversizeLimit?: number; 
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
  public set uncompressedOversizeLimit(value: number) {
    this._uncompressedOversizeLimit = value;
  }
  public resetUncompressedOversizeLimit() {
    this._uncompressedOversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedOversizeLimitInput() {
    return this._uncompressedOversizeLimit;
  }
}
export interface FirewallProfileprotocoloptionsSmtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#inspect_all FirewallProfileprotocoloptions#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#options FirewallProfileprotocoloptions#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#oversize_limit FirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ports FirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#proxy_after_tcp_handshake FirewallProfileprotocoloptions#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#scan_bzip2 FirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#server_busy FirewallProfileprotocoloptions#server_busy}
  */
  readonly serverBusy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ssl_offloaded FirewallProfileprotocoloptions#ssl_offloaded}
  */
  readonly sslOffloaded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#status FirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_nest_limit FirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_oversize_limit FirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

export function firewallProfileprotocoloptionsSmtpToTerraform(struct?: FirewallProfileprotocoloptionsSmtpOutputReference | FirewallProfileprotocoloptionsSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspect_all: cdktf.stringToTerraform(struct!.inspectAll),
    options: cdktf.stringToTerraform(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.numberToTerraform(struct!.ports),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    server_busy: cdktf.stringToTerraform(struct!.serverBusy),
    ssl_offloaded: cdktf.stringToTerraform(struct!.sslOffloaded),
    status: cdktf.stringToTerraform(struct!.status),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
  }
}


export function firewallProfileprotocoloptionsSmtpToHclTerraform(struct?: FirewallProfileprotocoloptionsSmtpOutputReference | FirewallProfileprotocoloptionsSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspect_all: {
      value: cdktf.stringToHclTerraform(struct!.inspectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.numberToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_busy: {
      value: cdktf.stringToHclTerraform(struct!.serverBusy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_offloaded: {
      value: cdktf.stringToHclTerraform(struct!.sslOffloaded),
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
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallProfileprotocoloptionsSmtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallProfileprotocoloptionsSmtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectAll = this._inspectAll;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._serverBusy !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverBusy = this._serverBusy;
    }
    if (this._sslOffloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslOffloaded = this._sslOffloaded;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallProfileprotocoloptionsSmtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inspectAll = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._scanBzip2 = undefined;
      this._serverBusy = undefined;
      this._sslOffloaded = undefined;
      this._status = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inspectAll = value.inspectAll;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._scanBzip2 = value.scanBzip2;
      this._serverBusy = value.serverBusy;
      this._sslOffloaded = value.sslOffloaded;
      this._status = value.status;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
    }
  }

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // oversize_limit - computed: true, optional: true, required: false
  private _oversizeLimit?: number; 
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }
  public set oversizeLimit(value: number) {
    this._oversizeLimit = value;
  }
  public resetOversizeLimit() {
    this._oversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeLimitInput() {
    return this._oversizeLimit;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number; 
  public get ports() {
    return this.getNumberAttribute('ports');
  }
  public set ports(value: number) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
  }

  // scan_bzip2 - computed: true, optional: true, required: false
  private _scanBzip2?: string; 
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }
  public set scanBzip2(value: string) {
    this._scanBzip2 = value;
  }
  public resetScanBzip2() {
    this._scanBzip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBzip2Input() {
    return this._scanBzip2;
  }

  // server_busy - computed: true, optional: true, required: false
  private _serverBusy?: string; 
  public get serverBusy() {
    return this.getStringAttribute('server_busy');
  }
  public set serverBusy(value: string) {
    this._serverBusy = value;
  }
  public resetServerBusy() {
    this._serverBusy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverBusyInput() {
    return this._serverBusy;
  }

  // ssl_offloaded - computed: true, optional: true, required: false
  private _sslOffloaded?: string; 
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }
  public set sslOffloaded(value: string) {
    this._sslOffloaded = value;
  }
  public resetSslOffloaded() {
    this._sslOffloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOffloadedInput() {
    return this._sslOffloaded;
  }

  // status - computed: true, optional: true, required: false
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

  // uncompressed_nest_limit - computed: true, optional: true, required: false
  private _uncompressedNestLimit?: number; 
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }
  public set uncompressedNestLimit(value: number) {
    this._uncompressedNestLimit = value;
  }
  public resetUncompressedNestLimit() {
    this._uncompressedNestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedNestLimitInput() {
    return this._uncompressedNestLimit;
  }

  // uncompressed_oversize_limit - computed: true, optional: true, required: false
  private _uncompressedOversizeLimit?: number; 
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
  public set uncompressedOversizeLimit(value: number) {
    this._uncompressedOversizeLimit = value;
  }
  public resetUncompressedOversizeLimit() {
    this._uncompressedOversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedOversizeLimitInput() {
    return this._uncompressedOversizeLimit;
  }
}
export interface FirewallProfileprotocoloptionsSsh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#comfort_amount FirewallProfileprotocoloptions#comfort_amount}
  */
  readonly comfortAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#comfort_interval FirewallProfileprotocoloptions#comfort_interval}
  */
  readonly comfortInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#options FirewallProfileprotocoloptions#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#oversize_limit FirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#scan_bzip2 FirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#ssl_offloaded FirewallProfileprotocoloptions#ssl_offloaded}
  */
  readonly sslOffloaded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#stream_based_uncompressed_limit FirewallProfileprotocoloptions#stream_based_uncompressed_limit}
  */
  readonly streamBasedUncompressedLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_maximum FirewallProfileprotocoloptions#tcp_window_maximum}
  */
  readonly tcpWindowMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_minimum FirewallProfileprotocoloptions#tcp_window_minimum}
  */
  readonly tcpWindowMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_size FirewallProfileprotocoloptions#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#tcp_window_type FirewallProfileprotocoloptions#tcp_window_type}
  */
  readonly tcpWindowType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_nest_limit FirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#uncompressed_oversize_limit FirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

export function firewallProfileprotocoloptionsSshToTerraform(struct?: FirewallProfileprotocoloptionsSshOutputReference | FirewallProfileprotocoloptionsSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comfort_amount: cdktf.numberToTerraform(struct!.comfortAmount),
    comfort_interval: cdktf.numberToTerraform(struct!.comfortInterval),
    options: cdktf.stringToTerraform(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    ssl_offloaded: cdktf.stringToTerraform(struct!.sslOffloaded),
    stream_based_uncompressed_limit: cdktf.numberToTerraform(struct!.streamBasedUncompressedLimit),
    tcp_window_maximum: cdktf.numberToTerraform(struct!.tcpWindowMaximum),
    tcp_window_minimum: cdktf.numberToTerraform(struct!.tcpWindowMinimum),
    tcp_window_size: cdktf.numberToTerraform(struct!.tcpWindowSize),
    tcp_window_type: cdktf.stringToTerraform(struct!.tcpWindowType),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
  }
}


export function firewallProfileprotocoloptionsSshToHclTerraform(struct?: FirewallProfileprotocoloptionsSshOutputReference | FirewallProfileprotocoloptionsSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comfort_amount: {
      value: cdktf.numberToHclTerraform(struct!.comfortAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comfort_interval: {
      value: cdktf.numberToHclTerraform(struct!.comfortInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_offloaded: {
      value: cdktf.stringToHclTerraform(struct!.sslOffloaded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_based_uncompressed_limit: {
      value: cdktf.numberToHclTerraform(struct!.streamBasedUncompressedLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_maximum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_minimum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_size: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_type: {
      value: cdktf.stringToHclTerraform(struct!.tcpWindowType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallProfileprotocoloptionsSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallProfileprotocoloptionsSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comfortAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.comfortAmount = this._comfortAmount;
    }
    if (this._comfortInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.comfortInterval = this._comfortInterval;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._sslOffloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslOffloaded = this._sslOffloaded;
    }
    if (this._streamBasedUncompressedLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamBasedUncompressedLimit = this._streamBasedUncompressedLimit;
    }
    if (this._tcpWindowMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMaximum = this._tcpWindowMaximum;
    }
    if (this._tcpWindowMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMinimum = this._tcpWindowMinimum;
    }
    if (this._tcpWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowSize = this._tcpWindowSize;
    }
    if (this._tcpWindowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowType = this._tcpWindowType;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallProfileprotocoloptionsSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comfortAmount = undefined;
      this._comfortInterval = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._scanBzip2 = undefined;
      this._sslOffloaded = undefined;
      this._streamBasedUncompressedLimit = undefined;
      this._tcpWindowMaximum = undefined;
      this._tcpWindowMinimum = undefined;
      this._tcpWindowSize = undefined;
      this._tcpWindowType = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comfortAmount = value.comfortAmount;
      this._comfortInterval = value.comfortInterval;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._scanBzip2 = value.scanBzip2;
      this._sslOffloaded = value.sslOffloaded;
      this._streamBasedUncompressedLimit = value.streamBasedUncompressedLimit;
      this._tcpWindowMaximum = value.tcpWindowMaximum;
      this._tcpWindowMinimum = value.tcpWindowMinimum;
      this._tcpWindowSize = value.tcpWindowSize;
      this._tcpWindowType = value.tcpWindowType;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
    }
  }

  // comfort_amount - computed: true, optional: true, required: false
  private _comfortAmount?: number; 
  public get comfortAmount() {
    return this.getNumberAttribute('comfort_amount');
  }
  public set comfortAmount(value: number) {
    this._comfortAmount = value;
  }
  public resetComfortAmount() {
    this._comfortAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortAmountInput() {
    return this._comfortAmount;
  }

  // comfort_interval - computed: true, optional: true, required: false
  private _comfortInterval?: number; 
  public get comfortInterval() {
    return this.getNumberAttribute('comfort_interval');
  }
  public set comfortInterval(value: number) {
    this._comfortInterval = value;
  }
  public resetComfortInterval() {
    this._comfortInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortIntervalInput() {
    return this._comfortInterval;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // oversize_limit - computed: true, optional: true, required: false
  private _oversizeLimit?: number; 
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }
  public set oversizeLimit(value: number) {
    this._oversizeLimit = value;
  }
  public resetOversizeLimit() {
    this._oversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeLimitInput() {
    return this._oversizeLimit;
  }

  // scan_bzip2 - computed: true, optional: true, required: false
  private _scanBzip2?: string; 
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }
  public set scanBzip2(value: string) {
    this._scanBzip2 = value;
  }
  public resetScanBzip2() {
    this._scanBzip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBzip2Input() {
    return this._scanBzip2;
  }

  // ssl_offloaded - computed: true, optional: true, required: false
  private _sslOffloaded?: string; 
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }
  public set sslOffloaded(value: string) {
    this._sslOffloaded = value;
  }
  public resetSslOffloaded() {
    this._sslOffloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOffloadedInput() {
    return this._sslOffloaded;
  }

  // stream_based_uncompressed_limit - computed: false, optional: true, required: false
  private _streamBasedUncompressedLimit?: number; 
  public get streamBasedUncompressedLimit() {
    return this.getNumberAttribute('stream_based_uncompressed_limit');
  }
  public set streamBasedUncompressedLimit(value: number) {
    this._streamBasedUncompressedLimit = value;
  }
  public resetStreamBasedUncompressedLimit() {
    this._streamBasedUncompressedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamBasedUncompressedLimitInput() {
    return this._streamBasedUncompressedLimit;
  }

  // tcp_window_maximum - computed: true, optional: true, required: false
  private _tcpWindowMaximum?: number; 
  public get tcpWindowMaximum() {
    return this.getNumberAttribute('tcp_window_maximum');
  }
  public set tcpWindowMaximum(value: number) {
    this._tcpWindowMaximum = value;
  }
  public resetTcpWindowMaximum() {
    this._tcpWindowMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowMaximumInput() {
    return this._tcpWindowMaximum;
  }

  // tcp_window_minimum - computed: true, optional: true, required: false
  private _tcpWindowMinimum?: number; 
  public get tcpWindowMinimum() {
    return this.getNumberAttribute('tcp_window_minimum');
  }
  public set tcpWindowMinimum(value: number) {
    this._tcpWindowMinimum = value;
  }
  public resetTcpWindowMinimum() {
    this._tcpWindowMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowMinimumInput() {
    return this._tcpWindowMinimum;
  }

  // tcp_window_size - computed: true, optional: true, required: false
  private _tcpWindowSize?: number; 
  public get tcpWindowSize() {
    return this.getNumberAttribute('tcp_window_size');
  }
  public set tcpWindowSize(value: number) {
    this._tcpWindowSize = value;
  }
  public resetTcpWindowSize() {
    this._tcpWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowSizeInput() {
    return this._tcpWindowSize;
  }

  // tcp_window_type - computed: true, optional: true, required: false
  private _tcpWindowType?: string; 
  public get tcpWindowType() {
    return this.getStringAttribute('tcp_window_type');
  }
  public set tcpWindowType(value: string) {
    this._tcpWindowType = value;
  }
  public resetTcpWindowType() {
    this._tcpWindowType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowTypeInput() {
    return this._tcpWindowType;
  }

  // uncompressed_nest_limit - computed: true, optional: true, required: false
  private _uncompressedNestLimit?: number; 
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }
  public set uncompressedNestLimit(value: number) {
    this._uncompressedNestLimit = value;
  }
  public resetUncompressedNestLimit() {
    this._uncompressedNestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedNestLimitInput() {
    return this._uncompressedNestLimit;
  }

  // uncompressed_oversize_limit - computed: true, optional: true, required: false
  private _uncompressedOversizeLimit?: number; 
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
  public set uncompressedOversizeLimit(value: number) {
    this._uncompressedOversizeLimit = value;
  }
  public resetUncompressedOversizeLimit() {
    this._uncompressedOversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedOversizeLimitInput() {
    return this._uncompressedOversizeLimit;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions fortios_firewall_profileprotocoloptions}
*/
export class FirewallProfileprotocoloptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_profileprotocoloptions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallProfileprotocoloptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallProfileprotocoloptions to import
  * @param importFromId The id of the existing FirewallProfileprotocoloptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallProfileprotocoloptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_profileprotocoloptions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_profileprotocoloptions fortios_firewall_profileprotocoloptions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallProfileprotocoloptionsConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallProfileprotocoloptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_profileprotocoloptions',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._featureSet = config.featureSet;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._oversizeLog = config.oversizeLog;
    this._replacemsgGroup = config.replacemsgGroup;
    this._rpcOverHttp = config.rpcOverHttp;
    this._switchingProtocolsLog = config.switchingProtocolsLog;
    this._vdomparam = config.vdomparam;
    this._cifs.internalValue = config.cifs;
    this._dns.internalValue = config.dns;
    this._ftp.internalValue = config.ftp;
    this._http.internalValue = config.http;
    this._imap.internalValue = config.imap;
    this._mailSignature.internalValue = config.mailSignature;
    this._mapi.internalValue = config.mapi;
    this._nntp.internalValue = config.nntp;
    this._pop3.internalValue = config.pop3;
    this._smtp.internalValue = config.smtp;
    this._ssh.internalValue = config.ssh;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // feature_set - computed: false, optional: true, required: false
  private _featureSet?: string; 
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }
  public set featureSet(value: string) {
    this._featureSet = value;
  }
  public resetFeatureSet() {
    this._featureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSetInput() {
    return this._featureSet;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // oversize_log - computed: true, optional: true, required: false
  private _oversizeLog?: string; 
  public get oversizeLog() {
    return this.getStringAttribute('oversize_log');
  }
  public set oversizeLog(value: string) {
    this._oversizeLog = value;
  }
  public resetOversizeLog() {
    this._oversizeLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeLogInput() {
    return this._oversizeLog;
  }

  // replacemsg_group - computed: false, optional: true, required: false
  private _replacemsgGroup?: string; 
  public get replacemsgGroup() {
    return this.getStringAttribute('replacemsg_group');
  }
  public set replacemsgGroup(value: string) {
    this._replacemsgGroup = value;
  }
  public resetReplacemsgGroup() {
    this._replacemsgGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgGroupInput() {
    return this._replacemsgGroup;
  }

  // rpc_over_http - computed: true, optional: true, required: false
  private _rpcOverHttp?: string; 
  public get rpcOverHttp() {
    return this.getStringAttribute('rpc_over_http');
  }
  public set rpcOverHttp(value: string) {
    this._rpcOverHttp = value;
  }
  public resetRpcOverHttp() {
    this._rpcOverHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcOverHttpInput() {
    return this._rpcOverHttp;
  }

  // switching_protocols_log - computed: true, optional: true, required: false
  private _switchingProtocolsLog?: string; 
  public get switchingProtocolsLog() {
    return this.getStringAttribute('switching_protocols_log');
  }
  public set switchingProtocolsLog(value: string) {
    this._switchingProtocolsLog = value;
  }
  public resetSwitchingProtocolsLog() {
    this._switchingProtocolsLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingProtocolsLogInput() {
    return this._switchingProtocolsLog;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // cifs - computed: false, optional: true, required: false
  private _cifs = new FirewallProfileprotocoloptionsCifsOutputReference(this, "cifs");
  public get cifs() {
    return this._cifs;
  }
  public putCifs(value: FirewallProfileprotocoloptionsCifs) {
    this._cifs.internalValue = value;
  }
  public resetCifs() {
    this._cifs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsInput() {
    return this._cifs.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new FirewallProfileprotocoloptionsDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: FirewallProfileprotocoloptionsDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // ftp - computed: false, optional: true, required: false
  private _ftp = new FirewallProfileprotocoloptionsFtpOutputReference(this, "ftp");
  public get ftp() {
    return this._ftp;
  }
  public putFtp(value: FirewallProfileprotocoloptionsFtp) {
    this._ftp.internalValue = value;
  }
  public resetFtp() {
    this._ftp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new FirewallProfileprotocoloptionsHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: FirewallProfileprotocoloptionsHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // imap - computed: false, optional: true, required: false
  private _imap = new FirewallProfileprotocoloptionsImapOutputReference(this, "imap");
  public get imap() {
    return this._imap;
  }
  public putImap(value: FirewallProfileprotocoloptionsImap) {
    this._imap.internalValue = value;
  }
  public resetImap() {
    this._imap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapInput() {
    return this._imap.internalValue;
  }

  // mail_signature - computed: false, optional: true, required: false
  private _mailSignature = new FirewallProfileprotocoloptionsMailSignatureOutputReference(this, "mail_signature");
  public get mailSignature() {
    return this._mailSignature;
  }
  public putMailSignature(value: FirewallProfileprotocoloptionsMailSignature) {
    this._mailSignature.internalValue = value;
  }
  public resetMailSignature() {
    this._mailSignature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailSignatureInput() {
    return this._mailSignature.internalValue;
  }

  // mapi - computed: false, optional: true, required: false
  private _mapi = new FirewallProfileprotocoloptionsMapiOutputReference(this, "mapi");
  public get mapi() {
    return this._mapi;
  }
  public putMapi(value: FirewallProfileprotocoloptionsMapi) {
    this._mapi.internalValue = value;
  }
  public resetMapi() {
    this._mapi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapiInput() {
    return this._mapi.internalValue;
  }

  // nntp - computed: false, optional: true, required: false
  private _nntp = new FirewallProfileprotocoloptionsNntpOutputReference(this, "nntp");
  public get nntp() {
    return this._nntp;
  }
  public putNntp(value: FirewallProfileprotocoloptionsNntp) {
    this._nntp.internalValue = value;
  }
  public resetNntp() {
    this._nntp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nntpInput() {
    return this._nntp.internalValue;
  }

  // pop3 - computed: false, optional: true, required: false
  private _pop3 = new FirewallProfileprotocoloptionsPop3OutputReference(this, "pop3");
  public get pop3() {
    return this._pop3;
  }
  public putPop3(value: FirewallProfileprotocoloptionsPop3) {
    this._pop3.internalValue = value;
  }
  public resetPop3() {
    this._pop3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3Input() {
    return this._pop3.internalValue;
  }

  // smtp - computed: false, optional: true, required: false
  private _smtp = new FirewallProfileprotocoloptionsSmtpOutputReference(this, "smtp");
  public get smtp() {
    return this._smtp;
  }
  public putSmtp(value: FirewallProfileprotocoloptionsSmtp) {
    this._smtp.internalValue = value;
  }
  public resetSmtp() {
    this._smtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpInput() {
    return this._smtp.internalValue;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new FirewallProfileprotocoloptionsSshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: FirewallProfileprotocoloptionsSsh) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      feature_set: cdktf.stringToTerraform(this._featureSet),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oversize_log: cdktf.stringToTerraform(this._oversizeLog),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      rpc_over_http: cdktf.stringToTerraform(this._rpcOverHttp),
      switching_protocols_log: cdktf.stringToTerraform(this._switchingProtocolsLog),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      cifs: firewallProfileprotocoloptionsCifsToTerraform(this._cifs.internalValue),
      dns: firewallProfileprotocoloptionsDnsToTerraform(this._dns.internalValue),
      ftp: firewallProfileprotocoloptionsFtpToTerraform(this._ftp.internalValue),
      http: firewallProfileprotocoloptionsHttpToTerraform(this._http.internalValue),
      imap: firewallProfileprotocoloptionsImapToTerraform(this._imap.internalValue),
      mail_signature: firewallProfileprotocoloptionsMailSignatureToTerraform(this._mailSignature.internalValue),
      mapi: firewallProfileprotocoloptionsMapiToTerraform(this._mapi.internalValue),
      nntp: firewallProfileprotocoloptionsNntpToTerraform(this._nntp.internalValue),
      pop3: firewallProfileprotocoloptionsPop3ToTerraform(this._pop3.internalValue),
      smtp: firewallProfileprotocoloptionsSmtpToTerraform(this._smtp.internalValue),
      ssh: firewallProfileprotocoloptionsSshToTerraform(this._ssh.internalValue),
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
      feature_set: {
        value: cdktf.stringToHclTerraform(this._featureSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      oversize_log: {
        value: cdktf.stringToHclTerraform(this._oversizeLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacemsg_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpc_over_http: {
        value: cdktf.stringToHclTerraform(this._rpcOverHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switching_protocols_log: {
        value: cdktf.stringToHclTerraform(this._switchingProtocolsLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cifs: {
        value: firewallProfileprotocoloptionsCifsToHclTerraform(this._cifs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallProfileprotocoloptionsCifsList",
      },
      dns: {
        value: firewallProfileprotocoloptionsDnsToHclTerraform(this._dns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallProfileprotocoloptionsDnsList",
      },
      ftp: {
        value: firewallProfileprotocoloptionsFtpToHclTerraform(this._ftp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallProfileprotocoloptionsFtpList",
      },
      http: {
        value: firewallProfileprotocoloptionsHttpToHclTerraform(this._http.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallProfileprotocoloptionsHttpList",
      },
      imap: {
        value: firewallProfileprotocoloptionsImapToHclTerraform(this._imap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallProfileprotocoloptionsImapList",
      },
      mail_signature: {
        value: firewallProfileprotocoloptionsMailSignatureToHclTerraform(this._mailSignature.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallProfileprotocoloptionsMailSignatureList",
      },
      mapi: {
        value: firewallProfileprotocoloptionsMapiToHclTerraform(this._mapi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallProfileprotocoloptionsMapiList",
      },
      nntp: {
        value: firewallProfileprotocoloptionsNntpToHclTerraform(this._nntp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallProfileprotocoloptionsNntpList",
      },
      pop3: {
        value: firewallProfileprotocoloptionsPop3ToHclTerraform(this._pop3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallProfileprotocoloptionsPop3List",
      },
      smtp: {
        value: firewallProfileprotocoloptionsSmtpToHclTerraform(this._smtp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallProfileprotocoloptionsSmtpList",
      },
      ssh: {
        value: firewallProfileprotocoloptionsSshToHclTerraform(this._ssh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallProfileprotocoloptionsSshList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
