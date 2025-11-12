// https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProxyHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Id of the access list used by the proxy host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#access_list_id ProxyHost#access_list_id}
  */
  readonly accessListId?: number;
  /**
  * The advanced configuration used by the proxy host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#advanced_config ProxyHost#advanced_config}
  */
  readonly advancedConfig?: string;
  /**
  * Whether websocket upgrades are allowed for the proxy host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#allow_websocket_upgrade ProxyHost#allow_websocket_upgrade}
  */
  readonly allowWebsocketUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Whether exploits are blocked for the proxy host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#block_exploits ProxyHost#block_exploits}
  */
  readonly blockExploits?: boolean | cdktf.IResolvable;
  /**
  * Whether caching is enabled for the proxy host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#caching_enabled ProxyHost#caching_enabled}
  */
  readonly cachingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Id of the certificate used by the proxy host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#certificate_id ProxyHost#certificate_id}
  */
  readonly certificateId?: number;
  /**
  * The domain names associated with the proxy host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#domain_names ProxyHost#domain_names}
  */
  readonly domainNames: string[];
  /**
  * Whether the proxy host is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#enabled ProxyHost#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The host used to forward requests to the proxy host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#forward_host ProxyHost#forward_host}
  */
  readonly forwardHost: string;
  /**
  * The port used to forward requests to the proxy host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#forward_port ProxyHost#forward_port}
  */
  readonly forwardPort: number;
  /**
  * The scheme used to forward requests to the proxy host. Can be either `http` or `https`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#forward_scheme ProxyHost#forward_scheme}
  */
  readonly forwardScheme: string;
  /**
  * Whether HSTS is enabled for the proxy host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#hsts_enabled ProxyHost#hsts_enabled}
  */
  readonly hstsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether HSTS is enabled for subdomains of the proxy host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#hsts_subdomains ProxyHost#hsts_subdomains}
  */
  readonly hstsSubdomains?: boolean | cdktf.IResolvable;
  /**
  * Whether HTTP/2 is supported for the proxy host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#http2_support ProxyHost#http2_support}
  */
  readonly http2Support?: boolean | cdktf.IResolvable;
  /**
  * The locations associated with the proxy host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#locations ProxyHost#locations}
  */
  readonly locations?: ProxyHostLocations[] | cdktf.IResolvable;
  /**
  * Whether SSL is forced for the proxy host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#ssl_forced ProxyHost#ssl_forced}
  */
  readonly sslForced?: boolean | cdktf.IResolvable;
}
export interface ProxyHostLocations {
  /**
  * The advanced configuration used by the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#advanced_config ProxyHost#advanced_config}
  */
  readonly advancedConfig?: string;
  /**
  * The host used to forward requests to the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#forward_host ProxyHost#forward_host}
  */
  readonly forwardHost: string;
  /**
  * The port used to forward requests to the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#forward_port ProxyHost#forward_port}
  */
  readonly forwardPort: number;
  /**
  * The scheme used to forward requests to the location. Can be either `http` or `https`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#forward_scheme ProxyHost#forward_scheme}
  */
  readonly forwardScheme: string;
  /**
  * The path associated with the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#path ProxyHost#path}
  */
  readonly path: string;
}

export function proxyHostLocationsToTerraform(struct?: ProxyHostLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_config: cdktf.stringToTerraform(struct!.advancedConfig),
    forward_host: cdktf.stringToTerraform(struct!.forwardHost),
    forward_port: cdktf.numberToTerraform(struct!.forwardPort),
    forward_scheme: cdktf.stringToTerraform(struct!.forwardScheme),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function proxyHostLocationsToHclTerraform(struct?: ProxyHostLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_config: {
      value: cdktf.stringToHclTerraform(struct!.advancedConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_host: {
      value: cdktf.stringToHclTerraform(struct!.forwardHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_port: {
      value: cdktf.numberToHclTerraform(struct!.forwardPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_scheme: {
      value: cdktf.stringToHclTerraform(struct!.forwardScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProxyHostLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProxyHostLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedConfig = this._advancedConfig;
    }
    if (this._forwardHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardHost = this._forwardHost;
    }
    if (this._forwardPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardPort = this._forwardPort;
    }
    if (this._forwardScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardScheme = this._forwardScheme;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProxyHostLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedConfig = undefined;
      this._forwardHost = undefined;
      this._forwardPort = undefined;
      this._forwardScheme = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedConfig = value.advancedConfig;
      this._forwardHost = value.forwardHost;
      this._forwardPort = value.forwardPort;
      this._forwardScheme = value.forwardScheme;
      this._path = value.path;
    }
  }

  // advanced_config - computed: true, optional: true, required: false
  private _advancedConfig?: string; 
  public get advancedConfig() {
    return this.getStringAttribute('advanced_config');
  }
  public set advancedConfig(value: string) {
    this._advancedConfig = value;
  }
  public resetAdvancedConfig() {
    this._advancedConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigInput() {
    return this._advancedConfig;
  }

  // forward_host - computed: true, optional: false, required: true
  private _forwardHost?: string; 
  public get forwardHost() {
    return this.getStringAttribute('forward_host');
  }
  public set forwardHost(value: string) {
    this._forwardHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHostInput() {
    return this._forwardHost;
  }

  // forward_port - computed: true, optional: false, required: true
  private _forwardPort?: number; 
  public get forwardPort() {
    return this.getNumberAttribute('forward_port');
  }
  public set forwardPort(value: number) {
    this._forwardPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardPortInput() {
    return this._forwardPort;
  }

  // forward_scheme - computed: true, optional: false, required: true
  private _forwardScheme?: string; 
  public get forwardScheme() {
    return this.getStringAttribute('forward_scheme');
  }
  public set forwardScheme(value: string) {
    this._forwardScheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardSchemeInput() {
    return this._forwardScheme;
  }

  // path - computed: true, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class ProxyHostLocationsList extends cdktf.ComplexList {
  public internalValue? : ProxyHostLocations[] | cdktf.IResolvable

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
  public get(index: number): ProxyHostLocationsOutputReference {
    return new ProxyHostLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host nginxproxymanager_proxy_host}
*/
export class ProxyHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nginxproxymanager_proxy_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProxyHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProxyHost to import
  * @param importFromId The id of the existing ProxyHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProxyHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nginxproxymanager_proxy_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/proxy_host nginxproxymanager_proxy_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProxyHostConfig
  */
  public constructor(scope: Construct, id: string, config: ProxyHostConfig) {
    super(scope, id, {
      terraformResourceType: 'nginxproxymanager_proxy_host',
      terraformGeneratorMetadata: {
        providerName: 'nginxproxymanager',
        providerVersion: '1.2.2',
        providerVersionConstraint: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessListId = config.accessListId;
    this._advancedConfig = config.advancedConfig;
    this._allowWebsocketUpgrade = config.allowWebsocketUpgrade;
    this._blockExploits = config.blockExploits;
    this._cachingEnabled = config.cachingEnabled;
    this._certificateId = config.certificateId;
    this._domainNames = config.domainNames;
    this._enabled = config.enabled;
    this._forwardHost = config.forwardHost;
    this._forwardPort = config.forwardPort;
    this._forwardScheme = config.forwardScheme;
    this._hstsEnabled = config.hstsEnabled;
    this._hstsSubdomains = config.hstsSubdomains;
    this._http2Support = config.http2Support;
    this._locations.internalValue = config.locations;
    this._sslForced = config.sslForced;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_list_id - computed: false, optional: true, required: false
  private _accessListId?: number; 
  public get accessListId() {
    return this.getNumberAttribute('access_list_id');
  }
  public set accessListId(value: number) {
    this._accessListId = value;
  }
  public resetAccessListId() {
    this._accessListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListIdInput() {
    return this._accessListId;
  }

  // advanced_config - computed: true, optional: true, required: false
  private _advancedConfig?: string; 
  public get advancedConfig() {
    return this.getStringAttribute('advanced_config');
  }
  public set advancedConfig(value: string) {
    this._advancedConfig = value;
  }
  public resetAdvancedConfig() {
    this._advancedConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigInput() {
    return this._advancedConfig;
  }

  // allow_websocket_upgrade - computed: true, optional: true, required: false
  private _allowWebsocketUpgrade?: boolean | cdktf.IResolvable; 
  public get allowWebsocketUpgrade() {
    return this.getBooleanAttribute('allow_websocket_upgrade');
  }
  public set allowWebsocketUpgrade(value: boolean | cdktf.IResolvable) {
    this._allowWebsocketUpgrade = value;
  }
  public resetAllowWebsocketUpgrade() {
    this._allowWebsocketUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWebsocketUpgradeInput() {
    return this._allowWebsocketUpgrade;
  }

  // block_exploits - computed: true, optional: true, required: false
  private _blockExploits?: boolean | cdktf.IResolvable; 
  public get blockExploits() {
    return this.getBooleanAttribute('block_exploits');
  }
  public set blockExploits(value: boolean | cdktf.IResolvable) {
    this._blockExploits = value;
  }
  public resetBlockExploits() {
    this._blockExploits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockExploitsInput() {
    return this._blockExploits;
  }

  // caching_enabled - computed: true, optional: true, required: false
  private _cachingEnabled?: boolean | cdktf.IResolvable; 
  public get cachingEnabled() {
    return this.getBooleanAttribute('caching_enabled');
  }
  public set cachingEnabled(value: boolean | cdktf.IResolvable) {
    this._cachingEnabled = value;
  }
  public resetCachingEnabled() {
    this._cachingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingEnabledInput() {
    return this._cachingEnabled;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: number; 
  public get certificateId() {
    return this.getNumberAttribute('certificate_id');
  }
  public set certificateId(value: number) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // domain_names - computed: false, optional: false, required: true
  private _domainNames?: string[]; 
  public get domainNames() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_names'));
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // enabled - computed: true, optional: true, required: false
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

  // forward_host - computed: false, optional: false, required: true
  private _forwardHost?: string; 
  public get forwardHost() {
    return this.getStringAttribute('forward_host');
  }
  public set forwardHost(value: string) {
    this._forwardHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHostInput() {
    return this._forwardHost;
  }

  // forward_port - computed: false, optional: false, required: true
  private _forwardPort?: number; 
  public get forwardPort() {
    return this.getNumberAttribute('forward_port');
  }
  public set forwardPort(value: number) {
    this._forwardPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardPortInput() {
    return this._forwardPort;
  }

  // forward_scheme - computed: false, optional: false, required: true
  private _forwardScheme?: string; 
  public get forwardScheme() {
    return this.getStringAttribute('forward_scheme');
  }
  public set forwardScheme(value: string) {
    this._forwardScheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardSchemeInput() {
    return this._forwardScheme;
  }

  // hsts_enabled - computed: true, optional: true, required: false
  private _hstsEnabled?: boolean | cdktf.IResolvable; 
  public get hstsEnabled() {
    return this.getBooleanAttribute('hsts_enabled');
  }
  public set hstsEnabled(value: boolean | cdktf.IResolvable) {
    this._hstsEnabled = value;
  }
  public resetHstsEnabled() {
    this._hstsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsEnabledInput() {
    return this._hstsEnabled;
  }

  // hsts_subdomains - computed: true, optional: true, required: false
  private _hstsSubdomains?: boolean | cdktf.IResolvable; 
  public get hstsSubdomains() {
    return this.getBooleanAttribute('hsts_subdomains');
  }
  public set hstsSubdomains(value: boolean | cdktf.IResolvable) {
    this._hstsSubdomains = value;
  }
  public resetHstsSubdomains() {
    this._hstsSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsSubdomainsInput() {
    return this._hstsSubdomains;
  }

  // http2_support - computed: true, optional: true, required: false
  private _http2Support?: boolean | cdktf.IResolvable; 
  public get http2Support() {
    return this.getBooleanAttribute('http2_support');
  }
  public set http2Support(value: boolean | cdktf.IResolvable) {
    this._http2Support = value;
  }
  public resetHttp2Support() {
    this._http2Support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2SupportInput() {
    return this._http2Support;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // locations - computed: true, optional: true, required: false
  private _locations = new ProxyHostLocationsList(this, "locations", true);
  public get locations() {
    return this._locations;
  }
  public putLocations(value: ProxyHostLocations[] | cdktf.IResolvable) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new cdktf.StringMap(this, "meta");
  public get meta() {
    return this._meta;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // owner_user_id - computed: true, optional: false, required: false
  public get ownerUserId() {
    return this.getNumberAttribute('owner_user_id');
  }

  // ssl_forced - computed: true, optional: true, required: false
  private _sslForced?: boolean | cdktf.IResolvable; 
  public get sslForced() {
    return this.getBooleanAttribute('ssl_forced');
  }
  public set sslForced(value: boolean | cdktf.IResolvable) {
    this._sslForced = value;
  }
  public resetSslForced() {
    this._sslForced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslForcedInput() {
    return this._sslForced;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_list_id: cdktf.numberToTerraform(this._accessListId),
      advanced_config: cdktf.stringToTerraform(this._advancedConfig),
      allow_websocket_upgrade: cdktf.booleanToTerraform(this._allowWebsocketUpgrade),
      block_exploits: cdktf.booleanToTerraform(this._blockExploits),
      caching_enabled: cdktf.booleanToTerraform(this._cachingEnabled),
      certificate_id: cdktf.numberToTerraform(this._certificateId),
      domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNames),
      enabled: cdktf.booleanToTerraform(this._enabled),
      forward_host: cdktf.stringToTerraform(this._forwardHost),
      forward_port: cdktf.numberToTerraform(this._forwardPort),
      forward_scheme: cdktf.stringToTerraform(this._forwardScheme),
      hsts_enabled: cdktf.booleanToTerraform(this._hstsEnabled),
      hsts_subdomains: cdktf.booleanToTerraform(this._hstsSubdomains),
      http2_support: cdktf.booleanToTerraform(this._http2Support),
      locations: cdktf.listMapper(proxyHostLocationsToTerraform, false)(this._locations.internalValue),
      ssl_forced: cdktf.booleanToTerraform(this._sslForced),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_list_id: {
        value: cdktf.numberToHclTerraform(this._accessListId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      advanced_config: {
        value: cdktf.stringToHclTerraform(this._advancedConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_websocket_upgrade: {
        value: cdktf.booleanToHclTerraform(this._allowWebsocketUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_exploits: {
        value: cdktf.booleanToHclTerraform(this._blockExploits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      caching_enabled: {
        value: cdktf.booleanToHclTerraform(this._cachingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_id: {
        value: cdktf.numberToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_host: {
        value: cdktf.stringToHclTerraform(this._forwardHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_port: {
        value: cdktf.numberToHclTerraform(this._forwardPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_scheme: {
        value: cdktf.stringToHclTerraform(this._forwardScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsts_enabled: {
        value: cdktf.booleanToHclTerraform(this._hstsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hsts_subdomains: {
        value: cdktf.booleanToHclTerraform(this._hstsSubdomains),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http2_support: {
        value: cdktf.booleanToHclTerraform(this._http2Support),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      locations: {
        value: cdktf.listMapperHcl(proxyHostLocationsToHclTerraform, false)(this._locations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProxyHostLocationsList",
      },
      ssl_forced: {
        value: cdktf.booleanToHclTerraform(this._sslForced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
