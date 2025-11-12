// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialAzurewithtenantidConfig extends cdktf.TerraformMetaArguments {
  /**
  * [WINDOWSACCOUNT, LINUXACCOUNT, STORAGE_ARRAY_ACCOUNT, CLOUD_ACCOUNT]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#accounttype CredentialAzurewithtenantid#accounttype}
  */
  readonly accounttype?: string;
  /**
  * Unique Azure application ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#applicationid CredentialAzurewithtenantid#applicationid}
  */
  readonly applicationid: string;
  /**
  * Application secret of Credential and must be in base64 encoded format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#applicationsecret CredentialAzurewithtenantid#applicationsecret}
  */
  readonly applicationsecret: string;
  /**
  * Description of Credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#description CredentialAzurewithtenantid#description}
  */
  readonly description?: string;
  /**
  * Azure cloud deployed region [AZURE_CLOUD, AZURE_USGOV, AZURE_GERMANCLOUD, AZURE_CHINACLOUD, AZURE_STACK]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#environment CredentialAzurewithtenantid#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#id CredentialAzurewithtenantid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of Credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#name CredentialAzurewithtenantid#name}
  */
  readonly name: string;
  /**
  * Unique Azure active directory ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#tenantid CredentialAzurewithtenantid#tenantid}
  */
  readonly tenantid: string;
  /**
  * Cloud vendor types appilcable only for Cloud Account type [ALICLOUD_OSS, AMAZON_GLACIER, AMAZON, ATT_SYNAPTIC, REVERA_VAULT, CEPH_OBJECT_GATEWAY_S3, CMCC_ONEST, CLOUDIAN_HYPERSTORE, DELL_EMC_ECS_S3, EMC_ATMOS, FUJITSU_STORAGE_ETERNUS, GOOGLE_CLOUD, HDS_HCP, HITACHI_VANTARA_HCP_S3, HUAWEI_OSS, IBM_CLOUD, IBM_CLOUD_S3, INSPUR_CLOUD, IRON_MOUNTAIN_CLOUD, KINGSOFT_KS3, MICROSOFT_AZURE_TYPE, NETAPP_STORAGEGRID, NUTANIX_BUCKETS, OPENSTACK, AMPLIDATA, RACKSPACE_CLOUD_FILES, S3_COMPATIBLE, SALESFORCE_CONNECTED_APP, SCALITY_RING, TELEFONICA_OPEN_CLOUD_OBJECT_STORAGE, VERIZON_CLOUD, WASABI_HOT_CLOUD_STORAGE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#vendortype CredentialAzurewithtenantid#vendortype}
  */
  readonly vendortype?: string;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#endpoints CredentialAzurewithtenantid#endpoints}
  */
  readonly endpoints?: CredentialAzurewithtenantidEndpoints[] | cdktf.IResolvable;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#security CredentialAzurewithtenantid#security}
  */
  readonly security?: CredentialAzurewithtenantidSecurity[] | cdktf.IResolvable;
}
export interface CredentialAzurewithtenantidEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#activedirectory CredentialAzurewithtenantid#activedirectory}
  */
  readonly activedirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#resourcemanager CredentialAzurewithtenantid#resourcemanager}
  */
  readonly resourcemanager?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#storage CredentialAzurewithtenantid#storage}
  */
  readonly storage?: string;
}

export function credentialAzurewithtenantidEndpointsToTerraform(struct?: CredentialAzurewithtenantidEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activedirectory: cdktf.stringToTerraform(struct!.activedirectory),
    resourcemanager: cdktf.stringToTerraform(struct!.resourcemanager),
    storage: cdktf.stringToTerraform(struct!.storage),
  }
}


export function credentialAzurewithtenantidEndpointsToHclTerraform(struct?: CredentialAzurewithtenantidEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activedirectory: {
      value: cdktf.stringToHclTerraform(struct!.activedirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourcemanager: {
      value: cdktf.stringToHclTerraform(struct!.resourcemanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialAzurewithtenantidEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAzurewithtenantidEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activedirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.activedirectory = this._activedirectory;
    }
    if (this._resourcemanager !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcemanager = this._resourcemanager;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialAzurewithtenantidEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activedirectory = undefined;
      this._resourcemanager = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activedirectory = value.activedirectory;
      this._resourcemanager = value.resourcemanager;
      this._storage = value.storage;
    }
  }

  // activedirectory - computed: true, optional: true, required: false
  private _activedirectory?: string; 
  public get activedirectory() {
    return this.getStringAttribute('activedirectory');
  }
  public set activedirectory(value: string) {
    this._activedirectory = value;
  }
  public resetActivedirectory() {
    this._activedirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activedirectoryInput() {
    return this._activedirectory;
  }

  // resourcemanager - computed: true, optional: true, required: false
  private _resourcemanager?: string; 
  public get resourcemanager() {
    return this.getStringAttribute('resourcemanager');
  }
  public set resourcemanager(value: string) {
    this._resourcemanager = value;
  }
  public resetResourcemanager() {
    this._resourcemanager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcemanagerInput() {
    return this._resourcemanager;
  }

  // storage - computed: true, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}

export class CredentialAzurewithtenantidEndpointsList extends cdktf.ComplexList {
  public internalValue? : CredentialAzurewithtenantidEndpoints[] | cdktf.IResolvable

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
  public get(index: number): CredentialAzurewithtenantidEndpointsOutputReference {
    return new CredentialAzurewithtenantidEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialAzurewithtenantidSecurityAssociationsPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#categoryid CredentialAzurewithtenantid#categoryid}
  */
  readonly categoryid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#categoryname CredentialAzurewithtenantid#categoryname}
  */
  readonly categoryname?: string;
  /**
  * Flag to specify if this is included permission or excluded permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#exclude CredentialAzurewithtenantid#exclude}
  */
  readonly exclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#permissionid CredentialAzurewithtenantid#permissionid}
  */
  readonly permissionid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#permissionname CredentialAzurewithtenantid#permissionname}
  */
  readonly permissionname?: string;
  /**
  * Returns the type of association. [ALL_CATEGORIES, CATEGORY_ENTITY, PERMISSION_ENTITY]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#type CredentialAzurewithtenantid#type}
  */
  readonly type?: string;
}

export function credentialAzurewithtenantidSecurityAssociationsPermissionsToTerraform(struct?: CredentialAzurewithtenantidSecurityAssociationsPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categoryid: cdktf.numberToTerraform(struct!.categoryid),
    categoryname: cdktf.stringToTerraform(struct!.categoryname),
    exclude: cdktf.stringToTerraform(struct!.exclude),
    permissionid: cdktf.numberToTerraform(struct!.permissionid),
    permissionname: cdktf.stringToTerraform(struct!.permissionname),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function credentialAzurewithtenantidSecurityAssociationsPermissionsToHclTerraform(struct?: CredentialAzurewithtenantidSecurityAssociationsPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categoryid: {
      value: cdktf.numberToHclTerraform(struct!.categoryid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categoryname: {
      value: cdktf.stringToHclTerraform(struct!.categoryname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissionid: {
      value: cdktf.numberToHclTerraform(struct!.permissionid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permissionname: {
      value: cdktf.stringToHclTerraform(struct!.permissionname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialAzurewithtenantidSecurityAssociationsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAzurewithtenantidSecurityAssociationsPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryid !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryid = this._categoryid;
    }
    if (this._categoryname !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryname = this._categoryname;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._permissionid !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionid = this._permissionid;
    }
    if (this._permissionname !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionname = this._permissionname;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialAzurewithtenantidSecurityAssociationsPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryid = undefined;
      this._categoryname = undefined;
      this._exclude = undefined;
      this._permissionid = undefined;
      this._permissionname = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryid = value.categoryid;
      this._categoryname = value.categoryname;
      this._exclude = value.exclude;
      this._permissionid = value.permissionid;
      this._permissionname = value.permissionname;
      this._type = value.type;
    }
  }

  // categoryid - computed: true, optional: true, required: false
  private _categoryid?: number; 
  public get categoryid() {
    return this.getNumberAttribute('categoryid');
  }
  public set categoryid(value: number) {
    this._categoryid = value;
  }
  public resetCategoryid() {
    this._categoryid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryidInput() {
    return this._categoryid;
  }

  // categoryname - computed: true, optional: true, required: false
  private _categoryname?: string; 
  public get categoryname() {
    return this.getStringAttribute('categoryname');
  }
  public set categoryname(value: string) {
    this._categoryname = value;
  }
  public resetCategoryname() {
    this._categoryname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorynameInput() {
    return this._categoryname;
  }

  // exclude - computed: true, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // permissionid - computed: true, optional: true, required: false
  private _permissionid?: number; 
  public get permissionid() {
    return this.getNumberAttribute('permissionid');
  }
  public set permissionid(value: number) {
    this._permissionid = value;
  }
  public resetPermissionid() {
    this._permissionid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionidInput() {
    return this._permissionid;
  }

  // permissionname - computed: true, optional: true, required: false
  private _permissionname?: string; 
  public get permissionname() {
    return this.getStringAttribute('permissionname');
  }
  public set permissionname(value: string) {
    this._permissionname = value;
  }
  public resetPermissionname() {
    this._permissionname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionnameInput() {
    return this._permissionname;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CredentialAzurewithtenantidSecurityAssociationsPermissionsList extends cdktf.ComplexList {
  public internalValue? : CredentialAzurewithtenantidSecurityAssociationsPermissions[] | cdktf.IResolvable

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
  public get(index: number): CredentialAzurewithtenantidSecurityAssociationsPermissionsOutputReference {
    return new CredentialAzurewithtenantidSecurityAssociationsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialAzurewithtenantidSecurityAssociationsUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#id CredentialAzurewithtenantid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function credentialAzurewithtenantidSecurityAssociationsUserToTerraform(struct?: CredentialAzurewithtenantidSecurityAssociationsUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function credentialAzurewithtenantidSecurityAssociationsUserToHclTerraform(struct?: CredentialAzurewithtenantidSecurityAssociationsUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialAzurewithtenantidSecurityAssociationsUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAzurewithtenantidSecurityAssociationsUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialAzurewithtenantidSecurityAssociationsUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class CredentialAzurewithtenantidSecurityAssociationsUserList extends cdktf.ComplexList {
  public internalValue? : CredentialAzurewithtenantidSecurityAssociationsUser[] | cdktf.IResolvable

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
  public get(index: number): CredentialAzurewithtenantidSecurityAssociationsUserOutputReference {
    return new CredentialAzurewithtenantidSecurityAssociationsUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialAzurewithtenantidSecurityAssociationsUsergroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#id CredentialAzurewithtenantid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function credentialAzurewithtenantidSecurityAssociationsUsergroupToTerraform(struct?: CredentialAzurewithtenantidSecurityAssociationsUsergroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function credentialAzurewithtenantidSecurityAssociationsUsergroupToHclTerraform(struct?: CredentialAzurewithtenantidSecurityAssociationsUsergroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialAzurewithtenantidSecurityAssociationsUsergroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAzurewithtenantidSecurityAssociationsUsergroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialAzurewithtenantidSecurityAssociationsUsergroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class CredentialAzurewithtenantidSecurityAssociationsUsergroupList extends cdktf.ComplexList {
  public internalValue? : CredentialAzurewithtenantidSecurityAssociationsUsergroup[] | cdktf.IResolvable

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
  public get(index: number): CredentialAzurewithtenantidSecurityAssociationsUsergroupOutputReference {
    return new CredentialAzurewithtenantidSecurityAssociationsUsergroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialAzurewithtenantidSecurityAssociations {
  /**
  * To check if the user/user group associated is the owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#iscreatorassociation CredentialAzurewithtenantid#iscreatorassociation}
  */
  readonly iscreatorassociation?: string;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#permissions CredentialAzurewithtenantid#permissions}
  */
  readonly permissions?: CredentialAzurewithtenantidSecurityAssociationsPermissions[] | cdktf.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#user CredentialAzurewithtenantid#user}
  */
  readonly user?: CredentialAzurewithtenantidSecurityAssociationsUser[] | cdktf.IResolvable;
  /**
  * usergroup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#usergroup CredentialAzurewithtenantid#usergroup}
  */
  readonly usergroup?: CredentialAzurewithtenantidSecurityAssociationsUsergroup[] | cdktf.IResolvable;
}

export function credentialAzurewithtenantidSecurityAssociationsToTerraform(struct?: CredentialAzurewithtenantidSecurityAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iscreatorassociation: cdktf.stringToTerraform(struct!.iscreatorassociation),
    permissions: cdktf.listMapper(credentialAzurewithtenantidSecurityAssociationsPermissionsToTerraform, true)(struct!.permissions),
    user: cdktf.listMapper(credentialAzurewithtenantidSecurityAssociationsUserToTerraform, true)(struct!.user),
    usergroup: cdktf.listMapper(credentialAzurewithtenantidSecurityAssociationsUsergroupToTerraform, true)(struct!.usergroup),
  }
}


export function credentialAzurewithtenantidSecurityAssociationsToHclTerraform(struct?: CredentialAzurewithtenantidSecurityAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iscreatorassociation: {
      value: cdktf.stringToHclTerraform(struct!.iscreatorassociation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.listMapperHcl(credentialAzurewithtenantidSecurityAssociationsPermissionsToHclTerraform, true)(struct!.permissions),
      isBlock: true,
      type: "list",
      storageClassType: "CredentialAzurewithtenantidSecurityAssociationsPermissionsList",
    },
    user: {
      value: cdktf.listMapperHcl(credentialAzurewithtenantidSecurityAssociationsUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "CredentialAzurewithtenantidSecurityAssociationsUserList",
    },
    usergroup: {
      value: cdktf.listMapperHcl(credentialAzurewithtenantidSecurityAssociationsUsergroupToHclTerraform, true)(struct!.usergroup),
      isBlock: true,
      type: "list",
      storageClassType: "CredentialAzurewithtenantidSecurityAssociationsUsergroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialAzurewithtenantidSecurityAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAzurewithtenantidSecurityAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iscreatorassociation !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscreatorassociation = this._iscreatorassociation;
    }
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    if (this._usergroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usergroup = this._usergroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialAzurewithtenantidSecurityAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iscreatorassociation = undefined;
      this._permissions.internalValue = undefined;
      this._user.internalValue = undefined;
      this._usergroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iscreatorassociation = value.iscreatorassociation;
      this._permissions.internalValue = value.permissions;
      this._user.internalValue = value.user;
      this._usergroup.internalValue = value.usergroup;
    }
  }

  // iscreatorassociation - computed: true, optional: true, required: false
  private _iscreatorassociation?: string; 
  public get iscreatorassociation() {
    return this.getStringAttribute('iscreatorassociation');
  }
  public set iscreatorassociation(value: string) {
    this._iscreatorassociation = value;
  }
  public resetIscreatorassociation() {
    this._iscreatorassociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscreatorassociationInput() {
    return this._iscreatorassociation;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new CredentialAzurewithtenantidSecurityAssociationsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: CredentialAzurewithtenantidSecurityAssociationsPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new CredentialAzurewithtenantidSecurityAssociationsUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: CredentialAzurewithtenantidSecurityAssociationsUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // usergroup - computed: false, optional: true, required: false
  private _usergroup = new CredentialAzurewithtenantidSecurityAssociationsUsergroupList(this, "usergroup", false);
  public get usergroup() {
    return this._usergroup;
  }
  public putUsergroup(value: CredentialAzurewithtenantidSecurityAssociationsUsergroup[] | cdktf.IResolvable) {
    this._usergroup.internalValue = value;
  }
  public resetUsergroup() {
    this._usergroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usergroupInput() {
    return this._usergroup.internalValue;
  }
}

export class CredentialAzurewithtenantidSecurityAssociationsList extends cdktf.ComplexList {
  public internalValue? : CredentialAzurewithtenantidSecurityAssociations[] | cdktf.IResolvable

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
  public get(index: number): CredentialAzurewithtenantidSecurityAssociationsOutputReference {
    return new CredentialAzurewithtenantidSecurityAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialAzurewithtenantidSecurityOwnerUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#id CredentialAzurewithtenantid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#name CredentialAzurewithtenantid#name}
  */
  readonly name?: string;
}

export function credentialAzurewithtenantidSecurityOwnerUserToTerraform(struct?: CredentialAzurewithtenantidSecurityOwnerUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function credentialAzurewithtenantidSecurityOwnerUserToHclTerraform(struct?: CredentialAzurewithtenantidSecurityOwnerUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialAzurewithtenantidSecurityOwnerUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAzurewithtenantidSecurityOwnerUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialAzurewithtenantidSecurityOwnerUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class CredentialAzurewithtenantidSecurityOwnerUserList extends cdktf.ComplexList {
  public internalValue? : CredentialAzurewithtenantidSecurityOwnerUser[] | cdktf.IResolvable

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
  public get(index: number): CredentialAzurewithtenantidSecurityOwnerUserOutputReference {
    return new CredentialAzurewithtenantidSecurityOwnerUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialAzurewithtenantidSecurityOwnerUsergroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#id CredentialAzurewithtenantid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#name CredentialAzurewithtenantid#name}
  */
  readonly name?: string;
}

export function credentialAzurewithtenantidSecurityOwnerUsergroupToTerraform(struct?: CredentialAzurewithtenantidSecurityOwnerUsergroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function credentialAzurewithtenantidSecurityOwnerUsergroupToHclTerraform(struct?: CredentialAzurewithtenantidSecurityOwnerUsergroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialAzurewithtenantidSecurityOwnerUsergroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAzurewithtenantidSecurityOwnerUsergroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialAzurewithtenantidSecurityOwnerUsergroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class CredentialAzurewithtenantidSecurityOwnerUsergroupList extends cdktf.ComplexList {
  public internalValue? : CredentialAzurewithtenantidSecurityOwnerUsergroup[] | cdktf.IResolvable

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
  public get(index: number): CredentialAzurewithtenantidSecurityOwnerUsergroupOutputReference {
    return new CredentialAzurewithtenantidSecurityOwnerUsergroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialAzurewithtenantidSecurityOwner {
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#user CredentialAzurewithtenantid#user}
  */
  readonly user?: CredentialAzurewithtenantidSecurityOwnerUser[] | cdktf.IResolvable;
  /**
  * usergroup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#usergroup CredentialAzurewithtenantid#usergroup}
  */
  readonly usergroup?: CredentialAzurewithtenantidSecurityOwnerUsergroup[] | cdktf.IResolvable;
}

export function credentialAzurewithtenantidSecurityOwnerToTerraform(struct?: CredentialAzurewithtenantidSecurityOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user: cdktf.listMapper(credentialAzurewithtenantidSecurityOwnerUserToTerraform, true)(struct!.user),
    usergroup: cdktf.listMapper(credentialAzurewithtenantidSecurityOwnerUsergroupToTerraform, true)(struct!.usergroup),
  }
}


export function credentialAzurewithtenantidSecurityOwnerToHclTerraform(struct?: CredentialAzurewithtenantidSecurityOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user: {
      value: cdktf.listMapperHcl(credentialAzurewithtenantidSecurityOwnerUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "CredentialAzurewithtenantidSecurityOwnerUserList",
    },
    usergroup: {
      value: cdktf.listMapperHcl(credentialAzurewithtenantidSecurityOwnerUsergroupToHclTerraform, true)(struct!.usergroup),
      isBlock: true,
      type: "list",
      storageClassType: "CredentialAzurewithtenantidSecurityOwnerUsergroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialAzurewithtenantidSecurityOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAzurewithtenantidSecurityOwner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    if (this._usergroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usergroup = this._usergroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialAzurewithtenantidSecurityOwner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._user.internalValue = undefined;
      this._usergroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._user.internalValue = value.user;
      this._usergroup.internalValue = value.usergroup;
    }
  }

  // user - computed: false, optional: true, required: false
  private _user = new CredentialAzurewithtenantidSecurityOwnerUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: CredentialAzurewithtenantidSecurityOwnerUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // usergroup - computed: false, optional: true, required: false
  private _usergroup = new CredentialAzurewithtenantidSecurityOwnerUsergroupList(this, "usergroup", false);
  public get usergroup() {
    return this._usergroup;
  }
  public putUsergroup(value: CredentialAzurewithtenantidSecurityOwnerUsergroup[] | cdktf.IResolvable) {
    this._usergroup.internalValue = value;
  }
  public resetUsergroup() {
    this._usergroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usergroupInput() {
    return this._usergroup.internalValue;
  }
}

export class CredentialAzurewithtenantidSecurityOwnerList extends cdktf.ComplexList {
  public internalValue? : CredentialAzurewithtenantidSecurityOwner[] | cdktf.IResolvable

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
  public get(index: number): CredentialAzurewithtenantidSecurityOwnerOutputReference {
    return new CredentialAzurewithtenantidSecurityOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialAzurewithtenantidSecurity {
  /**
  * associations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#associations CredentialAzurewithtenantid#associations}
  */
  readonly associations?: CredentialAzurewithtenantidSecurityAssociations[] | cdktf.IResolvable;
  /**
  * owner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#owner CredentialAzurewithtenantid#owner}
  */
  readonly owner?: CredentialAzurewithtenantidSecurityOwner[] | cdktf.IResolvable;
}

export function credentialAzurewithtenantidSecurityToTerraform(struct?: CredentialAzurewithtenantidSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associations: cdktf.listMapper(credentialAzurewithtenantidSecurityAssociationsToTerraform, true)(struct!.associations),
    owner: cdktf.listMapper(credentialAzurewithtenantidSecurityOwnerToTerraform, true)(struct!.owner),
  }
}


export function credentialAzurewithtenantidSecurityToHclTerraform(struct?: CredentialAzurewithtenantidSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associations: {
      value: cdktf.listMapperHcl(credentialAzurewithtenantidSecurityAssociationsToHclTerraform, true)(struct!.associations),
      isBlock: true,
      type: "set",
      storageClassType: "CredentialAzurewithtenantidSecurityAssociationsList",
    },
    owner: {
      value: cdktf.listMapperHcl(credentialAzurewithtenantidSecurityOwnerToHclTerraform, true)(struct!.owner),
      isBlock: true,
      type: "list",
      storageClassType: "CredentialAzurewithtenantidSecurityOwnerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialAzurewithtenantidSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAzurewithtenantidSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associations = this._associations?.internalValue;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialAzurewithtenantidSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associations.internalValue = undefined;
      this._owner.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associations.internalValue = value.associations;
      this._owner.internalValue = value.owner;
    }
  }

  // associations - computed: false, optional: true, required: false
  private _associations = new CredentialAzurewithtenantidSecurityAssociationsList(this, "associations", true);
  public get associations() {
    return this._associations;
  }
  public putAssociations(value: CredentialAzurewithtenantidSecurityAssociations[] | cdktf.IResolvable) {
    this._associations.internalValue = value;
  }
  public resetAssociations() {
    this._associations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationsInput() {
    return this._associations.internalValue;
  }

  // owner - computed: false, optional: true, required: false
  private _owner = new CredentialAzurewithtenantidSecurityOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }
  public putOwner(value: CredentialAzurewithtenantidSecurityOwner[] | cdktf.IResolvable) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }
}

export class CredentialAzurewithtenantidSecurityList extends cdktf.ComplexList {
  public internalValue? : CredentialAzurewithtenantidSecurity[] | cdktf.IResolvable

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
  public get(index: number): CredentialAzurewithtenantidSecurityOutputReference {
    return new CredentialAzurewithtenantidSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid commvault_credential_azurewithtenantid}
*/
export class CredentialAzurewithtenantid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_credential_azurewithtenantid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialAzurewithtenantid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialAzurewithtenantid to import
  * @param importFromId The id of the existing CredentialAzurewithtenantid that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialAzurewithtenantid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_credential_azurewithtenantid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_azurewithtenantid commvault_credential_azurewithtenantid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialAzurewithtenantidConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialAzurewithtenantidConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_credential_azurewithtenantid',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10',
        providerVersionConstraint: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accounttype = config.accounttype;
    this._applicationid = config.applicationid;
    this._applicationsecret = config.applicationsecret;
    this._description = config.description;
    this._environment = config.environment;
    this._id = config.id;
    this._name = config.name;
    this._tenantid = config.tenantid;
    this._vendortype = config.vendortype;
    this._endpoints.internalValue = config.endpoints;
    this._security.internalValue = config.security;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounttype - computed: true, optional: true, required: false
  private _accounttype?: string; 
  public get accounttype() {
    return this.getStringAttribute('accounttype');
  }
  public set accounttype(value: string) {
    this._accounttype = value;
  }
  public resetAccounttype() {
    this._accounttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accounttypeInput() {
    return this._accounttype;
  }

  // applicationid - computed: false, optional: false, required: true
  private _applicationid?: string; 
  public get applicationid() {
    return this.getStringAttribute('applicationid');
  }
  public set applicationid(value: string) {
    this._applicationid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationidInput() {
    return this._applicationid;
  }

  // applicationsecret - computed: false, optional: false, required: true
  private _applicationsecret?: string; 
  public get applicationsecret() {
    return this.getStringAttribute('applicationsecret');
  }
  public set applicationsecret(value: string) {
    this._applicationsecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsecretInput() {
    return this._applicationsecret;
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

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // tenantid - computed: false, optional: false, required: true
  private _tenantid?: string; 
  public get tenantid() {
    return this.getStringAttribute('tenantid');
  }
  public set tenantid(value: string) {
    this._tenantid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantidInput() {
    return this._tenantid;
  }

  // vendortype - computed: true, optional: true, required: false
  private _vendortype?: string; 
  public get vendortype() {
    return this.getStringAttribute('vendortype');
  }
  public set vendortype(value: string) {
    this._vendortype = value;
  }
  public resetVendortype() {
    this._vendortype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendortypeInput() {
    return this._vendortype;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new CredentialAzurewithtenantidEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: CredentialAzurewithtenantidEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new CredentialAzurewithtenantidSecurityList(this, "security", false);
  public get security() {
    return this._security;
  }
  public putSecurity(value: CredentialAzurewithtenantidSecurity[] | cdktf.IResolvable) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounttype: cdktf.stringToTerraform(this._accounttype),
      applicationid: cdktf.stringToTerraform(this._applicationid),
      applicationsecret: cdktf.stringToTerraform(this._applicationsecret),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenantid: cdktf.stringToTerraform(this._tenantid),
      vendortype: cdktf.stringToTerraform(this._vendortype),
      endpoints: cdktf.listMapper(credentialAzurewithtenantidEndpointsToTerraform, true)(this._endpoints.internalValue),
      security: cdktf.listMapper(credentialAzurewithtenantidSecurityToTerraform, true)(this._security.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounttype: {
        value: cdktf.stringToHclTerraform(this._accounttype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      applicationid: {
        value: cdktf.stringToHclTerraform(this._applicationid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      applicationsecret: {
        value: cdktf.stringToHclTerraform(this._applicationsecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenantid: {
        value: cdktf.stringToHclTerraform(this._tenantid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendortype: {
        value: cdktf.stringToHclTerraform(this._vendortype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoints: {
        value: cdktf.listMapperHcl(credentialAzurewithtenantidEndpointsToHclTerraform, true)(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CredentialAzurewithtenantidEndpointsList",
      },
      security: {
        value: cdktf.listMapperHcl(credentialAzurewithtenantidSecurityToHclTerraform, true)(this._security.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CredentialAzurewithtenantidSecurityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
