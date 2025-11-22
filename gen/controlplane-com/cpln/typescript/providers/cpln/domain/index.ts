// https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#description Domain#description}
  */
  readonly description?: string;
  /**
  * Name of the Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#name Domain#name}
  */
  readonly name: string;
  /**
  * Key-value map of resource tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#tags Domain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#spec Domain#spec}
  */
  readonly spec?: DomainSpec[] | cdktf.IResolvable;
}
export interface DomainStatusDnsConfig {
}

export function domainStatusDnsConfigToTerraform(struct?: DomainStatusDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function domainStatusDnsConfigToHclTerraform(struct?: DomainStatusDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DomainStatusDnsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainStatusDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainStatusDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
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

export class DomainStatusDnsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DomainStatusDnsConfigOutputReference {
    return new DomainStatusDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainStatusEndpoints {
}

export function domainStatusEndpointsToTerraform(struct?: DomainStatusEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function domainStatusEndpointsToHclTerraform(struct?: DomainStatusEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DomainStatusEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainStatusEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainStatusEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // workload_link - computed: true, optional: false, required: false
  public get workloadLink() {
    return this.getStringAttribute('workload_link');
  }
}

export class DomainStatusEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DomainStatusEndpointsOutputReference {
    return new DomainStatusEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainStatusLocations {
}

export function domainStatusLocationsToTerraform(struct?: DomainStatusLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function domainStatusLocationsToHclTerraform(struct?: DomainStatusLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DomainStatusLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainStatusLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainStatusLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_status - computed: true, optional: false, required: false
  public get certificateStatus() {
    return this.getStringAttribute('certificate_status');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DomainStatusLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DomainStatusLocationsOutputReference {
    return new DomainStatusLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainStatus {
}

export function domainStatusToTerraform(struct?: DomainStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function domainStatusToHclTerraform(struct?: DomainStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DomainStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_config - computed: true, optional: false, required: false
  private _dnsConfig = new DomainStatusDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DomainStatusEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // locations - computed: true, optional: false, required: false
  private _locations = new DomainStatusLocationsList(this, "locations", false);
  public get locations() {
    return this._locations;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getStringAttribute('warning');
  }
}

export class DomainStatusList extends cdktf.ComplexList {

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
  public get(index: number): DomainStatusOutputReference {
    return new DomainStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainSpecPortsCorsAllowOrigins {
  /**
  * Value of allowed origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#exact Domain#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#regex Domain#regex}
  */
  readonly regex?: string;
}

export function domainSpecPortsCorsAllowOriginsToTerraform(struct?: DomainSpecPortsCorsAllowOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function domainSpecPortsCorsAllowOriginsToHclTerraform(struct?: DomainSpecPortsCorsAllowOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainSpecPortsCorsAllowOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainSpecPortsCorsAllowOrigins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainSpecPortsCorsAllowOrigins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class DomainSpecPortsCorsAllowOriginsList extends cdktf.ComplexList {
  public internalValue? : DomainSpecPortsCorsAllowOrigins[] | cdktf.IResolvable

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
  public get(index: number): DomainSpecPortsCorsAllowOriginsOutputReference {
    return new DomainSpecPortsCorsAllowOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainSpecPortsCors {
  /**
  * Determines whether the client-side code (typically running in a web browser) is allowed to include credentials (such as cookies, HTTP authentication, or client-side SSL certificates) in cross-origin requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#allow_credentials Domain#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Specifies the custom HTTP headers that are allowed in a cross-origin request to a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#allow_headers Domain#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the HTTP methods (such as `GET`, `POST`, `PUT`, `DELETE`, etc.) that are allowed for a cross-origin request to a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#allow_methods Domain#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * The HTTP headers that a server allows to be exposed to the client in response to a cross-origin request. These headers provide additional information about the server's capabilities or requirements, aiding in proper handling of the request by the client's browser or application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#expose_headers Domain#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Maximum amount of time that a preflight request result can be cached by the client browser. Input is expected as a duration string (i.e, 24h, 20m, etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#max_age Domain#max_age}
  */
  readonly maxAge?: string;
  /**
  * allow_origins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#allow_origins Domain#allow_origins}
  */
  readonly allowOrigins?: DomainSpecPortsCorsAllowOrigins[] | cdktf.IResolvable;
}

export function domainSpecPortsCorsToTerraform(struct?: DomainSpecPortsCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowMethods),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    allow_origins: cdktf.listMapper(domainSpecPortsCorsAllowOriginsToTerraform, true)(struct!.allowOrigins),
  }
}


export function domainSpecPortsCorsToHclTerraform(struct?: DomainSpecPortsCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowHeaders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allow_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    expose_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_origins: {
      value: cdktf.listMapperHcl(domainSpecPortsCorsAllowOriginsToHclTerraform, true)(struct!.allowOrigins),
      isBlock: true,
      type: "set",
      storageClassType: "DomainSpecPortsCorsAllowOriginsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainSpecPortsCorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainSpecPortsCors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._allowOrigins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainSpecPortsCors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
      this._allowOrigins.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
      this._allowOrigins.internalValue = value.allowOrigins;
    }
  }

  // allow_credentials - computed: true, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_headers'));
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_methods'));
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('expose_headers'));
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins = new DomainSpecPortsCorsAllowOriginsList(this, "allow_origins", true);
  public get allowOrigins() {
    return this._allowOrigins;
  }
  public putAllowOrigins(value: DomainSpecPortsCorsAllowOrigins[] | cdktf.IResolvable) {
    this._allowOrigins.internalValue = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins.internalValue;
  }
}

export class DomainSpecPortsCorsList extends cdktf.ComplexList {
  public internalValue? : DomainSpecPortsCors[] | cdktf.IResolvable

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
  public get(index: number): DomainSpecPortsCorsOutputReference {
    return new DomainSpecPortsCorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainSpecPortsTlsClientCertificate {
  /**
  * The secret will include a client certificate authority cert in PEM format used to verify requests which include client certificates. The key subject must match the domain and the key usage properties must be configured for client certificate authorization. The secret type must be keypair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#secret_link Domain#secret_link}
  */
  readonly secretLink?: string;
}

export function domainSpecPortsTlsClientCertificateToTerraform(struct?: DomainSpecPortsTlsClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_link: cdktf.stringToTerraform(struct!.secretLink),
  }
}


export function domainSpecPortsTlsClientCertificateToHclTerraform(struct?: DomainSpecPortsTlsClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_link: {
      value: cdktf.stringToHclTerraform(struct!.secretLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainSpecPortsTlsClientCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainSpecPortsTlsClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretLink = this._secretLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainSpecPortsTlsClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretLink = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretLink = value.secretLink;
    }
  }

  // secret_link - computed: false, optional: true, required: false
  private _secretLink?: string; 
  public get secretLink() {
    return this.getStringAttribute('secret_link');
  }
  public set secretLink(value: string) {
    this._secretLink = value;
  }
  public resetSecretLink() {
    this._secretLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretLinkInput() {
    return this._secretLink;
  }
}

export class DomainSpecPortsTlsClientCertificateList extends cdktf.ComplexList {
  public internalValue? : DomainSpecPortsTlsClientCertificate[] | cdktf.IResolvable

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
  public get(index: number): DomainSpecPortsTlsClientCertificateOutputReference {
    return new DomainSpecPortsTlsClientCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainSpecPortsTlsServerCertificate {
  /**
  * When provided, this is used as the server certificate authority. The secret type must be keypair and the content must be PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#secret_link Domain#secret_link}
  */
  readonly secretLink?: string;
}

export function domainSpecPortsTlsServerCertificateToTerraform(struct?: DomainSpecPortsTlsServerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_link: cdktf.stringToTerraform(struct!.secretLink),
  }
}


export function domainSpecPortsTlsServerCertificateToHclTerraform(struct?: DomainSpecPortsTlsServerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_link: {
      value: cdktf.stringToHclTerraform(struct!.secretLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainSpecPortsTlsServerCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainSpecPortsTlsServerCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretLink = this._secretLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainSpecPortsTlsServerCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretLink = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretLink = value.secretLink;
    }
  }

  // secret_link - computed: false, optional: true, required: false
  private _secretLink?: string; 
  public get secretLink() {
    return this.getStringAttribute('secret_link');
  }
  public set secretLink(value: string) {
    this._secretLink = value;
  }
  public resetSecretLink() {
    this._secretLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretLinkInput() {
    return this._secretLink;
  }
}

export class DomainSpecPortsTlsServerCertificateList extends cdktf.ComplexList {
  public internalValue? : DomainSpecPortsTlsServerCertificate[] | cdktf.IResolvable

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
  public get(index: number): DomainSpecPortsTlsServerCertificateOutputReference {
    return new DomainSpecPortsTlsServerCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainSpecPortsTls {
  /**
  * Allowed cipher suites. Refer to the [Domain Reference](https://docs.controlplane.com/reference/domain#cipher-suites) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#cipher_suites Domain#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Minimum TLS version to accept. Minimum is `1.0`. Default: `1.2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#min_protocol_version Domain#min_protocol_version}
  */
  readonly minProtocolVersion?: string;
  /**
  * client_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#client_certificate Domain#client_certificate}
  */
  readonly clientCertificate?: DomainSpecPortsTlsClientCertificate[] | cdktf.IResolvable;
  /**
  * server_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#server_certificate Domain#server_certificate}
  */
  readonly serverCertificate?: DomainSpecPortsTlsServerCertificate[] | cdktf.IResolvable;
}

export function domainSpecPortsTlsToTerraform(struct?: DomainSpecPortsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    min_protocol_version: cdktf.stringToTerraform(struct!.minProtocolVersion),
    client_certificate: cdktf.listMapper(domainSpecPortsTlsClientCertificateToTerraform, true)(struct!.clientCertificate),
    server_certificate: cdktf.listMapper(domainSpecPortsTlsServerCertificateToTerraform, true)(struct!.serverCertificate),
  }
}


export function domainSpecPortsTlsToHclTerraform(struct?: DomainSpecPortsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    min_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.minProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.listMapperHcl(domainSpecPortsTlsClientCertificateToHclTerraform, true)(struct!.clientCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "DomainSpecPortsTlsClientCertificateList",
    },
    server_certificate: {
      value: cdktf.listMapperHcl(domainSpecPortsTlsServerCertificateToHclTerraform, true)(struct!.serverCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "DomainSpecPortsTlsServerCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainSpecPortsTlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainSpecPortsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._minProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProtocolVersion = this._minProtocolVersion;
    }
    if (this._clientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate?.internalValue;
    }
    if (this._serverCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificate = this._serverCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainSpecPortsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipherSuites = undefined;
      this._minProtocolVersion = undefined;
      this._clientCertificate.internalValue = undefined;
      this._serverCertificate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipherSuites = value.cipherSuites;
      this._minProtocolVersion = value.minProtocolVersion;
      this._clientCertificate.internalValue = value.clientCertificate;
      this._serverCertificate.internalValue = value.serverCertificate;
    }
  }

  // cipher_suites - computed: true, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return cdktf.Fn.tolist(this.getListAttribute('cipher_suites'));
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // min_protocol_version - computed: true, optional: true, required: false
  private _minProtocolVersion?: string; 
  public get minProtocolVersion() {
    return this.getStringAttribute('min_protocol_version');
  }
  public set minProtocolVersion(value: string) {
    this._minProtocolVersion = value;
  }
  public resetMinProtocolVersion() {
    this._minProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minProtocolVersionInput() {
    return this._minProtocolVersion;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate = new DomainSpecPortsTlsClientCertificateList(this, "client_certificate", false);
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: DomainSpecPortsTlsClientCertificate[] | cdktf.IResolvable) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }

  // server_certificate - computed: false, optional: true, required: false
  private _serverCertificate = new DomainSpecPortsTlsServerCertificateList(this, "server_certificate", false);
  public get serverCertificate() {
    return this._serverCertificate;
  }
  public putServerCertificate(value: DomainSpecPortsTlsServerCertificate[] | cdktf.IResolvable) {
    this._serverCertificate.internalValue = value;
  }
  public resetServerCertificate() {
    this._serverCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateInput() {
    return this._serverCertificate.internalValue;
  }
}

export class DomainSpecPortsTlsList extends cdktf.ComplexList {
  public internalValue? : DomainSpecPortsTls[] | cdktf.IResolvable

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
  public get(index: number): DomainSpecPortsTlsOutputReference {
    return new DomainSpecPortsTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainSpecPorts {
  /**
  * Sets or overrides headers to all http requests for this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#number Domain#number}
  */
  readonly number?: number;
  /**
  * Allowed protocol. Valid values: `http`, `http2`, `tcp`. Default: `http2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#protocol Domain#protocol}
  */
  readonly protocol?: string;
  /**
  * cors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#cors Domain#cors}
  */
  readonly cors?: DomainSpecPortsCors[] | cdktf.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#tls Domain#tls}
  */
  readonly tls?: DomainSpecPortsTls[] | cdktf.IResolvable;
}

export function domainSpecPortsToTerraform(struct?: DomainSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    cors: cdktf.listMapper(domainSpecPortsCorsToTerraform, true)(struct!.cors),
    tls: cdktf.listMapper(domainSpecPortsTlsToTerraform, true)(struct!.tls),
  }
}


export function domainSpecPortsToHclTerraform(struct?: DomainSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cors: {
      value: cdktf.listMapperHcl(domainSpecPortsCorsToHclTerraform, true)(struct!.cors),
      isBlock: true,
      type: "list",
      storageClassType: "DomainSpecPortsCorsList",
    },
    tls: {
      value: cdktf.listMapperHcl(domainSpecPortsTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "DomainSpecPortsTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainSpecPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainSpecPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._cors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainSpecPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._protocol = undefined;
      this._cors.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._protocol = value.protocol;
      this._cors.internalValue = value.cors;
      this._tls.internalValue = value.tls;
    }
  }

  // number - computed: true, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new DomainSpecPortsCorsList(this, "cors", false);
  public get cors() {
    return this._cors;
  }
  public putCors(value: DomainSpecPortsCors[] | cdktf.IResolvable) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DomainSpecPortsTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: DomainSpecPortsTls[] | cdktf.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class DomainSpecPortsList extends cdktf.ComplexList {
  public internalValue? : DomainSpecPorts[] | cdktf.IResolvable

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
  public get(index: number): DomainSpecPortsOutputReference {
    return new DomainSpecPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainSpec {
  /**
  * Allows domain to accept wildcards. The associated GVC must have dedicated load balancing enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#accept_all_hosts Domain#accept_all_hosts}
  */
  readonly acceptAllHosts?: boolean | cdktf.IResolvable;
  /**
  * Accept all subdomains will accept any host that is a sub domain of the domain so *.$DOMAIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#accept_all_subdomains Domain#accept_all_subdomains}
  */
  readonly acceptAllSubdomains?: boolean | cdktf.IResolvable;
  /**
  * Defines the method used to prove domain ownership for certificate issuance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#cert_challenge_type Domain#cert_challenge_type}
  */
  readonly certChallengeType?: string;
  /**
  * In `cname` dnsMode, Control Plane will configure workloads to accept traffic for the domain but will not manage DNS records for the domain. End users must configure CNAME records in their own DNS pointed to the canonical workload endpoint. Currently `cname` dnsMode requires that a TLS server certificate be configured when subdomain based routing is used. In `ns` dnsMode, Control Plane will manage the subdomains and create all necessary DNS records. End users configure NS records to forward DNS requests to the Control Plane managed DNS servers. Valid values: `cname`, `ns`. Default: `cname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#dns_mode Domain#dns_mode}
  */
  readonly dnsMode?: string;
  /**
  * This value is set to a target GVC (using a full link) for use by subdomain based routing. Each workload in the GVC will receive a subdomain in the form ${workload.name}.${domain.name}. **Do not include if path based routing is used.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#gvc_link Domain#gvc_link}
  */
  readonly gvcLink?: string;
  /**
  * Creates a unique subdomain for each replica of a stateful workload, enabling direct access to individual instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#workload_link Domain#workload_link}
  */
  readonly workloadLink?: string;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#ports Domain#ports}
  */
  readonly ports?: DomainSpecPorts[] | cdktf.IResolvable;
}

export function domainSpecToTerraform(struct?: DomainSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_all_hosts: cdktf.booleanToTerraform(struct!.acceptAllHosts),
    accept_all_subdomains: cdktf.booleanToTerraform(struct!.acceptAllSubdomains),
    cert_challenge_type: cdktf.stringToTerraform(struct!.certChallengeType),
    dns_mode: cdktf.stringToTerraform(struct!.dnsMode),
    gvc_link: cdktf.stringToTerraform(struct!.gvcLink),
    workload_link: cdktf.stringToTerraform(struct!.workloadLink),
    ports: cdktf.listMapper(domainSpecPortsToTerraform, true)(struct!.ports),
  }
}


export function domainSpecToHclTerraform(struct?: DomainSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_all_hosts: {
      value: cdktf.booleanToHclTerraform(struct!.acceptAllHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    accept_all_subdomains: {
      value: cdktf.booleanToHclTerraform(struct!.acceptAllSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cert_challenge_type: {
      value: cdktf.stringToHclTerraform(struct!.certChallengeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_mode: {
      value: cdktf.stringToHclTerraform(struct!.dnsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gvc_link: {
      value: cdktf.stringToHclTerraform(struct!.gvcLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_link: {
      value: cdktf.stringToHclTerraform(struct!.workloadLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(domainSpecPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "set",
      storageClassType: "DomainSpecPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptAllHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptAllHosts = this._acceptAllHosts;
    }
    if (this._acceptAllSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptAllSubdomains = this._acceptAllSubdomains;
    }
    if (this._certChallengeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certChallengeType = this._certChallengeType;
    }
    if (this._dnsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMode = this._dnsMode;
    }
    if (this._gvcLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.gvcLink = this._gvcLink;
    }
    if (this._workloadLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadLink = this._workloadLink;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptAllHosts = undefined;
      this._acceptAllSubdomains = undefined;
      this._certChallengeType = undefined;
      this._dnsMode = undefined;
      this._gvcLink = undefined;
      this._workloadLink = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptAllHosts = value.acceptAllHosts;
      this._acceptAllSubdomains = value.acceptAllSubdomains;
      this._certChallengeType = value.certChallengeType;
      this._dnsMode = value.dnsMode;
      this._gvcLink = value.gvcLink;
      this._workloadLink = value.workloadLink;
      this._ports.internalValue = value.ports;
    }
  }

  // accept_all_hosts - computed: true, optional: true, required: false
  private _acceptAllHosts?: boolean | cdktf.IResolvable; 
  public get acceptAllHosts() {
    return this.getBooleanAttribute('accept_all_hosts');
  }
  public set acceptAllHosts(value: boolean | cdktf.IResolvable) {
    this._acceptAllHosts = value;
  }
  public resetAcceptAllHosts() {
    this._acceptAllHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptAllHostsInput() {
    return this._acceptAllHosts;
  }

  // accept_all_subdomains - computed: true, optional: true, required: false
  private _acceptAllSubdomains?: boolean | cdktf.IResolvable; 
  public get acceptAllSubdomains() {
    return this.getBooleanAttribute('accept_all_subdomains');
  }
  public set acceptAllSubdomains(value: boolean | cdktf.IResolvable) {
    this._acceptAllSubdomains = value;
  }
  public resetAcceptAllSubdomains() {
    this._acceptAllSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptAllSubdomainsInput() {
    return this._acceptAllSubdomains;
  }

  // cert_challenge_type - computed: false, optional: true, required: false
  private _certChallengeType?: string; 
  public get certChallengeType() {
    return this.getStringAttribute('cert_challenge_type');
  }
  public set certChallengeType(value: string) {
    this._certChallengeType = value;
  }
  public resetCertChallengeType() {
    this._certChallengeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certChallengeTypeInput() {
    return this._certChallengeType;
  }

  // dns_mode - computed: true, optional: true, required: false
  private _dnsMode?: string; 
  public get dnsMode() {
    return this.getStringAttribute('dns_mode');
  }
  public set dnsMode(value: string) {
    this._dnsMode = value;
  }
  public resetDnsMode() {
    this._dnsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsModeInput() {
    return this._dnsMode;
  }

  // gvc_link - computed: false, optional: true, required: false
  private _gvcLink?: string; 
  public get gvcLink() {
    return this.getStringAttribute('gvc_link');
  }
  public set gvcLink(value: string) {
    this._gvcLink = value;
  }
  public resetGvcLink() {
    this._gvcLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvcLinkInput() {
    return this._gvcLink;
  }

  // workload_link - computed: false, optional: true, required: false
  private _workloadLink?: string; 
  public get workloadLink() {
    return this.getStringAttribute('workload_link');
  }
  public set workloadLink(value: string) {
    this._workloadLink = value;
  }
  public resetWorkloadLink() {
    this._workloadLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadLinkInput() {
    return this._workloadLink;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DomainSpecPortsList(this, "ports", true);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DomainSpecPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class DomainSpecList extends cdktf.ComplexList {
  public internalValue? : DomainSpec[] | cdktf.IResolvable

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
  public get(index: number): DomainSpecOutputReference {
    return new DomainSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain cpln_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/domain cpln_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'cpln_domain',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.15',
        providerVersionConstraint: '1.2.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpln_id - computed: true, optional: false, required: false
  public get cplnId() {
    return this.getStringAttribute('cpln_id');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DomainStatusList(this, "status", false);
  public get status() {
    return this._status;
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

  // spec - computed: false, optional: true, required: false
  private _spec = new DomainSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DomainSpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      spec: cdktf.listMapper(domainSpecToTerraform, true)(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      spec: {
        value: cdktf.listMapperHcl(domainSpecToHclTerraform, true)(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
