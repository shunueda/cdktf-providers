// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneDhcpServersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#filters DataBloxoneDhcpServers#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#tag_filters DataBloxoneDhcpServers#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}
export interface DataBloxoneDhcpServersResultsDdnsZonesNameservers {
  /**
  * The Kerberos principal name. It uses the typical Kerberos notation: <SERVICE-NAME>/<server-domain-name>@<REALM>.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#client_principal DataBloxoneDhcpServers#client_principal}
  */
  readonly clientPrincipal?: string;
  /**
  * The behavior when GSS-TSIG should be used (a matching external DNS server is configured) but no GSS-TSIG key is available. If configured to _false_ (the default) this DNS server is skipped, if configured to _true_ the DNS server is ignored and the DNS update is sent with the configured DHCP-DDNS protection e.g. TSIG key or without any protection when none was configured.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#gss_tsig_fallback DataBloxoneDhcpServers#gss_tsig_fallback}
  */
  readonly gssTsigFallback?: boolean | cdktf.IResolvable;
  /**
  * Time interval (in seconds) the keys for each configured external DNS server are checked for rekeying, i.e. a new key is created to replace the current usable one when its age is greater than the _kerberos_rekey_interval_ value.  Defaults to 120 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#kerberos_rekey_interval DataBloxoneDhcpServers#kerberos_rekey_interval}
  */
  readonly kerberosRekeyInterval?: number;
  /**
  * Time interval (in seconds) to retry to create a key if any error occurred previously for any configured external DNS server.  Defaults to 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#kerberos_retry_interval DataBloxoneDhcpServers#kerberos_retry_interval}
  */
  readonly kerberosRetryInterval?: number;
  /**
  * Lifetime (in seconds) of GSS-TSIG keys in the TKEY protocol.  Defaults to 160 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#kerberos_tkey_lifetime DataBloxoneDhcpServers#kerberos_tkey_lifetime}
  */
  readonly kerberosTkeyLifetime?: number;
  /**
  * Determines which protocol is used to establish the security context with the external DNS servers, TCP or UDP.  Defaults to _tcp_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#kerberos_tkey_protocol DataBloxoneDhcpServers#kerberos_tkey_protocol}
  */
  readonly kerberosTkeyProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#nameserver DataBloxoneDhcpServers#nameserver}
  */
  readonly nameserver?: string;
  /**
  * The Kerberos principal name of this DNS server that will receive updates.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#server_principal DataBloxoneDhcpServers#server_principal}
  */
  readonly serverPrincipal?: string;
}

export function dataBloxoneDhcpServersResultsDdnsZonesNameserversToTerraform(struct?: DataBloxoneDhcpServersResultsDdnsZonesNameservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_principal: cdktf.stringToTerraform(struct!.clientPrincipal),
    gss_tsig_fallback: cdktf.booleanToTerraform(struct!.gssTsigFallback),
    kerberos_rekey_interval: cdktf.numberToTerraform(struct!.kerberosRekeyInterval),
    kerberos_retry_interval: cdktf.numberToTerraform(struct!.kerberosRetryInterval),
    kerberos_tkey_lifetime: cdktf.numberToTerraform(struct!.kerberosTkeyLifetime),
    kerberos_tkey_protocol: cdktf.stringToTerraform(struct!.kerberosTkeyProtocol),
    nameserver: cdktf.stringToTerraform(struct!.nameserver),
    server_principal: cdktf.stringToTerraform(struct!.serverPrincipal),
  }
}


export function dataBloxoneDhcpServersResultsDdnsZonesNameserversToHclTerraform(struct?: DataBloxoneDhcpServersResultsDdnsZonesNameservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_principal: {
      value: cdktf.stringToHclTerraform(struct!.clientPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gss_tsig_fallback: {
      value: cdktf.booleanToHclTerraform(struct!.gssTsigFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kerberos_rekey_interval: {
      value: cdktf.numberToHclTerraform(struct!.kerberosRekeyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_retry_interval: {
      value: cdktf.numberToHclTerraform(struct!.kerberosRetryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_tkey_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.kerberosTkeyLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_tkey_protocol: {
      value: cdktf.stringToHclTerraform(struct!.kerberosTkeyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nameserver: {
      value: cdktf.stringToHclTerraform(struct!.nameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_principal: {
      value: cdktf.stringToHclTerraform(struct!.serverPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsDdnsZonesNameserversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDhcpServersResultsDdnsZonesNameservers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPrincipal = this._clientPrincipal;
    }
    if (this._gssTsigFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssTsigFallback = this._gssTsigFallback;
    }
    if (this._kerberosRekeyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosRekeyInterval = this._kerberosRekeyInterval;
    }
    if (this._kerberosRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosRetryInterval = this._kerberosRetryInterval;
    }
    if (this._kerberosTkeyLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosTkeyLifetime = this._kerberosTkeyLifetime;
    }
    if (this._kerberosTkeyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosTkeyProtocol = this._kerberosTkeyProtocol;
    }
    if (this._nameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameserver = this._nameserver;
    }
    if (this._serverPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPrincipal = this._serverPrincipal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsDdnsZonesNameservers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientPrincipal = undefined;
      this._gssTsigFallback = undefined;
      this._kerberosRekeyInterval = undefined;
      this._kerberosRetryInterval = undefined;
      this._kerberosTkeyLifetime = undefined;
      this._kerberosTkeyProtocol = undefined;
      this._nameserver = undefined;
      this._serverPrincipal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientPrincipal = value.clientPrincipal;
      this._gssTsigFallback = value.gssTsigFallback;
      this._kerberosRekeyInterval = value.kerberosRekeyInterval;
      this._kerberosRetryInterval = value.kerberosRetryInterval;
      this._kerberosTkeyLifetime = value.kerberosTkeyLifetime;
      this._kerberosTkeyProtocol = value.kerberosTkeyProtocol;
      this._nameserver = value.nameserver;
      this._serverPrincipal = value.serverPrincipal;
    }
  }

  // client_principal - computed: true, optional: true, required: false
  private _clientPrincipal?: string; 
  public get clientPrincipal() {
    return this.getStringAttribute('client_principal');
  }
  public set clientPrincipal(value: string) {
    this._clientPrincipal = value;
  }
  public resetClientPrincipal() {
    this._clientPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrincipalInput() {
    return this._clientPrincipal;
  }

  // gss_tsig_fallback - computed: true, optional: true, required: false
  private _gssTsigFallback?: boolean | cdktf.IResolvable; 
  public get gssTsigFallback() {
    return this.getBooleanAttribute('gss_tsig_fallback');
  }
  public set gssTsigFallback(value: boolean | cdktf.IResolvable) {
    this._gssTsigFallback = value;
  }
  public resetGssTsigFallback() {
    this._gssTsigFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigFallbackInput() {
    return this._gssTsigFallback;
  }

  // kerberos_rekey_interval - computed: true, optional: true, required: false
  private _kerberosRekeyInterval?: number; 
  public get kerberosRekeyInterval() {
    return this.getNumberAttribute('kerberos_rekey_interval');
  }
  public set kerberosRekeyInterval(value: number) {
    this._kerberosRekeyInterval = value;
  }
  public resetKerberosRekeyInterval() {
    this._kerberosRekeyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRekeyIntervalInput() {
    return this._kerberosRekeyInterval;
  }

  // kerberos_retry_interval - computed: true, optional: true, required: false
  private _kerberosRetryInterval?: number; 
  public get kerberosRetryInterval() {
    return this.getNumberAttribute('kerberos_retry_interval');
  }
  public set kerberosRetryInterval(value: number) {
    this._kerberosRetryInterval = value;
  }
  public resetKerberosRetryInterval() {
    this._kerberosRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRetryIntervalInput() {
    return this._kerberosRetryInterval;
  }

  // kerberos_tkey_lifetime - computed: true, optional: true, required: false
  private _kerberosTkeyLifetime?: number; 
  public get kerberosTkeyLifetime() {
    return this.getNumberAttribute('kerberos_tkey_lifetime');
  }
  public set kerberosTkeyLifetime(value: number) {
    this._kerberosTkeyLifetime = value;
  }
  public resetKerberosTkeyLifetime() {
    this._kerberosTkeyLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosTkeyLifetimeInput() {
    return this._kerberosTkeyLifetime;
  }

  // kerberos_tkey_protocol - computed: true, optional: true, required: false
  private _kerberosTkeyProtocol?: string; 
  public get kerberosTkeyProtocol() {
    return this.getStringAttribute('kerberos_tkey_protocol');
  }
  public set kerberosTkeyProtocol(value: string) {
    this._kerberosTkeyProtocol = value;
  }
  public resetKerberosTkeyProtocol() {
    this._kerberosTkeyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosTkeyProtocolInput() {
    return this._kerberosTkeyProtocol;
  }

  // nameserver - computed: true, optional: true, required: false
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  public resetNameserver() {
    this._nameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
  }

  // server_principal - computed: true, optional: true, required: false
  private _serverPrincipal?: string; 
  public get serverPrincipal() {
    return this.getStringAttribute('server_principal');
  }
  public set serverPrincipal(value: string) {
    this._serverPrincipal = value;
  }
  public resetServerPrincipal() {
    this._serverPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPrincipalInput() {
    return this._serverPrincipal;
  }
}

export class DataBloxoneDhcpServersResultsDdnsZonesNameserversList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDhcpServersResultsDdnsZonesNameservers[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDhcpServersResultsDdnsZonesNameserversOutputReference {
    return new DataBloxoneDhcpServersResultsDdnsZonesNameserversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDhcpServersResultsDdnsZonesTsigKey {
  /**
  * TSIG key algorithm.
  * 
  *   Valid values are:
  *   * _hmac_sha1_
  *   * _hmac_sha224_
  *   * _hmac_sha256_
  *   * _hmac_sha384_
  *   * _hmac_sha512_
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#algorithm DataBloxoneDhcpServers#algorithm}
  */
  readonly algorithm?: string;
  /**
  * The description for the TSIG key. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#comment DataBloxoneDhcpServers#comment}
  */
  readonly comment?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#key DataBloxoneDhcpServers#key}
  */
  readonly key: string;
  /**
  * The TSIG key name, FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#name DataBloxoneDhcpServers#name}
  */
  readonly name?: string;
  /**
  * The TSIG key secret, base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#secret DataBloxoneDhcpServers#secret}
  */
  readonly secret?: string;
}

export function dataBloxoneDhcpServersResultsDdnsZonesTsigKeyToTerraform(struct?: DataBloxoneDhcpServersResultsDdnsZonesTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    comment: cdktf.stringToTerraform(struct!.comment),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataBloxoneDhcpServersResultsDdnsZonesTsigKeyToHclTerraform(struct?: DataBloxoneDhcpServersResultsDdnsZonesTsigKey | cdktf.IResolvable): any {
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
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
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

export class DataBloxoneDhcpServersResultsDdnsZonesTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsDdnsZonesTsigKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataBloxoneDhcpServersResultsDdnsZonesTsigKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._comment = undefined;
      this._key = undefined;
      this._name = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._comment = value.comment;
      this._key = value.key;
      this._name = value.name;
      this._secret = value.secret;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // comment - computed: true, optional: true, required: false
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

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: true, required: false
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

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DataBloxoneDhcpServersResultsDdnsZones {
  /**
  * Zone FQDN.  If _zone_ is defined, the _fqdn_ field must be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#fqdn DataBloxoneDhcpServers#fqdn}
  */
  readonly fqdn?: string;
  /**
  * _gss_tsig_enabled_ enables/disables GSS-TSIG signed dynamic updates.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#gss_tsig_enabled DataBloxoneDhcpServers#gss_tsig_enabled}
  */
  readonly gssTsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Nameservers in the zone.  Each nameserver IP should be unique across the list of nameservers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#nameservers DataBloxoneDhcpServers#nameservers}
  */
  readonly nameservers?: DataBloxoneDhcpServersResultsDdnsZonesNameservers[] | cdktf.IResolvable;
  /**
  * Indicates if TSIG key should be used for the update.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#tsig_enabled DataBloxoneDhcpServers#tsig_enabled}
  */
  readonly tsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#tsig_key DataBloxoneDhcpServers#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDhcpServersResultsDdnsZonesTsigKey;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#zone DataBloxoneDhcpServers#zone}
  */
  readonly zone: string;
}

export function dataBloxoneDhcpServersResultsDdnsZonesToTerraform(struct?: DataBloxoneDhcpServersResultsDdnsZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    gss_tsig_enabled: cdktf.booleanToTerraform(struct!.gssTsigEnabled),
    nameservers: cdktf.listMapper(dataBloxoneDhcpServersResultsDdnsZonesNameserversToTerraform, false)(struct!.nameservers),
    tsig_enabled: cdktf.booleanToTerraform(struct!.tsigEnabled),
    tsig_key: dataBloxoneDhcpServersResultsDdnsZonesTsigKeyToTerraform(struct!.tsigKey),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataBloxoneDhcpServersResultsDdnsZonesToHclTerraform(struct?: DataBloxoneDhcpServersResultsDdnsZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gss_tsig_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.gssTsigEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nameservers: {
      value: cdktf.listMapperHcl(dataBloxoneDhcpServersResultsDdnsZonesNameserversToHclTerraform, false)(struct!.nameservers),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDhcpServersResultsDdnsZonesNameserversList",
    },
    tsig_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tsigEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tsig_key: {
      value: dataBloxoneDhcpServersResultsDdnsZonesTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsDdnsZonesTsigKey",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsDdnsZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDhcpServersResultsDdnsZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._gssTsigEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssTsigEnabled = this._gssTsigEnabled;
    }
    if (this._nameservers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers?.internalValue;
    }
    if (this._tsigEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigEnabled = this._tsigEnabled;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsDdnsZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._gssTsigEnabled = undefined;
      this._nameservers.internalValue = undefined;
      this._tsigEnabled = undefined;
      this._tsigKey.internalValue = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._gssTsigEnabled = value.gssTsigEnabled;
      this._nameservers.internalValue = value.nameservers;
      this._tsigEnabled = value.tsigEnabled;
      this._tsigKey.internalValue = value.tsigKey;
      this._zone = value.zone;
    }
  }

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // gss_tsig_enabled - computed: true, optional: true, required: false
  private _gssTsigEnabled?: boolean | cdktf.IResolvable; 
  public get gssTsigEnabled() {
    return this.getBooleanAttribute('gss_tsig_enabled');
  }
  public set gssTsigEnabled(value: boolean | cdktf.IResolvable) {
    this._gssTsigEnabled = value;
  }
  public resetGssTsigEnabled() {
    this._gssTsigEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigEnabledInput() {
    return this._gssTsigEnabled;
  }

  // nameservers - computed: true, optional: true, required: false
  private _nameservers = new DataBloxoneDhcpServersResultsDdnsZonesNameserversList(this, "nameservers", false);
  public get nameservers() {
    return this._nameservers;
  }
  public putNameservers(value: DataBloxoneDhcpServersResultsDdnsZonesNameservers[] | cdktf.IResolvable) {
    this._nameservers.internalValue = value;
  }
  public resetNameservers() {
    this._nameservers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers.internalValue;
  }

  // tsig_enabled - computed: true, optional: true, required: false
  private _tsigEnabled?: boolean | cdktf.IResolvable; 
  public get tsigEnabled() {
    return this.getBooleanAttribute('tsig_enabled');
  }
  public set tsigEnabled(value: boolean | cdktf.IResolvable) {
    this._tsigEnabled = value;
  }
  public resetTsigEnabled() {
    this._tsigEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigEnabledInput() {
    return this._tsigEnabled;
  }

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey = new DataBloxoneDhcpServersResultsDdnsZonesTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDhcpServersResultsDdnsZonesTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }

  // view_name - computed: true, optional: false, required: false
  public get viewName() {
    return this.getStringAttribute('view_name');
  }

  // zone - computed: true, optional: false, required: true
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
}

export class DataBloxoneDhcpServersResultsDdnsZonesList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDhcpServersResultsDdnsZones[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDhcpServersResultsDdnsZonesOutputReference {
    return new DataBloxoneDhcpServersResultsDdnsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDhcpServersResultsDhcpConfigIgnoreListStruct {
  /**
  * Type of ignore matching: client to ignore by client identifier (client hex or client text) or hardware to ignore by hardware identifier (MAC address). It can have one of the following values:
  *   * _client_hex_
  *   * _client_text_
  *   * _hardware_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#type DataBloxoneDhcpServers#type}
  */
  readonly type: string;
  /**
  * Value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#value DataBloxoneDhcpServers#value}
  */
  readonly value: string;
}

export function dataBloxoneDhcpServersResultsDhcpConfigIgnoreListStructToTerraform(struct?: DataBloxoneDhcpServersResultsDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataBloxoneDhcpServersResultsDhcpConfigIgnoreListStructToHclTerraform(struct?: DataBloxoneDhcpServersResultsDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsDhcpConfigIgnoreListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDhcpServersResultsDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataBloxoneDhcpServersResultsDhcpConfigIgnoreListStructList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDhcpServersResultsDhcpConfigIgnoreListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDhcpServersResultsDhcpConfigIgnoreListStructOutputReference {
    return new DataBloxoneDhcpServersResultsDhcpConfigIgnoreListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDhcpServersResultsDhcpConfig {
  /**
  * The abandoned reclaim time in seconds for IPV4 clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#abandoned_reclaim_time DataBloxoneDhcpServers#abandoned_reclaim_time}
  */
  readonly abandonedReclaimTime?: number;
  /**
  * The abandoned reclaim time in seconds for IPV6 clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#abandoned_reclaim_time_v6 DataBloxoneDhcpServers#abandoned_reclaim_time_v6}
  */
  readonly abandonedReclaimTimeV6?: number;
  /**
  * Disable to allow leases only for known IPv4 clients, those for which a fixed address is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#allow_unknown DataBloxoneDhcpServers#allow_unknown}
  */
  readonly allowUnknown?: boolean | cdktf.IResolvable;
  /**
  * Disable to allow leases only for known IPV6 clients, those for which a fixed address is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#allow_unknown_v6 DataBloxoneDhcpServers#allow_unknown_v6}
  */
  readonly allowUnknownV6?: boolean | cdktf.IResolvable;
  /**
  * Enable/disable to include/exclude the client id when responding to discover or request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#echo_client_id DataBloxoneDhcpServers#echo_client_id}
  */
  readonly echoClientId?: boolean | cdktf.IResolvable;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#filters DataBloxoneDhcpServers#filters}
  */
  readonly filters?: string[];
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#filters_large_selection DataBloxoneDhcpServers#filters_large_selection}
  */
  readonly filtersLargeSelection?: string[];
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#filters_v6 DataBloxoneDhcpServers#filters_v6}
  */
  readonly filtersV6?: string[];
  /**
  * Enable to ignore the client UID when issuing a DHCP lease. Use this option to prevent assigning two IP addresses for a client which does not have a UID during one phase of PXE boot but acquires one for the other phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ignore_client_uid DataBloxoneDhcpServers#ignore_client_uid}
  */
  readonly ignoreClientUid?: boolean | cdktf.IResolvable;
  /**
  * The list of clients to ignore requests from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ignore_list DataBloxoneDhcpServers#ignore_list}
  */
  readonly ignoreList?: DataBloxoneDhcpServersResultsDhcpConfigIgnoreListStruct[] | cdktf.IResolvable;
  /**
  * The lease duration in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#lease_time DataBloxoneDhcpServers#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * The lease duration in seconds for IPV6 clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#lease_time_v6 DataBloxoneDhcpServers#lease_time_v6}
  */
  readonly leaseTimeV6?: number;
}

export function dataBloxoneDhcpServersResultsDhcpConfigToTerraform(struct?: DataBloxoneDhcpServersResultsDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abandoned_reclaim_time: cdktf.numberToTerraform(struct!.abandonedReclaimTime),
    abandoned_reclaim_time_v6: cdktf.numberToTerraform(struct!.abandonedReclaimTimeV6),
    allow_unknown: cdktf.booleanToTerraform(struct!.allowUnknown),
    allow_unknown_v6: cdktf.booleanToTerraform(struct!.allowUnknownV6),
    echo_client_id: cdktf.booleanToTerraform(struct!.echoClientId),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    filters_large_selection: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filtersLargeSelection),
    filters_v6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filtersV6),
    ignore_client_uid: cdktf.booleanToTerraform(struct!.ignoreClientUid),
    ignore_list: cdktf.listMapper(dataBloxoneDhcpServersResultsDhcpConfigIgnoreListStructToTerraform, false)(struct!.ignoreList),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    lease_time_v6: cdktf.numberToTerraform(struct!.leaseTimeV6),
  }
}


export function dataBloxoneDhcpServersResultsDhcpConfigToHclTerraform(struct?: DataBloxoneDhcpServersResultsDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abandoned_reclaim_time: {
      value: cdktf.numberToHclTerraform(struct!.abandonedReclaimTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    abandoned_reclaim_time_v6: {
      value: cdktf.numberToHclTerraform(struct!.abandonedReclaimTimeV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_unknown: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_unknown_v6: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnknownV6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    echo_client_id: {
      value: cdktf.booleanToHclTerraform(struct!.echoClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filters_large_selection: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filtersLargeSelection),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filters_v6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filtersV6),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore_client_uid: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreClientUid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_list: {
      value: cdktf.listMapperHcl(dataBloxoneDhcpServersResultsDhcpConfigIgnoreListStructToHclTerraform, false)(struct!.ignoreList),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDhcpServersResultsDhcpConfigIgnoreListStructList",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lease_time_v6: {
      value: cdktf.numberToHclTerraform(struct!.leaseTimeV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsDhcpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abandonedReclaimTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandonedReclaimTime = this._abandonedReclaimTime;
    }
    if (this._abandonedReclaimTimeV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandonedReclaimTimeV6 = this._abandonedReclaimTimeV6;
    }
    if (this._allowUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknown = this._allowUnknown;
    }
    if (this._allowUnknownV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknownV6 = this._allowUnknownV6;
    }
    if (this._echoClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.echoClientId = this._echoClientId;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._filtersLargeSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersLargeSelection = this._filtersLargeSelection;
    }
    if (this._filtersV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersV6 = this._filtersV6;
    }
    if (this._ignoreClientUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreClientUid = this._ignoreClientUid;
    }
    if (this._ignoreList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreList = this._ignoreList?.internalValue;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._leaseTimeV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTimeV6 = this._leaseTimeV6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsDhcpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abandonedReclaimTime = undefined;
      this._abandonedReclaimTimeV6 = undefined;
      this._allowUnknown = undefined;
      this._allowUnknownV6 = undefined;
      this._echoClientId = undefined;
      this._filters = undefined;
      this._filtersLargeSelection = undefined;
      this._filtersV6 = undefined;
      this._ignoreClientUid = undefined;
      this._ignoreList.internalValue = undefined;
      this._leaseTime = undefined;
      this._leaseTimeV6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abandonedReclaimTime = value.abandonedReclaimTime;
      this._abandonedReclaimTimeV6 = value.abandonedReclaimTimeV6;
      this._allowUnknown = value.allowUnknown;
      this._allowUnknownV6 = value.allowUnknownV6;
      this._echoClientId = value.echoClientId;
      this._filters = value.filters;
      this._filtersLargeSelection = value.filtersLargeSelection;
      this._filtersV6 = value.filtersV6;
      this._ignoreClientUid = value.ignoreClientUid;
      this._ignoreList.internalValue = value.ignoreList;
      this._leaseTime = value.leaseTime;
      this._leaseTimeV6 = value.leaseTimeV6;
    }
  }

  // abandoned_reclaim_time - computed: true, optional: true, required: false
  private _abandonedReclaimTime?: number; 
  public get abandonedReclaimTime() {
    return this.getNumberAttribute('abandoned_reclaim_time');
  }
  public set abandonedReclaimTime(value: number) {
    this._abandonedReclaimTime = value;
  }
  public resetAbandonedReclaimTime() {
    this._abandonedReclaimTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedReclaimTimeInput() {
    return this._abandonedReclaimTime;
  }

  // abandoned_reclaim_time_v6 - computed: true, optional: true, required: false
  private _abandonedReclaimTimeV6?: number; 
  public get abandonedReclaimTimeV6() {
    return this.getNumberAttribute('abandoned_reclaim_time_v6');
  }
  public set abandonedReclaimTimeV6(value: number) {
    this._abandonedReclaimTimeV6 = value;
  }
  public resetAbandonedReclaimTimeV6() {
    this._abandonedReclaimTimeV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedReclaimTimeV6Input() {
    return this._abandonedReclaimTimeV6;
  }

  // allow_unknown - computed: true, optional: true, required: false
  private _allowUnknown?: boolean | cdktf.IResolvable; 
  public get allowUnknown() {
    return this.getBooleanAttribute('allow_unknown');
  }
  public set allowUnknown(value: boolean | cdktf.IResolvable) {
    this._allowUnknown = value;
  }
  public resetAllowUnknown() {
    this._allowUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownInput() {
    return this._allowUnknown;
  }

  // allow_unknown_v6 - computed: true, optional: true, required: false
  private _allowUnknownV6?: boolean | cdktf.IResolvable; 
  public get allowUnknownV6() {
    return this.getBooleanAttribute('allow_unknown_v6');
  }
  public set allowUnknownV6(value: boolean | cdktf.IResolvable) {
    this._allowUnknownV6 = value;
  }
  public resetAllowUnknownV6() {
    this._allowUnknownV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownV6Input() {
    return this._allowUnknownV6;
  }

  // echo_client_id - computed: true, optional: true, required: false
  private _echoClientId?: boolean | cdktf.IResolvable; 
  public get echoClientId() {
    return this.getBooleanAttribute('echo_client_id');
  }
  public set echoClientId(value: boolean | cdktf.IResolvable) {
    this._echoClientId = value;
  }
  public resetEchoClientId() {
    this._echoClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoClientIdInput() {
    return this._echoClientId;
  }

  // filters - computed: true, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return this.getListAttribute('filters');
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // filters_large_selection - computed: true, optional: true, required: false
  private _filtersLargeSelection?: string[]; 
  public get filtersLargeSelection() {
    return this.getListAttribute('filters_large_selection');
  }
  public set filtersLargeSelection(value: string[]) {
    this._filtersLargeSelection = value;
  }
  public resetFiltersLargeSelection() {
    this._filtersLargeSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersLargeSelectionInput() {
    return this._filtersLargeSelection;
  }

  // filters_v6 - computed: true, optional: true, required: false
  private _filtersV6?: string[]; 
  public get filtersV6() {
    return this.getListAttribute('filters_v6');
  }
  public set filtersV6(value: string[]) {
    this._filtersV6 = value;
  }
  public resetFiltersV6() {
    this._filtersV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersV6Input() {
    return this._filtersV6;
  }

  // ignore_client_uid - computed: true, optional: true, required: false
  private _ignoreClientUid?: boolean | cdktf.IResolvable; 
  public get ignoreClientUid() {
    return this.getBooleanAttribute('ignore_client_uid');
  }
  public set ignoreClientUid(value: boolean | cdktf.IResolvable) {
    this._ignoreClientUid = value;
  }
  public resetIgnoreClientUid() {
    this._ignoreClientUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreClientUidInput() {
    return this._ignoreClientUid;
  }

  // ignore_list - computed: true, optional: true, required: false
  private _ignoreList = new DataBloxoneDhcpServersResultsDhcpConfigIgnoreListStructList(this, "ignore_list", false);
  public get ignoreList() {
    return this._ignoreList;
  }
  public putIgnoreList(value: DataBloxoneDhcpServersResultsDhcpConfigIgnoreListStruct[] | cdktf.IResolvable) {
    this._ignoreList.internalValue = value;
  }
  public resetIgnoreList() {
    this._ignoreList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreListInput() {
    return this._ignoreList.internalValue;
  }

  // lease_time - computed: true, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // lease_time_v6 - computed: true, optional: true, required: false
  private _leaseTimeV6?: number; 
  public get leaseTimeV6() {
    return this.getNumberAttribute('lease_time_v6');
  }
  public set leaseTimeV6(value: number) {
    this._leaseTimeV6 = value;
  }
  public resetLeaseTimeV6() {
    this._leaseTimeV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeV6Input() {
    return this._leaseTimeV6;
  }
}
export interface DataBloxoneDhcpServersResultsDhcpOptions {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#group DataBloxoneDhcpServers#group}
  */
  readonly group?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#option_code DataBloxoneDhcpServers#option_code}
  */
  readonly optionCode?: string;
  /**
  * The option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#option_value DataBloxoneDhcpServers#option_value}
  */
  readonly optionValue?: string;
  /**
  * The type of item. Valid values are:
  *   * _group_
  *   * _option_
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#type DataBloxoneDhcpServers#type}
  */
  readonly type?: string;
}

export function dataBloxoneDhcpServersResultsDhcpOptionsToTerraform(struct?: DataBloxoneDhcpServersResultsDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    option_code: cdktf.stringToTerraform(struct!.optionCode),
    option_value: cdktf.stringToTerraform(struct!.optionValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataBloxoneDhcpServersResultsDhcpOptionsToHclTerraform(struct?: DataBloxoneDhcpServersResultsDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_code: {
      value: cdktf.stringToHclTerraform(struct!.optionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_value: {
      value: cdktf.stringToHclTerraform(struct!.optionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataBloxoneDhcpServersResultsDhcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDhcpServersResultsDhcpOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._optionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionCode = this._optionCode;
    }
    if (this._optionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionValue = this._optionValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsDhcpOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._optionCode = undefined;
      this._optionValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._optionCode = value.optionCode;
      this._optionValue = value.optionValue;
      this._type = value.type;
    }
  }

  // group - computed: true, optional: true, required: false
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

  // option_code - computed: true, optional: true, required: false
  private _optionCode?: string; 
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }
  public set optionCode(value: string) {
    this._optionCode = value;
  }
  public resetOptionCode() {
    this._optionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionCodeInput() {
    return this._optionCode;
  }

  // option_value - computed: true, optional: true, required: false
  private _optionValue?: string; 
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }
  public set optionValue(value: string) {
    this._optionValue = value;
  }
  public resetOptionValue() {
    this._optionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValueInput() {
    return this._optionValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataBloxoneDhcpServersResultsDhcpOptionsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDhcpServersResultsDhcpOptions[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDhcpServersResultsDhcpOptionsOutputReference {
    return new DataBloxoneDhcpServersResultsDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDhcpServersResultsDhcpOptionsV6 {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#group DataBloxoneDhcpServers#group}
  */
  readonly group?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#option_code DataBloxoneDhcpServers#option_code}
  */
  readonly optionCode?: string;
  /**
  * The option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#option_value DataBloxoneDhcpServers#option_value}
  */
  readonly optionValue?: string;
  /**
  * The type of item. Valid values are:
  *   * _group_
  *   * _option_
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#type DataBloxoneDhcpServers#type}
  */
  readonly type?: string;
}

export function dataBloxoneDhcpServersResultsDhcpOptionsV6ToTerraform(struct?: DataBloxoneDhcpServersResultsDhcpOptionsV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    option_code: cdktf.stringToTerraform(struct!.optionCode),
    option_value: cdktf.stringToTerraform(struct!.optionValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataBloxoneDhcpServersResultsDhcpOptionsV6ToHclTerraform(struct?: DataBloxoneDhcpServersResultsDhcpOptionsV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_code: {
      value: cdktf.stringToHclTerraform(struct!.optionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_value: {
      value: cdktf.stringToHclTerraform(struct!.optionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataBloxoneDhcpServersResultsDhcpOptionsV6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDhcpServersResultsDhcpOptionsV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._optionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionCode = this._optionCode;
    }
    if (this._optionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionValue = this._optionValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsDhcpOptionsV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._optionCode = undefined;
      this._optionValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._optionCode = value.optionCode;
      this._optionValue = value.optionValue;
      this._type = value.type;
    }
  }

  // group - computed: true, optional: true, required: false
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

  // option_code - computed: true, optional: true, required: false
  private _optionCode?: string; 
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }
  public set optionCode(value: string) {
    this._optionCode = value;
  }
  public resetOptionCode() {
    this._optionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionCodeInput() {
    return this._optionCode;
  }

  // option_value - computed: true, optional: true, required: false
  private _optionValue?: string; 
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }
  public set optionValue(value: string) {
    this._optionValue = value;
  }
  public resetOptionValue() {
    this._optionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValueInput() {
    return this._optionValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataBloxoneDhcpServersResultsDhcpOptionsV6List extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDhcpServersResultsDhcpOptionsV6[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDhcpServersResultsDhcpOptionsV6OutputReference {
    return new DataBloxoneDhcpServersResultsDhcpOptionsV6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesNameservers {
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesNameserversToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesNameservers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesNameserversToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesNameservers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesNameserversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesNameservers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesNameservers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_principal - computed: true, optional: false, required: false
  public get clientPrincipal() {
    return this.getStringAttribute('client_principal');
  }

  // gss_tsig_fallback - computed: true, optional: false, required: false
  public get gssTsigFallback() {
    return this.getBooleanAttribute('gss_tsig_fallback');
  }

  // kerberos_rekey_interval - computed: true, optional: false, required: false
  public get kerberosRekeyInterval() {
    return this.getNumberAttribute('kerberos_rekey_interval');
  }

  // kerberos_retry_interval - computed: true, optional: false, required: false
  public get kerberosRetryInterval() {
    return this.getNumberAttribute('kerberos_retry_interval');
  }

  // kerberos_tkey_lifetime - computed: true, optional: false, required: false
  public get kerberosTkeyLifetime() {
    return this.getNumberAttribute('kerberos_tkey_lifetime');
  }

  // kerberos_tkey_protocol - computed: true, optional: false, required: false
  public get kerberosTkeyProtocol() {
    return this.getStringAttribute('kerberos_tkey_protocol');
  }

  // nameserver - computed: true, optional: false, required: false
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }

  // server_principal - computed: true, optional: false, required: false
  public get serverPrincipal() {
    return this.getStringAttribute('server_principal');
  }
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesNameserversList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesNameserversOutputReference {
    return new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesNameserversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesTsigKey {
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesTsigKeyToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesTsigKeyToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZones {
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // gss_tsig_enabled - computed: true, optional: false, required: false
  public get gssTsigEnabled() {
    return this.getBooleanAttribute('gss_tsig_enabled');
  }

  // nameservers - computed: true, optional: false, required: false
  private _nameservers = new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesNameserversList(this, "nameservers", false);
  public get nameservers() {
    return this._nameservers;
  }

  // tsig_enabled - computed: true, optional: false, required: false
  public get tsigEnabled() {
    return this.getBooleanAttribute('tsig_enabled');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }

  // view_name - computed: true, optional: false, required: false
  public get viewName() {
    return this.getStringAttribute('view_name');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesOutputReference {
    return new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueKerberosKeys {
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueKerberosKeysToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueKerberosKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueKerberosKeysToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueKerberosKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueKerberosKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueKerberosKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueKerberosKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }

  // uploaded_at - computed: true, optional: false, required: false
  public get uploadedAt() {
    return this.getStringAttribute('uploaded_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueKerberosKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueKerberosKeysOutputReference {
    return new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueKerberosKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValue {
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_principal - computed: true, optional: false, required: false
  public get clientPrincipal() {
    return this.getStringAttribute('client_principal');
  }

  // ddns_domain - computed: true, optional: false, required: false
  public get ddnsDomain() {
    return this.getStringAttribute('ddns_domain');
  }

  // ddns_enabled - computed: true, optional: false, required: false
  public get ddnsEnabled() {
    return this.getBooleanAttribute('ddns_enabled');
  }

  // ddns_send_updates - computed: true, optional: false, required: false
  public get ddnsSendUpdates() {
    return this.getBooleanAttribute('ddns_send_updates');
  }

  // ddns_zones - computed: true, optional: false, required: false
  private _ddnsZones = new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueDdnsZonesList(this, "ddns_zones", false);
  public get ddnsZones() {
    return this._ddnsZones;
  }

  // gss_tsig_fallback - computed: true, optional: false, required: false
  public get gssTsigFallback() {
    return this.getBooleanAttribute('gss_tsig_fallback');
  }

  // kerberos_kdc - computed: true, optional: false, required: false
  public get kerberosKdc() {
    return this.getStringAttribute('kerberos_kdc');
  }

  // kerberos_keys - computed: true, optional: false, required: false
  private _kerberosKeys = new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueKerberosKeysList(this, "kerberos_keys", false);
  public get kerberosKeys() {
    return this._kerberosKeys;
  }

  // kerberos_rekey_interval - computed: true, optional: false, required: false
  public get kerberosRekeyInterval() {
    return this.getNumberAttribute('kerberos_rekey_interval');
  }

  // kerberos_retry_interval - computed: true, optional: false, required: false
  public get kerberosRetryInterval() {
    return this.getNumberAttribute('kerberos_retry_interval');
  }

  // kerberos_tkey_lifetime - computed: true, optional: false, required: false
  public get kerberosTkeyLifetime() {
    return this.getNumberAttribute('kerberos_tkey_lifetime');
  }

  // kerberos_tkey_protocol - computed: true, optional: false, required: false
  public get kerberosTkeyProtocol() {
    return this.getStringAttribute('kerberos_tkey_protocol');
  }

  // server_principal - computed: true, optional: false, required: false
  public get serverPrincipal() {
    return this.getStringAttribute('server_principal');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDdnsClientUpdate {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsClientUpdateToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsClientUpdateToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsClientUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDdnsConflictResolutionMode {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsConflictResolutionModeToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsConflictResolutionModeToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsConflictResolutionModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlockValue {
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlockValueToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlockValueToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ddns_generate_name - computed: true, optional: false, required: false
  public get ddnsGenerateName() {
    return this.getBooleanAttribute('ddns_generate_name');
  }

  // ddns_generated_prefix - computed: true, optional: false, required: false
  public get ddnsGeneratedPrefix() {
    return this.getStringAttribute('ddns_generated_prefix');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlockToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlockToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDdnsTtlPercent {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsTtlPercentToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsTtlPercentToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsTtlPercentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUpdateOnRenew {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsUpdateOnRenewToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsUpdateOnRenewToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUpdateOnRenewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUseConflictResolution {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsUseConflictResolutionToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDdnsUseConflictResolutionToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUseConflictResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknown {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownV6ToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownV6ToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAuthoritativeDhcpToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAuthoritativeDhcpToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAuthoritativeDhcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigEchoClientId {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigEchoClientIdToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigEchoClientIdToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigEchoClientIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFilters {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersV6 {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersV6ToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersV6ToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTime {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreClientUid {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreClientUidToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreClientUidToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreClientUidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListValue {
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListValueToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListValueToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListValueOutputReference {
    return new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListStruct {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListStructToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListStructToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTime {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeV6ToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeV6ToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfig {
  /**
  * The inheritance configuration for _abandoned_reclaim_time_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#abandoned_reclaim_time DataBloxoneDhcpServers#abandoned_reclaim_time}
  */
  readonly abandonedReclaimTime?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime;
  /**
  * The inheritance configuration for _abandoned_reclaim_time_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#abandoned_reclaim_time_v6 DataBloxoneDhcpServers#abandoned_reclaim_time_v6}
  */
  readonly abandonedReclaimTimeV6?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6;
  /**
  * The inheritance configuration for _allow_unknown_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#allow_unknown DataBloxoneDhcpServers#allow_unknown}
  */
  readonly allowUnknown?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknown;
  /**
  * The inheritance configuration for _allow_unknown_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#allow_unknown_v6 DataBloxoneDhcpServers#allow_unknown_v6}
  */
  readonly allowUnknownV6?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownV6;
  /**
  * The inheritance configuration for authoritative_dhcp field to set DHCP server as authoritative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#authoritative_dhcp DataBloxoneDhcpServers#authoritative_dhcp}
  */
  readonly authoritativeDhcp?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp;
  /**
  * The inheritance configuration for _echo_client_id_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#echo_client_id DataBloxoneDhcpServers#echo_client_id}
  */
  readonly echoClientId?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigEchoClientId;
  /**
  * The inheritance configuration for filters field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#filters DataBloxoneDhcpServers#filters}
  */
  readonly filters?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFilters;
  /**
  * The inheritance configuration for _filters_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#filters_v6 DataBloxoneDhcpServers#filters_v6}
  */
  readonly filtersV6?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersV6;
  /**
  * The inheritance configuration for hold_reclaimed_time in seconds from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#hold_reclaimed_time DataBloxoneDhcpServers#hold_reclaimed_time}
  */
  readonly holdReclaimedTime?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTime;
  /**
  * The inheritance configuration for hold_reclaimed_time_v6 in seconds from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#hold_reclaimed_time_v6 DataBloxoneDhcpServers#hold_reclaimed_time_v6}
  */
  readonly holdReclaimedTimeV6?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6;
  /**
  * The inheritance configuration for _ignore_client_uid_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ignore_client_uid DataBloxoneDhcpServers#ignore_client_uid}
  */
  readonly ignoreClientUid?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreClientUid;
  /**
  * The inheritance configuration for _ignore_list_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ignore_list DataBloxoneDhcpServers#ignore_list}
  */
  readonly ignoreList?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListStruct;
  /**
  * The inheritance configuration for _lease_time_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#lease_time DataBloxoneDhcpServers#lease_time}
  */
  readonly leaseTime?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTime;
  /**
  * The inheritance configuration for _lease_time_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#lease_time_v6 DataBloxoneDhcpServers#lease_time_v6}
  */
  readonly leaseTimeV6?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeV6;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abandoned_reclaim_time: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeToTerraform(struct!.abandonedReclaimTime),
    abandoned_reclaim_time_v6: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToTerraform(struct!.abandonedReclaimTimeV6),
    allow_unknown: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownToTerraform(struct!.allowUnknown),
    allow_unknown_v6: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownV6ToTerraform(struct!.allowUnknownV6),
    authoritative_dhcp: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAuthoritativeDhcpToTerraform(struct!.authoritativeDhcp),
    echo_client_id: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigEchoClientIdToTerraform(struct!.echoClientId),
    filters: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersToTerraform(struct!.filters),
    filters_v6: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersV6ToTerraform(struct!.filtersV6),
    hold_reclaimed_time: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeToTerraform(struct!.holdReclaimedTime),
    hold_reclaimed_time_v6: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToTerraform(struct!.holdReclaimedTimeV6),
    ignore_client_uid: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreClientUidToTerraform(struct!.ignoreClientUid),
    ignore_list: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListStructToTerraform(struct!.ignoreList),
    lease_time: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeToTerraform(struct!.leaseTime),
    lease_time_v6: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeV6ToTerraform(struct!.leaseTimeV6),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abandoned_reclaim_time: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeToHclTerraform(struct!.abandonedReclaimTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime",
    },
    abandoned_reclaim_time_v6: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToHclTerraform(struct!.abandonedReclaimTimeV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6",
    },
    allow_unknown: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownToHclTerraform(struct!.allowUnknown),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknown",
    },
    allow_unknown_v6: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownV6ToHclTerraform(struct!.allowUnknownV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownV6",
    },
    authoritative_dhcp: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAuthoritativeDhcpToHclTerraform(struct!.authoritativeDhcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp",
    },
    echo_client_id: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigEchoClientIdToHclTerraform(struct!.echoClientId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigEchoClientId",
    },
    filters: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFilters",
    },
    filters_v6: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersV6ToHclTerraform(struct!.filtersV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersV6",
    },
    hold_reclaimed_time: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeToHclTerraform(struct!.holdReclaimedTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTime",
    },
    hold_reclaimed_time_v6: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToHclTerraform(struct!.holdReclaimedTimeV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6",
    },
    ignore_client_uid: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreClientUidToHclTerraform(struct!.ignoreClientUid),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreClientUid",
    },
    ignore_list: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListStructToHclTerraform(struct!.ignoreList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListStruct",
    },
    lease_time: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeToHclTerraform(struct!.leaseTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTime",
    },
    lease_time_v6: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeV6ToHclTerraform(struct!.leaseTimeV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeV6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abandonedReclaimTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandonedReclaimTime = this._abandonedReclaimTime?.internalValue;
    }
    if (this._abandonedReclaimTimeV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandonedReclaimTimeV6 = this._abandonedReclaimTimeV6?.internalValue;
    }
    if (this._allowUnknown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknown = this._allowUnknown?.internalValue;
    }
    if (this._allowUnknownV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknownV6 = this._allowUnknownV6?.internalValue;
    }
    if (this._authoritativeDhcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authoritativeDhcp = this._authoritativeDhcp?.internalValue;
    }
    if (this._echoClientId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.echoClientId = this._echoClientId?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._filtersV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersV6 = this._filtersV6?.internalValue;
    }
    if (this._holdReclaimedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdReclaimedTime = this._holdReclaimedTime?.internalValue;
    }
    if (this._holdReclaimedTimeV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdReclaimedTimeV6 = this._holdReclaimedTimeV6?.internalValue;
    }
    if (this._ignoreClientUid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreClientUid = this._ignoreClientUid?.internalValue;
    }
    if (this._ignoreList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreList = this._ignoreList?.internalValue;
    }
    if (this._leaseTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime?.internalValue;
    }
    if (this._leaseTimeV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTimeV6 = this._leaseTimeV6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abandonedReclaimTime.internalValue = undefined;
      this._abandonedReclaimTimeV6.internalValue = undefined;
      this._allowUnknown.internalValue = undefined;
      this._allowUnknownV6.internalValue = undefined;
      this._authoritativeDhcp.internalValue = undefined;
      this._echoClientId.internalValue = undefined;
      this._filters.internalValue = undefined;
      this._filtersV6.internalValue = undefined;
      this._holdReclaimedTime.internalValue = undefined;
      this._holdReclaimedTimeV6.internalValue = undefined;
      this._ignoreClientUid.internalValue = undefined;
      this._ignoreList.internalValue = undefined;
      this._leaseTime.internalValue = undefined;
      this._leaseTimeV6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abandonedReclaimTime.internalValue = value.abandonedReclaimTime;
      this._abandonedReclaimTimeV6.internalValue = value.abandonedReclaimTimeV6;
      this._allowUnknown.internalValue = value.allowUnknown;
      this._allowUnknownV6.internalValue = value.allowUnknownV6;
      this._authoritativeDhcp.internalValue = value.authoritativeDhcp;
      this._echoClientId.internalValue = value.echoClientId;
      this._filters.internalValue = value.filters;
      this._filtersV6.internalValue = value.filtersV6;
      this._holdReclaimedTime.internalValue = value.holdReclaimedTime;
      this._holdReclaimedTimeV6.internalValue = value.holdReclaimedTimeV6;
      this._ignoreClientUid.internalValue = value.ignoreClientUid;
      this._ignoreList.internalValue = value.ignoreList;
      this._leaseTime.internalValue = value.leaseTime;
      this._leaseTimeV6.internalValue = value.leaseTimeV6;
    }
  }

  // abandoned_reclaim_time - computed: true, optional: true, required: false
  private _abandonedReclaimTime = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeOutputReference(this, "abandoned_reclaim_time");
  public get abandonedReclaimTime() {
    return this._abandonedReclaimTime;
  }
  public putAbandonedReclaimTime(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime) {
    this._abandonedReclaimTime.internalValue = value;
  }
  public resetAbandonedReclaimTime() {
    this._abandonedReclaimTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedReclaimTimeInput() {
    return this._abandonedReclaimTime.internalValue;
  }

  // abandoned_reclaim_time_v6 - computed: true, optional: true, required: false
  private _abandonedReclaimTimeV6 = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6OutputReference(this, "abandoned_reclaim_time_v6");
  public get abandonedReclaimTimeV6() {
    return this._abandonedReclaimTimeV6;
  }
  public putAbandonedReclaimTimeV6(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6) {
    this._abandonedReclaimTimeV6.internalValue = value;
  }
  public resetAbandonedReclaimTimeV6() {
    this._abandonedReclaimTimeV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedReclaimTimeV6Input() {
    return this._abandonedReclaimTimeV6.internalValue;
  }

  // allow_unknown - computed: true, optional: true, required: false
  private _allowUnknown = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownOutputReference(this, "allow_unknown");
  public get allowUnknown() {
    return this._allowUnknown;
  }
  public putAllowUnknown(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknown) {
    this._allowUnknown.internalValue = value;
  }
  public resetAllowUnknown() {
    this._allowUnknown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownInput() {
    return this._allowUnknown.internalValue;
  }

  // allow_unknown_v6 - computed: true, optional: true, required: false
  private _allowUnknownV6 = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownV6OutputReference(this, "allow_unknown_v6");
  public get allowUnknownV6() {
    return this._allowUnknownV6;
  }
  public putAllowUnknownV6(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAllowUnknownV6) {
    this._allowUnknownV6.internalValue = value;
  }
  public resetAllowUnknownV6() {
    this._allowUnknownV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownV6Input() {
    return this._allowUnknownV6.internalValue;
  }

  // authoritative_dhcp - computed: true, optional: true, required: false
  private _authoritativeDhcp = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAuthoritativeDhcpOutputReference(this, "authoritative_dhcp");
  public get authoritativeDhcp() {
    return this._authoritativeDhcp;
  }
  public putAuthoritativeDhcp(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp) {
    this._authoritativeDhcp.internalValue = value;
  }
  public resetAuthoritativeDhcp() {
    this._authoritativeDhcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeDhcpInput() {
    return this._authoritativeDhcp.internalValue;
  }

  // echo_client_id - computed: true, optional: true, required: false
  private _echoClientId = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigEchoClientIdOutputReference(this, "echo_client_id");
  public get echoClientId() {
    return this._echoClientId;
  }
  public putEchoClientId(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigEchoClientId) {
    this._echoClientId.internalValue = value;
  }
  public resetEchoClientId() {
    this._echoClientId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoClientIdInput() {
    return this._echoClientId.internalValue;
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // filters_v6 - computed: true, optional: true, required: false
  private _filtersV6 = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersV6OutputReference(this, "filters_v6");
  public get filtersV6() {
    return this._filtersV6;
  }
  public putFiltersV6(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigFiltersV6) {
    this._filtersV6.internalValue = value;
  }
  public resetFiltersV6() {
    this._filtersV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersV6Input() {
    return this._filtersV6.internalValue;
  }

  // hold_reclaimed_time - computed: true, optional: true, required: false
  private _holdReclaimedTime = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeOutputReference(this, "hold_reclaimed_time");
  public get holdReclaimedTime() {
    return this._holdReclaimedTime;
  }
  public putHoldReclaimedTime(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTime) {
    this._holdReclaimedTime.internalValue = value;
  }
  public resetHoldReclaimedTime() {
    this._holdReclaimedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdReclaimedTimeInput() {
    return this._holdReclaimedTime.internalValue;
  }

  // hold_reclaimed_time_v6 - computed: true, optional: true, required: false
  private _holdReclaimedTimeV6 = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6OutputReference(this, "hold_reclaimed_time_v6");
  public get holdReclaimedTimeV6() {
    return this._holdReclaimedTimeV6;
  }
  public putHoldReclaimedTimeV6(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6) {
    this._holdReclaimedTimeV6.internalValue = value;
  }
  public resetHoldReclaimedTimeV6() {
    this._holdReclaimedTimeV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdReclaimedTimeV6Input() {
    return this._holdReclaimedTimeV6.internalValue;
  }

  // ignore_client_uid - computed: true, optional: true, required: false
  private _ignoreClientUid = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreClientUidOutputReference(this, "ignore_client_uid");
  public get ignoreClientUid() {
    return this._ignoreClientUid;
  }
  public putIgnoreClientUid(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreClientUid) {
    this._ignoreClientUid.internalValue = value;
  }
  public resetIgnoreClientUid() {
    this._ignoreClientUid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreClientUidInput() {
    return this._ignoreClientUid.internalValue;
  }

  // ignore_list - computed: true, optional: true, required: false
  private _ignoreList = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListStructOutputReference(this, "ignore_list");
  public get ignoreList() {
    return this._ignoreList;
  }
  public putIgnoreList(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigIgnoreListStruct) {
    this._ignoreList.internalValue = value;
  }
  public resetIgnoreList() {
    this._ignoreList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreListInput() {
    return this._ignoreList.internalValue;
  }

  // lease_time - computed: true, optional: true, required: false
  private _leaseTime = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeOutputReference(this, "lease_time");
  public get leaseTime() {
    return this._leaseTime;
  }
  public putLeaseTime(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTime) {
    this._leaseTime.internalValue = value;
  }
  public resetLeaseTime() {
    this._leaseTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime.internalValue;
  }

  // lease_time_v6 - computed: true, optional: true, required: false
  private _leaseTimeV6 = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeV6OutputReference(this, "lease_time_v6");
  public get leaseTimeV6() {
    return this._leaseTimeV6;
  }
  public putLeaseTimeV6(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigLeaseTimeV6) {
    this._leaseTimeV6.internalValue = value;
  }
  public resetLeaseTimeV6() {
    this._leaseTimeV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeV6Input() {
    return this._leaseTimeV6.internalValue;
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValueOption {
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValueOptionToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValueOptionToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValueOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValueOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValueOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // option_code - computed: true, optional: false, required: false
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }

  // option_value - computed: true, optional: false, required: false
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValue {
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValueToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValueToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option - computed: true, optional: false, required: false
  private _option = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValueOptionOutputReference(this, "option");
  public get option() {
    return this._option;
  }

  // overriding_group - computed: true, optional: false, required: false
  public get overridingGroup() {
    return this.getStringAttribute('overriding_group');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValue {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueOutputReference {
    return new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptions {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
  /**
  * The inherited DHCP option values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#value DataBloxoneDhcpServers#value}
  */
  readonly value?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.listMapper(dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueToTerraform, false)(struct!.value),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value.internalValue = value.value;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // value - computed: true, optional: true, required: false
  private _value = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValueOption {
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValueOptionToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValueOptionToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValueOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValueOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValueOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // option_code - computed: true, optional: false, required: false
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }

  // option_value - computed: true, optional: false, required: false
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValue {
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValueToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValueToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option - computed: true, optional: false, required: false
  private _option = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValueOptionOutputReference(this, "option");
  public get option() {
    return this._option;
  }

  // overriding_group - computed: true, optional: false, required: false
  public get overridingGroup() {
    return this.getStringAttribute('overriding_group');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6Value {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6Value[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueOutputReference {
    return new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6 {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
  /**
  * The inherited DHCP option values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#value DataBloxoneDhcpServers#value}
  */
  readonly value?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6Value[] | cdktf.IResolvable;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.listMapper(dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueToTerraform, false)(struct!.value),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value.internalValue = value.value;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // value - computed: true, optional: true, required: false
  private _value = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6Value[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionFilename {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionFilenameToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionFilenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerAddress {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerAddressToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerName {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerNameToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlockValue {
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlockValueToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlockValueToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname_rewrite_char - computed: true, optional: false, required: false
  public get hostnameRewriteChar() {
    return this.getStringAttribute('hostname_rewrite_char');
  }

  // hostname_rewrite_enabled - computed: true, optional: false, required: false
  public get hostnameRewriteEnabled() {
    return this.getBooleanAttribute('hostname_rewrite_enabled');
  }

  // hostname_rewrite_regex - computed: true, optional: false, required: false
  public get hostnameRewriteRegex() {
    return this.getStringAttribute('hostname_rewrite_regex');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlockToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlockToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSourcesVendorSpecificOptionOptionSpace {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#action DataBloxoneDhcpServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesVendorSpecificOptionOptionSpaceToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesVendorSpecificOptionOptionSpace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesVendorSpecificOptionOptionSpaceToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSourcesVendorSpecificOptionOptionSpace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesVendorSpecificOptionOptionSpaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSourcesVendorSpecificOptionOptionSpace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSourcesVendorSpecificOptionOptionSpace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataBloxoneDhcpServersResultsInheritanceSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_block DataBloxoneDhcpServers#ddns_block}
  */
  readonly ddnsBlock?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_client_update DataBloxoneDhcpServers#ddns_client_update}
  */
  readonly ddnsClientUpdate?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsClientUpdate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_conflict_resolution_mode DataBloxoneDhcpServers#ddns_conflict_resolution_mode}
  */
  readonly ddnsConflictResolutionMode?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsConflictResolutionMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_hostname_block DataBloxoneDhcpServers#ddns_hostname_block}
  */
  readonly ddnsHostnameBlock?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_ttl_percent DataBloxoneDhcpServers#ddns_ttl_percent}
  */
  readonly ddnsTtlPercent?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsTtlPercent;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_update_on_renew DataBloxoneDhcpServers#ddns_update_on_renew}
  */
  readonly ddnsUpdateOnRenew?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUpdateOnRenew;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_use_conflict_resolution DataBloxoneDhcpServers#ddns_use_conflict_resolution}
  */
  readonly ddnsUseConflictResolution?: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUseConflictResolution;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#dhcp_config DataBloxoneDhcpServers#dhcp_config}
  */
  readonly dhcpConfig?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#dhcp_options DataBloxoneDhcpServers#dhcp_options}
  */
  readonly dhcpOptions?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#dhcp_options_v6 DataBloxoneDhcpServers#dhcp_options_v6}
  */
  readonly dhcpOptionsV6?: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#header_option_filename DataBloxoneDhcpServers#header_option_filename}
  */
  readonly headerOptionFilename?: DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionFilename;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#header_option_server_address DataBloxoneDhcpServers#header_option_server_address}
  */
  readonly headerOptionServerAddress?: DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#header_option_server_name DataBloxoneDhcpServers#header_option_server_name}
  */
  readonly headerOptionServerName?: DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#hostname_rewrite_block DataBloxoneDhcpServers#hostname_rewrite_block}
  */
  readonly hostnameRewriteBlock?: DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#vendor_specific_option_option_space DataBloxoneDhcpServers#vendor_specific_option_option_space}
  */
  readonly vendorSpecificOptionOptionSpace?: DataBloxoneDhcpServersResultsInheritanceSourcesVendorSpecificOptionOptionSpace;
}

export function dataBloxoneDhcpServersResultsInheritanceSourcesToTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddns_block: dataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockToTerraform(struct!.ddnsBlock),
    ddns_client_update: dataBloxoneDhcpServersResultsInheritanceSourcesDdnsClientUpdateToTerraform(struct!.ddnsClientUpdate),
    ddns_conflict_resolution_mode: dataBloxoneDhcpServersResultsInheritanceSourcesDdnsConflictResolutionModeToTerraform(struct!.ddnsConflictResolutionMode),
    ddns_hostname_block: dataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlockToTerraform(struct!.ddnsHostnameBlock),
    ddns_ttl_percent: dataBloxoneDhcpServersResultsInheritanceSourcesDdnsTtlPercentToTerraform(struct!.ddnsTtlPercent),
    ddns_update_on_renew: dataBloxoneDhcpServersResultsInheritanceSourcesDdnsUpdateOnRenewToTerraform(struct!.ddnsUpdateOnRenew),
    ddns_use_conflict_resolution: dataBloxoneDhcpServersResultsInheritanceSourcesDdnsUseConflictResolutionToTerraform(struct!.ddnsUseConflictResolution),
    dhcp_config: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigToTerraform(struct!.dhcpConfig),
    dhcp_options: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsToTerraform(struct!.dhcpOptions),
    dhcp_options_v6: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ToTerraform(struct!.dhcpOptionsV6),
    header_option_filename: dataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionFilenameToTerraform(struct!.headerOptionFilename),
    header_option_server_address: dataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerAddressToTerraform(struct!.headerOptionServerAddress),
    header_option_server_name: dataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerNameToTerraform(struct!.headerOptionServerName),
    hostname_rewrite_block: dataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlockToTerraform(struct!.hostnameRewriteBlock),
    vendor_specific_option_option_space: dataBloxoneDhcpServersResultsInheritanceSourcesVendorSpecificOptionOptionSpaceToTerraform(struct!.vendorSpecificOptionOptionSpace),
  }
}


export function dataBloxoneDhcpServersResultsInheritanceSourcesToHclTerraform(struct?: DataBloxoneDhcpServersResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddns_block: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockToHclTerraform(struct!.ddnsBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlock",
    },
    ddns_client_update: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDdnsClientUpdateToHclTerraform(struct!.ddnsClientUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDdnsClientUpdate",
    },
    ddns_conflict_resolution_mode: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDdnsConflictResolutionModeToHclTerraform(struct!.ddnsConflictResolutionMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDdnsConflictResolutionMode",
    },
    ddns_hostname_block: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlockToHclTerraform(struct!.ddnsHostnameBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlock",
    },
    ddns_ttl_percent: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDdnsTtlPercentToHclTerraform(struct!.ddnsTtlPercent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDdnsTtlPercent",
    },
    ddns_update_on_renew: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDdnsUpdateOnRenewToHclTerraform(struct!.ddnsUpdateOnRenew),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUpdateOnRenew",
    },
    ddns_use_conflict_resolution: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDdnsUseConflictResolutionToHclTerraform(struct!.ddnsUseConflictResolution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUseConflictResolution",
    },
    dhcp_config: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigToHclTerraform(struct!.dhcpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfig",
    },
    dhcp_options: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsToHclTerraform(struct!.dhcpOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptions",
    },
    dhcp_options_v6: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6ToHclTerraform(struct!.dhcpOptionsV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6",
    },
    header_option_filename: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct!.headerOptionFilename),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionFilename",
    },
    header_option_server_address: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct!.headerOptionServerAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerAddress",
    },
    header_option_server_name: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct!.headerOptionServerName),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerName",
    },
    hostname_rewrite_block: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlockToHclTerraform(struct!.hostnameRewriteBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlock",
    },
    vendor_specific_option_option_space: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesVendorSpecificOptionOptionSpaceToHclTerraform(struct!.vendorSpecificOptionOptionSpace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSourcesVendorSpecificOptionOptionSpace",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpServersResultsInheritanceSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddnsBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsBlock = this._ddnsBlock?.internalValue;
    }
    if (this._ddnsClientUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsClientUpdate = this._ddnsClientUpdate?.internalValue;
    }
    if (this._ddnsConflictResolutionMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsConflictResolutionMode = this._ddnsConflictResolutionMode?.internalValue;
    }
    if (this._ddnsHostnameBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsHostnameBlock = this._ddnsHostnameBlock?.internalValue;
    }
    if (this._ddnsTtlPercent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsTtlPercent = this._ddnsTtlPercent?.internalValue;
    }
    if (this._ddnsUpdateOnRenew?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUpdateOnRenew = this._ddnsUpdateOnRenew?.internalValue;
    }
    if (this._ddnsUseConflictResolution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUseConflictResolution = this._ddnsUseConflictResolution?.internalValue;
    }
    if (this._dhcpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpConfig = this._dhcpConfig?.internalValue;
    }
    if (this._dhcpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptions = this._dhcpOptions?.internalValue;
    }
    if (this._dhcpOptionsV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptionsV6 = this._dhcpOptionsV6?.internalValue;
    }
    if (this._headerOptionFilename?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionFilename = this._headerOptionFilename?.internalValue;
    }
    if (this._headerOptionServerAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionServerAddress = this._headerOptionServerAddress?.internalValue;
    }
    if (this._headerOptionServerName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionServerName = this._headerOptionServerName?.internalValue;
    }
    if (this._hostnameRewriteBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameRewriteBlock = this._hostnameRewriteBlock?.internalValue;
    }
    if (this._vendorSpecificOptionOptionSpace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorSpecificOptionOptionSpace = this._vendorSpecificOptionOptionSpace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsInheritanceSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ddnsBlock.internalValue = undefined;
      this._ddnsClientUpdate.internalValue = undefined;
      this._ddnsConflictResolutionMode.internalValue = undefined;
      this._ddnsHostnameBlock.internalValue = undefined;
      this._ddnsTtlPercent.internalValue = undefined;
      this._ddnsUpdateOnRenew.internalValue = undefined;
      this._ddnsUseConflictResolution.internalValue = undefined;
      this._dhcpConfig.internalValue = undefined;
      this._dhcpOptions.internalValue = undefined;
      this._dhcpOptionsV6.internalValue = undefined;
      this._headerOptionFilename.internalValue = undefined;
      this._headerOptionServerAddress.internalValue = undefined;
      this._headerOptionServerName.internalValue = undefined;
      this._hostnameRewriteBlock.internalValue = undefined;
      this._vendorSpecificOptionOptionSpace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ddnsBlock.internalValue = value.ddnsBlock;
      this._ddnsClientUpdate.internalValue = value.ddnsClientUpdate;
      this._ddnsConflictResolutionMode.internalValue = value.ddnsConflictResolutionMode;
      this._ddnsHostnameBlock.internalValue = value.ddnsHostnameBlock;
      this._ddnsTtlPercent.internalValue = value.ddnsTtlPercent;
      this._ddnsUpdateOnRenew.internalValue = value.ddnsUpdateOnRenew;
      this._ddnsUseConflictResolution.internalValue = value.ddnsUseConflictResolution;
      this._dhcpConfig.internalValue = value.dhcpConfig;
      this._dhcpOptions.internalValue = value.dhcpOptions;
      this._dhcpOptionsV6.internalValue = value.dhcpOptionsV6;
      this._headerOptionFilename.internalValue = value.headerOptionFilename;
      this._headerOptionServerAddress.internalValue = value.headerOptionServerAddress;
      this._headerOptionServerName.internalValue = value.headerOptionServerName;
      this._hostnameRewriteBlock.internalValue = value.hostnameRewriteBlock;
      this._vendorSpecificOptionOptionSpace.internalValue = value.vendorSpecificOptionOptionSpace;
    }
  }

  // ddns_block - computed: true, optional: true, required: false
  private _ddnsBlock = new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlockOutputReference(this, "ddns_block");
  public get ddnsBlock() {
    return this._ddnsBlock;
  }
  public putDdnsBlock(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsBlock) {
    this._ddnsBlock.internalValue = value;
  }
  public resetDdnsBlock() {
    this._ddnsBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsBlockInput() {
    return this._ddnsBlock.internalValue;
  }

  // ddns_client_update - computed: true, optional: true, required: false
  private _ddnsClientUpdate = new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsClientUpdateOutputReference(this, "ddns_client_update");
  public get ddnsClientUpdate() {
    return this._ddnsClientUpdate;
  }
  public putDdnsClientUpdate(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsClientUpdate) {
    this._ddnsClientUpdate.internalValue = value;
  }
  public resetDdnsClientUpdate() {
    this._ddnsClientUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsClientUpdateInput() {
    return this._ddnsClientUpdate.internalValue;
  }

  // ddns_conflict_resolution_mode - computed: true, optional: true, required: false
  private _ddnsConflictResolutionMode = new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsConflictResolutionModeOutputReference(this, "ddns_conflict_resolution_mode");
  public get ddnsConflictResolutionMode() {
    return this._ddnsConflictResolutionMode;
  }
  public putDdnsConflictResolutionMode(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsConflictResolutionMode) {
    this._ddnsConflictResolutionMode.internalValue = value;
  }
  public resetDdnsConflictResolutionMode() {
    this._ddnsConflictResolutionMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsConflictResolutionModeInput() {
    return this._ddnsConflictResolutionMode.internalValue;
  }

  // ddns_hostname_block - computed: true, optional: true, required: false
  private _ddnsHostnameBlock = new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlockOutputReference(this, "ddns_hostname_block");
  public get ddnsHostnameBlock() {
    return this._ddnsHostnameBlock;
  }
  public putDdnsHostnameBlock(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsHostnameBlock) {
    this._ddnsHostnameBlock.internalValue = value;
  }
  public resetDdnsHostnameBlock() {
    this._ddnsHostnameBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsHostnameBlockInput() {
    return this._ddnsHostnameBlock.internalValue;
  }

  // ddns_ttl_percent - computed: true, optional: true, required: false
  private _ddnsTtlPercent = new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsTtlPercentOutputReference(this, "ddns_ttl_percent");
  public get ddnsTtlPercent() {
    return this._ddnsTtlPercent;
  }
  public putDdnsTtlPercent(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsTtlPercent) {
    this._ddnsTtlPercent.internalValue = value;
  }
  public resetDdnsTtlPercent() {
    this._ddnsTtlPercent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlPercentInput() {
    return this._ddnsTtlPercent.internalValue;
  }

  // ddns_update_on_renew - computed: true, optional: true, required: false
  private _ddnsUpdateOnRenew = new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUpdateOnRenewOutputReference(this, "ddns_update_on_renew");
  public get ddnsUpdateOnRenew() {
    return this._ddnsUpdateOnRenew;
  }
  public putDdnsUpdateOnRenew(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUpdateOnRenew) {
    this._ddnsUpdateOnRenew.internalValue = value;
  }
  public resetDdnsUpdateOnRenew() {
    this._ddnsUpdateOnRenew.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateOnRenewInput() {
    return this._ddnsUpdateOnRenew.internalValue;
  }

  // ddns_use_conflict_resolution - computed: true, optional: true, required: false
  private _ddnsUseConflictResolution = new DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUseConflictResolutionOutputReference(this, "ddns_use_conflict_resolution");
  public get ddnsUseConflictResolution() {
    return this._ddnsUseConflictResolution;
  }
  public putDdnsUseConflictResolution(value: DataBloxoneDhcpServersResultsInheritanceSourcesDdnsUseConflictResolution) {
    this._ddnsUseConflictResolution.internalValue = value;
  }
  public resetDdnsUseConflictResolution() {
    this._ddnsUseConflictResolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUseConflictResolutionInput() {
    return this._ddnsUseConflictResolution.internalValue;
  }

  // dhcp_config - computed: true, optional: true, required: false
  private _dhcpConfig = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfigOutputReference(this, "dhcp_config");
  public get dhcpConfig() {
    return this._dhcpConfig;
  }
  public putDhcpConfig(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpConfig) {
    this._dhcpConfig.internalValue = value;
  }
  public resetDhcpConfig() {
    this._dhcpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpConfigInput() {
    return this._dhcpConfig.internalValue;
  }

  // dhcp_options - computed: true, optional: true, required: false
  private _dhcpOptions = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsOutputReference(this, "dhcp_options");
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptions) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // dhcp_options_v6 - computed: true, optional: true, required: false
  private _dhcpOptionsV6 = new DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6OutputReference(this, "dhcp_options_v6");
  public get dhcpOptionsV6() {
    return this._dhcpOptionsV6;
  }
  public putDhcpOptionsV6(value: DataBloxoneDhcpServersResultsInheritanceSourcesDhcpOptionsV6) {
    this._dhcpOptionsV6.internalValue = value;
  }
  public resetDhcpOptionsV6() {
    this._dhcpOptionsV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsV6Input() {
    return this._dhcpOptionsV6.internalValue;
  }

  // header_option_filename - computed: true, optional: true, required: false
  private _headerOptionFilename = new DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionFilenameOutputReference(this, "header_option_filename");
  public get headerOptionFilename() {
    return this._headerOptionFilename;
  }
  public putHeaderOptionFilename(value: DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionFilename) {
    this._headerOptionFilename.internalValue = value;
  }
  public resetHeaderOptionFilename() {
    this._headerOptionFilename.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionFilenameInput() {
    return this._headerOptionFilename.internalValue;
  }

  // header_option_server_address - computed: true, optional: true, required: false
  private _headerOptionServerAddress = new DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerAddressOutputReference(this, "header_option_server_address");
  public get headerOptionServerAddress() {
    return this._headerOptionServerAddress;
  }
  public putHeaderOptionServerAddress(value: DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerAddress) {
    this._headerOptionServerAddress.internalValue = value;
  }
  public resetHeaderOptionServerAddress() {
    this._headerOptionServerAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerAddressInput() {
    return this._headerOptionServerAddress.internalValue;
  }

  // header_option_server_name - computed: true, optional: true, required: false
  private _headerOptionServerName = new DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerNameOutputReference(this, "header_option_server_name");
  public get headerOptionServerName() {
    return this._headerOptionServerName;
  }
  public putHeaderOptionServerName(value: DataBloxoneDhcpServersResultsInheritanceSourcesHeaderOptionServerName) {
    this._headerOptionServerName.internalValue = value;
  }
  public resetHeaderOptionServerName() {
    this._headerOptionServerName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerNameInput() {
    return this._headerOptionServerName.internalValue;
  }

  // hostname_rewrite_block - computed: true, optional: true, required: false
  private _hostnameRewriteBlock = new DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlockOutputReference(this, "hostname_rewrite_block");
  public get hostnameRewriteBlock() {
    return this._hostnameRewriteBlock;
  }
  public putHostnameRewriteBlock(value: DataBloxoneDhcpServersResultsInheritanceSourcesHostnameRewriteBlock) {
    this._hostnameRewriteBlock.internalValue = value;
  }
  public resetHostnameRewriteBlock() {
    this._hostnameRewriteBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteBlockInput() {
    return this._hostnameRewriteBlock.internalValue;
  }

  // vendor_specific_option_option_space - computed: true, optional: true, required: false
  private _vendorSpecificOptionOptionSpace = new DataBloxoneDhcpServersResultsInheritanceSourcesVendorSpecificOptionOptionSpaceOutputReference(this, "vendor_specific_option_option_space");
  public get vendorSpecificOptionOptionSpace() {
    return this._vendorSpecificOptionOptionSpace;
  }
  public putVendorSpecificOptionOptionSpace(value: DataBloxoneDhcpServersResultsInheritanceSourcesVendorSpecificOptionOptionSpace) {
    this._vendorSpecificOptionOptionSpace.internalValue = value;
  }
  public resetVendorSpecificOptionOptionSpace() {
    this._vendorSpecificOptionOptionSpace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorSpecificOptionOptionSpaceInput() {
    return this._vendorSpecificOptionOptionSpace.internalValue;
  }
}
export interface DataBloxoneDhcpServersResultsKerberosKeys {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#key DataBloxoneDhcpServers#key}
  */
  readonly key: string;
}

export function dataBloxoneDhcpServersResultsKerberosKeysToTerraform(struct?: DataBloxoneDhcpServersResultsKerberosKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDhcpServersResultsKerberosKeysToHclTerraform(struct?: DataBloxoneDhcpServersResultsKerberosKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsKerberosKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDhcpServersResultsKerberosKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResultsKerberosKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }

  // uploaded_at - computed: true, optional: false, required: false
  public get uploadedAt() {
    return this.getStringAttribute('uploaded_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataBloxoneDhcpServersResultsKerberosKeysList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDhcpServersResultsKerberosKeys[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDhcpServersResultsKerberosKeysOutputReference {
    return new DataBloxoneDhcpServersResultsKerberosKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDhcpServersResults {
  /**
  * The Kerberos principal name. It uses the typical Kerberos notation: `<SERVICE-NAME>/<server-domain-name>@<REALM>`. Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#client_principal DataBloxoneDhcpServers#client_principal}
  */
  readonly clientPrincipal?: string;
  /**
  * The description for the DHCP Config Profile. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#comment DataBloxoneDhcpServers#comment}
  */
  readonly comment?: string;
  /**
  * Controls who does the DDNS updates. Valid values are:
  *   * _client_: DHCP server updates DNS if requested by client.
  *   * _server_: DHCP server always updates DNS, overriding an update request from the client, unless the client requests no updates.
  *   * _ignore_: DHCP server always updates DNS, even if the client says not to.
  *   * _over_client_update_: Same as _server_. DHCP server always updates DNS, overriding an update request from the client, unless the client requests no updates.
  *   * _over_no_update_: DHCP server updates DNS even if the client requests that no updates be done. If the client requests to do the update, DHCP server allows it.
  * 
  *   Defaults to _client_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_client_update DataBloxoneDhcpServers#ddns_client_update}
  */
  readonly ddnsClientUpdate?: string;
  /**
  * The mode used for resolving conflicts while performing DDNS updates. Valid values are:
  *   * _check_with_dhcid_: It includes adding a DHCID record and checking that record via conflict detection as per RFC 4703.
  *   * _no_check_with_dhcid_: This will ignore conflict detection but add a DHCID record when creating/updating an entry.
  *   * _check_exists_with_dhcid_: This will check if there is an existing DHCID record but does not verify the value of the record matches the update. This will also update the DHCID record for the entry.
  *   * _no_check_without_dhcid_: This ignores conflict detection and will not add a DHCID record when creating/updating a DDNS entry.
  * 
  *   Defaults to _check_with_dhcid_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_conflict_resolution_mode DataBloxoneDhcpServers#ddns_conflict_resolution_mode}
  */
  readonly ddnsConflictResolutionMode?: string;
  /**
  * The domain suffix for DDNS updates. FQDN, may be empty. Required if _ddns_enabled_ is true.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_domain DataBloxoneDhcpServers#ddns_domain}
  */
  readonly ddnsDomain?: string;
  /**
  * Indicates if DDNS updates should be performed for leases. All other _ddns_*_ configuration is ignored when this flag is unset. At a minimum, _ddns_domain_ and _ddns_zones_ must be configured to enable DDNS. Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_enabled DataBloxoneDhcpServers#ddns_enabled}
  */
  readonly ddnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates if DDNS should generate a hostname when not supplied by the client.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_generate_name DataBloxoneDhcpServers#ddns_generate_name}
  */
  readonly ddnsGenerateName?: boolean | cdktf.IResolvable;
  /**
  * The prefix used in the generation of an FQDN.  When generating a name, DHCP server will construct the name in the format: [ddns-generated-prefix]-[address-text].[ddns-qualifying-suffix]. where address-text is simply the lease IP address converted to a hyphenated string. Defaults to \"myhost\".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_generated_prefix DataBloxoneDhcpServers#ddns_generated_prefix}
  */
  readonly ddnsGeneratedPrefix?: string;
  /**
  * Determines if DDNS updates are enabled at the IP space level. Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_send_updates DataBloxoneDhcpServers#ddns_send_updates}
  */
  readonly ddnsSendUpdates?: boolean | cdktf.IResolvable;
  /**
  * DDNS TTL value - to be calculated as a simple percentage of the lease's lifetime, using the parameter's value as the percentage. It is specified as a percentage (e.g. 25, 75). Defaults to unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_ttl_percent DataBloxoneDhcpServers#ddns_ttl_percent}
  */
  readonly ddnsTtlPercent?: number;
  /**
  * Instructs the DHCP server to always update the DNS information when a lease is renewed even if its DNS information has not changed.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_update_on_renew DataBloxoneDhcpServers#ddns_update_on_renew}
  */
  readonly ddnsUpdateOnRenew?: boolean | cdktf.IResolvable;
  /**
  * When true, DHCP server will apply conflict resolution, as described in RFC 4703, when attempting to fulfill the update request.  When false, DHCP server will simply attempt to update the DNS entries per the request, regardless of whether or not they conflict with existing entries owned by other DHCP4 clients.  Defaults to _true_. Can be set to true only when ddns_conflict_resolution_mode is check_with_dhcid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_use_conflict_resolution DataBloxoneDhcpServers#ddns_use_conflict_resolution}
  */
  readonly ddnsUseConflictResolution?: boolean | cdktf.IResolvable;
  /**
  * The DNS zones that DDNS updates can be sent to. There is no resolver fallback. The target zone must be explicitly configured for the update to be performed.  Updates are sent to the closest enclosing zone.  Error if _ddns_enabled_ is _true_ and the _ddns_domain_ does not have a corresponding entry in _ddns_zones_.  Error if there are items with duplicate zone in the list.  Defaults to empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#ddns_zones DataBloxoneDhcpServers#ddns_zones}
  */
  readonly ddnsZones?: DataBloxoneDhcpServersResultsDdnsZones[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#dhcp_config DataBloxoneDhcpServers#dhcp_config}
  */
  readonly dhcpConfig?: DataBloxoneDhcpServersResultsDhcpConfig;
  /**
  * The list of DHCP options or group of options for IPv4. An option list is ordered and may include both option groups and specific options. Multiple occurrences of the same option or group is not an error. The last occurrence of an option in the list will be used. Error if the graph of referenced groups contains cycles. Defaults to empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#dhcp_options DataBloxoneDhcpServers#dhcp_options}
  */
  readonly dhcpOptions?: DataBloxoneDhcpServersResultsDhcpOptions[] | cdktf.IResolvable;
  /**
  * The list of DHCP options or group of options for IPv6. An option list is ordered and may include both option groups and specific options. Multiple occurrences of the same option or group is not an error. The last occurrence of an option in the list will be used. Error if the graph of referenced groups contains cycles. Defaults to empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#dhcp_options_v6 DataBloxoneDhcpServers#dhcp_options_v6}
  */
  readonly dhcpOptionsV6?: DataBloxoneDhcpServersResultsDhcpOptionsV6[] | cdktf.IResolvable;
  /**
  * The behavior when GSS-TSIG should be used (a matching external DNS server is configured) but no GSS-TSIG key is available. If configured to _false_ (the default) this DNS server is skipped, if configured to _true_ the DNS server is ignored and the DNS update is sent with the configured DHCP-DDNS protection e.g. TSIG key or without any protection when none was configured.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#gss_tsig_fallback DataBloxoneDhcpServers#gss_tsig_fallback}
  */
  readonly gssTsigFallback?: boolean | cdktf.IResolvable;
  /**
  * The configuration for header option filename field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#header_option_filename DataBloxoneDhcpServers#header_option_filename}
  */
  readonly headerOptionFilename?: string;
  /**
  * The configuration for header option server address field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#header_option_server_address DataBloxoneDhcpServers#header_option_server_address}
  */
  readonly headerOptionServerAddress?: string;
  /**
  * The configuration for header option server name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#header_option_server_name DataBloxoneDhcpServers#header_option_server_name}
  */
  readonly headerOptionServerName?: string;
  /**
  * The character to replace non-matching characters with, when hostname rewrite is enabled.  Any single ASCII character or no character if the invalid characters should be removed without replacement.  Defaults to \"-\".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#hostname_rewrite_char DataBloxoneDhcpServers#hostname_rewrite_char}
  */
  readonly hostnameRewriteChar?: string;
  /**
  * Indicates if client supplied hostnames will be rewritten prior to DDNS update by replacing every character that does not match _hostname_rewrite_regex_ by _hostname_rewrite_char_.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#hostname_rewrite_enabled DataBloxoneDhcpServers#hostname_rewrite_enabled}
  */
  readonly hostnameRewriteEnabled?: boolean | cdktf.IResolvable;
  /**
  * The regex bracket expression to match valid characters.  Must begin with \"[\" and end with \"]\" and be a compilable POSIX regex.  Defaults to \"[^a-zA-Z0-9_.]\".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#hostname_rewrite_regex DataBloxoneDhcpServers#hostname_rewrite_regex}
  */
  readonly hostnameRewriteRegex?: string;
  /**
  * The inheritance configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#inheritance_sources DataBloxoneDhcpServers#inheritance_sources}
  */
  readonly inheritanceSources?: DataBloxoneDhcpServersResultsInheritanceSources;
  /**
  * Address of Kerberos Key Distribution Center.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#kerberos_kdc DataBloxoneDhcpServers#kerberos_kdc}
  */
  readonly kerberosKdc?: string;
  /**
  * _kerberos_keys_ contains a list of keys for GSS-TSIG signed dynamic updates.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#kerberos_keys DataBloxoneDhcpServers#kerberos_keys}
  */
  readonly kerberosKeys?: DataBloxoneDhcpServersResultsKerberosKeys[] | cdktf.IResolvable;
  /**
  * Time interval (in seconds) the keys for each configured external DNS server are checked for rekeying, i.e. a new key is created to replace the current usable one when its age is greater than the _kerberos_rekey_interval_ value.  Defaults to 120 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#kerberos_rekey_interval DataBloxoneDhcpServers#kerberos_rekey_interval}
  */
  readonly kerberosRekeyInterval?: number;
  /**
  * Time interval (in seconds) to retry to create a key if any error occurred previously for any configured external DNS server.  Defaults to 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#kerberos_retry_interval DataBloxoneDhcpServers#kerberos_retry_interval}
  */
  readonly kerberosRetryInterval?: number;
  /**
  * Lifetime (in seconds) of GSS-TSIG keys in the TKEY protocol.  Defaults to 160 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#kerberos_tkey_lifetime DataBloxoneDhcpServers#kerberos_tkey_lifetime}
  */
  readonly kerberosTkeyLifetime?: number;
  /**
  * Determines which protocol is used to establish the security context with the external DNS servers, TCP or UDP.  Defaults to _tcp_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#kerberos_tkey_protocol DataBloxoneDhcpServers#kerberos_tkey_protocol}
  */
  readonly kerberosTkeyProtocol?: string;
  /**
  * The name of the DHCP Config Profile. Must contain 1 to 256 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#name DataBloxoneDhcpServers#name}
  */
  readonly name: string;
  /**
  * The type of server object.  Defaults to _server_.  Valid values are: * _server_: The server profile type. * _subnet_: The subnet profile type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#profile_type DataBloxoneDhcpServers#profile_type}
  */
  readonly profileType?: string;
  /**
  * The Kerberos principal name of the external DNS server that will receive updates.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#server_principal DataBloxoneDhcpServers#server_principal}
  */
  readonly serverPrincipal?: string;
  /**
  * The tags for the DHCP Config Profile in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#tags DataBloxoneDhcpServers#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#vendor_specific_option_option_space DataBloxoneDhcpServers#vendor_specific_option_option_space}
  */
  readonly vendorSpecificOptionOptionSpace?: string;
}

export function dataBloxoneDhcpServersResultsToTerraform(struct?: DataBloxoneDhcpServersResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_principal: cdktf.stringToTerraform(struct!.clientPrincipal),
    comment: cdktf.stringToTerraform(struct!.comment),
    ddns_client_update: cdktf.stringToTerraform(struct!.ddnsClientUpdate),
    ddns_conflict_resolution_mode: cdktf.stringToTerraform(struct!.ddnsConflictResolutionMode),
    ddns_domain: cdktf.stringToTerraform(struct!.ddnsDomain),
    ddns_enabled: cdktf.booleanToTerraform(struct!.ddnsEnabled),
    ddns_generate_name: cdktf.booleanToTerraform(struct!.ddnsGenerateName),
    ddns_generated_prefix: cdktf.stringToTerraform(struct!.ddnsGeneratedPrefix),
    ddns_send_updates: cdktf.booleanToTerraform(struct!.ddnsSendUpdates),
    ddns_ttl_percent: cdktf.numberToTerraform(struct!.ddnsTtlPercent),
    ddns_update_on_renew: cdktf.booleanToTerraform(struct!.ddnsUpdateOnRenew),
    ddns_use_conflict_resolution: cdktf.booleanToTerraform(struct!.ddnsUseConflictResolution),
    ddns_zones: cdktf.listMapper(dataBloxoneDhcpServersResultsDdnsZonesToTerraform, false)(struct!.ddnsZones),
    dhcp_config: dataBloxoneDhcpServersResultsDhcpConfigToTerraform(struct!.dhcpConfig),
    dhcp_options: cdktf.listMapper(dataBloxoneDhcpServersResultsDhcpOptionsToTerraform, false)(struct!.dhcpOptions),
    dhcp_options_v6: cdktf.listMapper(dataBloxoneDhcpServersResultsDhcpOptionsV6ToTerraform, false)(struct!.dhcpOptionsV6),
    gss_tsig_fallback: cdktf.booleanToTerraform(struct!.gssTsigFallback),
    header_option_filename: cdktf.stringToTerraform(struct!.headerOptionFilename),
    header_option_server_address: cdktf.stringToTerraform(struct!.headerOptionServerAddress),
    header_option_server_name: cdktf.stringToTerraform(struct!.headerOptionServerName),
    hostname_rewrite_char: cdktf.stringToTerraform(struct!.hostnameRewriteChar),
    hostname_rewrite_enabled: cdktf.booleanToTerraform(struct!.hostnameRewriteEnabled),
    hostname_rewrite_regex: cdktf.stringToTerraform(struct!.hostnameRewriteRegex),
    inheritance_sources: dataBloxoneDhcpServersResultsInheritanceSourcesToTerraform(struct!.inheritanceSources),
    kerberos_kdc: cdktf.stringToTerraform(struct!.kerberosKdc),
    kerberos_keys: cdktf.listMapper(dataBloxoneDhcpServersResultsKerberosKeysToTerraform, false)(struct!.kerberosKeys),
    kerberos_rekey_interval: cdktf.numberToTerraform(struct!.kerberosRekeyInterval),
    kerberos_retry_interval: cdktf.numberToTerraform(struct!.kerberosRetryInterval),
    kerberos_tkey_lifetime: cdktf.numberToTerraform(struct!.kerberosTkeyLifetime),
    kerberos_tkey_protocol: cdktf.stringToTerraform(struct!.kerberosTkeyProtocol),
    name: cdktf.stringToTerraform(struct!.name),
    profile_type: cdktf.stringToTerraform(struct!.profileType),
    server_principal: cdktf.stringToTerraform(struct!.serverPrincipal),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    vendor_specific_option_option_space: cdktf.stringToTerraform(struct!.vendorSpecificOptionOptionSpace),
  }
}


export function dataBloxoneDhcpServersResultsToHclTerraform(struct?: DataBloxoneDhcpServersResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_principal: {
      value: cdktf.stringToHclTerraform(struct!.clientPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_client_update: {
      value: cdktf.stringToHclTerraform(struct!.ddnsClientUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_conflict_resolution_mode: {
      value: cdktf.stringToHclTerraform(struct!.ddnsConflictResolutionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_domain: {
      value: cdktf.stringToHclTerraform(struct!.ddnsDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_generate_name: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsGenerateName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_generated_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ddnsGeneratedPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_send_updates: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsSendUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_ttl_percent: {
      value: cdktf.numberToHclTerraform(struct!.ddnsTtlPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddns_update_on_renew: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsUpdateOnRenew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_use_conflict_resolution: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsUseConflictResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_zones: {
      value: cdktf.listMapperHcl(dataBloxoneDhcpServersResultsDdnsZonesToHclTerraform, false)(struct!.ddnsZones),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDhcpServersResultsDdnsZonesList",
    },
    dhcp_config: {
      value: dataBloxoneDhcpServersResultsDhcpConfigToHclTerraform(struct!.dhcpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsDhcpConfig",
    },
    dhcp_options: {
      value: cdktf.listMapperHcl(dataBloxoneDhcpServersResultsDhcpOptionsToHclTerraform, false)(struct!.dhcpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDhcpServersResultsDhcpOptionsList",
    },
    dhcp_options_v6: {
      value: cdktf.listMapperHcl(dataBloxoneDhcpServersResultsDhcpOptionsV6ToHclTerraform, false)(struct!.dhcpOptionsV6),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDhcpServersResultsDhcpOptionsV6List",
    },
    gss_tsig_fallback: {
      value: cdktf.booleanToHclTerraform(struct!.gssTsigFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header_option_filename: {
      value: cdktf.stringToHclTerraform(struct!.headerOptionFilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_option_server_address: {
      value: cdktf.stringToHclTerraform(struct!.headerOptionServerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_option_server_name: {
      value: cdktf.stringToHclTerraform(struct!.headerOptionServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_rewrite_char: {
      value: cdktf.stringToHclTerraform(struct!.hostnameRewriteChar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_rewrite_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.hostnameRewriteEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname_rewrite_regex: {
      value: cdktf.stringToHclTerraform(struct!.hostnameRewriteRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inheritance_sources: {
      value: dataBloxoneDhcpServersResultsInheritanceSourcesToHclTerraform(struct!.inheritanceSources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpServersResultsInheritanceSources",
    },
    kerberos_kdc: {
      value: cdktf.stringToHclTerraform(struct!.kerberosKdc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kerberos_keys: {
      value: cdktf.listMapperHcl(dataBloxoneDhcpServersResultsKerberosKeysToHclTerraform, false)(struct!.kerberosKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDhcpServersResultsKerberosKeysList",
    },
    kerberos_rekey_interval: {
      value: cdktf.numberToHclTerraform(struct!.kerberosRekeyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_retry_interval: {
      value: cdktf.numberToHclTerraform(struct!.kerberosRetryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_tkey_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.kerberosTkeyLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_tkey_protocol: {
      value: cdktf.stringToHclTerraform(struct!.kerberosTkeyProtocol),
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
    profile_type: {
      value: cdktf.stringToHclTerraform(struct!.profileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_principal: {
      value: cdktf.stringToHclTerraform(struct!.serverPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vendor_specific_option_option_space: {
      value: cdktf.stringToHclTerraform(struct!.vendorSpecificOptionOptionSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpServersResultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBloxoneDhcpServersResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPrincipal = this._clientPrincipal;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._ddnsClientUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsClientUpdate = this._ddnsClientUpdate;
    }
    if (this._ddnsConflictResolutionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsConflictResolutionMode = this._ddnsConflictResolutionMode;
    }
    if (this._ddnsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsDomain = this._ddnsDomain;
    }
    if (this._ddnsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsEnabled = this._ddnsEnabled;
    }
    if (this._ddnsGenerateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsGenerateName = this._ddnsGenerateName;
    }
    if (this._ddnsGeneratedPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsGeneratedPrefix = this._ddnsGeneratedPrefix;
    }
    if (this._ddnsSendUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsSendUpdates = this._ddnsSendUpdates;
    }
    if (this._ddnsTtlPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsTtlPercent = this._ddnsTtlPercent;
    }
    if (this._ddnsUpdateOnRenew !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUpdateOnRenew = this._ddnsUpdateOnRenew;
    }
    if (this._ddnsUseConflictResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUseConflictResolution = this._ddnsUseConflictResolution;
    }
    if (this._ddnsZones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsZones = this._ddnsZones?.internalValue;
    }
    if (this._dhcpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpConfig = this._dhcpConfig?.internalValue;
    }
    if (this._dhcpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptions = this._dhcpOptions?.internalValue;
    }
    if (this._dhcpOptionsV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptionsV6 = this._dhcpOptionsV6?.internalValue;
    }
    if (this._gssTsigFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssTsigFallback = this._gssTsigFallback;
    }
    if (this._headerOptionFilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionFilename = this._headerOptionFilename;
    }
    if (this._headerOptionServerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionServerAddress = this._headerOptionServerAddress;
    }
    if (this._headerOptionServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionServerName = this._headerOptionServerName;
    }
    if (this._hostnameRewriteChar !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameRewriteChar = this._hostnameRewriteChar;
    }
    if (this._hostnameRewriteEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameRewriteEnabled = this._hostnameRewriteEnabled;
    }
    if (this._hostnameRewriteRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameRewriteRegex = this._hostnameRewriteRegex;
    }
    if (this._inheritanceSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritanceSources = this._inheritanceSources?.internalValue;
    }
    if (this._kerberosKdc !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKdc = this._kerberosKdc;
    }
    if (this._kerberosKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKeys = this._kerberosKeys?.internalValue;
    }
    if (this._kerberosRekeyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosRekeyInterval = this._kerberosRekeyInterval;
    }
    if (this._kerberosRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosRetryInterval = this._kerberosRetryInterval;
    }
    if (this._kerberosTkeyLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosTkeyLifetime = this._kerberosTkeyLifetime;
    }
    if (this._kerberosTkeyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosTkeyProtocol = this._kerberosTkeyProtocol;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._profileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileType = this._profileType;
    }
    if (this._serverPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPrincipal = this._serverPrincipal;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vendorSpecificOptionOptionSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorSpecificOptionOptionSpace = this._vendorSpecificOptionOptionSpace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpServersResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientPrincipal = undefined;
      this._comment = undefined;
      this._ddnsClientUpdate = undefined;
      this._ddnsConflictResolutionMode = undefined;
      this._ddnsDomain = undefined;
      this._ddnsEnabled = undefined;
      this._ddnsGenerateName = undefined;
      this._ddnsGeneratedPrefix = undefined;
      this._ddnsSendUpdates = undefined;
      this._ddnsTtlPercent = undefined;
      this._ddnsUpdateOnRenew = undefined;
      this._ddnsUseConflictResolution = undefined;
      this._ddnsZones.internalValue = undefined;
      this._dhcpConfig.internalValue = undefined;
      this._dhcpOptions.internalValue = undefined;
      this._dhcpOptionsV6.internalValue = undefined;
      this._gssTsigFallback = undefined;
      this._headerOptionFilename = undefined;
      this._headerOptionServerAddress = undefined;
      this._headerOptionServerName = undefined;
      this._hostnameRewriteChar = undefined;
      this._hostnameRewriteEnabled = undefined;
      this._hostnameRewriteRegex = undefined;
      this._inheritanceSources.internalValue = undefined;
      this._kerberosKdc = undefined;
      this._kerberosKeys.internalValue = undefined;
      this._kerberosRekeyInterval = undefined;
      this._kerberosRetryInterval = undefined;
      this._kerberosTkeyLifetime = undefined;
      this._kerberosTkeyProtocol = undefined;
      this._name = undefined;
      this._profileType = undefined;
      this._serverPrincipal = undefined;
      this._tags = undefined;
      this._vendorSpecificOptionOptionSpace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientPrincipal = value.clientPrincipal;
      this._comment = value.comment;
      this._ddnsClientUpdate = value.ddnsClientUpdate;
      this._ddnsConflictResolutionMode = value.ddnsConflictResolutionMode;
      this._ddnsDomain = value.ddnsDomain;
      this._ddnsEnabled = value.ddnsEnabled;
      this._ddnsGenerateName = value.ddnsGenerateName;
      this._ddnsGeneratedPrefix = value.ddnsGeneratedPrefix;
      this._ddnsSendUpdates = value.ddnsSendUpdates;
      this._ddnsTtlPercent = value.ddnsTtlPercent;
      this._ddnsUpdateOnRenew = value.ddnsUpdateOnRenew;
      this._ddnsUseConflictResolution = value.ddnsUseConflictResolution;
      this._ddnsZones.internalValue = value.ddnsZones;
      this._dhcpConfig.internalValue = value.dhcpConfig;
      this._dhcpOptions.internalValue = value.dhcpOptions;
      this._dhcpOptionsV6.internalValue = value.dhcpOptionsV6;
      this._gssTsigFallback = value.gssTsigFallback;
      this._headerOptionFilename = value.headerOptionFilename;
      this._headerOptionServerAddress = value.headerOptionServerAddress;
      this._headerOptionServerName = value.headerOptionServerName;
      this._hostnameRewriteChar = value.hostnameRewriteChar;
      this._hostnameRewriteEnabled = value.hostnameRewriteEnabled;
      this._hostnameRewriteRegex = value.hostnameRewriteRegex;
      this._inheritanceSources.internalValue = value.inheritanceSources;
      this._kerberosKdc = value.kerberosKdc;
      this._kerberosKeys.internalValue = value.kerberosKeys;
      this._kerberosRekeyInterval = value.kerberosRekeyInterval;
      this._kerberosRetryInterval = value.kerberosRetryInterval;
      this._kerberosTkeyLifetime = value.kerberosTkeyLifetime;
      this._kerberosTkeyProtocol = value.kerberosTkeyProtocol;
      this._name = value.name;
      this._profileType = value.profileType;
      this._serverPrincipal = value.serverPrincipal;
      this._tags = value.tags;
      this._vendorSpecificOptionOptionSpace = value.vendorSpecificOptionOptionSpace;
    }
  }

  // client_principal - computed: true, optional: true, required: false
  private _clientPrincipal?: string; 
  public get clientPrincipal() {
    return this.getStringAttribute('client_principal');
  }
  public set clientPrincipal(value: string) {
    this._clientPrincipal = value;
  }
  public resetClientPrincipal() {
    this._clientPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrincipalInput() {
    return this._clientPrincipal;
  }

  // comment - computed: true, optional: true, required: false
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // ddns_client_update - computed: true, optional: true, required: false
  private _ddnsClientUpdate?: string; 
  public get ddnsClientUpdate() {
    return this.getStringAttribute('ddns_client_update');
  }
  public set ddnsClientUpdate(value: string) {
    this._ddnsClientUpdate = value;
  }
  public resetDdnsClientUpdate() {
    this._ddnsClientUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsClientUpdateInput() {
    return this._ddnsClientUpdate;
  }

  // ddns_conflict_resolution_mode - computed: true, optional: true, required: false
  private _ddnsConflictResolutionMode?: string; 
  public get ddnsConflictResolutionMode() {
    return this.getStringAttribute('ddns_conflict_resolution_mode');
  }
  public set ddnsConflictResolutionMode(value: string) {
    this._ddnsConflictResolutionMode = value;
  }
  public resetDdnsConflictResolutionMode() {
    this._ddnsConflictResolutionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsConflictResolutionModeInput() {
    return this._ddnsConflictResolutionMode;
  }

  // ddns_domain - computed: true, optional: true, required: false
  private _ddnsDomain?: string; 
  public get ddnsDomain() {
    return this.getStringAttribute('ddns_domain');
  }
  public set ddnsDomain(value: string) {
    this._ddnsDomain = value;
  }
  public resetDdnsDomain() {
    this._ddnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsDomainInput() {
    return this._ddnsDomain;
  }

  // ddns_enabled - computed: true, optional: true, required: false
  private _ddnsEnabled?: boolean | cdktf.IResolvable; 
  public get ddnsEnabled() {
    return this.getBooleanAttribute('ddns_enabled');
  }
  public set ddnsEnabled(value: boolean | cdktf.IResolvable) {
    this._ddnsEnabled = value;
  }
  public resetDdnsEnabled() {
    this._ddnsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsEnabledInput() {
    return this._ddnsEnabled;
  }

  // ddns_generate_name - computed: true, optional: true, required: false
  private _ddnsGenerateName?: boolean | cdktf.IResolvable; 
  public get ddnsGenerateName() {
    return this.getBooleanAttribute('ddns_generate_name');
  }
  public set ddnsGenerateName(value: boolean | cdktf.IResolvable) {
    this._ddnsGenerateName = value;
  }
  public resetDdnsGenerateName() {
    this._ddnsGenerateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsGenerateNameInput() {
    return this._ddnsGenerateName;
  }

  // ddns_generated_prefix - computed: true, optional: true, required: false
  private _ddnsGeneratedPrefix?: string; 
  public get ddnsGeneratedPrefix() {
    return this.getStringAttribute('ddns_generated_prefix');
  }
  public set ddnsGeneratedPrefix(value: string) {
    this._ddnsGeneratedPrefix = value;
  }
  public resetDdnsGeneratedPrefix() {
    this._ddnsGeneratedPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsGeneratedPrefixInput() {
    return this._ddnsGeneratedPrefix;
  }

  // ddns_send_updates - computed: true, optional: true, required: false
  private _ddnsSendUpdates?: boolean | cdktf.IResolvable; 
  public get ddnsSendUpdates() {
    return this.getBooleanAttribute('ddns_send_updates');
  }
  public set ddnsSendUpdates(value: boolean | cdktf.IResolvable) {
    this._ddnsSendUpdates = value;
  }
  public resetDdnsSendUpdates() {
    this._ddnsSendUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsSendUpdatesInput() {
    return this._ddnsSendUpdates;
  }

  // ddns_ttl_percent - computed: true, optional: true, required: false
  private _ddnsTtlPercent?: number; 
  public get ddnsTtlPercent() {
    return this.getNumberAttribute('ddns_ttl_percent');
  }
  public set ddnsTtlPercent(value: number) {
    this._ddnsTtlPercent = value;
  }
  public resetDdnsTtlPercent() {
    this._ddnsTtlPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlPercentInput() {
    return this._ddnsTtlPercent;
  }

  // ddns_update_on_renew - computed: true, optional: true, required: false
  private _ddnsUpdateOnRenew?: boolean | cdktf.IResolvable; 
  public get ddnsUpdateOnRenew() {
    return this.getBooleanAttribute('ddns_update_on_renew');
  }
  public set ddnsUpdateOnRenew(value: boolean | cdktf.IResolvable) {
    this._ddnsUpdateOnRenew = value;
  }
  public resetDdnsUpdateOnRenew() {
    this._ddnsUpdateOnRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateOnRenewInput() {
    return this._ddnsUpdateOnRenew;
  }

  // ddns_use_conflict_resolution - computed: true, optional: true, required: false
  private _ddnsUseConflictResolution?: boolean | cdktf.IResolvable; 
  public get ddnsUseConflictResolution() {
    return this.getBooleanAttribute('ddns_use_conflict_resolution');
  }
  public set ddnsUseConflictResolution(value: boolean | cdktf.IResolvable) {
    this._ddnsUseConflictResolution = value;
  }
  public resetDdnsUseConflictResolution() {
    this._ddnsUseConflictResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUseConflictResolutionInput() {
    return this._ddnsUseConflictResolution;
  }

  // ddns_zones - computed: true, optional: true, required: false
  private _ddnsZones = new DataBloxoneDhcpServersResultsDdnsZonesList(this, "ddns_zones", false);
  public get ddnsZones() {
    return this._ddnsZones;
  }
  public putDdnsZones(value: DataBloxoneDhcpServersResultsDdnsZones[] | cdktf.IResolvable) {
    this._ddnsZones.internalValue = value;
  }
  public resetDdnsZones() {
    this._ddnsZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsZonesInput() {
    return this._ddnsZones.internalValue;
  }

  // dhcp_config - computed: true, optional: true, required: false
  private _dhcpConfig = new DataBloxoneDhcpServersResultsDhcpConfigOutputReference(this, "dhcp_config");
  public get dhcpConfig() {
    return this._dhcpConfig;
  }
  public putDhcpConfig(value: DataBloxoneDhcpServersResultsDhcpConfig) {
    this._dhcpConfig.internalValue = value;
  }
  public resetDhcpConfig() {
    this._dhcpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpConfigInput() {
    return this._dhcpConfig.internalValue;
  }

  // dhcp_options - computed: true, optional: true, required: false
  private _dhcpOptions = new DataBloxoneDhcpServersResultsDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: DataBloxoneDhcpServersResultsDhcpOptions[] | cdktf.IResolvable) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // dhcp_options_v6 - computed: true, optional: true, required: false
  private _dhcpOptionsV6 = new DataBloxoneDhcpServersResultsDhcpOptionsV6List(this, "dhcp_options_v6", false);
  public get dhcpOptionsV6() {
    return this._dhcpOptionsV6;
  }
  public putDhcpOptionsV6(value: DataBloxoneDhcpServersResultsDhcpOptionsV6[] | cdktf.IResolvable) {
    this._dhcpOptionsV6.internalValue = value;
  }
  public resetDhcpOptionsV6() {
    this._dhcpOptionsV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsV6Input() {
    return this._dhcpOptionsV6.internalValue;
  }

  // gss_tsig_fallback - computed: true, optional: true, required: false
  private _gssTsigFallback?: boolean | cdktf.IResolvable; 
  public get gssTsigFallback() {
    return this.getBooleanAttribute('gss_tsig_fallback');
  }
  public set gssTsigFallback(value: boolean | cdktf.IResolvable) {
    this._gssTsigFallback = value;
  }
  public resetGssTsigFallback() {
    this._gssTsigFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigFallbackInput() {
    return this._gssTsigFallback;
  }

  // header_option_filename - computed: true, optional: true, required: false
  private _headerOptionFilename?: string; 
  public get headerOptionFilename() {
    return this.getStringAttribute('header_option_filename');
  }
  public set headerOptionFilename(value: string) {
    this._headerOptionFilename = value;
  }
  public resetHeaderOptionFilename() {
    this._headerOptionFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionFilenameInput() {
    return this._headerOptionFilename;
  }

  // header_option_server_address - computed: true, optional: true, required: false
  private _headerOptionServerAddress?: string; 
  public get headerOptionServerAddress() {
    return this.getStringAttribute('header_option_server_address');
  }
  public set headerOptionServerAddress(value: string) {
    this._headerOptionServerAddress = value;
  }
  public resetHeaderOptionServerAddress() {
    this._headerOptionServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerAddressInput() {
    return this._headerOptionServerAddress;
  }

  // header_option_server_name - computed: true, optional: true, required: false
  private _headerOptionServerName?: string; 
  public get headerOptionServerName() {
    return this.getStringAttribute('header_option_server_name');
  }
  public set headerOptionServerName(value: string) {
    this._headerOptionServerName = value;
  }
  public resetHeaderOptionServerName() {
    this._headerOptionServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerNameInput() {
    return this._headerOptionServerName;
  }

  // hostname_rewrite_char - computed: true, optional: true, required: false
  private _hostnameRewriteChar?: string; 
  public get hostnameRewriteChar() {
    return this.getStringAttribute('hostname_rewrite_char');
  }
  public set hostnameRewriteChar(value: string) {
    this._hostnameRewriteChar = value;
  }
  public resetHostnameRewriteChar() {
    this._hostnameRewriteChar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteCharInput() {
    return this._hostnameRewriteChar;
  }

  // hostname_rewrite_enabled - computed: true, optional: true, required: false
  private _hostnameRewriteEnabled?: boolean | cdktf.IResolvable; 
  public get hostnameRewriteEnabled() {
    return this.getBooleanAttribute('hostname_rewrite_enabled');
  }
  public set hostnameRewriteEnabled(value: boolean | cdktf.IResolvable) {
    this._hostnameRewriteEnabled = value;
  }
  public resetHostnameRewriteEnabled() {
    this._hostnameRewriteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteEnabledInput() {
    return this._hostnameRewriteEnabled;
  }

  // hostname_rewrite_regex - computed: true, optional: true, required: false
  private _hostnameRewriteRegex?: string; 
  public get hostnameRewriteRegex() {
    return this.getStringAttribute('hostname_rewrite_regex');
  }
  public set hostnameRewriteRegex(value: string) {
    this._hostnameRewriteRegex = value;
  }
  public resetHostnameRewriteRegex() {
    this._hostnameRewriteRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteRegexInput() {
    return this._hostnameRewriteRegex;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inheritance_sources - computed: true, optional: true, required: false
  private _inheritanceSources = new DataBloxoneDhcpServersResultsInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: DataBloxoneDhcpServersResultsInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
  }

  // kerberos_kdc - computed: true, optional: true, required: false
  private _kerberosKdc?: string; 
  public get kerberosKdc() {
    return this.getStringAttribute('kerberos_kdc');
  }
  public set kerberosKdc(value: string) {
    this._kerberosKdc = value;
  }
  public resetKerberosKdc() {
    this._kerberosKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKdcInput() {
    return this._kerberosKdc;
  }

  // kerberos_keys - computed: true, optional: true, required: false
  private _kerberosKeys = new DataBloxoneDhcpServersResultsKerberosKeysList(this, "kerberos_keys", false);
  public get kerberosKeys() {
    return this._kerberosKeys;
  }
  public putKerberosKeys(value: DataBloxoneDhcpServersResultsKerberosKeys[] | cdktf.IResolvable) {
    this._kerberosKeys.internalValue = value;
  }
  public resetKerberosKeys() {
    this._kerberosKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeysInput() {
    return this._kerberosKeys.internalValue;
  }

  // kerberos_rekey_interval - computed: true, optional: true, required: false
  private _kerberosRekeyInterval?: number; 
  public get kerberosRekeyInterval() {
    return this.getNumberAttribute('kerberos_rekey_interval');
  }
  public set kerberosRekeyInterval(value: number) {
    this._kerberosRekeyInterval = value;
  }
  public resetKerberosRekeyInterval() {
    this._kerberosRekeyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRekeyIntervalInput() {
    return this._kerberosRekeyInterval;
  }

  // kerberos_retry_interval - computed: true, optional: true, required: false
  private _kerberosRetryInterval?: number; 
  public get kerberosRetryInterval() {
    return this.getNumberAttribute('kerberos_retry_interval');
  }
  public set kerberosRetryInterval(value: number) {
    this._kerberosRetryInterval = value;
  }
  public resetKerberosRetryInterval() {
    this._kerberosRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRetryIntervalInput() {
    return this._kerberosRetryInterval;
  }

  // kerberos_tkey_lifetime - computed: true, optional: true, required: false
  private _kerberosTkeyLifetime?: number; 
  public get kerberosTkeyLifetime() {
    return this.getNumberAttribute('kerberos_tkey_lifetime');
  }
  public set kerberosTkeyLifetime(value: number) {
    this._kerberosTkeyLifetime = value;
  }
  public resetKerberosTkeyLifetime() {
    this._kerberosTkeyLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosTkeyLifetimeInput() {
    return this._kerberosTkeyLifetime;
  }

  // kerberos_tkey_protocol - computed: true, optional: true, required: false
  private _kerberosTkeyProtocol?: string; 
  public get kerberosTkeyProtocol() {
    return this.getStringAttribute('kerberos_tkey_protocol');
  }
  public set kerberosTkeyProtocol(value: string) {
    this._kerberosTkeyProtocol = value;
  }
  public resetKerberosTkeyProtocol() {
    this._kerberosTkeyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosTkeyProtocolInput() {
    return this._kerberosTkeyProtocol;
  }

  // name - computed: true, optional: false, required: true
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

  // profile_type - computed: true, optional: true, required: false
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  public resetProfileType() {
    this._profileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }

  // server_principal - computed: true, optional: true, required: false
  private _serverPrincipal?: string; 
  public get serverPrincipal() {
    return this.getStringAttribute('server_principal');
  }
  public set serverPrincipal(value: string) {
    this._serverPrincipal = value;
  }
  public resetServerPrincipal() {
    this._serverPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPrincipalInput() {
    return this._serverPrincipal;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vendor_specific_option_option_space - computed: true, optional: true, required: false
  private _vendorSpecificOptionOptionSpace?: string; 
  public get vendorSpecificOptionOptionSpace() {
    return this.getStringAttribute('vendor_specific_option_option_space');
  }
  public set vendorSpecificOptionOptionSpace(value: string) {
    this._vendorSpecificOptionOptionSpace = value;
  }
  public resetVendorSpecificOptionOptionSpace() {
    this._vendorSpecificOptionOptionSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorSpecificOptionOptionSpaceInput() {
    return this._vendorSpecificOptionOptionSpace;
  }
}

export class DataBloxoneDhcpServersResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDhcpServersResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDhcpServersResultsOutputReference {
    return new DataBloxoneDhcpServersResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers bloxone_dhcp_servers}
*/
export class DataBloxoneDhcpServers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dhcp_servers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneDhcpServers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneDhcpServers to import
  * @param importFromId The id of the existing DataBloxoneDhcpServers that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneDhcpServers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dhcp_servers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_servers bloxone_dhcp_servers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneDhcpServersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneDhcpServersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dhcp_servers',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3',
        providerVersionConstraint: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._tagFilters = config.tagFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataBloxoneDhcpServersResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters?: { [key: string]: string }; 
  public get tagFilters() {
    return this.getStringMapAttribute('tag_filters');
  }
  public set tagFilters(value: { [key: string]: string }) {
    this._tagFilters = value;
  }
  public resetTagFilters() {
    this._tagFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      tag_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagFilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tag_filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagFilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
