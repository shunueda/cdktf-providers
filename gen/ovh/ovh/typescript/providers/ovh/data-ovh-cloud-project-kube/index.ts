// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhCloudProjectKubeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#id DataOvhCloudProjectKube#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#kube_id DataOvhCloudProjectKube#kube_id}
  */
  readonly kubeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#kube_proxy_mode DataOvhCloudProjectKube#kube_proxy_mode}
  */
  readonly kubeProxyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#name DataOvhCloudProjectKube#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#plan DataOvhCloudProjectKube#plan}
  */
  readonly plan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#region DataOvhCloudProjectKube#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#service_name DataOvhCloudProjectKube#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#update_policy DataOvhCloudProjectKube#update_policy}
  */
  readonly updatePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#version DataOvhCloudProjectKube#version}
  */
  readonly version?: string;
  /**
  * customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#customization DataOvhCloudProjectKube#customization}
  */
  readonly customization?: DataOvhCloudProjectKubeCustomization[] | cdktf.IResolvable;
  /**
  * customization_apiserver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#customization_apiserver DataOvhCloudProjectKube#customization_apiserver}
  */
  readonly customizationApiserver?: DataOvhCloudProjectKubeCustomizationApiserverA[] | cdktf.IResolvable;
  /**
  * customization_kube_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#customization_kube_proxy DataOvhCloudProjectKube#customization_kube_proxy}
  */
  readonly customizationKubeProxy?: DataOvhCloudProjectKubeCustomizationKubeProxy;
}
export interface DataOvhCloudProjectKubeKubeconfigAttributes {
}

export function dataOvhCloudProjectKubeKubeconfigAttributesToTerraform(struct?: DataOvhCloudProjectKubeKubeconfigAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhCloudProjectKubeKubeconfigAttributesToHclTerraform(struct?: DataOvhCloudProjectKubeKubeconfigAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhCloudProjectKubeKubeconfigAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhCloudProjectKubeKubeconfigAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhCloudProjectKubeKubeconfigAttributes | undefined) {
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

export class DataOvhCloudProjectKubeKubeconfigAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataOvhCloudProjectKubeKubeconfigAttributesOutputReference {
    return new DataOvhCloudProjectKubeKubeconfigAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOvhCloudProjectKubeCustomizationApiserverAdmissionplugins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#disabled DataOvhCloudProjectKube#disabled}
  */
  readonly disabled?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#enabled DataOvhCloudProjectKube#enabled}
  */
  readonly enabled?: string[];
}

export function dataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsToTerraform(struct?: DataOvhCloudProjectKubeCustomizationApiserverAdmissionplugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabled),
    enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabled),
  }
}


export function dataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsToHclTerraform(struct?: DataOvhCloudProjectKubeCustomizationApiserverAdmissionplugins | cdktf.IResolvable): any {
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

export class DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhCloudProjectKubeCustomizationApiserverAdmissionplugins | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOvhCloudProjectKubeCustomizationApiserverAdmissionplugins | cdktf.IResolvable | undefined) {
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

export class DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsList extends cdktf.ComplexList {
  public internalValue? : DataOvhCloudProjectKubeCustomizationApiserverAdmissionplugins[] | cdktf.IResolvable

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
  public get(index: number): DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsOutputReference {
    return new DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOvhCloudProjectKubeCustomizationApiserver {
  /**
  * admissionplugins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#admissionplugins DataOvhCloudProjectKube#admissionplugins}
  */
  readonly admissionplugins?: DataOvhCloudProjectKubeCustomizationApiserverAdmissionplugins[] | cdktf.IResolvable;
}

export function dataOvhCloudProjectKubeCustomizationApiserverToTerraform(struct?: DataOvhCloudProjectKubeCustomizationApiserver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admissionplugins: cdktf.listMapper(dataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsToTerraform, true)(struct!.admissionplugins),
  }
}


export function dataOvhCloudProjectKubeCustomizationApiserverToHclTerraform(struct?: DataOvhCloudProjectKubeCustomizationApiserver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admissionplugins: {
      value: cdktf.listMapperHcl(dataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsToHclTerraform, true)(struct!.admissionplugins),
      isBlock: true,
      type: "set",
      storageClassType: "DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOvhCloudProjectKubeCustomizationApiserverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhCloudProjectKubeCustomizationApiserver | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOvhCloudProjectKubeCustomizationApiserver | cdktf.IResolvable | undefined) {
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
  private _admissionplugins = new DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsList(this, "admissionplugins", true);
  public get admissionplugins() {
    return this._admissionplugins;
  }
  public putAdmissionplugins(value: DataOvhCloudProjectKubeCustomizationApiserverAdmissionplugins[] | cdktf.IResolvable) {
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

export class DataOvhCloudProjectKubeCustomizationApiserverList extends cdktf.ComplexList {
  public internalValue? : DataOvhCloudProjectKubeCustomizationApiserver[] | cdktf.IResolvable

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
  public get(index: number): DataOvhCloudProjectKubeCustomizationApiserverOutputReference {
    return new DataOvhCloudProjectKubeCustomizationApiserverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOvhCloudProjectKubeCustomization {
  /**
  * apiserver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#apiserver DataOvhCloudProjectKube#apiserver}
  */
  readonly apiserver?: DataOvhCloudProjectKubeCustomizationApiserver[] | cdktf.IResolvable;
}

export function dataOvhCloudProjectKubeCustomizationToTerraform(struct?: DataOvhCloudProjectKubeCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apiserver: cdktf.listMapper(dataOvhCloudProjectKubeCustomizationApiserverToTerraform, true)(struct!.apiserver),
  }
}


export function dataOvhCloudProjectKubeCustomizationToHclTerraform(struct?: DataOvhCloudProjectKubeCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apiserver: {
      value: cdktf.listMapperHcl(dataOvhCloudProjectKubeCustomizationApiserverToHclTerraform, true)(struct!.apiserver),
      isBlock: true,
      type: "set",
      storageClassType: "DataOvhCloudProjectKubeCustomizationApiserverList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOvhCloudProjectKubeCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhCloudProjectKubeCustomization | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOvhCloudProjectKubeCustomization | cdktf.IResolvable | undefined) {
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
  private _apiserver = new DataOvhCloudProjectKubeCustomizationApiserverList(this, "apiserver", true);
  public get apiserver() {
    return this._apiserver;
  }
  public putApiserver(value: DataOvhCloudProjectKubeCustomizationApiserver[] | cdktf.IResolvable) {
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

export class DataOvhCloudProjectKubeCustomizationList extends cdktf.ComplexList {
  public internalValue? : DataOvhCloudProjectKubeCustomization[] | cdktf.IResolvable

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
  public get(index: number): DataOvhCloudProjectKubeCustomizationOutputReference {
    return new DataOvhCloudProjectKubeCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#disabled DataOvhCloudProjectKube#disabled}
  */
  readonly disabled?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#enabled DataOvhCloudProjectKube#enabled}
  */
  readonly enabled?: string[];
}

export function dataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsAToTerraform(struct?: DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabled),
    enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabled),
  }
}


export function dataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsAToHclTerraform(struct?: DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsA | cdktf.IResolvable): any {
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

export class DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsA | cdktf.IResolvable | undefined) {
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

export class DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsAList extends cdktf.ComplexList {
  public internalValue? : DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsA[] | cdktf.IResolvable

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
  public get(index: number): DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsAOutputReference {
    return new DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOvhCloudProjectKubeCustomizationApiserverA {
  /**
  * admissionplugins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#admissionplugins DataOvhCloudProjectKube#admissionplugins}
  */
  readonly admissionplugins?: DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsA[] | cdktf.IResolvable;
}

export function dataOvhCloudProjectKubeCustomizationApiserverAToTerraform(struct?: DataOvhCloudProjectKubeCustomizationApiserverA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admissionplugins: cdktf.listMapper(dataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsAToTerraform, true)(struct!.admissionplugins),
  }
}


export function dataOvhCloudProjectKubeCustomizationApiserverAToHclTerraform(struct?: DataOvhCloudProjectKubeCustomizationApiserverA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admissionplugins: {
      value: cdktf.listMapperHcl(dataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsAToHclTerraform, true)(struct!.admissionplugins),
      isBlock: true,
      type: "set",
      storageClassType: "DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOvhCloudProjectKubeCustomizationApiserverAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhCloudProjectKubeCustomizationApiserverA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOvhCloudProjectKubeCustomizationApiserverA | cdktf.IResolvable | undefined) {
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
  private _admissionplugins = new DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsAList(this, "admissionplugins", true);
  public get admissionplugins() {
    return this._admissionplugins;
  }
  public putAdmissionplugins(value: DataOvhCloudProjectKubeCustomizationApiserverAdmissionpluginsA[] | cdktf.IResolvable) {
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

export class DataOvhCloudProjectKubeCustomizationApiserverAList extends cdktf.ComplexList {
  public internalValue? : DataOvhCloudProjectKubeCustomizationApiserverA[] | cdktf.IResolvable

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
  public get(index: number): DataOvhCloudProjectKubeCustomizationApiserverAOutputReference {
    return new DataOvhCloudProjectKubeCustomizationApiserverAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOvhCloudProjectKubeCustomizationKubeProxyIptables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#min_sync_period DataOvhCloudProjectKube#min_sync_period}
  */
  readonly minSyncPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#sync_period DataOvhCloudProjectKube#sync_period}
  */
  readonly syncPeriod?: string;
}

export function dataOvhCloudProjectKubeCustomizationKubeProxyIptablesToTerraform(struct?: DataOvhCloudProjectKubeCustomizationKubeProxyIptablesOutputReference | DataOvhCloudProjectKubeCustomizationKubeProxyIptables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_sync_period: cdktf.stringToTerraform(struct!.minSyncPeriod),
    sync_period: cdktf.stringToTerraform(struct!.syncPeriod),
  }
}


export function dataOvhCloudProjectKubeCustomizationKubeProxyIptablesToHclTerraform(struct?: DataOvhCloudProjectKubeCustomizationKubeProxyIptablesOutputReference | DataOvhCloudProjectKubeCustomizationKubeProxyIptables): any {
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

export class DataOvhCloudProjectKubeCustomizationKubeProxyIptablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataOvhCloudProjectKubeCustomizationKubeProxyIptables | undefined {
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

  public set internalValue(value: DataOvhCloudProjectKubeCustomizationKubeProxyIptables | undefined) {
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
export interface DataOvhCloudProjectKubeCustomizationKubeProxyIpvs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#min_sync_period DataOvhCloudProjectKube#min_sync_period}
  */
  readonly minSyncPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#scheduler DataOvhCloudProjectKube#scheduler}
  */
  readonly scheduler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#sync_period DataOvhCloudProjectKube#sync_period}
  */
  readonly syncPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#tcp_fin_timeout DataOvhCloudProjectKube#tcp_fin_timeout}
  */
  readonly tcpFinTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#tcp_timeout DataOvhCloudProjectKube#tcp_timeout}
  */
  readonly tcpTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#udp_timeout DataOvhCloudProjectKube#udp_timeout}
  */
  readonly udpTimeout?: string;
}

export function dataOvhCloudProjectKubeCustomizationKubeProxyIpvsToTerraform(struct?: DataOvhCloudProjectKubeCustomizationKubeProxyIpvsOutputReference | DataOvhCloudProjectKubeCustomizationKubeProxyIpvs): any {
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


export function dataOvhCloudProjectKubeCustomizationKubeProxyIpvsToHclTerraform(struct?: DataOvhCloudProjectKubeCustomizationKubeProxyIpvsOutputReference | DataOvhCloudProjectKubeCustomizationKubeProxyIpvs): any {
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

export class DataOvhCloudProjectKubeCustomizationKubeProxyIpvsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataOvhCloudProjectKubeCustomizationKubeProxyIpvs | undefined {
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

  public set internalValue(value: DataOvhCloudProjectKubeCustomizationKubeProxyIpvs | undefined) {
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
export interface DataOvhCloudProjectKubeCustomizationKubeProxy {
  /**
  * iptables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#iptables DataOvhCloudProjectKube#iptables}
  */
  readonly iptables?: DataOvhCloudProjectKubeCustomizationKubeProxyIptables;
  /**
  * ipvs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#ipvs DataOvhCloudProjectKube#ipvs}
  */
  readonly ipvs?: DataOvhCloudProjectKubeCustomizationKubeProxyIpvs;
}

export function dataOvhCloudProjectKubeCustomizationKubeProxyToTerraform(struct?: DataOvhCloudProjectKubeCustomizationKubeProxyOutputReference | DataOvhCloudProjectKubeCustomizationKubeProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iptables: dataOvhCloudProjectKubeCustomizationKubeProxyIptablesToTerraform(struct!.iptables),
    ipvs: dataOvhCloudProjectKubeCustomizationKubeProxyIpvsToTerraform(struct!.ipvs),
  }
}


export function dataOvhCloudProjectKubeCustomizationKubeProxyToHclTerraform(struct?: DataOvhCloudProjectKubeCustomizationKubeProxyOutputReference | DataOvhCloudProjectKubeCustomizationKubeProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iptables: {
      value: dataOvhCloudProjectKubeCustomizationKubeProxyIptablesToHclTerraform(struct!.iptables),
      isBlock: true,
      type: "set",
      storageClassType: "DataOvhCloudProjectKubeCustomizationKubeProxyIptablesList",
    },
    ipvs: {
      value: dataOvhCloudProjectKubeCustomizationKubeProxyIpvsToHclTerraform(struct!.ipvs),
      isBlock: true,
      type: "set",
      storageClassType: "DataOvhCloudProjectKubeCustomizationKubeProxyIpvsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOvhCloudProjectKubeCustomizationKubeProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataOvhCloudProjectKubeCustomizationKubeProxy | undefined {
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

  public set internalValue(value: DataOvhCloudProjectKubeCustomizationKubeProxy | undefined) {
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
  private _iptables = new DataOvhCloudProjectKubeCustomizationKubeProxyIptablesOutputReference(this, "iptables");
  public get iptables() {
    return this._iptables;
  }
  public putIptables(value: DataOvhCloudProjectKubeCustomizationKubeProxyIptables) {
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
  private _ipvs = new DataOvhCloudProjectKubeCustomizationKubeProxyIpvsOutputReference(this, "ipvs");
  public get ipvs() {
    return this._ipvs;
  }
  public putIpvs(value: DataOvhCloudProjectKubeCustomizationKubeProxyIpvs) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube ovh_cloud_project_kube}
*/
export class DataOvhCloudProjectKube extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_kube";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhCloudProjectKube resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhCloudProjectKube to import
  * @param importFromId The id of the existing DataOvhCloudProjectKube that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhCloudProjectKube to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_kube", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube ovh_cloud_project_kube} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhCloudProjectKubeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhCloudProjectKubeConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_kube',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
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
    this._kubeId = config.kubeId;
    this._kubeProxyMode = config.kubeProxyMode;
    this._name = config.name;
    this._plan = config.plan;
    this._region = config.region;
    this._serviceName = config.serviceName;
    this._updatePolicy = config.updatePolicy;
    this._version = config.version;
    this._customization.internalValue = config.customization;
    this._customizationApiserver.internalValue = config.customizationApiserver;
    this._customizationKubeProxy.internalValue = config.customizationKubeProxy;
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

  // kube_id - computed: false, optional: false, required: true
  private _kubeId?: string; 
  public get kubeId() {
    return this.getStringAttribute('kube_id');
  }
  public set kubeId(value: string) {
    this._kubeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeIdInput() {
    return this._kubeId;
  }

  // kube_proxy_mode - computed: false, optional: true, required: false
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
  private _kubeconfigAttributes = new DataOvhCloudProjectKubeKubeconfigAttributesList(this, "kubeconfig_attributes", false);
  public get kubeconfigAttributes() {
    return this._kubeconfigAttributes;
  }

  // load_balancers_subnet_id - computed: true, optional: false, required: false
  public get loadBalancersSubnetId() {
    return this.getStringAttribute('load_balancers_subnet_id');
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

  // nodes_subnet_id - computed: true, optional: false, required: false
  public get nodesSubnetId() {
    return this.getStringAttribute('nodes_subnet_id');
  }

  // nodes_url - computed: true, optional: false, required: false
  public get nodesUrl() {
    return this.getStringAttribute('nodes_url');
  }

  // plan - computed: false, optional: true, required: false
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

  // private_network_id - computed: true, optional: false, required: false
  public get privateNetworkId() {
    return this.getStringAttribute('private_network_id');
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
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

  // update_policy - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
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
  private _customization = new DataOvhCloudProjectKubeCustomizationList(this, "customization", true);
  public get customization() {
    return this._customization;
  }
  public putCustomization(value: DataOvhCloudProjectKubeCustomization[] | cdktf.IResolvable) {
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
  private _customizationApiserver = new DataOvhCloudProjectKubeCustomizationApiserverAList(this, "customization_apiserver", true);
  public get customizationApiserver() {
    return this._customizationApiserver;
  }
  public putCustomizationApiserver(value: DataOvhCloudProjectKubeCustomizationApiserverA[] | cdktf.IResolvable) {
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
  private _customizationKubeProxy = new DataOvhCloudProjectKubeCustomizationKubeProxyOutputReference(this, "customization_kube_proxy");
  public get customizationKubeProxy() {
    return this._customizationKubeProxy;
  }
  public putCustomizationKubeProxy(value: DataOvhCloudProjectKubeCustomizationKubeProxy) {
    this._customizationKubeProxy.internalValue = value;
  }
  public resetCustomizationKubeProxy() {
    this._customizationKubeProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationKubeProxyInput() {
    return this._customizationKubeProxy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      kube_id: cdktf.stringToTerraform(this._kubeId),
      kube_proxy_mode: cdktf.stringToTerraform(this._kubeProxyMode),
      name: cdktf.stringToTerraform(this._name),
      plan: cdktf.stringToTerraform(this._plan),
      region: cdktf.stringToTerraform(this._region),
      service_name: cdktf.stringToTerraform(this._serviceName),
      update_policy: cdktf.stringToTerraform(this._updatePolicy),
      version: cdktf.stringToTerraform(this._version),
      customization: cdktf.listMapper(dataOvhCloudProjectKubeCustomizationToTerraform, true)(this._customization.internalValue),
      customization_apiserver: cdktf.listMapper(dataOvhCloudProjectKubeCustomizationApiserverAToTerraform, true)(this._customizationApiserver.internalValue),
      customization_kube_proxy: dataOvhCloudProjectKubeCustomizationKubeProxyToTerraform(this._customizationKubeProxy.internalValue),
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
      kube_id: {
        value: cdktf.stringToHclTerraform(this._kubeId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
        value: cdktf.listMapperHcl(dataOvhCloudProjectKubeCustomizationToHclTerraform, true)(this._customization.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOvhCloudProjectKubeCustomizationList",
      },
      customization_apiserver: {
        value: cdktf.listMapperHcl(dataOvhCloudProjectKubeCustomizationApiserverAToHclTerraform, true)(this._customizationApiserver.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOvhCloudProjectKubeCustomizationApiserverAList",
      },
      customization_kube_proxy: {
        value: dataOvhCloudProjectKubeCustomizationKubeProxyToHclTerraform(this._customizationKubeProxy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOvhCloudProjectKubeCustomizationKubeProxyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
