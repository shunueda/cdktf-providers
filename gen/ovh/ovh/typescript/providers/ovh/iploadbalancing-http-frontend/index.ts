// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IploadbalancingHttpFrontendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend#allowed_source IploadbalancingHttpFrontend#allowed_source}
  */
  readonly allowedSource?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend#dedicated_ipfo IploadbalancingHttpFrontend#dedicated_ipfo}
  */
  readonly dedicatedIpfo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend#default_farm_id IploadbalancingHttpFrontend#default_farm_id}
  */
  readonly defaultFarmId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend#default_ssl_id IploadbalancingHttpFrontend#default_ssl_id}
  */
  readonly defaultSslId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend#disabled IploadbalancingHttpFrontend#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend#display_name IploadbalancingHttpFrontend#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend#hsts IploadbalancingHttpFrontend#hsts}
  */
  readonly hsts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend#http_header IploadbalancingHttpFrontend#http_header}
  */
  readonly httpHeader?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend#id IploadbalancingHttpFrontend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend#port IploadbalancingHttpFrontend#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend#redirect_location IploadbalancingHttpFrontend#redirect_location}
  */
  readonly redirectLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend#service_name IploadbalancingHttpFrontend#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend#ssl IploadbalancingHttpFrontend#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend#zone IploadbalancingHttpFrontend#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend ovh_iploadbalancing_http_frontend}
*/
export class IploadbalancingHttpFrontend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_iploadbalancing_http_frontend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IploadbalancingHttpFrontend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IploadbalancingHttpFrontend to import
  * @param importFromId The id of the existing IploadbalancingHttpFrontend that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IploadbalancingHttpFrontend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_iploadbalancing_http_frontend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_frontend ovh_iploadbalancing_http_frontend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IploadbalancingHttpFrontendConfig
  */
  public constructor(scope: Construct, id: string, config: IploadbalancingHttpFrontendConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_iploadbalancing_http_frontend',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedSource = config.allowedSource;
    this._dedicatedIpfo = config.dedicatedIpfo;
    this._defaultFarmId = config.defaultFarmId;
    this._defaultSslId = config.defaultSslId;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._hsts = config.hsts;
    this._httpHeader = config.httpHeader;
    this._id = config.id;
    this._port = config.port;
    this._redirectLocation = config.redirectLocation;
    this._serviceName = config.serviceName;
    this._ssl = config.ssl;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_source - computed: false, optional: true, required: false
  private _allowedSource?: string[]; 
  public get allowedSource() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_source'));
  }
  public set allowedSource(value: string[]) {
    this._allowedSource = value;
  }
  public resetAllowedSource() {
    this._allowedSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSourceInput() {
    return this._allowedSource;
  }

  // dedicated_ipfo - computed: false, optional: true, required: false
  private _dedicatedIpfo?: string[]; 
  public get dedicatedIpfo() {
    return cdktf.Fn.tolist(this.getListAttribute('dedicated_ipfo'));
  }
  public set dedicatedIpfo(value: string[]) {
    this._dedicatedIpfo = value;
  }
  public resetDedicatedIpfo() {
    this._dedicatedIpfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedIpfoInput() {
    return this._dedicatedIpfo;
  }

  // default_farm_id - computed: true, optional: true, required: false
  private _defaultFarmId?: number; 
  public get defaultFarmId() {
    return this.getNumberAttribute('default_farm_id');
  }
  public set defaultFarmId(value: number) {
    this._defaultFarmId = value;
  }
  public resetDefaultFarmId() {
    this._defaultFarmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFarmIdInput() {
    return this._defaultFarmId;
  }

  // default_ssl_id - computed: true, optional: true, required: false
  private _defaultSslId?: number; 
  public get defaultSslId() {
    return this.getNumberAttribute('default_ssl_id');
  }
  public set defaultSslId(value: number) {
    this._defaultSslId = value;
  }
  public resetDefaultSslId() {
    this._defaultSslId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSslIdInput() {
    return this._defaultSslId;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // hsts - computed: false, optional: true, required: false
  private _hsts?: boolean | cdktf.IResolvable; 
  public get hsts() {
    return this.getBooleanAttribute('hsts');
  }
  public set hsts(value: boolean | cdktf.IResolvable) {
    this._hsts = value;
  }
  public resetHsts() {
    this._hsts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsInput() {
    return this._hsts;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: string[]; 
  public get httpHeader() {
    return this.getListAttribute('http_header');
  }
  public set httpHeader(value: string[]) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // redirect_location - computed: false, optional: true, required: false
  private _redirectLocation?: string; 
  public get redirectLocation() {
    return this.getStringAttribute('redirect_location');
  }
  public set redirectLocation(value: string) {
    this._redirectLocation = value;
  }
  public resetRedirectLocation() {
    this._redirectLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectLocationInput() {
    return this._redirectLocation;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedSource),
      dedicated_ipfo: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dedicatedIpfo),
      default_farm_id: cdktf.numberToTerraform(this._defaultFarmId),
      default_ssl_id: cdktf.numberToTerraform(this._defaultSslId),
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      hsts: cdktf.booleanToTerraform(this._hsts),
      http_header: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpHeader),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.stringToTerraform(this._port),
      redirect_location: cdktf.stringToTerraform(this._redirectLocation),
      service_name: cdktf.stringToTerraform(this._serviceName),
      ssl: cdktf.booleanToTerraform(this._ssl),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_source: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedSource),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dedicated_ipfo: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dedicatedIpfo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_farm_id: {
        value: cdktf.numberToHclTerraform(this._defaultFarmId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_ssl_id: {
        value: cdktf.numberToHclTerraform(this._defaultSslId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsts: {
        value: cdktf.booleanToHclTerraform(this._hsts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_header: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpHeader),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_location: {
        value: cdktf.stringToHclTerraform(this._redirectLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl: {
        value: cdktf.booleanToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
