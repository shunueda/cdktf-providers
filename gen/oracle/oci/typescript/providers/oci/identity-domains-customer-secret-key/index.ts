// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityDomainsCustomerSecretKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#attribute_sets IdentityDomainsCustomerSecretKey#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#attributes IdentityDomainsCustomerSecretKey#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#authorization IdentityDomainsCustomerSecretKey#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#description IdentityDomainsCustomerSecretKey#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#display_name IdentityDomainsCustomerSecretKey#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#expires_on IdentityDomainsCustomerSecretKey#expires_on}
  */
  readonly expiresOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#idcs_endpoint IdentityDomainsCustomerSecretKey#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#ocid IdentityDomainsCustomerSecretKey#ocid}
  */
  readonly ocid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#resource_type_schema_version IdentityDomainsCustomerSecretKey#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#schemas IdentityDomainsCustomerSecretKey#schemas}
  */
  readonly schemas: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#status IdentityDomainsCustomerSecretKey#status}
  */
  readonly status?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#tags IdentityDomainsCustomerSecretKey#tags}
  */
  readonly tags?: IdentityDomainsCustomerSecretKeyTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#timeouts IdentityDomainsCustomerSecretKey#timeouts}
  */
  readonly timeouts?: IdentityDomainsCustomerSecretKeyTimeouts;
  /**
  * urnietfparamsscimschemasoracleidcsextensionself_change_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#urnietfparamsscimschemasoracleidcsextensionself_change_user IdentityDomainsCustomerSecretKey#urnietfparamsscimschemasoracleidcsextensionself_change_user}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionselfChangeUser?: IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#user IdentityDomainsCustomerSecretKey#user}
  */
  readonly user?: IdentityDomainsCustomerSecretKeyUser;
}
export interface IdentityDomainsCustomerSecretKeyIdcsCreatedBy {
}

export function identityDomainsCustomerSecretKeyIdcsCreatedByToTerraform(struct?: IdentityDomainsCustomerSecretKeyIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsCustomerSecretKeyIdcsCreatedByToHclTerraform(struct?: IdentityDomainsCustomerSecretKeyIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsCustomerSecretKeyIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsCustomerSecretKeyIdcsCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
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

export class IdentityDomainsCustomerSecretKeyIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference {
    return new IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy {
}

export function identityDomainsCustomerSecretKeyIdcsLastModifiedByToTerraform(struct?: IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsCustomerSecretKeyIdcsLastModifiedByToHclTerraform(struct?: IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
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

export class IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference {
    return new IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsCustomerSecretKeyMeta {
}

export function identityDomainsCustomerSecretKeyMetaToTerraform(struct?: IdentityDomainsCustomerSecretKeyMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsCustomerSecretKeyMetaToHclTerraform(struct?: IdentityDomainsCustomerSecretKeyMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsCustomerSecretKeyMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsCustomerSecretKeyMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsCustomerSecretKeyMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class IdentityDomainsCustomerSecretKeyMetaList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsCustomerSecretKeyMetaOutputReference {
    return new IdentityDomainsCustomerSecretKeyMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsCustomerSecretKeyTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#key IdentityDomainsCustomerSecretKey#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#value IdentityDomainsCustomerSecretKey#value}
  */
  readonly value: string;
}

export function identityDomainsCustomerSecretKeyTagsToTerraform(struct?: IdentityDomainsCustomerSecretKeyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsCustomerSecretKeyTagsToHclTerraform(struct?: IdentityDomainsCustomerSecretKeyTags | cdktf.IResolvable): any {
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

export class IdentityDomainsCustomerSecretKeyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsCustomerSecretKeyTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsCustomerSecretKeyTags | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
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

  // value - computed: false, optional: false, required: true
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

export class IdentityDomainsCustomerSecretKeyTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsCustomerSecretKeyTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsCustomerSecretKeyTagsOutputReference {
    return new IdentityDomainsCustomerSecretKeyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsCustomerSecretKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#create IdentityDomainsCustomerSecretKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#delete IdentityDomainsCustomerSecretKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#update IdentityDomainsCustomerSecretKey#update}
  */
  readonly update?: string;
}

export function identityDomainsCustomerSecretKeyTimeoutsToTerraform(struct?: IdentityDomainsCustomerSecretKeyTimeouts | cdktf.IResolvable): any {
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


export function identityDomainsCustomerSecretKeyTimeoutsToHclTerraform(struct?: IdentityDomainsCustomerSecretKeyTimeouts | cdktf.IResolvable): any {
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

export class IdentityDomainsCustomerSecretKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityDomainsCustomerSecretKeyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsCustomerSecretKeyTimeouts | cdktf.IResolvable | undefined) {
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
export interface IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#allow_self_change IdentityDomainsCustomerSecretKey#allow_self_change}
  */
  readonly allowSelfChange?: boolean | cdktf.IResolvable;
}

export function identityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserToTerraform(struct?: IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference | IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_self_change: cdktf.booleanToTerraform(struct!.allowSelfChange),
  }
}


export function identityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserToHclTerraform(struct?: IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference | IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_self_change: {
      value: cdktf.booleanToHclTerraform(struct!.allowSelfChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSelfChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSelfChange = this._allowSelfChange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSelfChange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSelfChange = value.allowSelfChange;
    }
  }

  // allow_self_change - computed: true, optional: true, required: false
  private _allowSelfChange?: boolean | cdktf.IResolvable; 
  public get allowSelfChange() {
    return this.getBooleanAttribute('allow_self_change');
  }
  public set allowSelfChange(value: boolean | cdktf.IResolvable) {
    this._allowSelfChange = value;
  }
  public resetAllowSelfChange() {
    this._allowSelfChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSelfChangeInput() {
    return this._allowSelfChange;
  }
}
export interface IdentityDomainsCustomerSecretKeyUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#ocid IdentityDomainsCustomerSecretKey#ocid}
  */
  readonly ocid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#value IdentityDomainsCustomerSecretKey#value}
  */
  readonly value?: string;
}

export function identityDomainsCustomerSecretKeyUserToTerraform(struct?: IdentityDomainsCustomerSecretKeyUserOutputReference | IdentityDomainsCustomerSecretKeyUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ocid: cdktf.stringToTerraform(struct!.ocid),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsCustomerSecretKeyUserToHclTerraform(struct?: IdentityDomainsCustomerSecretKeyUserOutputReference | IdentityDomainsCustomerSecretKeyUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ocid: {
      value: cdktf.stringToHclTerraform(struct!.ocid),
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

export class IdentityDomainsCustomerSecretKeyUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsCustomerSecretKeyUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ocid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocid = this._ocid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsCustomerSecretKeyUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ocid = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ocid = value.ocid;
      this._value = value.value;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ocid - computed: true, optional: true, required: false
  private _ocid?: string; 
  public get ocid() {
    return this.getStringAttribute('ocid');
  }
  public set ocid(value: string) {
    this._ocid = value;
  }
  public resetOcid() {
    this._ocid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocidInput() {
    return this._ocid;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key oci_identity_domains_customer_secret_key}
*/
export class IdentityDomainsCustomerSecretKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_customer_secret_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityDomainsCustomerSecretKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityDomainsCustomerSecretKey to import
  * @param importFromId The id of the existing IdentityDomainsCustomerSecretKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityDomainsCustomerSecretKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_customer_secret_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_customer_secret_key oci_identity_domains_customer_secret_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityDomainsCustomerSecretKeyConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityDomainsCustomerSecretKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_customer_secret_key',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authorization = config.authorization;
    this._description = config.description;
    this._displayName = config.displayName;
    this._expiresOn = config.expiresOn;
    this._idcsEndpoint = config.idcsEndpoint;
    this._ocid = config.ocid;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._schemas = config.schemas;
    this._status = config.status;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser.internalValue = config.urnietfparamsscimschemasoracleidcsextensionselfChangeUser;
    this._user.internalValue = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // attribute_sets - computed: false, optional: true, required: false
  private _attributeSets?: string[]; 
  public get attributeSets() {
    return this.getListAttribute('attribute_sets');
  }
  public set attributeSets(value: string[]) {
    this._attributeSets = value;
  }
  public resetAttributeSets() {
    this._attributeSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSetsInput() {
    return this._attributeSets;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // expires_on - computed: true, optional: true, required: false
  private _expiresOn?: string; 
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }
  public set expiresOn(value: string) {
    this._expiresOn = value;
  }
  public resetExpiresOn() {
    this._expiresOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresOnInput() {
    return this._expiresOn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new IdentityDomainsCustomerSecretKeyIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_endpoint - computed: false, optional: false, required: true
  private _idcsEndpoint?: string; 
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }
  public set idcsEndpoint(value: string) {
    this._idcsEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsEndpointInput() {
    return this._idcsEndpoint;
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
  public get idcsLastModifiedBy() {
    return this._idcsLastModifiedBy;
  }

  // idcs_last_upgraded_in_release - computed: true, optional: false, required: false
  public get idcsLastUpgradedInRelease() {
    return this.getStringAttribute('idcs_last_upgraded_in_release');
  }

  // idcs_prevented_operations - computed: true, optional: false, required: false
  public get idcsPreventedOperations() {
    return this.getListAttribute('idcs_prevented_operations');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new IdentityDomainsCustomerSecretKeyMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // ocid - computed: true, optional: true, required: false
  private _ocid?: string; 
  public get ocid() {
    return this.getStringAttribute('ocid');
  }
  public set ocid(value: string) {
    this._ocid = value;
  }
  public resetOcid() {
    this._ocid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocidInput() {
    return this._ocid;
  }

  // resource_type_schema_version - computed: false, optional: true, required: false
  private _resourceTypeSchemaVersion?: string; 
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
  }
  public set resourceTypeSchemaVersion(value: string) {
    this._resourceTypeSchemaVersion = value;
  }
  public resetResourceTypeSchemaVersion() {
    this._resourceTypeSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeSchemaVersionInput() {
    return this._resourceTypeSchemaVersion;
  }

  // schemas - computed: false, optional: false, required: true
  private _schemas?: string[]; 
  public get schemas() {
    return this.getListAttribute('schemas');
  }
  public set schemas(value: string[]) {
    this._schemas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas;
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new IdentityDomainsCustomerSecretKeyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IdentityDomainsCustomerSecretKeyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityDomainsCustomerSecretKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityDomainsCustomerSecretKeyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionself_change_user - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionselfChangeUser = new IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionself_change_user");
  public get urnietfparamsscimschemasoracleidcsextensionselfChangeUser() {
    return this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionselfChangeUser(value: IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser) {
    this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser() {
    this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionselfChangeUserInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new IdentityDomainsCustomerSecretKeyUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: IdentityDomainsCustomerSecretKeyUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      authorization: cdktf.stringToTerraform(this._authorization),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      expires_on: cdktf.stringToTerraform(this._expiresOn),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      ocid: cdktf.stringToTerraform(this._ocid),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemas),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.listMapper(identityDomainsCustomerSecretKeyTagsToTerraform, true)(this._tags.internalValue),
      timeouts: identityDomainsCustomerSecretKeyTimeoutsToTerraform(this._timeouts.internalValue),
      urnietfparamsscimschemasoracleidcsextensionself_change_user: identityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserToTerraform(this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser.internalValue),
      user: identityDomainsCustomerSecretKeyUserToTerraform(this._user.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributeSets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires_on: {
        value: cdktf.stringToHclTerraform(this._expiresOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idcs_endpoint: {
        value: cdktf.stringToHclTerraform(this._idcsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocid: {
        value: cdktf.stringToHclTerraform(this._ocid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type_schema_version: {
        value: cdktf.stringToHclTerraform(this._resourceTypeSchemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schemas: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemas),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(identityDomainsCustomerSecretKeyTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsCustomerSecretKeyTagsList",
      },
      timeouts: {
        value: identityDomainsCustomerSecretKeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityDomainsCustomerSecretKeyTimeouts",
      },
      urnietfparamsscimschemasoracleidcsextensionself_change_user: {
        value: identityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionselfChangeUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList",
      },
      user: {
        value: identityDomainsCustomerSecretKeyUserToHclTerraform(this._user.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsCustomerSecretKeyUserList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
