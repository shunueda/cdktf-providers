// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProjectKubeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#id CloudProjectKube#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#kube_proxy_mode CloudProjectKube#kube_proxy_mode}
  */
  readonly kubeProxyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#load_balancers_subnet_id CloudProjectKube#load_balancers_subnet_id}
  */
  readonly loadBalancersSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#name CloudProjectKube#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#nodes_subnet_id CloudProjectKube#nodes_subnet_id}
  */
  readonly nodesSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#plan CloudProjectKube#plan}
  */
  readonly plan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#private_network_id CloudProjectKube#private_network_id}
  */
  readonly privateNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#region CloudProjectKube#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#service_name CloudProjectKube#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#update_policy CloudProjectKube#update_policy}
  */
  readonly updatePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#version CloudProjectKube#version}
  */
  readonly version?: string;
  /**
  * customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#customization CloudProjectKube#customization}
  */
  readonly customization?: CloudProjectKubeCustomization[] | cdktf.IResolvable;
  /**
  * customization_apiserver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#customization_apiserver CloudProjectKube#customization_apiserver}
  */
  readonly customizationApiserver?: CloudProjectKubeCustomizationApiserverA[] | cdktf.IResolvable;
  /**
  * customization_kube_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#customization_kube_proxy CloudProjectKube#customization_kube_proxy}
  */
  readonly customizationKubeProxy?: CloudProjectKubeCustomizationKubeProxy;
  /**
  * private_network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#private_network_configuration CloudProjectKube#private_network_configuration}
  */
  readonly privateNetworkConfiguration?: CloudProjectKubePrivateNetworkConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#timeouts CloudProjectKube#timeouts}
  */
  readonly timeouts?: CloudProjectKubeTimeouts;
}
export interface CloudProjectKubeKubeconfigAttributes {
}

export function cloudProjectKubeKubeconfigAttributesToTerraform(struct?: CloudProjectKubeKubeconfigAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudProjectKubeKubeconfigAttributesToHclTerraform(struct?: CloudProjectKubeKubeconfigAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudProjectKubeKubeconfigAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectKubeKubeconfigAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectKubeKubeconfigAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }
}

export class CloudProjectKubeKubeconfigAttributesList extends cdktf.ComplexList {

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
  public get(index: number): CloudProjectKubeKubeconfigAttributesOutputReference {
    return new CloudProjectKubeKubeconfigAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectKubeCustomizationApiserverAdmissionplugins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#disabled CloudProjectKube#disabled}
  */
  readonly disabled?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#enabled CloudProjectKube#enabled}
  */
  readonly enabled?: string[];
}

export function cloudProjectKubeCustomizationApiserverAdmissionpluginsToTerraform(struct?: CloudProjectKubeCustomizationApiserverAdmissionplugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabled),
    enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabled),
  }
}


export function cloudProjectKubeCustomizationApiserverAdmissionpluginsToHclTerraform(struct?: CloudProjectKubeCustomizationApiserverAdmissionplugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disabled),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabled),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectKubeCustomizationApiserverAdmissionpluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectKubeCustomizationApiserverAdmissionplugins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectKubeCustomizationApiserverAdmissionplugins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._enabled = value.enabled;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: string[]; 
  public get disabled() {
    return this.getListAttribute('disabled');
  }
  public set disabled(value: string[]) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string[]; 
  public get enabled() {
    return this.getListAttribute('enabled');
  }
  public set enabled(value: string[]) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class CloudProjectKubeCustomizationApiserverAdmissionpluginsList extends cdktf.ComplexList {
  public internalValue? : CloudProjectKubeCustomizationApiserverAdmissionplugins[] | cdktf.IResolvable

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
  public get(index: number): CloudProjectKubeCustomizationApiserverAdmissionpluginsOutputReference {
    return new CloudProjectKubeCustomizationApiserverAdmissionpluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectKubeCustomizationApiserver {
  /**
  * admissionplugins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#admissionplugins CloudProjectKube#admissionplugins}
  */
  readonly admissionplugins?: CloudProjectKubeCustomizationApiserverAdmissionplugins[] | cdktf.IResolvable;
}

export function cloudProjectKubeCustomizationApiserverToTerraform(struct?: CloudProjectKubeCustomizationApiserver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admissionplugins: cdktf.listMapper(cloudProjectKubeCustomizationApiserverAdmissionpluginsToTerraform, true)(struct!.admissionplugins),
  }
}


export function cloudProjectKubeCustomizationApiserverToHclTerraform(struct?: CloudProjectKubeCustomizationApiserver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admissionplugins: {
      value: cdktf.listMapperHcl(cloudProjectKubeCustomizationApiserverAdmissionpluginsToHclTerraform, true)(struct!.admissionplugins),
      isBlock: true,
      type: "set",
      storageClassType: "CloudProjectKubeCustomizationApiserverAdmissionpluginsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectKubeCustomizationApiserverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectKubeCustomizationApiserver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admissionplugins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admissionplugins = this._admissionplugins?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectKubeCustomizationApiserver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admissionplugins.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admissionplugins.internalValue = value.admissionplugins;
    }
  }

  // admissionplugins - computed: false, optional: true, required: false
  private _admissionplugins = new CloudProjectKubeCustomizationApiserverAdmissionpluginsList(this, "admissionplugins", true);
  public get admissionplugins() {
    return this._admissionplugins;
  }
  public putAdmissionplugins(value: CloudProjectKubeCustomizationApiserverAdmissionplugins[] | cdktf.IResolvable) {
    this._admissionplugins.internalValue = value;
  }
  public resetAdmissionplugins() {
    this._admissionplugins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionpluginsInput() {
    return this._admissionplugins.internalValue;
  }
}

export class CloudProjectKubeCustomizationApiserverList extends cdktf.ComplexList {
  public internalValue? : CloudProjectKubeCustomizationApiserver[] | cdktf.IResolvable

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
  public get(index: number): CloudProjectKubeCustomizationApiserverOutputReference {
    return new CloudProjectKubeCustomizationApiserverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectKubeCustomization {
  /**
  * apiserver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#apiserver CloudProjectKube#apiserver}
  */
  readonly apiserver?: CloudProjectKubeCustomizationApiserver[] | cdktf.IResolvable;
}

export function cloudProjectKubeCustomizationToTerraform(struct?: CloudProjectKubeCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apiserver: cdktf.listMapper(cloudProjectKubeCustomizationApiserverToTerraform, true)(struct!.apiserver),
  }
}


export function cloudProjectKubeCustomizationToHclTerraform(struct?: CloudProjectKubeCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apiserver: {
      value: cdktf.listMapperHcl(cloudProjectKubeCustomizationApiserverToHclTerraform, true)(struct!.apiserver),
      isBlock: true,
      type: "set",
      storageClassType: "CloudProjectKubeCustomizationApiserverList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectKubeCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectKubeCustomization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiserver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiserver = this._apiserver?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectKubeCustomization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiserver.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiserver.internalValue = value.apiserver;
    }
  }

  // apiserver - computed: false, optional: true, required: false
  private _apiserver = new CloudProjectKubeCustomizationApiserverList(this, "apiserver", true);
  public get apiserver() {
    return this._apiserver;
  }
  public putApiserver(value: CloudProjectKubeCustomizationApiserver[] | cdktf.IResolvable) {
    this._apiserver.internalValue = value;
  }
  public resetApiserver() {
    this._apiserver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiserverInput() {
    return this._apiserver.internalValue;
  }
}

export class CloudProjectKubeCustomizationList extends cdktf.ComplexList {
  public internalValue? : CloudProjectKubeCustomization[] | cdktf.IResolvable

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
  public get(index: number): CloudProjectKubeCustomizationOutputReference {
    return new CloudProjectKubeCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectKubeCustomizationApiserverAdmissionpluginsA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#disabled CloudProjectKube#disabled}
  */
  readonly disabled?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#enabled CloudProjectKube#enabled}
  */
  readonly enabled?: string[];
}

export function cloudProjectKubeCustomizationApiserverAdmissionpluginsAToTerraform(struct?: CloudProjectKubeCustomizationApiserverAdmissionpluginsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabled),
    enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabled),
  }
}


export function cloudProjectKubeCustomizationApiserverAdmissionpluginsAToHclTerraform(struct?: CloudProjectKubeCustomizationApiserverAdmissionpluginsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disabled),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabled),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectKubeCustomizationApiserverAdmissionpluginsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectKubeCustomizationApiserverAdmissionpluginsA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectKubeCustomizationApiserverAdmissionpluginsA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._enabled = value.enabled;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: string[]; 
  public get disabled() {
    return this.getListAttribute('disabled');
  }
  public set disabled(value: string[]) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string[]; 
  public get enabled() {
    return this.getListAttribute('enabled');
  }
  public set enabled(value: string[]) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class CloudProjectKubeCustomizationApiserverAdmissionpluginsAList extends cdktf.ComplexList {
  public internalValue? : CloudProjectKubeCustomizationApiserverAdmissionpluginsA[] | cdktf.IResolvable

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
  public get(index: number): CloudProjectKubeCustomizationApiserverAdmissionpluginsAOutputReference {
    return new CloudProjectKubeCustomizationApiserverAdmissionpluginsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectKubeCustomizationApiserverA {
  /**
  * admissionplugins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#admissionplugins CloudProjectKube#admissionplugins}
  */
  readonly admissionplugins?: CloudProjectKubeCustomizationApiserverAdmissionpluginsA[] | cdktf.IResolvable;
}

export function cloudProjectKubeCustomizationApiserverAToTerraform(struct?: CloudProjectKubeCustomizationApiserverA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admissionplugins: cdktf.listMapper(cloudProjectKubeCustomizationApiserverAdmissionpluginsAToTerraform, true)(struct!.admissionplugins),
  }
}


export function cloudProjectKubeCustomizationApiserverAToHclTerraform(struct?: CloudProjectKubeCustomizationApiserverA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admissionplugins: {
      value: cdktf.listMapperHcl(cloudProjectKubeCustomizationApiserverAdmissionpluginsAToHclTerraform, true)(struct!.admissionplugins),
      isBlock: true,
      type: "set",
      storageClassType: "CloudProjectKubeCustomizationApiserverAdmissionpluginsAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectKubeCustomizationApiserverAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectKubeCustomizationApiserverA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admissionplugins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admissionplugins = this._admissionplugins?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectKubeCustomizationApiserverA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admissionplugins.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admissionplugins.internalValue = value.admissionplugins;
    }
  }

  // admissionplugins - computed: false, optional: true, required: false
  private _admissionplugins = new CloudProjectKubeCustomizationApiserverAdmissionpluginsAList(this, "admissionplugins", true);
  public get admissionplugins() {
    return this._admissionplugins;
  }
  public putAdmissionplugins(value: CloudProjectKubeCustomizationApiserverAdmissionpluginsA[] | cdktf.IResolvable) {
    this._admissionplugins.internalValue = value;
  }
  public resetAdmissionplugins() {
    this._admissionplugins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionpluginsInput() {
    return this._admissionplugins.internalValue;
  }
}

export class CloudProjectKubeCustomizationApiserverAList extends cdktf.ComplexList {
  public internalValue? : CloudProjectKubeCustomizationApiserverA[] | cdktf.IResolvable

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
  public get(index: number): CloudProjectKubeCustomizationApiserverAOutputReference {
    return new CloudProjectKubeCustomizationApiserverAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectKubeCustomizationKubeProxyIptables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#min_sync_period CloudProjectKube#min_sync_period}
  */
  readonly minSyncPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#sync_period CloudProjectKube#sync_period}
  */
  readonly syncPeriod?: string;
}

export function cloudProjectKubeCustomizationKubeProxyIptablesToTerraform(struct?: CloudProjectKubeCustomizationKubeProxyIptablesOutputReference | CloudProjectKubeCustomizationKubeProxyIptables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_sync_period: cdktf.stringToTerraform(struct!.minSyncPeriod),
    sync_period: cdktf.stringToTerraform(struct!.syncPeriod),
  }
}


export function cloudProjectKubeCustomizationKubeProxyIptablesToHclTerraform(struct?: CloudProjectKubeCustomizationKubeProxyIptablesOutputReference | CloudProjectKubeCustomizationKubeProxyIptables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_sync_period: {
      value: cdktf.stringToHclTerraform(struct!.minSyncPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_period: {
      value: cdktf.stringToHclTerraform(struct!.syncPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectKubeCustomizationKubeProxyIptablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectKubeCustomizationKubeProxyIptables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minSyncPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSyncPeriod = this._minSyncPeriod;
    }
    if (this._syncPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPeriod = this._syncPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectKubeCustomizationKubeProxyIptables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minSyncPeriod = undefined;
      this._syncPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minSyncPeriod = value.minSyncPeriod;
      this._syncPeriod = value.syncPeriod;
    }
  }

  // min_sync_period - computed: false, optional: true, required: false
  private _minSyncPeriod?: string; 
  public get minSyncPeriod() {
    return this.getStringAttribute('min_sync_period');
  }
  public set minSyncPeriod(value: string) {
    this._minSyncPeriod = value;
  }
  public resetMinSyncPeriod() {
    this._minSyncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSyncPeriodInput() {
    return this._minSyncPeriod;
  }

  // sync_period - computed: false, optional: true, required: false
  private _syncPeriod?: string; 
  public get syncPeriod() {
    return this.getStringAttribute('sync_period');
  }
  public set syncPeriod(value: string) {
    this._syncPeriod = value;
  }
  public resetSyncPeriod() {
    this._syncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPeriodInput() {
    return this._syncPeriod;
  }
}
export interface CloudProjectKubeCustomizationKubeProxyIpvs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#min_sync_period CloudProjectKube#min_sync_period}
  */
  readonly minSyncPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#scheduler CloudProjectKube#scheduler}
  */
  readonly scheduler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#sync_period CloudProjectKube#sync_period}
  */
  readonly syncPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#tcp_fin_timeout CloudProjectKube#tcp_fin_timeout}
  */
  readonly tcpFinTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#tcp_timeout CloudProjectKube#tcp_timeout}
  */
  readonly tcpTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#udp_timeout CloudProjectKube#udp_timeout}
  */
  readonly udpTimeout?: string;
}

export function cloudProjectKubeCustomizationKubeProxyIpvsToTerraform(struct?: CloudProjectKubeCustomizationKubeProxyIpvsOutputReference | CloudProjectKubeCustomizationKubeProxyIpvs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_sync_period: cdktf.stringToTerraform(struct!.minSyncPeriod),
    scheduler: cdktf.stringToTerraform(struct!.scheduler),
    sync_period: cdktf.stringToTerraform(struct!.syncPeriod),
    tcp_fin_timeout: cdktf.stringToTerraform(struct!.tcpFinTimeout),
    tcp_timeout: cdktf.stringToTerraform(struct!.tcpTimeout),
    udp_timeout: cdktf.stringToTerraform(struct!.udpTimeout),
  }
}


export function cloudProjectKubeCustomizationKubeProxyIpvsToHclTerraform(struct?: CloudProjectKubeCustomizationKubeProxyIpvsOutputReference | CloudProjectKubeCustomizationKubeProxyIpvs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_sync_period: {
      value: cdktf.stringToHclTerraform(struct!.minSyncPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduler: {
      value: cdktf.stringToHclTerraform(struct!.scheduler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_period: {
      value: cdktf.stringToHclTerraform(struct!.syncPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_fin_timeout: {
      value: cdktf.stringToHclTerraform(struct!.tcpFinTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_timeout: {
      value: cdktf.stringToHclTerraform(struct!.tcpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_timeout: {
      value: cdktf.stringToHclTerraform(struct!.udpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectKubeCustomizationKubeProxyIpvsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectKubeCustomizationKubeProxyIpvs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minSyncPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSyncPeriod = this._minSyncPeriod;
    }
    if (this._scheduler !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduler = this._scheduler;
    }
    if (this._syncPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPeriod = this._syncPeriod;
    }
    if (this._tcpFinTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFinTimeout = this._tcpFinTimeout;
    }
    if (this._tcpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpTimeout = this._tcpTimeout;
    }
    if (this._udpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTimeout = this._udpTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectKubeCustomizationKubeProxyIpvs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minSyncPeriod = undefined;
      this._scheduler = undefined;
      this._syncPeriod = undefined;
      this._tcpFinTimeout = undefined;
      this._tcpTimeout = undefined;
      this._udpTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minSyncPeriod = value.minSyncPeriod;
      this._scheduler = value.scheduler;
      this._syncPeriod = value.syncPeriod;
      this._tcpFinTimeout = value.tcpFinTimeout;
      this._tcpTimeout = value.tcpTimeout;
      this._udpTimeout = value.udpTimeout;
    }
  }

  // min_sync_period - computed: false, optional: true, required: false
  private _minSyncPeriod?: string; 
  public get minSyncPeriod() {
    return this.getStringAttribute('min_sync_period');
  }
  public set minSyncPeriod(value: string) {
    this._minSyncPeriod = value;
  }
  public resetMinSyncPeriod() {
    this._minSyncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSyncPeriodInput() {
    return this._minSyncPeriod;
  }

  // scheduler - computed: false, optional: true, required: false
  private _scheduler?: string; 
  public get scheduler() {
    return this.getStringAttribute('scheduler');
  }
  public set scheduler(value: string) {
    this._scheduler = value;
  }
  public resetScheduler() {
    this._scheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler;
  }

  // sync_period - computed: false, optional: true, required: false
  private _syncPeriod?: string; 
  public get syncPeriod() {
    return this.getStringAttribute('sync_period');
  }
  public set syncPeriod(value: string) {
    this._syncPeriod = value;
  }
  public resetSyncPeriod() {
    this._syncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPeriodInput() {
    return this._syncPeriod;
  }

  // tcp_fin_timeout - computed: false, optional: true, required: false
  private _tcpFinTimeout?: string; 
  public get tcpFinTimeout() {
    return this.getStringAttribute('tcp_fin_timeout');
  }
  public set tcpFinTimeout(value: string) {
    this._tcpFinTimeout = value;
  }
  public resetTcpFinTimeout() {
    this._tcpFinTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinTimeoutInput() {
    return this._tcpFinTimeout;
  }

  // tcp_timeout - computed: false, optional: true, required: false
  private _tcpTimeout?: string; 
  public get tcpTimeout() {
    return this.getStringAttribute('tcp_timeout');
  }
  public set tcpTimeout(value: string) {
    this._tcpTimeout = value;
  }
  public resetTcpTimeout() {
    this._tcpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeoutInput() {
    return this._tcpTimeout;
  }

  // udp_timeout - computed: false, optional: true, required: false
  private _udpTimeout?: string; 
  public get udpTimeout() {
    return this.getStringAttribute('udp_timeout');
  }
  public set udpTimeout(value: string) {
    this._udpTimeout = value;
  }
  public resetUdpTimeout() {
    this._udpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTimeoutInput() {
    return this._udpTimeout;
  }
}
export interface CloudProjectKubeCustomizationKubeProxy {
  /**
  * iptables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#iptables CloudProjectKube#iptables}
  */
  readonly iptables?: CloudProjectKubeCustomizationKubeProxyIptables;
  /**
  * ipvs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#ipvs CloudProjectKube#ipvs}
  */
  readonly ipvs?: CloudProjectKubeCustomizationKubeProxyIpvs;
}

export function cloudProjectKubeCustomizationKubeProxyToTerraform(struct?: CloudProjectKubeCustomizationKubeProxyOutputReference | CloudProjectKubeCustomizationKubeProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iptables: cloudProjectKubeCustomizationKubeProxyIptablesToTerraform(struct!.iptables),
    ipvs: cloudProjectKubeCustomizationKubeProxyIpvsToTerraform(struct!.ipvs),
  }
}


export function cloudProjectKubeCustomizationKubeProxyToHclTerraform(struct?: CloudProjectKubeCustomizationKubeProxyOutputReference | CloudProjectKubeCustomizationKubeProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iptables: {
      value: cloudProjectKubeCustomizationKubeProxyIptablesToHclTerraform(struct!.iptables),
      isBlock: true,
      type: "set",
      storageClassType: "CloudProjectKubeCustomizationKubeProxyIptablesList",
    },
    ipvs: {
      value: cloudProjectKubeCustomizationKubeProxyIpvsToHclTerraform(struct!.ipvs),
      isBlock: true,
      type: "set",
      storageClassType: "CloudProjectKubeCustomizationKubeProxyIpvsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectKubeCustomizationKubeProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectKubeCustomizationKubeProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iptables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptables = this._iptables?.internalValue;
    }
    if (this._ipvs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipvs = this._ipvs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectKubeCustomizationKubeProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iptables.internalValue = undefined;
      this._ipvs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iptables.internalValue = value.iptables;
      this._ipvs.internalValue = value.ipvs;
    }
  }

  // iptables - computed: false, optional: true, required: false
  private _iptables = new CloudProjectKubeCustomizationKubeProxyIptablesOutputReference(this, "iptables");
  public get iptables() {
    return this._iptables;
  }
  public putIptables(value: CloudProjectKubeCustomizationKubeProxyIptables) {
    this._iptables.internalValue = value;
  }
  public resetIptables() {
    this._iptables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptablesInput() {
    return this._iptables.internalValue;
  }

  // ipvs - computed: false, optional: true, required: false
  private _ipvs = new CloudProjectKubeCustomizationKubeProxyIpvsOutputReference(this, "ipvs");
  public get ipvs() {
    return this._ipvs;
  }
  public putIpvs(value: CloudProjectKubeCustomizationKubeProxyIpvs) {
    this._ipvs.internalValue = value;
  }
  public resetIpvs() {
    this._ipvs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipvsInput() {
    return this._ipvs.internalValue;
  }
}
export interface CloudProjectKubePrivateNetworkConfiguration {
  /**
  * If defined, all egress traffic will be routed towards this IP address, which should belong to the private network. Empty string means disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#default_vrack_gateway CloudProjectKube#default_vrack_gateway}
  */
  readonly defaultVrackGateway: string;
  /**
  * Defines whether routing should default to using the nodes' private interface, instead of their public interface. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#private_network_routing_as_default CloudProjectKube#private_network_routing_as_default}
  */
  readonly privateNetworkRoutingAsDefault: boolean | cdktf.IResolvable;
}

export function cloudProjectKubePrivateNetworkConfigurationToTerraform(struct?: CloudProjectKubePrivateNetworkConfigurationOutputReference | CloudProjectKubePrivateNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_vrack_gateway: cdktf.stringToTerraform(struct!.defaultVrackGateway),
    private_network_routing_as_default: cdktf.booleanToTerraform(struct!.privateNetworkRoutingAsDefault),
  }
}


export function cloudProjectKubePrivateNetworkConfigurationToHclTerraform(struct?: CloudProjectKubePrivateNetworkConfigurationOutputReference | CloudProjectKubePrivateNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_vrack_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultVrackGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_network_routing_as_default: {
      value: cdktf.booleanToHclTerraform(struct!.privateNetworkRoutingAsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectKubePrivateNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectKubePrivateNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultVrackGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVrackGateway = this._defaultVrackGateway;
    }
    if (this._privateNetworkRoutingAsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworkRoutingAsDefault = this._privateNetworkRoutingAsDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectKubePrivateNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultVrackGateway = undefined;
      this._privateNetworkRoutingAsDefault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultVrackGateway = value.defaultVrackGateway;
      this._privateNetworkRoutingAsDefault = value.privateNetworkRoutingAsDefault;
    }
  }

  // default_vrack_gateway - computed: false, optional: false, required: true
  private _defaultVrackGateway?: string; 
  public get defaultVrackGateway() {
    return this.getStringAttribute('default_vrack_gateway');
  }
  public set defaultVrackGateway(value: string) {
    this._defaultVrackGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVrackGatewayInput() {
    return this._defaultVrackGateway;
  }

  // private_network_routing_as_default - computed: false, optional: false, required: true
  private _privateNetworkRoutingAsDefault?: boolean | cdktf.IResolvable; 
  public get privateNetworkRoutingAsDefault() {
    return this.getBooleanAttribute('private_network_routing_as_default');
  }
  public set privateNetworkRoutingAsDefault(value: boolean | cdktf.IResolvable) {
    this._privateNetworkRoutingAsDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkRoutingAsDefaultInput() {
    return this._privateNetworkRoutingAsDefault;
  }
}
export interface CloudProjectKubeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#create CloudProjectKube#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#default CloudProjectKube#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#delete CloudProjectKube#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#read CloudProjectKube#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#update CloudProjectKube#update}
  */
  readonly update?: string;
}

export function cloudProjectKubeTimeoutsToTerraform(struct?: CloudProjectKubeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudProjectKubeTimeoutsToHclTerraform(struct?: CloudProjectKubeTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class CloudProjectKubeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectKubeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectKubeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube ovh_cloud_project_kube}
*/
export class CloudProjectKube extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_kube";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProjectKube resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProjectKube to import
  * @param importFromId The id of the existing CloudProjectKube that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProjectKube to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_kube", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube ovh_cloud_project_kube} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProjectKubeConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProjectKubeConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_kube',
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
    this._id = config.id;
    this._kubeProxyMode = config.kubeProxyMode;
    this._loadBalancersSubnetId = config.loadBalancersSubnetId;
    this._name = config.name;
    this._nodesSubnetId = config.nodesSubnetId;
    this._plan = config.plan;
    this._privateNetworkId = config.privateNetworkId;
    this._region = config.region;
    this._serviceName = config.serviceName;
    this._updatePolicy = config.updatePolicy;
    this._version = config.version;
    this._customization.internalValue = config.customization;
    this._customizationApiserver.internalValue = config.customizationApiserver;
    this._customizationKubeProxy.internalValue = config.customizationKubeProxy;
    this._privateNetworkConfiguration.internalValue = config.privateNetworkConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // control_plane_is_up_to_date - computed: true, optional: false, required: false
  public get controlPlaneIsUpToDate() {
    return this.getBooleanAttribute('control_plane_is_up_to_date');
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

  // is_up_to_date - computed: true, optional: false, required: false
  public get isUpToDate() {
    return this.getBooleanAttribute('is_up_to_date');
  }

  // kube_proxy_mode - computed: true, optional: true, required: false
  private _kubeProxyMode?: string; 
  public get kubeProxyMode() {
    return this.getStringAttribute('kube_proxy_mode');
  }
  public set kubeProxyMode(value: string) {
    this._kubeProxyMode = value;
  }
  public resetKubeProxyMode() {
    this._kubeProxyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeProxyModeInput() {
    return this._kubeProxyMode;
  }

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }

  // kubeconfig_attributes - computed: true, optional: false, required: false
  private _kubeconfigAttributes = new CloudProjectKubeKubeconfigAttributesList(this, "kubeconfig_attributes", false);
  public get kubeconfigAttributes() {
    return this._kubeconfigAttributes;
  }

  // load_balancers_subnet_id - computed: false, optional: true, required: false
  private _loadBalancersSubnetId?: string; 
  public get loadBalancersSubnetId() {
    return this.getStringAttribute('load_balancers_subnet_id');
  }
  public set loadBalancersSubnetId(value: string) {
    this._loadBalancersSubnetId = value;
  }
  public resetLoadBalancersSubnetId() {
    this._loadBalancersSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersSubnetIdInput() {
    return this._loadBalancersSubnetId;
  }

  // name - computed: false, optional: true, required: false
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

  // next_upgrade_versions - computed: true, optional: false, required: false
  public get nextUpgradeVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('next_upgrade_versions'));
  }

  // nodes_subnet_id - computed: true, optional: true, required: false
  private _nodesSubnetId?: string; 
  public get nodesSubnetId() {
    return this.getStringAttribute('nodes_subnet_id');
  }
  public set nodesSubnetId(value: string) {
    this._nodesSubnetId = value;
  }
  public resetNodesSubnetId() {
    this._nodesSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesSubnetIdInput() {
    return this._nodesSubnetId;
  }

  // nodes_url - computed: true, optional: false, required: false
  public get nodesUrl() {
    return this.getStringAttribute('nodes_url');
  }

  // plan - computed: true, optional: true, required: false
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // private_network_id - computed: false, optional: true, required: false
  private _privateNetworkId?: string; 
  public get privateNetworkId() {
    return this.getStringAttribute('private_network_id');
  }
  public set privateNetworkId(value: string) {
    this._privateNetworkId = value;
  }
  public resetPrivateNetworkId() {
    this._privateNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkIdInput() {
    return this._privateNetworkId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // update_policy - computed: true, optional: true, required: false
  private _updatePolicy?: string; 
  public get updatePolicy() {
    return this.getStringAttribute('update_policy');
  }
  public set updatePolicy(value: string) {
    this._updatePolicy = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // customization - computed: false, optional: true, required: false
  private _customization = new CloudProjectKubeCustomizationList(this, "customization", true);
  public get customization() {
    return this._customization;
  }
  public putCustomization(value: CloudProjectKubeCustomization[] | cdktf.IResolvable) {
    this._customization.internalValue = value;
  }
  public resetCustomization() {
    this._customization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationInput() {
    return this._customization.internalValue;
  }

  // customization_apiserver - computed: false, optional: true, required: false
  private _customizationApiserver = new CloudProjectKubeCustomizationApiserverAList(this, "customization_apiserver", true);
  public get customizationApiserver() {
    return this._customizationApiserver;
  }
  public putCustomizationApiserver(value: CloudProjectKubeCustomizationApiserverA[] | cdktf.IResolvable) {
    this._customizationApiserver.internalValue = value;
  }
  public resetCustomizationApiserver() {
    this._customizationApiserver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationApiserverInput() {
    return this._customizationApiserver.internalValue;
  }

  // customization_kube_proxy - computed: false, optional: true, required: false
  private _customizationKubeProxy = new CloudProjectKubeCustomizationKubeProxyOutputReference(this, "customization_kube_proxy");
  public get customizationKubeProxy() {
    return this._customizationKubeProxy;
  }
  public putCustomizationKubeProxy(value: CloudProjectKubeCustomizationKubeProxy) {
    this._customizationKubeProxy.internalValue = value;
  }
  public resetCustomizationKubeProxy() {
    this._customizationKubeProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationKubeProxyInput() {
    return this._customizationKubeProxy.internalValue;
  }

  // private_network_configuration - computed: false, optional: true, required: false
  private _privateNetworkConfiguration = new CloudProjectKubePrivateNetworkConfigurationOutputReference(this, "private_network_configuration");
  public get privateNetworkConfiguration() {
    return this._privateNetworkConfiguration;
  }
  public putPrivateNetworkConfiguration(value: CloudProjectKubePrivateNetworkConfiguration) {
    this._privateNetworkConfiguration.internalValue = value;
  }
  public resetPrivateNetworkConfiguration() {
    this._privateNetworkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkConfigurationInput() {
    return this._privateNetworkConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudProjectKubeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudProjectKubeTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      kube_proxy_mode: cdktf.stringToTerraform(this._kubeProxyMode),
      load_balancers_subnet_id: cdktf.stringToTerraform(this._loadBalancersSubnetId),
      name: cdktf.stringToTerraform(this._name),
      nodes_subnet_id: cdktf.stringToTerraform(this._nodesSubnetId),
      plan: cdktf.stringToTerraform(this._plan),
      private_network_id: cdktf.stringToTerraform(this._privateNetworkId),
      region: cdktf.stringToTerraform(this._region),
      service_name: cdktf.stringToTerraform(this._serviceName),
      update_policy: cdktf.stringToTerraform(this._updatePolicy),
      version: cdktf.stringToTerraform(this._version),
      customization: cdktf.listMapper(cloudProjectKubeCustomizationToTerraform, true)(this._customization.internalValue),
      customization_apiserver: cdktf.listMapper(cloudProjectKubeCustomizationApiserverAToTerraform, true)(this._customizationApiserver.internalValue),
      customization_kube_proxy: cloudProjectKubeCustomizationKubeProxyToTerraform(this._customizationKubeProxy.internalValue),
      private_network_configuration: cloudProjectKubePrivateNetworkConfigurationToTerraform(this._privateNetworkConfiguration.internalValue),
      timeouts: cloudProjectKubeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kube_proxy_mode: {
        value: cdktf.stringToHclTerraform(this._kubeProxyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancers_subnet_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancersSubnetId),
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
      nodes_subnet_id: {
        value: cdktf.stringToHclTerraform(this._nodesSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_network_id: {
        value: cdktf.stringToHclTerraform(this._privateNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      update_policy: {
        value: cdktf.stringToHclTerraform(this._updatePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customization: {
        value: cdktf.listMapperHcl(cloudProjectKubeCustomizationToHclTerraform, true)(this._customization.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudProjectKubeCustomizationList",
      },
      customization_apiserver: {
        value: cdktf.listMapperHcl(cloudProjectKubeCustomizationApiserverAToHclTerraform, true)(this._customizationApiserver.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudProjectKubeCustomizationApiserverAList",
      },
      customization_kube_proxy: {
        value: cloudProjectKubeCustomizationKubeProxyToHclTerraform(this._customizationKubeProxy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudProjectKubeCustomizationKubeProxyList",
      },
      private_network_configuration: {
        value: cloudProjectKubePrivateNetworkConfigurationToHclTerraform(this._privateNetworkConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudProjectKubePrivateNetworkConfigurationList",
      },
      timeouts: {
        value: cloudProjectKubeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudProjectKubeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
