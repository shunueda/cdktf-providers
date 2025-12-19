// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_custom_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayCustomDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique certificate ID of the custom domain name to be bound. You can choose to upload for the `protocol` attribute value `https` or `http&https`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_custom_domain#certificate_id ApiGatewayCustomDomain#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Default domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_custom_domain#default_domain ApiGatewayCustomDomain#default_domain}
  */
  readonly defaultDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_custom_domain#id ApiGatewayCustomDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the default path mapping is used. The default value is `true`. When it is `false`, it means custom path mapping. In this case, the `path_mappings` attribute is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_custom_domain#is_default_mapping ApiGatewayCustomDomain#is_default_mapping}
  */
  readonly isDefaultMapping?: boolean | cdktf.IResolvable;
  /**
  * Whether to force HTTP requests to jump to HTTPS, default to false. When the parameter is true, the API gateway will redirect all HTTP protocol requests using the custom domain name to the HTTPS protocol for forwarding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_custom_domain#is_forced_https ApiGatewayCustomDomain#is_forced_https}
  */
  readonly isForcedHttps?: boolean | cdktf.IResolvable;
  /**
  * Network type. Valid values: `OUTER`, `INNER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_custom_domain#net_type ApiGatewayCustomDomain#net_type}
  */
  readonly netType: string;
  /**
  * Custom domain name path mapping. The data format is: `path#environment`. Optional values for the environment are `test`, `prepub`, and `release`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_custom_domain#path_mappings ApiGatewayCustomDomain#path_mappings}
  */
  readonly pathMappings?: string[];
  /**
  * Protocol supported by service. Valid values: `http`, `https`, `http&https`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_custom_domain#protocol ApiGatewayCustomDomain#protocol}
  */
  readonly protocol: string;
  /**
  * Unique service ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_custom_domain#service_id ApiGatewayCustomDomain#service_id}
  */
  readonly serviceId: string;
  /**
  * Custom domain name to be bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_custom_domain#sub_domain ApiGatewayCustomDomain#sub_domain}
  */
  readonly subDomain: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_custom_domain tencentcloud_api_gateway_custom_domain}
*/
export class ApiGatewayCustomDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_custom_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayCustomDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayCustomDomain to import
  * @param importFromId The id of the existing ApiGatewayCustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_custom_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayCustomDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_custom_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_custom_domain tencentcloud_api_gateway_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayCustomDomainConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayCustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_custom_domain',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._defaultDomain = config.defaultDomain;
    this._id = config.id;
    this._isDefaultMapping = config.isDefaultMapping;
    this._isForcedHttps = config.isForcedHttps;
    this._netType = config.netType;
    this._pathMappings = config.pathMappings;
    this._protocol = config.protocol;
    this._serviceId = config.serviceId;
    this._subDomain = config.subDomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // default_domain - computed: false, optional: false, required: true
  private _defaultDomain?: string; 
  public get defaultDomain() {
    return this.getStringAttribute('default_domain');
  }
  public set defaultDomain(value: string) {
    this._defaultDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDomainInput() {
    return this._defaultDomain;
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

  // is_default_mapping - computed: false, optional: true, required: false
  private _isDefaultMapping?: boolean | cdktf.IResolvable; 
  public get isDefaultMapping() {
    return this.getBooleanAttribute('is_default_mapping');
  }
  public set isDefaultMapping(value: boolean | cdktf.IResolvable) {
    this._isDefaultMapping = value;
  }
  public resetIsDefaultMapping() {
    this._isDefaultMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultMappingInput() {
    return this._isDefaultMapping;
  }

  // is_forced_https - computed: false, optional: true, required: false
  private _isForcedHttps?: boolean | cdktf.IResolvable; 
  public get isForcedHttps() {
    return this.getBooleanAttribute('is_forced_https');
  }
  public set isForcedHttps(value: boolean | cdktf.IResolvable) {
    this._isForcedHttps = value;
  }
  public resetIsForcedHttps() {
    this._isForcedHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isForcedHttpsInput() {
    return this._isForcedHttps;
  }

  // net_type - computed: false, optional: false, required: true
  private _netType?: string; 
  public get netType() {
    return this.getStringAttribute('net_type');
  }
  public set netType(value: string) {
    this._netType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netTypeInput() {
    return this._netType;
  }

  // path_mappings - computed: true, optional: true, required: false
  private _pathMappings?: string[]; 
  public get pathMappings() {
    return cdktf.Fn.tolist(this.getListAttribute('path_mappings'));
  }
  public set pathMappings(value: string[]) {
    this._pathMappings = value;
  }
  public resetPathMappings() {
    this._pathMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMappingsInput() {
    return this._pathMappings;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // sub_domain - computed: false, optional: false, required: true
  private _subDomain?: string; 
  public get subDomain() {
    return this.getStringAttribute('sub_domain');
  }
  public set subDomain(value: string) {
    this._subDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainInput() {
    return this._subDomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      default_domain: cdktf.stringToTerraform(this._defaultDomain),
      id: cdktf.stringToTerraform(this._id),
      is_default_mapping: cdktf.booleanToTerraform(this._isDefaultMapping),
      is_forced_https: cdktf.booleanToTerraform(this._isForcedHttps),
      net_type: cdktf.stringToTerraform(this._netType),
      path_mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pathMappings),
      protocol: cdktf.stringToTerraform(this._protocol),
      service_id: cdktf.stringToTerraform(this._serviceId),
      sub_domain: cdktf.stringToTerraform(this._subDomain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_domain: {
        value: cdktf.stringToHclTerraform(this._defaultDomain),
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
      is_default_mapping: {
        value: cdktf.booleanToHclTerraform(this._isDefaultMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_forced_https: {
        value: cdktf.booleanToHclTerraform(this._isForcedHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      net_type: {
        value: cdktf.stringToHclTerraform(this._netType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_mappings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pathMappings),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_domain: {
        value: cdktf.stringToHclTerraform(this._subDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
