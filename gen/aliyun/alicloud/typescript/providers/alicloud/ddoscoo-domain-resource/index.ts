// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdoscooDomainResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#cert DdoscooDomainResource#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#cert_identifier DdoscooDomainResource#cert_identifier}
  */
  readonly certIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#cert_name DdoscooDomainResource#cert_name}
  */
  readonly certName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#cert_region DdoscooDomainResource#cert_region}
  */
  readonly certRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#custom_headers DdoscooDomainResource#custom_headers}
  */
  readonly customHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#domain DdoscooDomainResource#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#https_ext DdoscooDomainResource#https_ext}
  */
  readonly httpsExt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#id DdoscooDomainResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#instance_ids DdoscooDomainResource#instance_ids}
  */
  readonly instanceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#key DdoscooDomainResource#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#ocsp_enabled DdoscooDomainResource#ocsp_enabled}
  */
  readonly ocspEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#real_servers DdoscooDomainResource#real_servers}
  */
  readonly realServers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#rs_type DdoscooDomainResource#rs_type}
  */
  readonly rsType: number;
  /**
  * proxy_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#proxy_types DdoscooDomainResource#proxy_types}
  */
  readonly proxyTypes: DdoscooDomainResourceProxyTypes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#timeouts DdoscooDomainResource#timeouts}
  */
  readonly timeouts?: DdoscooDomainResourceTimeouts;
}
export interface DdoscooDomainResourceProxyTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#proxy_ports DdoscooDomainResource#proxy_ports}
  */
  readonly proxyPorts: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#proxy_type DdoscooDomainResource#proxy_type}
  */
  readonly proxyType?: string;
}

export function ddoscooDomainResourceProxyTypesToTerraform(struct?: DdoscooDomainResourceProxyTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.proxyPorts),
    proxy_type: cdktf.stringToTerraform(struct!.proxyType),
  }
}


export function ddoscooDomainResourceProxyTypesToHclTerraform(struct?: DdoscooDomainResourceProxyTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.proxyPorts),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    proxy_type: {
      value: cdktf.stringToHclTerraform(struct!.proxyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdoscooDomainResourceProxyTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdoscooDomainResourceProxyTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPorts = this._proxyPorts;
    }
    if (this._proxyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyType = this._proxyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdoscooDomainResourceProxyTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proxyPorts = undefined;
      this._proxyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proxyPorts = value.proxyPorts;
      this._proxyType = value.proxyType;
    }
  }

  // proxy_ports - computed: false, optional: false, required: true
  private _proxyPorts?: number[]; 
  public get proxyPorts() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('proxy_ports')));
  }
  public set proxyPorts(value: number[]) {
    this._proxyPorts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortsInput() {
    return this._proxyPorts;
  }

  // proxy_type - computed: false, optional: true, required: false
  private _proxyType?: string; 
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }
  public set proxyType(value: string) {
    this._proxyType = value;
  }
  public resetProxyType() {
    this._proxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypeInput() {
    return this._proxyType;
  }
}

export class DdoscooDomainResourceProxyTypesList extends cdktf.ComplexList {
  public internalValue? : DdoscooDomainResourceProxyTypes[] | cdktf.IResolvable

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
  public get(index: number): DdoscooDomainResourceProxyTypesOutputReference {
    return new DdoscooDomainResourceProxyTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdoscooDomainResourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#create DdoscooDomainResource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#delete DdoscooDomainResource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#update DdoscooDomainResource#update}
  */
  readonly update?: string;
}

export function ddoscooDomainResourceTimeoutsToTerraform(struct?: DdoscooDomainResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ddoscooDomainResourceTimeoutsToHclTerraform(struct?: DdoscooDomainResourceTimeouts | cdktf.IResolvable): any {
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

export class DdoscooDomainResourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DdoscooDomainResourceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdoscooDomainResourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource alicloud_ddoscoo_domain_resource}
*/
export class DdoscooDomainResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ddoscoo_domain_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdoscooDomainResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdoscooDomainResource to import
  * @param importFromId The id of the existing DdoscooDomainResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdoscooDomainResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ddoscoo_domain_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_domain_resource alicloud_ddoscoo_domain_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdoscooDomainResourceConfig
  */
  public constructor(scope: Construct, id: string, config: DdoscooDomainResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ddoscoo_domain_resource',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cert = config.cert;
    this._certIdentifier = config.certIdentifier;
    this._certName = config.certName;
    this._certRegion = config.certRegion;
    this._customHeaders = config.customHeaders;
    this._domain = config.domain;
    this._httpsExt = config.httpsExt;
    this._id = config.id;
    this._instanceIds = config.instanceIds;
    this._key = config.key;
    this._ocspEnabled = config.ocspEnabled;
    this._realServers = config.realServers;
    this._rsType = config.rsType;
    this._proxyTypes.internalValue = config.proxyTypes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cert_identifier - computed: false, optional: true, required: false
  private _certIdentifier?: string; 
  public get certIdentifier() {
    return this.getStringAttribute('cert_identifier');
  }
  public set certIdentifier(value: string) {
    this._certIdentifier = value;
  }
  public resetCertIdentifier() {
    this._certIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certIdentifierInput() {
    return this._certIdentifier;
  }

  // cert_name - computed: true, optional: true, required: false
  private _certName?: string; 
  public get certName() {
    return this.getStringAttribute('cert_name');
  }
  public set certName(value: string) {
    this._certName = value;
  }
  public resetCertName() {
    this._certName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certNameInput() {
    return this._certName;
  }

  // cert_region - computed: false, optional: true, required: false
  private _certRegion?: string; 
  public get certRegion() {
    return this.getStringAttribute('cert_region');
  }
  public set certRegion(value: string) {
    this._certRegion = value;
  }
  public resetCertRegion() {
    this._certRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certRegionInput() {
    return this._certRegion;
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // custom_headers - computed: true, optional: true, required: false
  private _customHeaders?: string; 
  public get customHeaders() {
    return this.getStringAttribute('custom_headers');
  }
  public set customHeaders(value: string) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // https_ext - computed: true, optional: true, required: false
  private _httpsExt?: string; 
  public get httpsExt() {
    return this.getStringAttribute('https_ext');
  }
  public set httpsExt(value: string) {
    this._httpsExt = value;
  }
  public resetHttpsExt() {
    this._httpsExt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsExtInput() {
    return this._httpsExt;
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

  // instance_ids - computed: false, optional: false, required: true
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ids'));
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
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

  // ocsp_enabled - computed: false, optional: true, required: false
  private _ocspEnabled?: boolean | cdktf.IResolvable; 
  public get ocspEnabled() {
    return this.getBooleanAttribute('ocsp_enabled');
  }
  public set ocspEnabled(value: boolean | cdktf.IResolvable) {
    this._ocspEnabled = value;
  }
  public resetOcspEnabled() {
    this._ocspEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspEnabledInput() {
    return this._ocspEnabled;
  }

  // real_servers - computed: false, optional: false, required: true
  private _realServers?: string[]; 
  public get realServers() {
    return cdktf.Fn.tolist(this.getListAttribute('real_servers'));
  }
  public set realServers(value: string[]) {
    this._realServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realServersInput() {
    return this._realServers;
  }

  // rs_type - computed: false, optional: false, required: true
  private _rsType?: number; 
  public get rsType() {
    return this.getNumberAttribute('rs_type');
  }
  public set rsType(value: number) {
    this._rsType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rsTypeInput() {
    return this._rsType;
  }

  // proxy_types - computed: false, optional: false, required: true
  private _proxyTypes = new DdoscooDomainResourceProxyTypesList(this, "proxy_types", true);
  public get proxyTypes() {
    return this._proxyTypes;
  }
  public putProxyTypes(value: DdoscooDomainResourceProxyTypes[] | cdktf.IResolvable) {
    this._proxyTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypesInput() {
    return this._proxyTypes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DdoscooDomainResourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DdoscooDomainResourceTimeouts) {
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
      cert: cdktf.stringToTerraform(this._cert),
      cert_identifier: cdktf.stringToTerraform(this._certIdentifier),
      cert_name: cdktf.stringToTerraform(this._certName),
      cert_region: cdktf.stringToTerraform(this._certRegion),
      custom_headers: cdktf.stringToTerraform(this._customHeaders),
      domain: cdktf.stringToTerraform(this._domain),
      https_ext: cdktf.stringToTerraform(this._httpsExt),
      id: cdktf.stringToTerraform(this._id),
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      key: cdktf.stringToTerraform(this._key),
      ocsp_enabled: cdktf.booleanToTerraform(this._ocspEnabled),
      real_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._realServers),
      rs_type: cdktf.numberToTerraform(this._rsType),
      proxy_types: cdktf.listMapper(ddoscooDomainResourceProxyTypesToTerraform, true)(this._proxyTypes.internalValue),
      timeouts: ddoscooDomainResourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_identifier: {
        value: cdktf.stringToHclTerraform(this._certIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_name: {
        value: cdktf.stringToHclTerraform(this._certName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_region: {
        value: cdktf.stringToHclTerraform(this._certRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_headers: {
        value: cdktf.stringToHclTerraform(this._customHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_ext: {
        value: cdktf.stringToHclTerraform(this._httpsExt),
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
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_enabled: {
        value: cdktf.booleanToHclTerraform(this._ocspEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      real_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._realServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rs_type: {
        value: cdktf.numberToHclTerraform(this._rsType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_types: {
        value: cdktf.listMapperHcl(ddoscooDomainResourceProxyTypesToHclTerraform, true)(this._proxyTypes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DdoscooDomainResourceProxyTypesList",
      },
      timeouts: {
        value: ddoscooDomainResourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DdoscooDomainResourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
