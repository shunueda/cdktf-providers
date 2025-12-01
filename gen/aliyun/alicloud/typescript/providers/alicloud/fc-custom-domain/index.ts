// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FcCustomDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain#domain_name FcCustomDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain#id FcCustomDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain#protocol FcCustomDomain#protocol}
  */
  readonly protocol: string;
  /**
  * cert_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain#cert_config FcCustomDomain#cert_config}
  */
  readonly certConfig?: FcCustomDomainCertConfig;
  /**
  * route_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain#route_config FcCustomDomain#route_config}
  */
  readonly routeConfig?: FcCustomDomainRouteConfig[] | cdktf.IResolvable;
}
export interface FcCustomDomainCertConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain#cert_name FcCustomDomain#cert_name}
  */
  readonly certName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain#certificate FcCustomDomain#certificate}
  */
  readonly certificate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain#private_key FcCustomDomain#private_key}
  */
  readonly privateKey: string;
}

export function fcCustomDomainCertConfigToTerraform(struct?: FcCustomDomainCertConfigOutputReference | FcCustomDomainCertConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_name: cdktf.stringToTerraform(struct!.certName),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function fcCustomDomainCertConfigToHclTerraform(struct?: FcCustomDomainCertConfigOutputReference | FcCustomDomainCertConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_name: {
      value: cdktf.stringToHclTerraform(struct!.certName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FcCustomDomainCertConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FcCustomDomainCertConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certName = this._certName;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FcCustomDomainCertConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certName = undefined;
      this._certificate = undefined;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certName = value.certName;
      this._certificate = value.certificate;
      this._privateKey = value.privateKey;
    }
  }

  // cert_name - computed: false, optional: false, required: true
  private _certName?: string; 
  public get certName() {
    return this.getStringAttribute('cert_name');
  }
  public set certName(value: string) {
    this._certName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certNameInput() {
    return this._certName;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface FcCustomDomainRouteConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain#function_name FcCustomDomain#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain#methods FcCustomDomain#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain#path FcCustomDomain#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain#qualifier FcCustomDomain#qualifier}
  */
  readonly qualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain#service_name FcCustomDomain#service_name}
  */
  readonly serviceName: string;
}

export function fcCustomDomainRouteConfigToTerraform(struct?: FcCustomDomainRouteConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function fcCustomDomainRouteConfigToHclTerraform(struct?: FcCustomDomainRouteConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier: {
      value: cdktf.stringToHclTerraform(struct!.qualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FcCustomDomainRouteConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FcCustomDomainRouteConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._qualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FcCustomDomainRouteConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionName = undefined;
      this._methods = undefined;
      this._path = undefined;
      this._qualifier = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionName = value.functionName;
      this._methods = value.methods;
      this._path = value.path;
      this._qualifier = value.qualifier;
      this._serviceName = value.serviceName;
    }
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // path - computed: false, optional: false, required: true
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

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
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
}

export class FcCustomDomainRouteConfigList extends cdktf.ComplexList {
  public internalValue? : FcCustomDomainRouteConfig[] | cdktf.IResolvable

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
  public get(index: number): FcCustomDomainRouteConfigOutputReference {
    return new FcCustomDomainRouteConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain alicloud_fc_custom_domain}
*/
export class FcCustomDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_fc_custom_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FcCustomDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FcCustomDomain to import
  * @param importFromId The id of the existing FcCustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FcCustomDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_fc_custom_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fc_custom_domain alicloud_fc_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FcCustomDomainConfig
  */
  public constructor(scope: Construct, id: string, config: FcCustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_fc_custom_domain',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainName = config.domainName;
    this._id = config.id;
    this._protocol = config.protocol;
    this._certConfig.internalValue = config.certConfig;
    this._routeConfig.internalValue = config.routeConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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

  // cert_config - computed: false, optional: true, required: false
  private _certConfig = new FcCustomDomainCertConfigOutputReference(this, "cert_config");
  public get certConfig() {
    return this._certConfig;
  }
  public putCertConfig(value: FcCustomDomainCertConfig) {
    this._certConfig.internalValue = value;
  }
  public resetCertConfig() {
    this._certConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certConfigInput() {
    return this._certConfig.internalValue;
  }

  // route_config - computed: false, optional: true, required: false
  private _routeConfig = new FcCustomDomainRouteConfigList(this, "route_config", false);
  public get routeConfig() {
    return this._routeConfig;
  }
  public putRouteConfig(value: FcCustomDomainRouteConfig[] | cdktf.IResolvable) {
    this._routeConfig.internalValue = value;
  }
  public resetRouteConfig() {
    this._routeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeConfigInput() {
    return this._routeConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.stringToTerraform(this._protocol),
      cert_config: fcCustomDomainCertConfigToTerraform(this._certConfig.internalValue),
      route_config: cdktf.listMapper(fcCustomDomainRouteConfigToTerraform, true)(this._routeConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_config: {
        value: fcCustomDomainCertConfigToHclTerraform(this._certConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FcCustomDomainCertConfigList",
      },
      route_config: {
        value: cdktf.listMapperHcl(fcCustomDomainRouteConfigToHclTerraform, true)(this._routeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FcCustomDomainRouteConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
