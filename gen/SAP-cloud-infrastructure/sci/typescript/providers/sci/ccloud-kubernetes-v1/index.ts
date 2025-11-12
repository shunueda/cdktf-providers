// https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CcloudKubernetesV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#advertise_address CcloudKubernetesV1#advertise_address}
  */
  readonly advertiseAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#advertise_port CcloudKubernetesV1#advertise_port}
  */
  readonly advertisePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#audit CcloudKubernetesV1#audit}
  */
  readonly audit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#authentication_configuration CcloudKubernetesV1#authentication_configuration}
  */
  readonly authenticationConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#backup CcloudKubernetesV1#backup}
  */
  readonly backup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#cluster_cidr CcloudKubernetesV1#cluster_cidr}
  */
  readonly clusterCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#dashboard CcloudKubernetesV1#dashboard}
  */
  readonly dashboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#dex CcloudKubernetesV1#dex}
  */
  readonly dex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#dns_address CcloudKubernetesV1#dns_address}
  */
  readonly dnsAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#dns_domain CcloudKubernetesV1#dns_domain}
  */
  readonly dnsDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#id CcloudKubernetesV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#is_admin CcloudKubernetesV1#is_admin}
  */
  readonly isAdmin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#name CcloudKubernetesV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#no_cloud CcloudKubernetesV1#no_cloud}
  */
  readonly noCloud?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#region CcloudKubernetesV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#service_cidr CcloudKubernetesV1#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#ssh_public_key CcloudKubernetesV1#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#version CcloudKubernetesV1#version}
  */
  readonly version?: string;
  /**
  * node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#node_pools CcloudKubernetesV1#node_pools}
  */
  readonly nodePools?: CcloudKubernetesV1NodePools[] | cdktf.IResolvable;
  /**
  * oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#oidc CcloudKubernetesV1#oidc}
  */
  readonly oidc?: CcloudKubernetesV1Oidc;
  /**
  * openstack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#openstack CcloudKubernetesV1#openstack}
  */
  readonly openstack?: CcloudKubernetesV1Openstack;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#timeouts CcloudKubernetesV1#timeouts}
  */
  readonly timeouts?: CcloudKubernetesV1Timeouts;
}
export interface CcloudKubernetesV1KubeConfig {
}

export function ccloudKubernetesV1KubeConfigToTerraform(struct?: CcloudKubernetesV1KubeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ccloudKubernetesV1KubeConfigToHclTerraform(struct?: CcloudKubernetesV1KubeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CcloudKubernetesV1KubeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CcloudKubernetesV1KubeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CcloudKubernetesV1KubeConfig | undefined) {
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

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class CcloudKubernetesV1KubeConfigList extends cdktf.ComplexList {

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
  public get(index: number): CcloudKubernetesV1KubeConfigOutputReference {
    return new CcloudKubernetesV1KubeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CcloudKubernetesV1NodePoolsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#allow_reboot CcloudKubernetesV1#allow_reboot}
  */
  readonly allowReboot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#allow_replace CcloudKubernetesV1#allow_replace}
  */
  readonly allowReplace?: boolean | cdktf.IResolvable;
}

export function ccloudKubernetesV1NodePoolsConfigToTerraform(struct?: CcloudKubernetesV1NodePoolsConfigOutputReference | CcloudKubernetesV1NodePoolsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_reboot: cdktf.booleanToTerraform(struct!.allowReboot),
    allow_replace: cdktf.booleanToTerraform(struct!.allowReplace),
  }
}


export function ccloudKubernetesV1NodePoolsConfigToHclTerraform(struct?: CcloudKubernetesV1NodePoolsConfigOutputReference | CcloudKubernetesV1NodePoolsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_reboot: {
      value: cdktf.booleanToHclTerraform(struct!.allowReboot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_replace: {
      value: cdktf.booleanToHclTerraform(struct!.allowReplace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CcloudKubernetesV1NodePoolsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CcloudKubernetesV1NodePoolsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowReboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowReboot = this._allowReboot;
    }
    if (this._allowReplace !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowReplace = this._allowReplace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CcloudKubernetesV1NodePoolsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowReboot = undefined;
      this._allowReplace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowReboot = value.allowReboot;
      this._allowReplace = value.allowReplace;
    }
  }

  // allow_reboot - computed: true, optional: true, required: false
  private _allowReboot?: boolean | cdktf.IResolvable; 
  public get allowReboot() {
    return this.getBooleanAttribute('allow_reboot');
  }
  public set allowReboot(value: boolean | cdktf.IResolvable) {
    this._allowReboot = value;
  }
  public resetAllowReboot() {
    this._allowReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRebootInput() {
    return this._allowReboot;
  }

  // allow_replace - computed: true, optional: true, required: false
  private _allowReplace?: boolean | cdktf.IResolvable; 
  public get allowReplace() {
    return this.getBooleanAttribute('allow_replace');
  }
  public set allowReplace(value: boolean | cdktf.IResolvable) {
    this._allowReplace = value;
  }
  public resetAllowReplace() {
    this._allowReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowReplaceInput() {
    return this._allowReplace;
  }
}
export interface CcloudKubernetesV1NodePools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#availability_zone CcloudKubernetesV1#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#custom_root_disk_size CcloudKubernetesV1#custom_root_disk_size}
  */
  readonly customRootDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#flavor CcloudKubernetesV1#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#image CcloudKubernetesV1#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#labels CcloudKubernetesV1#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#name CcloudKubernetesV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#size CcloudKubernetesV1#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#taints CcloudKubernetesV1#taints}
  */
  readonly taints?: string[];
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#config CcloudKubernetesV1#config}
  */
  readonly config?: CcloudKubernetesV1NodePoolsConfig;
}

export function ccloudKubernetesV1NodePoolsToTerraform(struct?: CcloudKubernetesV1NodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    custom_root_disk_size: cdktf.numberToTerraform(struct!.customRootDiskSize),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    image: cdktf.stringToTerraform(struct!.image),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    taints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.taints),
    config: ccloudKubernetesV1NodePoolsConfigToTerraform(struct!.config),
  }
}


export function ccloudKubernetesV1NodePoolsToHclTerraform(struct?: CcloudKubernetesV1NodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_root_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.customRootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flavor: {
      value: cdktf.stringToHclTerraform(struct!.flavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    taints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.taints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    config: {
      value: ccloudKubernetesV1NodePoolsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "CcloudKubernetesV1NodePoolsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CcloudKubernetesV1NodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CcloudKubernetesV1NodePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._customRootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRootDiskSize = this._customRootDiskSize;
    }
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._taints !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CcloudKubernetesV1NodePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._customRootDiskSize = undefined;
      this._flavor = undefined;
      this._image = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._size = undefined;
      this._taints = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._customRootDiskSize = value.customRootDiskSize;
      this._flavor = value.flavor;
      this._image = value.image;
      this._labels = value.labels;
      this._name = value.name;
      this._size = value.size;
      this._taints = value.taints;
      this._config.internalValue = value.config;
    }
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // custom_root_disk_size - computed: false, optional: true, required: false
  private _customRootDiskSize?: number; 
  public get customRootDiskSize() {
    return this.getNumberAttribute('custom_root_disk_size');
  }
  public set customRootDiskSize(value: number) {
    this._customRootDiskSize = value;
  }
  public resetCustomRootDiskSize() {
    this._customRootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRootDiskSizeInput() {
    return this._customRootDiskSize;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // taints - computed: false, optional: true, required: false
  private _taints?: string[]; 
  public get taints() {
    return this.getListAttribute('taints');
  }
  public set taints(value: string[]) {
    this._taints = value;
  }
  public resetTaints() {
    this._taints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints;
  }

  // config - computed: false, optional: true, required: false
  private _config = new CcloudKubernetesV1NodePoolsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: CcloudKubernetesV1NodePoolsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class CcloudKubernetesV1NodePoolsList extends cdktf.ComplexList {
  public internalValue? : CcloudKubernetesV1NodePools[] | cdktf.IResolvable

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
  public get(index: number): CcloudKubernetesV1NodePoolsOutputReference {
    return new CcloudKubernetesV1NodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CcloudKubernetesV1Oidc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#client_id CcloudKubernetesV1#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#issuer_url CcloudKubernetesV1#issuer_url}
  */
  readonly issuerUrl?: string;
}

export function ccloudKubernetesV1OidcToTerraform(struct?: CcloudKubernetesV1OidcOutputReference | CcloudKubernetesV1Oidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
  }
}


export function ccloudKubernetesV1OidcToHclTerraform(struct?: CcloudKubernetesV1OidcOutputReference | CcloudKubernetesV1Oidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CcloudKubernetesV1OidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CcloudKubernetesV1Oidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CcloudKubernetesV1Oidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._issuerUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._issuerUrl = value.issuerUrl;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // issuer_url - computed: false, optional: true, required: false
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  public resetIssuerUrl() {
    this._issuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }
}
export interface CcloudKubernetesV1Openstack {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#lb_floating_network_id CcloudKubernetesV1#lb_floating_network_id}
  */
  readonly lbFloatingNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#lb_subnet_id CcloudKubernetesV1#lb_subnet_id}
  */
  readonly lbSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#network_id CcloudKubernetesV1#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#router_id CcloudKubernetesV1#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#security_group_name CcloudKubernetesV1#security_group_name}
  */
  readonly securityGroupName?: string;
}

export function ccloudKubernetesV1OpenstackToTerraform(struct?: CcloudKubernetesV1OpenstackOutputReference | CcloudKubernetesV1Openstack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lb_floating_network_id: cdktf.stringToTerraform(struct!.lbFloatingNetworkId),
    lb_subnet_id: cdktf.stringToTerraform(struct!.lbSubnetId),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    router_id: cdktf.stringToTerraform(struct!.routerId),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
  }
}


export function ccloudKubernetesV1OpenstackToHclTerraform(struct?: CcloudKubernetesV1OpenstackOutputReference | CcloudKubernetesV1Openstack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lb_floating_network_id: {
      value: cdktf.stringToHclTerraform(struct!.lbFloatingNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lb_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.lbSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_id: {
      value: cdktf.stringToHclTerraform(struct!.routerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_name: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CcloudKubernetesV1OpenstackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CcloudKubernetesV1Openstack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lbFloatingNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbFloatingNetworkId = this._lbFloatingNetworkId;
    }
    if (this._lbSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbSubnetId = this._lbSubnetId;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    if (this._securityGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupName = this._securityGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CcloudKubernetesV1Openstack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lbFloatingNetworkId = undefined;
      this._lbSubnetId = undefined;
      this._networkId = undefined;
      this._routerId = undefined;
      this._securityGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lbFloatingNetworkId = value.lbFloatingNetworkId;
      this._lbSubnetId = value.lbSubnetId;
      this._networkId = value.networkId;
      this._routerId = value.routerId;
      this._securityGroupName = value.securityGroupName;
    }
  }

  // lb_floating_network_id - computed: true, optional: true, required: false
  private _lbFloatingNetworkId?: string; 
  public get lbFloatingNetworkId() {
    return this.getStringAttribute('lb_floating_network_id');
  }
  public set lbFloatingNetworkId(value: string) {
    this._lbFloatingNetworkId = value;
  }
  public resetLbFloatingNetworkId() {
    this._lbFloatingNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbFloatingNetworkIdInput() {
    return this._lbFloatingNetworkId;
  }

  // lb_subnet_id - computed: true, optional: true, required: false
  private _lbSubnetId?: string; 
  public get lbSubnetId() {
    return this.getStringAttribute('lb_subnet_id');
  }
  public set lbSubnetId(value: string) {
    this._lbSubnetId = value;
  }
  public resetLbSubnetId() {
    this._lbSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbSubnetIdInput() {
    return this._lbSubnetId;
  }

  // network_id - computed: true, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // router_id - computed: true, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // security_group_name - computed: true, optional: true, required: false
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  public resetSecurityGroupName() {
    this._securityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }
}
export interface CcloudKubernetesV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#create CcloudKubernetesV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#delete CcloudKubernetesV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#update CcloudKubernetesV1#update}
  */
  readonly update?: string;
}

export function ccloudKubernetesV1TimeoutsToTerraform(struct?: CcloudKubernetesV1Timeouts | cdktf.IResolvable): any {
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


export function ccloudKubernetesV1TimeoutsToHclTerraform(struct?: CcloudKubernetesV1Timeouts | cdktf.IResolvable): any {
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

export class CcloudKubernetesV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CcloudKubernetesV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CcloudKubernetesV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1 ccloud_kubernetes_v1}
*/
export class CcloudKubernetesV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ccloud_kubernetes_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CcloudKubernetesV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CcloudKubernetesV1 to import
  * @param importFromId The id of the existing CcloudKubernetesV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CcloudKubernetesV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ccloud_kubernetes_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_kubernetes_v1 ccloud_kubernetes_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CcloudKubernetesV1Config
  */
  public constructor(scope: Construct, id: string, config: CcloudKubernetesV1Config) {
    super(scope, id, {
      terraformResourceType: 'ccloud_kubernetes_v1',
      terraformGeneratorMetadata: {
        providerName: 'sci',
        providerVersion: '2.2.1',
        providerVersionConstraint: '2.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertiseAddress = config.advertiseAddress;
    this._advertisePort = config.advertisePort;
    this._audit = config.audit;
    this._authenticationConfiguration = config.authenticationConfiguration;
    this._backup = config.backup;
    this._clusterCidr = config.clusterCidr;
    this._dashboard = config.dashboard;
    this._dex = config.dex;
    this._dnsAddress = config.dnsAddress;
    this._dnsDomain = config.dnsDomain;
    this._id = config.id;
    this._isAdmin = config.isAdmin;
    this._name = config.name;
    this._noCloud = config.noCloud;
    this._region = config.region;
    this._serviceCidr = config.serviceCidr;
    this._sshPublicKey = config.sshPublicKey;
    this._version = config.version;
    this._nodePools.internalValue = config.nodePools;
    this._oidc.internalValue = config.oidc;
    this._openstack.internalValue = config.openstack;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_address - computed: true, optional: true, required: false
  private _advertiseAddress?: string; 
  public get advertiseAddress() {
    return this.getStringAttribute('advertise_address');
  }
  public set advertiseAddress(value: string) {
    this._advertiseAddress = value;
  }
  public resetAdvertiseAddress() {
    this._advertiseAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseAddressInput() {
    return this._advertiseAddress;
  }

  // advertise_port - computed: true, optional: true, required: false
  private _advertisePort?: number; 
  public get advertisePort() {
    return this.getNumberAttribute('advertise_port');
  }
  public set advertisePort(value: number) {
    this._advertisePort = value;
  }
  public resetAdvertisePort() {
    this._advertisePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisePortInput() {
    return this._advertisePort;
  }

  // apiserver_url - computed: true, optional: false, required: false
  public get apiserverUrl() {
    return this.getStringAttribute('apiserver_url');
  }

  // audit - computed: true, optional: true, required: false
  private _audit?: string; 
  public get audit() {
    return this.getStringAttribute('audit');
  }
  public set audit(value: string) {
    this._audit = value;
  }
  public resetAudit() {
    this._audit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }

  // authentication_configuration - computed: false, optional: true, required: false
  private _authenticationConfiguration?: string; 
  public get authenticationConfiguration() {
    return this.getStringAttribute('authentication_configuration');
  }
  public set authenticationConfiguration(value: string) {
    this._authenticationConfiguration = value;
  }
  public resetAuthenticationConfiguration() {
    this._authenticationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigurationInput() {
    return this._authenticationConfiguration;
  }

  // backup - computed: true, optional: true, required: false
  private _backup?: string; 
  public get backup() {
    return this.getStringAttribute('backup');
  }
  public set backup(value: string) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // cluster_cidr - computed: false, optional: true, required: false
  private _clusterCidr?: string; 
  public get clusterCidr() {
    return this.getStringAttribute('cluster_cidr');
  }
  public set clusterCidr(value: string) {
    this._clusterCidr = value;
  }
  public resetClusterCidr() {
    this._clusterCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCidrInput() {
    return this._clusterCidr;
  }

  // dashboard - computed: false, optional: true, required: false
  private _dashboard?: boolean | cdktf.IResolvable; 
  public get dashboard() {
    return this.getBooleanAttribute('dashboard');
  }
  public set dashboard(value: boolean | cdktf.IResolvable) {
    this._dashboard = value;
  }
  public resetDashboard() {
    this._dashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard;
  }

  // dashboard_url - computed: true, optional: false, required: false
  public get dashboardUrl() {
    return this.getStringAttribute('dashboard_url');
  }

  // dex - computed: false, optional: true, required: false
  private _dex?: boolean | cdktf.IResolvable; 
  public get dex() {
    return this.getBooleanAttribute('dex');
  }
  public set dex(value: boolean | cdktf.IResolvable) {
    this._dex = value;
  }
  public resetDex() {
    this._dex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dexInput() {
    return this._dex;
  }

  // dns_address - computed: true, optional: true, required: false
  private _dnsAddress?: string; 
  public get dnsAddress() {
    return this.getStringAttribute('dns_address');
  }
  public set dnsAddress(value: string) {
    this._dnsAddress = value;
  }
  public resetDnsAddress() {
    this._dnsAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAddressInput() {
    return this._dnsAddress;
  }

  // dns_domain - computed: true, optional: true, required: false
  private _dnsDomain?: string; 
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }
  public set dnsDomain(value: string) {
    this._dnsDomain = value;
  }
  public resetDnsDomain() {
    this._dnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainInput() {
    return this._dnsDomain;
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

  // is_admin - computed: false, optional: true, required: false
  private _isAdmin?: boolean | cdktf.IResolvable; 
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }
  public set isAdmin(value: boolean | cdktf.IResolvable) {
    this._isAdmin = value;
  }
  public resetIsAdmin() {
    this._isAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAdminInput() {
    return this._isAdmin;
  }

  // kube_config - computed: true, optional: false, required: false
  private _kubeConfig = new CcloudKubernetesV1KubeConfigList(this, "kube_config", false);
  public get kubeConfig() {
    return this._kubeConfig;
  }

  // kube_config_raw - computed: true, optional: false, required: false
  public get kubeConfigRaw() {
    return this.getStringAttribute('kube_config_raw');
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

  // no_cloud - computed: false, optional: true, required: false
  private _noCloud?: boolean | cdktf.IResolvable; 
  public get noCloud() {
    return this.getBooleanAttribute('no_cloud');
  }
  public set noCloud(value: boolean | cdktf.IResolvable) {
    this._noCloud = value;
  }
  public resetNoCloud() {
    this._noCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCloudInput() {
    return this._noCloud;
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
  }

  // region - computed: true, optional: true, required: false
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

  // service_cidr - computed: true, optional: true, required: false
  private _serviceCidr?: string; 
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
  public set serviceCidr(value: string) {
    this._serviceCidr = value;
  }
  public resetServiceCidr() {
    this._serviceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr;
  }

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
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

  // wormhole - computed: true, optional: false, required: false
  public get wormhole() {
    return this.getStringAttribute('wormhole');
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools = new CcloudKubernetesV1NodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: CcloudKubernetesV1NodePools[] | cdktf.IResolvable) {
    this._nodePools.internalValue = value;
  }
  public resetNodePools() {
    this._nodePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new CcloudKubernetesV1OidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: CcloudKubernetesV1Oidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // openstack - computed: false, optional: true, required: false
  private _openstack = new CcloudKubernetesV1OpenstackOutputReference(this, "openstack");
  public get openstack() {
    return this._openstack;
  }
  public putOpenstack(value: CcloudKubernetesV1Openstack) {
    this._openstack.internalValue = value;
  }
  public resetOpenstack() {
    this._openstack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackInput() {
    return this._openstack.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CcloudKubernetesV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CcloudKubernetesV1Timeouts) {
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
      advertise_address: cdktf.stringToTerraform(this._advertiseAddress),
      advertise_port: cdktf.numberToTerraform(this._advertisePort),
      audit: cdktf.stringToTerraform(this._audit),
      authentication_configuration: cdktf.stringToTerraform(this._authenticationConfiguration),
      backup: cdktf.stringToTerraform(this._backup),
      cluster_cidr: cdktf.stringToTerraform(this._clusterCidr),
      dashboard: cdktf.booleanToTerraform(this._dashboard),
      dex: cdktf.booleanToTerraform(this._dex),
      dns_address: cdktf.stringToTerraform(this._dnsAddress),
      dns_domain: cdktf.stringToTerraform(this._dnsDomain),
      id: cdktf.stringToTerraform(this._id),
      is_admin: cdktf.booleanToTerraform(this._isAdmin),
      name: cdktf.stringToTerraform(this._name),
      no_cloud: cdktf.booleanToTerraform(this._noCloud),
      region: cdktf.stringToTerraform(this._region),
      service_cidr: cdktf.stringToTerraform(this._serviceCidr),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      version: cdktf.stringToTerraform(this._version),
      node_pools: cdktf.listMapper(ccloudKubernetesV1NodePoolsToTerraform, true)(this._nodePools.internalValue),
      oidc: ccloudKubernetesV1OidcToTerraform(this._oidc.internalValue),
      openstack: ccloudKubernetesV1OpenstackToTerraform(this._openstack.internalValue),
      timeouts: ccloudKubernetesV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_address: {
        value: cdktf.stringToHclTerraform(this._advertiseAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_port: {
        value: cdktf.numberToHclTerraform(this._advertisePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      audit: {
        value: cdktf.stringToHclTerraform(this._audit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_configuration: {
        value: cdktf.stringToHclTerraform(this._authenticationConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup: {
        value: cdktf.stringToHclTerraform(this._backup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_cidr: {
        value: cdktf.stringToHclTerraform(this._clusterCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard: {
        value: cdktf.booleanToHclTerraform(this._dashboard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dex: {
        value: cdktf.booleanToHclTerraform(this._dex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_address: {
        value: cdktf.stringToHclTerraform(this._dnsAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_domain: {
        value: cdktf.stringToHclTerraform(this._dnsDomain),
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
      is_admin: {
        value: cdktf.booleanToHclTerraform(this._isAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_cloud: {
        value: cdktf.booleanToHclTerraform(this._noCloud),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_cidr: {
        value: cdktf.stringToHclTerraform(this._serviceCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey),
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
      node_pools: {
        value: cdktf.listMapperHcl(ccloudKubernetesV1NodePoolsToHclTerraform, true)(this._nodePools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CcloudKubernetesV1NodePoolsList",
      },
      oidc: {
        value: ccloudKubernetesV1OidcToHclTerraform(this._oidc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CcloudKubernetesV1OidcList",
      },
      openstack: {
        value: ccloudKubernetesV1OpenstackToHclTerraform(this._openstack.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CcloudKubernetesV1OpenstackList",
      },
      timeouts: {
        value: ccloudKubernetesV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CcloudKubernetesV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
