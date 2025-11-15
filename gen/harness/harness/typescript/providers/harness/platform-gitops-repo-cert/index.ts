// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformGitopsRepoCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier of the GitOps repository certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#account_id PlatformGitopsRepoCert#account_id}
  */
  readonly accountId?: string;
  /**
  * Agent identifier of the GitOps repository certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#agent_id PlatformGitopsRepoCert#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#id PlatformGitopsRepoCert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Organization identifier of the GitOps repository certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#org_id PlatformGitopsRepoCert#org_id}
  */
  readonly orgId?: string;
  /**
  * Project identifier of the GitOps repository certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#project_id PlatformGitopsRepoCert#project_id}
  */
  readonly projectId?: string;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#request PlatformGitopsRepoCert#request}
  */
  readonly request: PlatformGitopsRepoCertRequest;
}
export interface PlatformGitopsRepoCertRequestCertificatesItems {
  /**
  * CertData contains the actual certificate data, dependent on the certificate type. The value should be base64 encoded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#cert_data PlatformGitopsRepoCert#cert_data}
  */
  readonly certData?: string;
  /**
  * CertInfo will hold additional certificate info, dependent on the certificate type .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#cert_info PlatformGitopsRepoCert#cert_info}
  */
  readonly certInfo?: string;
  /**
  * CertSubType specifies the sub type of the cert, i.e. ssh-rsa.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#cert_sub_type PlatformGitopsRepoCert#cert_sub_type}
  */
  readonly certSubType?: string;
  /**
  * CertType specifies the type of the certificate - currently one of https or ssh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#cert_type PlatformGitopsRepoCert#cert_type}
  */
  readonly certType?: string;
  /**
  * ServerName specifies the DNS name of the server this certificate is intended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#server_name PlatformGitopsRepoCert#server_name}
  */
  readonly serverName?: string;
}

export function platformGitopsRepoCertRequestCertificatesItemsToTerraform(struct?: PlatformGitopsRepoCertRequestCertificatesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_data: cdktf.stringToTerraform(struct!.certData),
    cert_info: cdktf.stringToTerraform(struct!.certInfo),
    cert_sub_type: cdktf.stringToTerraform(struct!.certSubType),
    cert_type: cdktf.stringToTerraform(struct!.certType),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function platformGitopsRepoCertRequestCertificatesItemsToHclTerraform(struct?: PlatformGitopsRepoCertRequestCertificatesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_data: {
      value: cdktf.stringToHclTerraform(struct!.certData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_info: {
      value: cdktf.stringToHclTerraform(struct!.certInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_sub_type: {
      value: cdktf.stringToHclTerraform(struct!.certSubType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_type: {
      value: cdktf.stringToHclTerraform(struct!.certType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsRepoCertRequestCertificatesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsRepoCertRequestCertificatesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certData = this._certData;
    }
    if (this._certInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.certInfo = this._certInfo;
    }
    if (this._certSubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSubType = this._certSubType;
    }
    if (this._certType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certType = this._certType;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsRepoCertRequestCertificatesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certData = undefined;
      this._certInfo = undefined;
      this._certSubType = undefined;
      this._certType = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certData = value.certData;
      this._certInfo = value.certInfo;
      this._certSubType = value.certSubType;
      this._certType = value.certType;
      this._serverName = value.serverName;
    }
  }

  // cert_data - computed: false, optional: true, required: false
  private _certData?: string; 
  public get certData() {
    return this.getStringAttribute('cert_data');
  }
  public set certData(value: string) {
    this._certData = value;
  }
  public resetCertData() {
    this._certData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certDataInput() {
    return this._certData;
  }

  // cert_info - computed: false, optional: true, required: false
  private _certInfo?: string; 
  public get certInfo() {
    return this.getStringAttribute('cert_info');
  }
  public set certInfo(value: string) {
    this._certInfo = value;
  }
  public resetCertInfo() {
    this._certInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInfoInput() {
    return this._certInfo;
  }

  // cert_sub_type - computed: false, optional: true, required: false
  private _certSubType?: string; 
  public get certSubType() {
    return this.getStringAttribute('cert_sub_type');
  }
  public set certSubType(value: string) {
    this._certSubType = value;
  }
  public resetCertSubType() {
    this._certSubType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSubTypeInput() {
    return this._certSubType;
  }

  // cert_type - computed: false, optional: true, required: false
  private _certType?: string; 
  public get certType() {
    return this.getStringAttribute('cert_type');
  }
  public set certType(value: string) {
    this._certType = value;
  }
  public resetCertType() {
    this._certType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certTypeInput() {
    return this._certType;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}

export class PlatformGitopsRepoCertRequestCertificatesItemsList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsRepoCertRequestCertificatesItems[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsRepoCertRequestCertificatesItemsOutputReference {
    return new PlatformGitopsRepoCertRequestCertificatesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsRepoCertRequestCertificatesMetadata {
  /**
  * continue may be set if the user set a limit on the number of items returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#continue PlatformGitopsRepoCert#continue}
  */
  readonly continue?: string;
  /**
  * subsequent items in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#remaining_item_count PlatformGitopsRepoCert#remaining_item_count}
  */
  readonly remainingItemCount?: string;
  /**
  * Identifies the server's internal version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#resource_version PlatformGitopsRepoCert#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * selfLink is a URL representing this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#self_link PlatformGitopsRepoCert#self_link}
  */
  readonly selfLink?: string;
}

export function platformGitopsRepoCertRequestCertificatesMetadataToTerraform(struct?: PlatformGitopsRepoCertRequestCertificatesMetadataOutputReference | PlatformGitopsRepoCertRequestCertificatesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue: cdktf.stringToTerraform(struct!.continue),
    remaining_item_count: cdktf.stringToTerraform(struct!.remainingItemCount),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    self_link: cdktf.stringToTerraform(struct!.selfLink),
  }
}


export function platformGitopsRepoCertRequestCertificatesMetadataToHclTerraform(struct?: PlatformGitopsRepoCertRequestCertificatesMetadataOutputReference | PlatformGitopsRepoCertRequestCertificatesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continue: {
      value: cdktf.stringToHclTerraform(struct!.continue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remaining_item_count: {
      value: cdktf.stringToHclTerraform(struct!.remainingItemCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_link: {
      value: cdktf.stringToHclTerraform(struct!.selfLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsRepoCertRequestCertificatesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsRepoCertRequestCertificatesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continue = this._continue;
    }
    if (this._remainingItemCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.remainingItemCount = this._remainingItemCount;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._selfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfLink = this._selfLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsRepoCertRequestCertificatesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continue = undefined;
      this._remainingItemCount = undefined;
      this._resourceVersion = undefined;
      this._selfLink = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continue = value.continue;
      this._remainingItemCount = value.remainingItemCount;
      this._resourceVersion = value.resourceVersion;
      this._selfLink = value.selfLink;
    }
  }

  // continue - computed: false, optional: true, required: false
  private _continue?: string; 
  public get continue() {
    return this.getStringAttribute('continue');
  }
  public set continue(value: string) {
    this._continue = value;
  }
  public resetContinue() {
    this._continue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue;
  }

  // remaining_item_count - computed: false, optional: true, required: false
  private _remainingItemCount?: string; 
  public get remainingItemCount() {
    return this.getStringAttribute('remaining_item_count');
  }
  public set remainingItemCount(value: string) {
    this._remainingItemCount = value;
  }
  public resetRemainingItemCount() {
    this._remainingItemCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remainingItemCountInput() {
    return this._remainingItemCount;
  }

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // self_link - computed: false, optional: true, required: false
  private _selfLink?: string; 
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }
  public set selfLink(value: string) {
    this._selfLink = value;
  }
  public resetSelfLink() {
    this._selfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfLinkInput() {
    return this._selfLink;
  }
}
export interface PlatformGitopsRepoCertRequestCertificates {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#items PlatformGitopsRepoCert#items}
  */
  readonly items?: PlatformGitopsRepoCertRequestCertificatesItems[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#metadata PlatformGitopsRepoCert#metadata}
  */
  readonly metadata?: PlatformGitopsRepoCertRequestCertificatesMetadata;
}

export function platformGitopsRepoCertRequestCertificatesToTerraform(struct?: PlatformGitopsRepoCertRequestCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(platformGitopsRepoCertRequestCertificatesItemsToTerraform, true)(struct!.items),
    metadata: platformGitopsRepoCertRequestCertificatesMetadataToTerraform(struct!.metadata),
  }
}


export function platformGitopsRepoCertRequestCertificatesToHclTerraform(struct?: PlatformGitopsRepoCertRequestCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(platformGitopsRepoCertRequestCertificatesItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsRepoCertRequestCertificatesItemsList",
    },
    metadata: {
      value: platformGitopsRepoCertRequestCertificatesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsRepoCertRequestCertificatesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsRepoCertRequestCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsRepoCertRequestCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsRepoCertRequestCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
      this._metadata.internalValue = value.metadata;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new PlatformGitopsRepoCertRequestCertificatesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: PlatformGitopsRepoCertRequestCertificatesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new PlatformGitopsRepoCertRequestCertificatesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: PlatformGitopsRepoCertRequestCertificatesMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class PlatformGitopsRepoCertRequestCertificatesList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsRepoCertRequestCertificates[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsRepoCertRequestCertificatesOutputReference {
    return new PlatformGitopsRepoCertRequestCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsRepoCertRequest {
  /**
  * Indicates if the GitOps repository certificate should be updated if existing and inserted if not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#upsert PlatformGitopsRepoCert#upsert}
  */
  readonly upsert?: boolean | cdktf.IResolvable;
  /**
  * certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#certificates PlatformGitopsRepoCert#certificates}
  */
  readonly certificates?: PlatformGitopsRepoCertRequestCertificates[] | cdktf.IResolvable;
}

export function platformGitopsRepoCertRequestToTerraform(struct?: PlatformGitopsRepoCertRequestOutputReference | PlatformGitopsRepoCertRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    upsert: cdktf.booleanToTerraform(struct!.upsert),
    certificates: cdktf.listMapper(platformGitopsRepoCertRequestCertificatesToTerraform, true)(struct!.certificates),
  }
}


export function platformGitopsRepoCertRequestToHclTerraform(struct?: PlatformGitopsRepoCertRequestOutputReference | PlatformGitopsRepoCertRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    upsert: {
      value: cdktf.booleanToHclTerraform(struct!.upsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificates: {
      value: cdktf.listMapperHcl(platformGitopsRepoCertRequestCertificatesToHclTerraform, true)(struct!.certificates),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsRepoCertRequestCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsRepoCertRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsRepoCertRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._upsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.upsert = this._upsert;
    }
    if (this._certificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsRepoCertRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._upsert = undefined;
      this._certificates.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._upsert = value.upsert;
      this._certificates.internalValue = value.certificates;
    }
  }

  // upsert - computed: false, optional: true, required: false
  private _upsert?: boolean | cdktf.IResolvable; 
  public get upsert() {
    return this.getBooleanAttribute('upsert');
  }
  public set upsert(value: boolean | cdktf.IResolvable) {
    this._upsert = value;
  }
  public resetUpsert() {
    this._upsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upsertInput() {
    return this._upsert;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates = new PlatformGitopsRepoCertRequestCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: PlatformGitopsRepoCertRequestCertificates[] | cdktf.IResolvable) {
    this._certificates.internalValue = value;
  }
  public resetCertificates() {
    this._certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert harness_platform_gitops_repo_cert}
*/
export class PlatformGitopsRepoCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_gitops_repo_cert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformGitopsRepoCert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformGitopsRepoCert to import
  * @param importFromId The id of the existing PlatformGitopsRepoCert that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformGitopsRepoCert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_gitops_repo_cert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cert harness_platform_gitops_repo_cert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformGitopsRepoCertConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformGitopsRepoCertConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_gitops_repo_cert',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._agentId = config.agentId;
    this._id = config.id;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._request.internalValue = config.request;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // request - computed: false, optional: false, required: true
  private _request = new PlatformGitopsRepoCertRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: PlatformGitopsRepoCertRequest) {
    this._request.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      agent_id: cdktf.stringToTerraform(this._agentId),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      request: platformGitopsRepoCertRequestToTerraform(this._request.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request: {
        value: platformGitopsRepoCertRequestToHclTerraform(this._request.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformGitopsRepoCertRequestList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
