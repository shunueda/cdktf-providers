// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The annotation of the Management Access Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotation ManagementAccessPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotations ManagementAccessPolicy#annotations}
  */
  readonly annotations?: ManagementAccessPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The description of the Management Access Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#description ManagementAccessPolicy#description}
  */
  readonly description?: string;
  /**
  * HTTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#http_service ManagementAccessPolicy#http_service}
  */
  readonly httpService?: ManagementAccessPolicyHttpService;
  /**
  * HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#http_ssl_configuration ManagementAccessPolicy#http_ssl_configuration}
  */
  readonly httpSslConfiguration?: ManagementAccessPolicyHttpSslConfiguration;
  /**
  * The name of the Management Access Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#name ManagementAccessPolicy#name}
  */
  readonly name: string;
  /**
  * The name alias of the Management Access Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#name_alias ManagementAccessPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The key for enabling clients to own their data for entity correlation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#owner_key ManagementAccessPolicy#owner_key}
  */
  readonly ownerKey?: string;
  /**
  * A tag for enabling clients to add their own data. For example, to indicate who created this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#owner_tag ManagementAccessPolicy#owner_tag}
  */
  readonly ownerTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#ssh_access_via_web ManagementAccessPolicy#ssh_access_via_web}
  */
  readonly sshAccessViaWeb?: ManagementAccessPolicySshAccessViaWeb;
  /**
  * Object that encompasses properties related to Secure Shell access to the APIC, namely admin-state (default=enabled) and port(default=22).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#ssh_service ManagementAccessPolicy#ssh_service}
  */
  readonly sshService?: ManagementAccessPolicySshService;
  /**
  * Removes implicit access permissions from any APIC out-of-band (OOB) subnet IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#strict_security_on_apic_oob_subnet ManagementAccessPolicy#strict_security_on_apic_oob_subnet}
  */
  readonly strictSecurityOnApicOobSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#tags ManagementAccessPolicy#tags}
  */
  readonly tags?: ManagementAccessPolicyTags[] | cdktf.IResolvable;
  /**
  * Telnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#telnet_service ManagementAccessPolicy#telnet_service}
  */
  readonly telnetService?: ManagementAccessPolicyTelnetService;
}
export interface ManagementAccessPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicyAnnotationsToTerraform(struct?: ManagementAccessPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicyAnnotationsToHclTerraform(struct?: ManagementAccessPolicyAnnotations | cdktf.IResolvable): any {
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

export class ManagementAccessPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicyAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicyAnnotationsOutputReference {
    return new ManagementAccessPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicyHttpServiceAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicyHttpServiceAnnotationsToTerraform(struct?: ManagementAccessPolicyHttpServiceAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicyHttpServiceAnnotationsToHclTerraform(struct?: ManagementAccessPolicyHttpServiceAnnotations | cdktf.IResolvable): any {
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

export class ManagementAccessPolicyHttpServiceAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicyHttpServiceAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyHttpServiceAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicyHttpServiceAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicyHttpServiceAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicyHttpServiceAnnotationsOutputReference {
    return new ManagementAccessPolicyHttpServiceAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicyHttpServiceTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicyHttpServiceTagsToTerraform(struct?: ManagementAccessPolicyHttpServiceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicyHttpServiceTagsToHclTerraform(struct?: ManagementAccessPolicyHttpServiceTags | cdktf.IResolvable): any {
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

export class ManagementAccessPolicyHttpServiceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicyHttpServiceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyHttpServiceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicyHttpServiceTagsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicyHttpServiceTags[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicyHttpServiceTagsOutputReference {
    return new ManagementAccessPolicyHttpServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicyHttpService {
  /**
  * The administrative state of the HTTP Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#admin_state ManagementAccessPolicy#admin_state}
  */
  readonly adminState?: string;
  /**
  * Determines if credentials are allowed in HTTP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#allow_credentials ManagementAccessPolicy#allow_credentials}
  */
  readonly allowCredentials?: string;
  /**
  * Determines which origins can access the resource. For example, inputting http://127.0.0.1:8000 would allow access from a source device with that IP address and port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#allow_origins ManagementAccessPolicy#allow_origins}
  */
  readonly allowOrigins?: string;
  /**
  * The annotation of the HTTP Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotation ManagementAccessPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotations ManagementAccessPolicy#annotations}
  */
  readonly annotations?: ManagementAccessPolicyHttpServiceAnnotations[] | cdktf.IResolvable;
  /**
  * Determines if CLI-only mode is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#cli_only_mode ManagementAccessPolicy#cli_only_mode}
  */
  readonly cliOnlyMode?: string;
  /**
  * The description of the HTTP Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#description ManagementAccessPolicy#description}
  */
  readonly description?: string;
  /**
  * The maximum amount of API calls allowed per unit time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#global_throttle_rate ManagementAccessPolicy#global_throttle_rate}
  */
  readonly globalThrottleRate?: string;
  /**
  * The throttle state for all clients without specific identifier in their headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#global_throttle_state ManagementAccessPolicy#global_throttle_state}
  */
  readonly globalThrottleState?: string;
  /**
  * The unit of measurement for rate limiting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#global_throttle_unit ManagementAccessPolicy#global_throttle_unit}
  */
  readonly globalThrottleUnit?: string;
  /**
  * The maximum login/refresh allowed per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#login_throttle_rate ManagementAccessPolicy#login_throttle_rate}
  */
  readonly loginThrottleRate?: string;
  /**
  * The state of login and refresh throttling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#login_throttle_state ManagementAccessPolicy#login_throttle_state}
  */
  readonly loginThrottleState?: string;
  /**
  * The maximum number of request status objects to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#max_request_status_count ManagementAccessPolicy#max_request_status_count}
  */
  readonly maxRequestStatusCount?: string;
  /**
  * The name of the HTTP Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#name ManagementAccessPolicy#name}
  */
  readonly name?: string;
  /**
  * The name alias of the HTTP Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#name_alias ManagementAccessPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The node exporter service status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#node_exporter ManagementAccessPolicy#node_exporter}
  */
  readonly nodeExporter?: string;
  /**
  * The port used by the HTTP communication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#port ManagementAccessPolicy#port}
  */
  readonly port?: string;
  /**
  * The state of HTTP communication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#redirect_state ManagementAccessPolicy#redirect_state}
  */
  readonly redirectState?: string;
  /**
  * Determines if the server header is included in responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#server_header ManagementAccessPolicy#server_header}
  */
  readonly serverHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#tags ManagementAccessPolicy#tags}
  */
  readonly tags?: ManagementAccessPolicyHttpServiceTags[] | cdktf.IResolvable;
  /**
  * Grants permissions for accessing the Visore tool, also known as Object Store Browser, in Cisco ACI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#visore_access ManagementAccessPolicy#visore_access}
  */
  readonly visoreAccess?: string;
}

export function managementAccessPolicyHttpServiceToTerraform(struct?: ManagementAccessPolicyHttpService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_state: cdktf.stringToTerraform(struct!.adminState),
    allow_credentials: cdktf.stringToTerraform(struct!.allowCredentials),
    allow_origins: cdktf.stringToTerraform(struct!.allowOrigins),
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(managementAccessPolicyHttpServiceAnnotationsToTerraform, false)(struct!.annotations),
    cli_only_mode: cdktf.stringToTerraform(struct!.cliOnlyMode),
    description: cdktf.stringToTerraform(struct!.description),
    global_throttle_rate: cdktf.stringToTerraform(struct!.globalThrottleRate),
    global_throttle_state: cdktf.stringToTerraform(struct!.globalThrottleState),
    global_throttle_unit: cdktf.stringToTerraform(struct!.globalThrottleUnit),
    login_throttle_rate: cdktf.stringToTerraform(struct!.loginThrottleRate),
    login_throttle_state: cdktf.stringToTerraform(struct!.loginThrottleState),
    max_request_status_count: cdktf.stringToTerraform(struct!.maxRequestStatusCount),
    name: cdktf.stringToTerraform(struct!.name),
    name_alias: cdktf.stringToTerraform(struct!.nameAlias),
    node_exporter: cdktf.stringToTerraform(struct!.nodeExporter),
    port: cdktf.stringToTerraform(struct!.port),
    redirect_state: cdktf.stringToTerraform(struct!.redirectState),
    server_header: cdktf.stringToTerraform(struct!.serverHeader),
    tags: cdktf.listMapper(managementAccessPolicyHttpServiceTagsToTerraform, false)(struct!.tags),
    visore_access: cdktf.stringToTerraform(struct!.visoreAccess),
  }
}


export function managementAccessPolicyHttpServiceToHclTerraform(struct?: ManagementAccessPolicyHttpService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_state: {
      value: cdktf.stringToHclTerraform(struct!.adminState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_credentials: {
      value: cdktf.stringToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_origins: {
      value: cdktf.stringToHclTerraform(struct!.allowOrigins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(managementAccessPolicyHttpServiceAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementAccessPolicyHttpServiceAnnotationsList",
    },
    cli_only_mode: {
      value: cdktf.stringToHclTerraform(struct!.cliOnlyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_throttle_rate: {
      value: cdktf.stringToHclTerraform(struct!.globalThrottleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_throttle_state: {
      value: cdktf.stringToHclTerraform(struct!.globalThrottleState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_throttle_unit: {
      value: cdktf.stringToHclTerraform(struct!.globalThrottleUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_throttle_rate: {
      value: cdktf.stringToHclTerraform(struct!.loginThrottleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_throttle_state: {
      value: cdktf.stringToHclTerraform(struct!.loginThrottleState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_request_status_count: {
      value: cdktf.stringToHclTerraform(struct!.maxRequestStatusCount),
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
    name_alias: {
      value: cdktf.stringToHclTerraform(struct!.nameAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_exporter: {
      value: cdktf.stringToHclTerraform(struct!.nodeExporter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_state: {
      value: cdktf.stringToHclTerraform(struct!.redirectState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_header: {
      value: cdktf.stringToHclTerraform(struct!.serverHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(managementAccessPolicyHttpServiceTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementAccessPolicyHttpServiceTagsList",
    },
    visore_access: {
      value: cdktf.stringToHclTerraform(struct!.visoreAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementAccessPolicyHttpServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementAccessPolicyHttpService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminState !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminState = this._adminState;
    }
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins;
    }
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._cliOnlyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOnlyMode = this._cliOnlyMode;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._globalThrottleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalThrottleRate = this._globalThrottleRate;
    }
    if (this._globalThrottleState !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalThrottleState = this._globalThrottleState;
    }
    if (this._globalThrottleUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalThrottleUnit = this._globalThrottleUnit;
    }
    if (this._loginThrottleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginThrottleRate = this._loginThrottleRate;
    }
    if (this._loginThrottleState !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginThrottleState = this._loginThrottleState;
    }
    if (this._maxRequestStatusCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestStatusCount = this._maxRequestStatusCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAlias = this._nameAlias;
    }
    if (this._nodeExporter !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeExporter = this._nodeExporter;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._redirectState !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectState = this._redirectState;
    }
    if (this._serverHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverHeader = this._serverHeader;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._visoreAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.visoreAccess = this._visoreAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyHttpService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminState = undefined;
      this._allowCredentials = undefined;
      this._allowOrigins = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._cliOnlyMode = undefined;
      this._description = undefined;
      this._globalThrottleRate = undefined;
      this._globalThrottleState = undefined;
      this._globalThrottleUnit = undefined;
      this._loginThrottleRate = undefined;
      this._loginThrottleState = undefined;
      this._maxRequestStatusCount = undefined;
      this._name = undefined;
      this._nameAlias = undefined;
      this._nodeExporter = undefined;
      this._port = undefined;
      this._redirectState = undefined;
      this._serverHeader = undefined;
      this._tags.internalValue = undefined;
      this._visoreAccess = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminState = value.adminState;
      this._allowCredentials = value.allowCredentials;
      this._allowOrigins = value.allowOrigins;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._cliOnlyMode = value.cliOnlyMode;
      this._description = value.description;
      this._globalThrottleRate = value.globalThrottleRate;
      this._globalThrottleState = value.globalThrottleState;
      this._globalThrottleUnit = value.globalThrottleUnit;
      this._loginThrottleRate = value.loginThrottleRate;
      this._loginThrottleState = value.loginThrottleState;
      this._maxRequestStatusCount = value.maxRequestStatusCount;
      this._name = value.name;
      this._nameAlias = value.nameAlias;
      this._nodeExporter = value.nodeExporter;
      this._port = value.port;
      this._redirectState = value.redirectState;
      this._serverHeader = value.serverHeader;
      this._tags.internalValue = value.tags;
      this._visoreAccess = value.visoreAccess;
    }
  }

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // allow_credentials - computed: true, optional: true, required: false
  private _allowCredentials?: string; 
  public get allowCredentials() {
    return this.getStringAttribute('allow_credentials');
  }
  public set allowCredentials(value: string) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_origins - computed: true, optional: true, required: false
  private _allowOrigins?: string; 
  public get allowOrigins() {
    return this.getStringAttribute('allow_origins');
  }
  public set allowOrigins(value: string) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ManagementAccessPolicyHttpServiceAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ManagementAccessPolicyHttpServiceAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // cli_only_mode - computed: true, optional: true, required: false
  private _cliOnlyMode?: string; 
  public get cliOnlyMode() {
    return this.getStringAttribute('cli_only_mode');
  }
  public set cliOnlyMode(value: string) {
    this._cliOnlyMode = value;
  }
  public resetCliOnlyMode() {
    this._cliOnlyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOnlyModeInput() {
    return this._cliOnlyMode;
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

  // global_throttle_rate - computed: true, optional: true, required: false
  private _globalThrottleRate?: string; 
  public get globalThrottleRate() {
    return this.getStringAttribute('global_throttle_rate');
  }
  public set globalThrottleRate(value: string) {
    this._globalThrottleRate = value;
  }
  public resetGlobalThrottleRate() {
    this._globalThrottleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalThrottleRateInput() {
    return this._globalThrottleRate;
  }

  // global_throttle_state - computed: true, optional: true, required: false
  private _globalThrottleState?: string; 
  public get globalThrottleState() {
    return this.getStringAttribute('global_throttle_state');
  }
  public set globalThrottleState(value: string) {
    this._globalThrottleState = value;
  }
  public resetGlobalThrottleState() {
    this._globalThrottleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalThrottleStateInput() {
    return this._globalThrottleState;
  }

  // global_throttle_unit - computed: true, optional: true, required: false
  private _globalThrottleUnit?: string; 
  public get globalThrottleUnit() {
    return this.getStringAttribute('global_throttle_unit');
  }
  public set globalThrottleUnit(value: string) {
    this._globalThrottleUnit = value;
  }
  public resetGlobalThrottleUnit() {
    this._globalThrottleUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalThrottleUnitInput() {
    return this._globalThrottleUnit;
  }

  // login_throttle_rate - computed: true, optional: true, required: false
  private _loginThrottleRate?: string; 
  public get loginThrottleRate() {
    return this.getStringAttribute('login_throttle_rate');
  }
  public set loginThrottleRate(value: string) {
    this._loginThrottleRate = value;
  }
  public resetLoginThrottleRate() {
    this._loginThrottleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginThrottleRateInput() {
    return this._loginThrottleRate;
  }

  // login_throttle_state - computed: true, optional: true, required: false
  private _loginThrottleState?: string; 
  public get loginThrottleState() {
    return this.getStringAttribute('login_throttle_state');
  }
  public set loginThrottleState(value: string) {
    this._loginThrottleState = value;
  }
  public resetLoginThrottleState() {
    this._loginThrottleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginThrottleStateInput() {
    return this._loginThrottleState;
  }

  // max_request_status_count - computed: true, optional: true, required: false
  private _maxRequestStatusCount?: string; 
  public get maxRequestStatusCount() {
    return this.getStringAttribute('max_request_status_count');
  }
  public set maxRequestStatusCount(value: string) {
    this._maxRequestStatusCount = value;
  }
  public resetMaxRequestStatusCount() {
    this._maxRequestStatusCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestStatusCountInput() {
    return this._maxRequestStatusCount;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // node_exporter - computed: true, optional: true, required: false
  private _nodeExporter?: string; 
  public get nodeExporter() {
    return this.getStringAttribute('node_exporter');
  }
  public set nodeExporter(value: string) {
    this._nodeExporter = value;
  }
  public resetNodeExporter() {
    this._nodeExporter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeExporterInput() {
    return this._nodeExporter;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // redirect_state - computed: true, optional: true, required: false
  private _redirectState?: string; 
  public get redirectState() {
    return this.getStringAttribute('redirect_state');
  }
  public set redirectState(value: string) {
    this._redirectState = value;
  }
  public resetRedirectState() {
    this._redirectState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectStateInput() {
    return this._redirectState;
  }

  // server_header - computed: true, optional: true, required: false
  private _serverHeader?: string; 
  public get serverHeader() {
    return this.getStringAttribute('server_header');
  }
  public set serverHeader(value: string) {
    this._serverHeader = value;
  }
  public resetServerHeader() {
    this._serverHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHeaderInput() {
    return this._serverHeader;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ManagementAccessPolicyHttpServiceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ManagementAccessPolicyHttpServiceTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // visore_access - computed: true, optional: true, required: false
  private _visoreAccess?: string; 
  public get visoreAccess() {
    return this.getStringAttribute('visore_access');
  }
  public set visoreAccess(value: string) {
    this._visoreAccess = value;
  }
  public resetVisoreAccess() {
    this._visoreAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visoreAccessInput() {
    return this._visoreAccess;
  }
}
export interface ManagementAccessPolicyHttpSslConfigurationAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicyHttpSslConfigurationAnnotationsToTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicyHttpSslConfigurationAnnotationsToHclTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationAnnotations | cdktf.IResolvable): any {
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

export class ManagementAccessPolicyHttpSslConfigurationAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicyHttpSslConfigurationAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyHttpSslConfigurationAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicyHttpSslConfigurationAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicyHttpSslConfigurationAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicyHttpSslConfigurationAnnotationsOutputReference {
    return new ManagementAccessPolicyHttpSslConfigurationAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotationsToTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotationsToHclTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotations | cdktf.IResolvable): any {
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

export class ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotationsOutputReference {
    return new ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicyHttpSslConfigurationCertificateAuthorityTagsToTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicyHttpSslConfigurationCertificateAuthorityTagsToHclTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityTags | cdktf.IResolvable): any {
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

export class ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityTagsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityTags[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityTagsOutputReference {
    return new ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicyHttpSslConfigurationCertificateAuthority {
  /**
  * The annotation of the Certificate Authority object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotation ManagementAccessPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotations ManagementAccessPolicy#annotations}
  */
  readonly annotations?: ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#tags ManagementAccessPolicy#tags}
  */
  readonly tags?: ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityTags[] | cdktf.IResolvable;
  /**
  * The distinguished name of the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#target_dn ManagementAccessPolicy#target_dn}
  */
  readonly targetDn?: string;
}

export function managementAccessPolicyHttpSslConfigurationCertificateAuthorityToTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationCertificateAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(managementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotationsToTerraform, false)(struct!.annotations),
    tags: cdktf.listMapper(managementAccessPolicyHttpSslConfigurationCertificateAuthorityTagsToTerraform, false)(struct!.tags),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function managementAccessPolicyHttpSslConfigurationCertificateAuthorityToHclTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationCertificateAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(managementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotationsList",
    },
    tags: {
      value: cdktf.listMapperHcl(managementAccessPolicyHttpSslConfigurationCertificateAuthorityTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityTagsList",
    },
    target_dn: {
      value: cdktf.stringToHclTerraform(struct!.targetDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementAccessPolicyHttpSslConfigurationCertificateAuthority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyHttpSslConfigurationCertificateAuthority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._tags.internalValue = value.tags;
      this._targetDn = value.targetDn;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_dn - computed: true, optional: true, required: false
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  public resetTargetDn() {
    this._targetDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }
}
export interface ManagementAccessPolicyHttpSslConfigurationKeyRingAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicyHttpSslConfigurationKeyRingAnnotationsToTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationKeyRingAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicyHttpSslConfigurationKeyRingAnnotationsToHclTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationKeyRingAnnotations | cdktf.IResolvable): any {
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

export class ManagementAccessPolicyHttpSslConfigurationKeyRingAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicyHttpSslConfigurationKeyRingAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyHttpSslConfigurationKeyRingAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicyHttpSslConfigurationKeyRingAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicyHttpSslConfigurationKeyRingAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicyHttpSslConfigurationKeyRingAnnotationsOutputReference {
    return new ManagementAccessPolicyHttpSslConfigurationKeyRingAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicyHttpSslConfigurationKeyRingTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicyHttpSslConfigurationKeyRingTagsToTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationKeyRingTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicyHttpSslConfigurationKeyRingTagsToHclTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationKeyRingTags | cdktf.IResolvable): any {
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

export class ManagementAccessPolicyHttpSslConfigurationKeyRingTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicyHttpSslConfigurationKeyRingTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyHttpSslConfigurationKeyRingTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicyHttpSslConfigurationKeyRingTagsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicyHttpSslConfigurationKeyRingTags[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicyHttpSslConfigurationKeyRingTagsOutputReference {
    return new ManagementAccessPolicyHttpSslConfigurationKeyRingTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicyHttpSslConfigurationKeyRing {
  /**
  * The annotation of the Key Ring object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotation ManagementAccessPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotations ManagementAccessPolicy#annotations}
  */
  readonly annotations?: ManagementAccessPolicyHttpSslConfigurationKeyRingAnnotations[] | cdktf.IResolvable;
  /**
  * The HTTP connection key ring. Each PKI device holds a pair of asymmetric Rivest-Shamir-Adleman (RSA) or Elliptic Curve Cryptography (ECC) encryption keys, one kept private and one made public, stored in an internal key ring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key_ring_name ManagementAccessPolicy#key_ring_name}
  */
  readonly keyRingName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#tags ManagementAccessPolicy#tags}
  */
  readonly tags?: ManagementAccessPolicyHttpSslConfigurationKeyRingTags[] | cdktf.IResolvable;
}

export function managementAccessPolicyHttpSslConfigurationKeyRingToTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationKeyRing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(managementAccessPolicyHttpSslConfigurationKeyRingAnnotationsToTerraform, false)(struct!.annotations),
    key_ring_name: cdktf.stringToTerraform(struct!.keyRingName),
    tags: cdktf.listMapper(managementAccessPolicyHttpSslConfigurationKeyRingTagsToTerraform, false)(struct!.tags),
  }
}


export function managementAccessPolicyHttpSslConfigurationKeyRingToHclTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationKeyRing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(managementAccessPolicyHttpSslConfigurationKeyRingAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementAccessPolicyHttpSslConfigurationKeyRingAnnotationsList",
    },
    key_ring_name: {
      value: cdktf.stringToHclTerraform(struct!.keyRingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(managementAccessPolicyHttpSslConfigurationKeyRingTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementAccessPolicyHttpSslConfigurationKeyRingTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementAccessPolicyHttpSslConfigurationKeyRingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementAccessPolicyHttpSslConfigurationKeyRing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._keyRingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRingName = this._keyRingName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyHttpSslConfigurationKeyRing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._keyRingName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._keyRingName = value.keyRingName;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ManagementAccessPolicyHttpSslConfigurationKeyRingAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ManagementAccessPolicyHttpSslConfigurationKeyRingAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // key_ring_name - computed: true, optional: true, required: false
  private _keyRingName?: string; 
  public get keyRingName() {
    return this.getStringAttribute('key_ring_name');
  }
  public set keyRingName(value: string) {
    this._keyRingName = value;
  }
  public resetKeyRingName() {
    this._keyRingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingNameInput() {
    return this._keyRingName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ManagementAccessPolicyHttpSslConfigurationKeyRingTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ManagementAccessPolicyHttpSslConfigurationKeyRingTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface ManagementAccessPolicyHttpSslConfigurationTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicyHttpSslConfigurationTagsToTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicyHttpSslConfigurationTagsToHclTerraform(struct?: ManagementAccessPolicyHttpSslConfigurationTags | cdktf.IResolvable): any {
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

export class ManagementAccessPolicyHttpSslConfigurationTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicyHttpSslConfigurationTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyHttpSslConfigurationTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicyHttpSslConfigurationTagsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicyHttpSslConfigurationTags[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicyHttpSslConfigurationTagsOutputReference {
    return new ManagementAccessPolicyHttpSslConfigurationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicyHttpSslConfiguration {
  /**
  * The administrative state of the HTTPS Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#admin_state ManagementAccessPolicy#admin_state}
  */
  readonly adminState?: string;
  /**
  * Determines if credentials are allowed in HTTPS responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#allow_credentials ManagementAccessPolicy#allow_credentials}
  */
  readonly allowCredentials?: string;
  /**
  * Determines which origins can access the resource. For example, inputting http://127.0.0.1:8000 would allow access from a source device with that IP address and port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#allow_origins ManagementAccessPolicy#allow_origins}
  */
  readonly allowOrigins?: string;
  /**
  * The annotation of the HTTPS Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotation ManagementAccessPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotations ManagementAccessPolicy#annotations}
  */
  readonly annotations?: ManagementAccessPolicyHttpSslConfigurationAnnotations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#certificate_authority ManagementAccessPolicy#certificate_authority}
  */
  readonly certificateAuthority?: ManagementAccessPolicyHttpSslConfigurationCertificateAuthority;
  /**
  * Determines if CLI-only mode is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#cli_only_mode ManagementAccessPolicy#cli_only_mode}
  */
  readonly cliOnlyMode?: string;
  /**
  * The authentication state of the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#client_certificate_authentication_state ManagementAccessPolicy#client_certificate_authentication_state}
  */
  readonly clientCertificateAuthenticationState?: string;
  /**
  * The description of the HTTPS Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#description ManagementAccessPolicy#description}
  */
  readonly description?: string;
  /**
  * Determines the settings for Diffie-Hellman (DH) parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#dh_parameter ManagementAccessPolicy#dh_parameter}
  */
  readonly dhParameter?: string;
  /**
  * The maximum amount of API calls allowed per unit time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#global_throttle_rate ManagementAccessPolicy#global_throttle_rate}
  */
  readonly globalThrottleRate?: string;
  /**
  * The throttle state for all clients without specific identifier in their headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#global_throttle_state ManagementAccessPolicy#global_throttle_state}
  */
  readonly globalThrottleState?: string;
  /**
  * The unit of measurement for rate limiting specified with the 'global_throttle_rate' attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#global_throttle_unit ManagementAccessPolicy#global_throttle_unit}
  */
  readonly globalThrottleUnit?: string;
  /**
  * A source relation to a key ring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key_ring ManagementAccessPolicy#key_ring}
  */
  readonly keyRing?: ManagementAccessPolicyHttpSslConfigurationKeyRing;
  /**
  * The maximum login/refresh allowed per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#login_throttle_rate ManagementAccessPolicy#login_throttle_rate}
  */
  readonly loginThrottleRate?: string;
  /**
  * The state of login and refresh throttling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#login_throttle_state ManagementAccessPolicy#login_throttle_state}
  */
  readonly loginThrottleState?: string;
  /**
  * The maximum number of request status objects to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#max_request_status_count ManagementAccessPolicy#max_request_status_count}
  */
  readonly maxRequestStatusCount?: string;
  /**
  * The name of the HTTPS Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#name ManagementAccessPolicy#name}
  */
  readonly name?: string;
  /**
  * The name alias of the HTTPS Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#name_alias ManagementAccessPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The node exporter service status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#node_exporter ManagementAccessPolicy#node_exporter}
  */
  readonly nodeExporter?: string;
  /**
  * The port used by the HTTPS communication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#port ManagementAccessPolicy#port}
  */
  readonly port?: string;
  /**
  * Allowed HTTP referers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#referer ManagementAccessPolicy#referer}
  */
  readonly referer?: string;
  /**
  * Determines if the server header is included in responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#server_header ManagementAccessPolicy#server_header}
  */
  readonly serverHeader?: string;
  /**
  * The SSL protocols allowed by HTTPS communication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#ssl_protocols ManagementAccessPolicy#ssl_protocols}
  */
  readonly sslProtocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#tags ManagementAccessPolicy#tags}
  */
  readonly tags?: ManagementAccessPolicyHttpSslConfigurationTags[] | cdktf.IResolvable;
  /**
  * Grants permissions for accessing the Visore tool, also known as Object Store Browser, in Cisco ACI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#visore_access ManagementAccessPolicy#visore_access}
  */
  readonly visoreAccess?: string;
}

export function managementAccessPolicyHttpSslConfigurationToTerraform(struct?: ManagementAccessPolicyHttpSslConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_state: cdktf.stringToTerraform(struct!.adminState),
    allow_credentials: cdktf.stringToTerraform(struct!.allowCredentials),
    allow_origins: cdktf.stringToTerraform(struct!.allowOrigins),
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(managementAccessPolicyHttpSslConfigurationAnnotationsToTerraform, false)(struct!.annotations),
    certificate_authority: managementAccessPolicyHttpSslConfigurationCertificateAuthorityToTerraform(struct!.certificateAuthority),
    cli_only_mode: cdktf.stringToTerraform(struct!.cliOnlyMode),
    client_certificate_authentication_state: cdktf.stringToTerraform(struct!.clientCertificateAuthenticationState),
    description: cdktf.stringToTerraform(struct!.description),
    dh_parameter: cdktf.stringToTerraform(struct!.dhParameter),
    global_throttle_rate: cdktf.stringToTerraform(struct!.globalThrottleRate),
    global_throttle_state: cdktf.stringToTerraform(struct!.globalThrottleState),
    global_throttle_unit: cdktf.stringToTerraform(struct!.globalThrottleUnit),
    key_ring: managementAccessPolicyHttpSslConfigurationKeyRingToTerraform(struct!.keyRing),
    login_throttle_rate: cdktf.stringToTerraform(struct!.loginThrottleRate),
    login_throttle_state: cdktf.stringToTerraform(struct!.loginThrottleState),
    max_request_status_count: cdktf.stringToTerraform(struct!.maxRequestStatusCount),
    name: cdktf.stringToTerraform(struct!.name),
    name_alias: cdktf.stringToTerraform(struct!.nameAlias),
    node_exporter: cdktf.stringToTerraform(struct!.nodeExporter),
    port: cdktf.stringToTerraform(struct!.port),
    referer: cdktf.stringToTerraform(struct!.referer),
    server_header: cdktf.stringToTerraform(struct!.serverHeader),
    ssl_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sslProtocols),
    tags: cdktf.listMapper(managementAccessPolicyHttpSslConfigurationTagsToTerraform, false)(struct!.tags),
    visore_access: cdktf.stringToTerraform(struct!.visoreAccess),
  }
}


export function managementAccessPolicyHttpSslConfigurationToHclTerraform(struct?: ManagementAccessPolicyHttpSslConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_state: {
      value: cdktf.stringToHclTerraform(struct!.adminState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_credentials: {
      value: cdktf.stringToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_origins: {
      value: cdktf.stringToHclTerraform(struct!.allowOrigins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(managementAccessPolicyHttpSslConfigurationAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementAccessPolicyHttpSslConfigurationAnnotationsList",
    },
    certificate_authority: {
      value: managementAccessPolicyHttpSslConfigurationCertificateAuthorityToHclTerraform(struct!.certificateAuthority),
      isBlock: true,
      type: "struct",
      storageClassType: "ManagementAccessPolicyHttpSslConfigurationCertificateAuthority",
    },
    cli_only_mode: {
      value: cdktf.stringToHclTerraform(struct!.cliOnlyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_authentication_state: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificateAuthenticationState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dh_parameter: {
      value: cdktf.stringToHclTerraform(struct!.dhParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_throttle_rate: {
      value: cdktf.stringToHclTerraform(struct!.globalThrottleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_throttle_state: {
      value: cdktf.stringToHclTerraform(struct!.globalThrottleState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_throttle_unit: {
      value: cdktf.stringToHclTerraform(struct!.globalThrottleUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ring: {
      value: managementAccessPolicyHttpSslConfigurationKeyRingToHclTerraform(struct!.keyRing),
      isBlock: true,
      type: "struct",
      storageClassType: "ManagementAccessPolicyHttpSslConfigurationKeyRing",
    },
    login_throttle_rate: {
      value: cdktf.stringToHclTerraform(struct!.loginThrottleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_throttle_state: {
      value: cdktf.stringToHclTerraform(struct!.loginThrottleState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_request_status_count: {
      value: cdktf.stringToHclTerraform(struct!.maxRequestStatusCount),
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
    name_alias: {
      value: cdktf.stringToHclTerraform(struct!.nameAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_exporter: {
      value: cdktf.stringToHclTerraform(struct!.nodeExporter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    referer: {
      value: cdktf.stringToHclTerraform(struct!.referer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_header: {
      value: cdktf.stringToHclTerraform(struct!.serverHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sslProtocols),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(managementAccessPolicyHttpSslConfigurationTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementAccessPolicyHttpSslConfigurationTagsList",
    },
    visore_access: {
      value: cdktf.stringToHclTerraform(struct!.visoreAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementAccessPolicyHttpSslConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementAccessPolicyHttpSslConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminState !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminState = this._adminState;
    }
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins;
    }
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._certificateAuthority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthority = this._certificateAuthority?.internalValue;
    }
    if (this._cliOnlyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOnlyMode = this._cliOnlyMode;
    }
    if (this._clientCertificateAuthenticationState !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateAuthenticationState = this._clientCertificateAuthenticationState;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dhParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhParameter = this._dhParameter;
    }
    if (this._globalThrottleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalThrottleRate = this._globalThrottleRate;
    }
    if (this._globalThrottleState !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalThrottleState = this._globalThrottleState;
    }
    if (this._globalThrottleUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalThrottleUnit = this._globalThrottleUnit;
    }
    if (this._keyRing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRing = this._keyRing?.internalValue;
    }
    if (this._loginThrottleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginThrottleRate = this._loginThrottleRate;
    }
    if (this._loginThrottleState !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginThrottleState = this._loginThrottleState;
    }
    if (this._maxRequestStatusCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestStatusCount = this._maxRequestStatusCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAlias = this._nameAlias;
    }
    if (this._nodeExporter !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeExporter = this._nodeExporter;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._referer !== undefined) {
      hasAnyValues = true;
      internalValueResult.referer = this._referer;
    }
    if (this._serverHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverHeader = this._serverHeader;
    }
    if (this._sslProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProtocols = this._sslProtocols;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._visoreAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.visoreAccess = this._visoreAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyHttpSslConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminState = undefined;
      this._allowCredentials = undefined;
      this._allowOrigins = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._certificateAuthority.internalValue = undefined;
      this._cliOnlyMode = undefined;
      this._clientCertificateAuthenticationState = undefined;
      this._description = undefined;
      this._dhParameter = undefined;
      this._globalThrottleRate = undefined;
      this._globalThrottleState = undefined;
      this._globalThrottleUnit = undefined;
      this._keyRing.internalValue = undefined;
      this._loginThrottleRate = undefined;
      this._loginThrottleState = undefined;
      this._maxRequestStatusCount = undefined;
      this._name = undefined;
      this._nameAlias = undefined;
      this._nodeExporter = undefined;
      this._port = undefined;
      this._referer = undefined;
      this._serverHeader = undefined;
      this._sslProtocols = undefined;
      this._tags.internalValue = undefined;
      this._visoreAccess = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminState = value.adminState;
      this._allowCredentials = value.allowCredentials;
      this._allowOrigins = value.allowOrigins;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._certificateAuthority.internalValue = value.certificateAuthority;
      this._cliOnlyMode = value.cliOnlyMode;
      this._clientCertificateAuthenticationState = value.clientCertificateAuthenticationState;
      this._description = value.description;
      this._dhParameter = value.dhParameter;
      this._globalThrottleRate = value.globalThrottleRate;
      this._globalThrottleState = value.globalThrottleState;
      this._globalThrottleUnit = value.globalThrottleUnit;
      this._keyRing.internalValue = value.keyRing;
      this._loginThrottleRate = value.loginThrottleRate;
      this._loginThrottleState = value.loginThrottleState;
      this._maxRequestStatusCount = value.maxRequestStatusCount;
      this._name = value.name;
      this._nameAlias = value.nameAlias;
      this._nodeExporter = value.nodeExporter;
      this._port = value.port;
      this._referer = value.referer;
      this._serverHeader = value.serverHeader;
      this._sslProtocols = value.sslProtocols;
      this._tags.internalValue = value.tags;
      this._visoreAccess = value.visoreAccess;
    }
  }

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // allow_credentials - computed: true, optional: true, required: false
  private _allowCredentials?: string; 
  public get allowCredentials() {
    return this.getStringAttribute('allow_credentials');
  }
  public set allowCredentials(value: string) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_origins - computed: true, optional: true, required: false
  private _allowOrigins?: string; 
  public get allowOrigins() {
    return this.getStringAttribute('allow_origins');
  }
  public set allowOrigins(value: string) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ManagementAccessPolicyHttpSslConfigurationAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ManagementAccessPolicyHttpSslConfigurationAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // certificate_authority - computed: true, optional: true, required: false
  private _certificateAuthority = new ManagementAccessPolicyHttpSslConfigurationCertificateAuthorityOutputReference(this, "certificate_authority");
  public get certificateAuthority() {
    return this._certificateAuthority;
  }
  public putCertificateAuthority(value: ManagementAccessPolicyHttpSslConfigurationCertificateAuthority) {
    this._certificateAuthority.internalValue = value;
  }
  public resetCertificateAuthority() {
    this._certificateAuthority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority.internalValue;
  }

  // cli_only_mode - computed: true, optional: true, required: false
  private _cliOnlyMode?: string; 
  public get cliOnlyMode() {
    return this.getStringAttribute('cli_only_mode');
  }
  public set cliOnlyMode(value: string) {
    this._cliOnlyMode = value;
  }
  public resetCliOnlyMode() {
    this._cliOnlyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOnlyModeInput() {
    return this._cliOnlyMode;
  }

  // client_certificate_authentication_state - computed: true, optional: true, required: false
  private _clientCertificateAuthenticationState?: string; 
  public get clientCertificateAuthenticationState() {
    return this.getStringAttribute('client_certificate_authentication_state');
  }
  public set clientCertificateAuthenticationState(value: string) {
    this._clientCertificateAuthenticationState = value;
  }
  public resetClientCertificateAuthenticationState() {
    this._clientCertificateAuthenticationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateAuthenticationStateInput() {
    return this._clientCertificateAuthenticationState;
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

  // dh_parameter - computed: true, optional: true, required: false
  private _dhParameter?: string; 
  public get dhParameter() {
    return this.getStringAttribute('dh_parameter');
  }
  public set dhParameter(value: string) {
    this._dhParameter = value;
  }
  public resetDhParameter() {
    this._dhParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhParameterInput() {
    return this._dhParameter;
  }

  // global_throttle_rate - computed: true, optional: true, required: false
  private _globalThrottleRate?: string; 
  public get globalThrottleRate() {
    return this.getStringAttribute('global_throttle_rate');
  }
  public set globalThrottleRate(value: string) {
    this._globalThrottleRate = value;
  }
  public resetGlobalThrottleRate() {
    this._globalThrottleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalThrottleRateInput() {
    return this._globalThrottleRate;
  }

  // global_throttle_state - computed: true, optional: true, required: false
  private _globalThrottleState?: string; 
  public get globalThrottleState() {
    return this.getStringAttribute('global_throttle_state');
  }
  public set globalThrottleState(value: string) {
    this._globalThrottleState = value;
  }
  public resetGlobalThrottleState() {
    this._globalThrottleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalThrottleStateInput() {
    return this._globalThrottleState;
  }

  // global_throttle_unit - computed: true, optional: true, required: false
  private _globalThrottleUnit?: string; 
  public get globalThrottleUnit() {
    return this.getStringAttribute('global_throttle_unit');
  }
  public set globalThrottleUnit(value: string) {
    this._globalThrottleUnit = value;
  }
  public resetGlobalThrottleUnit() {
    this._globalThrottleUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalThrottleUnitInput() {
    return this._globalThrottleUnit;
  }

  // key_ring - computed: true, optional: true, required: false
  private _keyRing = new ManagementAccessPolicyHttpSslConfigurationKeyRingOutputReference(this, "key_ring");
  public get keyRing() {
    return this._keyRing;
  }
  public putKeyRing(value: ManagementAccessPolicyHttpSslConfigurationKeyRing) {
    this._keyRing.internalValue = value;
  }
  public resetKeyRing() {
    this._keyRing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingInput() {
    return this._keyRing.internalValue;
  }

  // login_throttle_rate - computed: true, optional: true, required: false
  private _loginThrottleRate?: string; 
  public get loginThrottleRate() {
    return this.getStringAttribute('login_throttle_rate');
  }
  public set loginThrottleRate(value: string) {
    this._loginThrottleRate = value;
  }
  public resetLoginThrottleRate() {
    this._loginThrottleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginThrottleRateInput() {
    return this._loginThrottleRate;
  }

  // login_throttle_state - computed: true, optional: true, required: false
  private _loginThrottleState?: string; 
  public get loginThrottleState() {
    return this.getStringAttribute('login_throttle_state');
  }
  public set loginThrottleState(value: string) {
    this._loginThrottleState = value;
  }
  public resetLoginThrottleState() {
    this._loginThrottleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginThrottleStateInput() {
    return this._loginThrottleState;
  }

  // max_request_status_count - computed: true, optional: true, required: false
  private _maxRequestStatusCount?: string; 
  public get maxRequestStatusCount() {
    return this.getStringAttribute('max_request_status_count');
  }
  public set maxRequestStatusCount(value: string) {
    this._maxRequestStatusCount = value;
  }
  public resetMaxRequestStatusCount() {
    this._maxRequestStatusCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestStatusCountInput() {
    return this._maxRequestStatusCount;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // node_exporter - computed: true, optional: true, required: false
  private _nodeExporter?: string; 
  public get nodeExporter() {
    return this.getStringAttribute('node_exporter');
  }
  public set nodeExporter(value: string) {
    this._nodeExporter = value;
  }
  public resetNodeExporter() {
    this._nodeExporter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeExporterInput() {
    return this._nodeExporter;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // referer - computed: true, optional: true, required: false
  private _referer?: string; 
  public get referer() {
    return this.getStringAttribute('referer');
  }
  public set referer(value: string) {
    this._referer = value;
  }
  public resetReferer() {
    this._referer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererInput() {
    return this._referer;
  }

  // server_header - computed: true, optional: true, required: false
  private _serverHeader?: string; 
  public get serverHeader() {
    return this.getStringAttribute('server_header');
  }
  public set serverHeader(value: string) {
    this._serverHeader = value;
  }
  public resetServerHeader() {
    this._serverHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHeaderInput() {
    return this._serverHeader;
  }

  // ssl_protocols - computed: true, optional: true, required: false
  private _sslProtocols?: string[]; 
  public get sslProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_protocols'));
  }
  public set sslProtocols(value: string[]) {
    this._sslProtocols = value;
  }
  public resetSslProtocols() {
    this._sslProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolsInput() {
    return this._sslProtocols;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ManagementAccessPolicyHttpSslConfigurationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ManagementAccessPolicyHttpSslConfigurationTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // visore_access - computed: true, optional: true, required: false
  private _visoreAccess?: string; 
  public get visoreAccess() {
    return this.getStringAttribute('visore_access');
  }
  public set visoreAccess(value: string) {
    this._visoreAccess = value;
  }
  public resetVisoreAccess() {
    this._visoreAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visoreAccessInput() {
    return this._visoreAccess;
  }
}
export interface ManagementAccessPolicySshAccessViaWebAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicySshAccessViaWebAnnotationsToTerraform(struct?: ManagementAccessPolicySshAccessViaWebAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicySshAccessViaWebAnnotationsToHclTerraform(struct?: ManagementAccessPolicySshAccessViaWebAnnotations | cdktf.IResolvable): any {
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

export class ManagementAccessPolicySshAccessViaWebAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicySshAccessViaWebAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicySshAccessViaWebAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicySshAccessViaWebAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicySshAccessViaWebAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicySshAccessViaWebAnnotationsOutputReference {
    return new ManagementAccessPolicySshAccessViaWebAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicySshAccessViaWebTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicySshAccessViaWebTagsToTerraform(struct?: ManagementAccessPolicySshAccessViaWebTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicySshAccessViaWebTagsToHclTerraform(struct?: ManagementAccessPolicySshAccessViaWebTags | cdktf.IResolvable): any {
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

export class ManagementAccessPolicySshAccessViaWebTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicySshAccessViaWebTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicySshAccessViaWebTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicySshAccessViaWebTagsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicySshAccessViaWebTags[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicySshAccessViaWebTagsOutputReference {
    return new ManagementAccessPolicySshAccessViaWebTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicySshAccessViaWeb {
  /**
  * The administrative state of the SSH access via WEB object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#admin_state ManagementAccessPolicy#admin_state}
  */
  readonly adminState?: string;
  /**
  * The annotation of the SSH access via WEB object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotation ManagementAccessPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotations ManagementAccessPolicy#annotations}
  */
  readonly annotations?: ManagementAccessPolicySshAccessViaWebAnnotations[] | cdktf.IResolvable;
  /**
  * The description of the SSH access via WEB object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#description ManagementAccessPolicy#description}
  */
  readonly description?: string;
  /**
  * The name of the SSH access via WEB object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#name ManagementAccessPolicy#name}
  */
  readonly name?: string;
  /**
  * The name alias of the SSH access via WEB object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#name_alias ManagementAccessPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#tags ManagementAccessPolicy#tags}
  */
  readonly tags?: ManagementAccessPolicySshAccessViaWebTags[] | cdktf.IResolvable;
}

export function managementAccessPolicySshAccessViaWebToTerraform(struct?: ManagementAccessPolicySshAccessViaWeb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_state: cdktf.stringToTerraform(struct!.adminState),
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(managementAccessPolicySshAccessViaWebAnnotationsToTerraform, false)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    name_alias: cdktf.stringToTerraform(struct!.nameAlias),
    tags: cdktf.listMapper(managementAccessPolicySshAccessViaWebTagsToTerraform, false)(struct!.tags),
  }
}


export function managementAccessPolicySshAccessViaWebToHclTerraform(struct?: ManagementAccessPolicySshAccessViaWeb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_state: {
      value: cdktf.stringToHclTerraform(struct!.adminState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(managementAccessPolicySshAccessViaWebAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementAccessPolicySshAccessViaWebAnnotationsList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    name_alias: {
      value: cdktf.stringToHclTerraform(struct!.nameAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(managementAccessPolicySshAccessViaWebTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementAccessPolicySshAccessViaWebTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementAccessPolicySshAccessViaWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementAccessPolicySshAccessViaWeb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminState !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminState = this._adminState;
    }
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAlias = this._nameAlias;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicySshAccessViaWeb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminState = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._nameAlias = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminState = value.adminState;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._description = value.description;
      this._name = value.name;
      this._nameAlias = value.nameAlias;
      this._tags.internalValue = value.tags;
    }
  }

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ManagementAccessPolicySshAccessViaWebAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ManagementAccessPolicySshAccessViaWebAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ManagementAccessPolicySshAccessViaWebTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ManagementAccessPolicySshAccessViaWebTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface ManagementAccessPolicySshServiceAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicySshServiceAnnotationsToTerraform(struct?: ManagementAccessPolicySshServiceAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicySshServiceAnnotationsToHclTerraform(struct?: ManagementAccessPolicySshServiceAnnotations | cdktf.IResolvable): any {
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

export class ManagementAccessPolicySshServiceAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicySshServiceAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicySshServiceAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicySshServiceAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicySshServiceAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicySshServiceAnnotationsOutputReference {
    return new ManagementAccessPolicySshServiceAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicySshServiceTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicySshServiceTagsToTerraform(struct?: ManagementAccessPolicySshServiceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicySshServiceTagsToHclTerraform(struct?: ManagementAccessPolicySshServiceTags | cdktf.IResolvable): any {
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

export class ManagementAccessPolicySshServiceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicySshServiceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicySshServiceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicySshServiceTagsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicySshServiceTags[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicySshServiceTagsOutputReference {
    return new ManagementAccessPolicySshServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicySshService {
  /**
  * The administrative state of the SSH Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#admin_state ManagementAccessPolicy#admin_state}
  */
  readonly adminState?: string;
  /**
  * The annotation of the SSH Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotation ManagementAccessPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotations ManagementAccessPolicy#annotations}
  */
  readonly annotations?: ManagementAccessPolicySshServiceAnnotations[] | cdktf.IResolvable;
  /**
  * The description of the SSH Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#description ManagementAccessPolicy#description}
  */
  readonly description?: string;
  /**
  * The supported algorithms for the host key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#host_key_algorithms ManagementAccessPolicy#host_key_algorithms}
  */
  readonly hostKeyAlgorithms?: string[];
  /**
  * The supported algorithms for key exchange.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#kex_algorithms ManagementAccessPolicy#kex_algorithms}
  */
  readonly kexAlgorithms?: string[];
  /**
  * The name of the SSH Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#name ManagementAccessPolicy#name}
  */
  readonly name?: string;
  /**
  * The name alias of the SSH Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#name_alias ManagementAccessPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Determines the state of password-based authentication to control administrator access to the management interfaces of the ACI fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#password_authentication_state ManagementAccessPolicy#password_authentication_state}
  */
  readonly passwordAuthenticationState?: string;
  /**
  * The port used by the SSH service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#port ManagementAccessPolicy#port}
  */
  readonly port?: string;
  /**
  * The ciphers supported by the SSH service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#ssh_ciphers ManagementAccessPolicy#ssh_ciphers}
  */
  readonly sshCiphers?: string[];
  /**
  * The message authentication codes (MACs) supported by the SSH service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#ssh_macs ManagementAccessPolicy#ssh_macs}
  */
  readonly sshMacs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#tags ManagementAccessPolicy#tags}
  */
  readonly tags?: ManagementAccessPolicySshServiceTags[] | cdktf.IResolvable;
}

export function managementAccessPolicySshServiceToTerraform(struct?: ManagementAccessPolicySshService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_state: cdktf.stringToTerraform(struct!.adminState),
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(managementAccessPolicySshServiceAnnotationsToTerraform, false)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    host_key_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostKeyAlgorithms),
    kex_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kexAlgorithms),
    name: cdktf.stringToTerraform(struct!.name),
    name_alias: cdktf.stringToTerraform(struct!.nameAlias),
    password_authentication_state: cdktf.stringToTerraform(struct!.passwordAuthenticationState),
    port: cdktf.stringToTerraform(struct!.port),
    ssh_ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshCiphers),
    ssh_macs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshMacs),
    tags: cdktf.listMapper(managementAccessPolicySshServiceTagsToTerraform, false)(struct!.tags),
  }
}


export function managementAccessPolicySshServiceToHclTerraform(struct?: ManagementAccessPolicySshService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_state: {
      value: cdktf.stringToHclTerraform(struct!.adminState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(managementAccessPolicySshServiceAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementAccessPolicySshServiceAnnotationsList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_key_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostKeyAlgorithms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kex_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kexAlgorithms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_alias: {
      value: cdktf.stringToHclTerraform(struct!.nameAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_authentication_state: {
      value: cdktf.stringToHclTerraform(struct!.passwordAuthenticationState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_ciphers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshCiphers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ssh_macs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshMacs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(managementAccessPolicySshServiceTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementAccessPolicySshServiceTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementAccessPolicySshServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementAccessPolicySshService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminState !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminState = this._adminState;
    }
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hostKeyAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKeyAlgorithms = this._hostKeyAlgorithms;
    }
    if (this._kexAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexAlgorithms = this._kexAlgorithms;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAlias = this._nameAlias;
    }
    if (this._passwordAuthenticationState !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordAuthenticationState = this._passwordAuthenticationState;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sshCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshCiphers = this._sshCiphers;
    }
    if (this._sshMacs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshMacs = this._sshMacs;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicySshService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminState = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._description = undefined;
      this._hostKeyAlgorithms = undefined;
      this._kexAlgorithms = undefined;
      this._name = undefined;
      this._nameAlias = undefined;
      this._passwordAuthenticationState = undefined;
      this._port = undefined;
      this._sshCiphers = undefined;
      this._sshMacs = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminState = value.adminState;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._description = value.description;
      this._hostKeyAlgorithms = value.hostKeyAlgorithms;
      this._kexAlgorithms = value.kexAlgorithms;
      this._name = value.name;
      this._nameAlias = value.nameAlias;
      this._passwordAuthenticationState = value.passwordAuthenticationState;
      this._port = value.port;
      this._sshCiphers = value.sshCiphers;
      this._sshMacs = value.sshMacs;
      this._tags.internalValue = value.tags;
    }
  }

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ManagementAccessPolicySshServiceAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ManagementAccessPolicySshServiceAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
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

  // host_key_algorithms - computed: true, optional: true, required: false
  private _hostKeyAlgorithms?: string[]; 
  public get hostKeyAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('host_key_algorithms'));
  }
  public set hostKeyAlgorithms(value: string[]) {
    this._hostKeyAlgorithms = value;
  }
  public resetHostKeyAlgorithms() {
    this._hostKeyAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyAlgorithmsInput() {
    return this._hostKeyAlgorithms;
  }

  // kex_algorithms - computed: true, optional: true, required: false
  private _kexAlgorithms?: string[]; 
  public get kexAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('kex_algorithms'));
  }
  public set kexAlgorithms(value: string[]) {
    this._kexAlgorithms = value;
  }
  public resetKexAlgorithms() {
    this._kexAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexAlgorithmsInput() {
    return this._kexAlgorithms;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // password_authentication_state - computed: true, optional: true, required: false
  private _passwordAuthenticationState?: string; 
  public get passwordAuthenticationState() {
    return this.getStringAttribute('password_authentication_state');
  }
  public set passwordAuthenticationState(value: string) {
    this._passwordAuthenticationState = value;
  }
  public resetPasswordAuthenticationState() {
    this._passwordAuthenticationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthenticationStateInput() {
    return this._passwordAuthenticationState;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssh_ciphers - computed: true, optional: true, required: false
  private _sshCiphers?: string[]; 
  public get sshCiphers() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_ciphers'));
  }
  public set sshCiphers(value: string[]) {
    this._sshCiphers = value;
  }
  public resetSshCiphers() {
    this._sshCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCiphersInput() {
    return this._sshCiphers;
  }

  // ssh_macs - computed: true, optional: true, required: false
  private _sshMacs?: string[]; 
  public get sshMacs() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_macs'));
  }
  public set sshMacs(value: string[]) {
    this._sshMacs = value;
  }
  public resetSshMacs() {
    this._sshMacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshMacsInput() {
    return this._sshMacs;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ManagementAccessPolicySshServiceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ManagementAccessPolicySshServiceTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface ManagementAccessPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicyTagsToTerraform(struct?: ManagementAccessPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicyTagsToHclTerraform(struct?: ManagementAccessPolicyTags | cdktf.IResolvable): any {
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

export class ManagementAccessPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicyTagsOutputReference {
    return new ManagementAccessPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicyTelnetServiceAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicyTelnetServiceAnnotationsToTerraform(struct?: ManagementAccessPolicyTelnetServiceAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicyTelnetServiceAnnotationsToHclTerraform(struct?: ManagementAccessPolicyTelnetServiceAnnotations | cdktf.IResolvable): any {
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

export class ManagementAccessPolicyTelnetServiceAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicyTelnetServiceAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyTelnetServiceAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicyTelnetServiceAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicyTelnetServiceAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicyTelnetServiceAnnotationsOutputReference {
    return new ManagementAccessPolicyTelnetServiceAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicyTelnetServiceTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#key ManagementAccessPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#value ManagementAccessPolicy#value}
  */
  readonly value: string;
}

export function managementAccessPolicyTelnetServiceTagsToTerraform(struct?: ManagementAccessPolicyTelnetServiceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAccessPolicyTelnetServiceTagsToHclTerraform(struct?: ManagementAccessPolicyTelnetServiceTags | cdktf.IResolvable): any {
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

export class ManagementAccessPolicyTelnetServiceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessPolicyTelnetServiceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyTelnetServiceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ManagementAccessPolicyTelnetServiceTagsList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessPolicyTelnetServiceTags[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessPolicyTelnetServiceTagsOutputReference {
    return new ManagementAccessPolicyTelnetServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessPolicyTelnetService {
  /**
  * The administrative state of the Telnet Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#admin_state ManagementAccessPolicy#admin_state}
  */
  readonly adminState?: string;
  /**
  * The annotation of the Telnet Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotation ManagementAccessPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#annotations ManagementAccessPolicy#annotations}
  */
  readonly annotations?: ManagementAccessPolicyTelnetServiceAnnotations[] | cdktf.IResolvable;
  /**
  * The description of the Telnet Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#description ManagementAccessPolicy#description}
  */
  readonly description?: string;
  /**
  * The name of the Telnet Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#name ManagementAccessPolicy#name}
  */
  readonly name?: string;
  /**
  * The name alias of the Telnet Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#name_alias ManagementAccessPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The port used by the Telnet service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#port ManagementAccessPolicy#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#tags ManagementAccessPolicy#tags}
  */
  readonly tags?: ManagementAccessPolicyTelnetServiceTags[] | cdktf.IResolvable;
}

export function managementAccessPolicyTelnetServiceToTerraform(struct?: ManagementAccessPolicyTelnetService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_state: cdktf.stringToTerraform(struct!.adminState),
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(managementAccessPolicyTelnetServiceAnnotationsToTerraform, false)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    name_alias: cdktf.stringToTerraform(struct!.nameAlias),
    port: cdktf.stringToTerraform(struct!.port),
    tags: cdktf.listMapper(managementAccessPolicyTelnetServiceTagsToTerraform, false)(struct!.tags),
  }
}


export function managementAccessPolicyTelnetServiceToHclTerraform(struct?: ManagementAccessPolicyTelnetService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_state: {
      value: cdktf.stringToHclTerraform(struct!.adminState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(managementAccessPolicyTelnetServiceAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementAccessPolicyTelnetServiceAnnotationsList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    name_alias: {
      value: cdktf.stringToHclTerraform(struct!.nameAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(managementAccessPolicyTelnetServiceTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ManagementAccessPolicyTelnetServiceTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementAccessPolicyTelnetServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementAccessPolicyTelnetService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminState !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminState = this._adminState;
    }
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAlias = this._nameAlias;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessPolicyTelnetService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminState = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._nameAlias = undefined;
      this._port = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminState = value.adminState;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._description = value.description;
      this._name = value.name;
      this._nameAlias = value.nameAlias;
      this._port = value.port;
      this._tags.internalValue = value.tags;
    }
  }

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ManagementAccessPolicyTelnetServiceAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ManagementAccessPolicyTelnetServiceAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ManagementAccessPolicyTelnetServiceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ManagementAccessPolicyTelnetServiceTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy aci_management_access_policy}
*/
export class ManagementAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_management_access_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementAccessPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementAccessPolicy to import
  * @param importFromId The id of the existing ManagementAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementAccessPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_management_access_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/management_access_policy aci_management_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_management_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._annotations.internalValue = config.annotations;
    this._description = config.description;
    this._httpService.internalValue = config.httpService;
    this._httpSslConfiguration.internalValue = config.httpSslConfiguration;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._ownerKey = config.ownerKey;
    this._ownerTag = config.ownerTag;
    this._sshAccessViaWeb.internalValue = config.sshAccessViaWeb;
    this._sshService.internalValue = config.sshService;
    this._strictSecurityOnApicOobSubnet = config.strictSecurityOnApicOobSubnet;
    this._tags.internalValue = config.tags;
    this._telnetService.internalValue = config.telnetService;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ManagementAccessPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ManagementAccessPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
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

  // http_service - computed: true, optional: true, required: false
  private _httpService = new ManagementAccessPolicyHttpServiceOutputReference(this, "http_service");
  public get httpService() {
    return this._httpService;
  }
  public putHttpService(value: ManagementAccessPolicyHttpService) {
    this._httpService.internalValue = value;
  }
  public resetHttpService() {
    this._httpService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServiceInput() {
    return this._httpService.internalValue;
  }

  // http_ssl_configuration - computed: true, optional: true, required: false
  private _httpSslConfiguration = new ManagementAccessPolicyHttpSslConfigurationOutputReference(this, "http_ssl_configuration");
  public get httpSslConfiguration() {
    return this._httpSslConfiguration;
  }
  public putHttpSslConfiguration(value: ManagementAccessPolicyHttpSslConfiguration) {
    this._httpSslConfiguration.internalValue = value;
  }
  public resetHttpSslConfiguration() {
    this._httpSslConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSslConfigurationInput() {
    return this._httpSslConfiguration.internalValue;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // owner_key - computed: true, optional: true, required: false
  private _ownerKey?: string; 
  public get ownerKey() {
    return this.getStringAttribute('owner_key');
  }
  public set ownerKey(value: string) {
    this._ownerKey = value;
  }
  public resetOwnerKey() {
    this._ownerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerKeyInput() {
    return this._ownerKey;
  }

  // owner_tag - computed: true, optional: true, required: false
  private _ownerTag?: string; 
  public get ownerTag() {
    return this.getStringAttribute('owner_tag');
  }
  public set ownerTag(value: string) {
    this._ownerTag = value;
  }
  public resetOwnerTag() {
    this._ownerTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTagInput() {
    return this._ownerTag;
  }

  // ssh_access_via_web - computed: true, optional: true, required: false
  private _sshAccessViaWeb = new ManagementAccessPolicySshAccessViaWebOutputReference(this, "ssh_access_via_web");
  public get sshAccessViaWeb() {
    return this._sshAccessViaWeb;
  }
  public putSshAccessViaWeb(value: ManagementAccessPolicySshAccessViaWeb) {
    this._sshAccessViaWeb.internalValue = value;
  }
  public resetSshAccessViaWeb() {
    this._sshAccessViaWeb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAccessViaWebInput() {
    return this._sshAccessViaWeb.internalValue;
  }

  // ssh_service - computed: true, optional: true, required: false
  private _sshService = new ManagementAccessPolicySshServiceOutputReference(this, "ssh_service");
  public get sshService() {
    return this._sshService;
  }
  public putSshService(value: ManagementAccessPolicySshService) {
    this._sshService.internalValue = value;
  }
  public resetSshService() {
    this._sshService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshServiceInput() {
    return this._sshService.internalValue;
  }

  // strict_security_on_apic_oob_subnet - computed: true, optional: true, required: false
  private _strictSecurityOnApicOobSubnet?: string; 
  public get strictSecurityOnApicOobSubnet() {
    return this.getStringAttribute('strict_security_on_apic_oob_subnet');
  }
  public set strictSecurityOnApicOobSubnet(value: string) {
    this._strictSecurityOnApicOobSubnet = value;
  }
  public resetStrictSecurityOnApicOobSubnet() {
    this._strictSecurityOnApicOobSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictSecurityOnApicOobSubnetInput() {
    return this._strictSecurityOnApicOobSubnet;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ManagementAccessPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ManagementAccessPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // telnet_service - computed: true, optional: true, required: false
  private _telnetService = new ManagementAccessPolicyTelnetServiceOutputReference(this, "telnet_service");
  public get telnetService() {
    return this._telnetService;
  }
  public putTelnetService(value: ManagementAccessPolicyTelnetService) {
    this._telnetService.internalValue = value;
  }
  public resetTelnetService() {
    this._telnetService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telnetServiceInput() {
    return this._telnetService.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      annotations: cdktf.listMapper(managementAccessPolicyAnnotationsToTerraform, false)(this._annotations.internalValue),
      description: cdktf.stringToTerraform(this._description),
      http_service: managementAccessPolicyHttpServiceToTerraform(this._httpService.internalValue),
      http_ssl_configuration: managementAccessPolicyHttpSslConfigurationToTerraform(this._httpSslConfiguration.internalValue),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      owner_key: cdktf.stringToTerraform(this._ownerKey),
      owner_tag: cdktf.stringToTerraform(this._ownerTag),
      ssh_access_via_web: managementAccessPolicySshAccessViaWebToTerraform(this._sshAccessViaWeb.internalValue),
      ssh_service: managementAccessPolicySshServiceToTerraform(this._sshService.internalValue),
      strict_security_on_apic_oob_subnet: cdktf.stringToTerraform(this._strictSecurityOnApicOobSubnet),
      tags: cdktf.listMapper(managementAccessPolicyTagsToTerraform, false)(this._tags.internalValue),
      telnet_service: managementAccessPolicyTelnetServiceToTerraform(this._telnetService.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.listMapperHcl(managementAccessPolicyAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagementAccessPolicyAnnotationsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_service: {
        value: managementAccessPolicyHttpServiceToHclTerraform(this._httpService.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagementAccessPolicyHttpService",
      },
      http_ssl_configuration: {
        value: managementAccessPolicyHttpSslConfigurationToHclTerraform(this._httpSslConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagementAccessPolicyHttpSslConfiguration",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_key: {
        value: cdktf.stringToHclTerraform(this._ownerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_tag: {
        value: cdktf.stringToHclTerraform(this._ownerTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_access_via_web: {
        value: managementAccessPolicySshAccessViaWebToHclTerraform(this._sshAccessViaWeb.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagementAccessPolicySshAccessViaWeb",
      },
      ssh_service: {
        value: managementAccessPolicySshServiceToHclTerraform(this._sshService.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagementAccessPolicySshService",
      },
      strict_security_on_apic_oob_subnet: {
        value: cdktf.stringToHclTerraform(this._strictSecurityOnApicOobSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(managementAccessPolicyTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagementAccessPolicyTagsList",
      },
      telnet_service: {
        value: managementAccessPolicyTelnetServiceToHclTerraform(this._telnetService.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagementAccessPolicyTelnetService",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
