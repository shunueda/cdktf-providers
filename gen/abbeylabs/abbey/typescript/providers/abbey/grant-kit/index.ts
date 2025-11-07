// https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrantKitConfig extends cdktf.TerraformMetaArguments {
  /**
  * created_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#created_at GrantKit#created_at}
  */
  readonly createdAt?: string;
  /**
  * current_version_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#current_version_id GrantKit#current_version_id}
  */
  readonly currentVersionId?: string;
  /**
  * description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#description GrantKit#description}
  */
  readonly description: string;
  /**
  * grants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#grants GrantKit#grants}
  */
  readonly grants?: GrantKitGrants[] | cdktf.IResolvable;
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#id GrantKit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * max_grant_duration_in_sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#max_grant_duration_in_sec GrantKit#max_grant_duration_in_sec}
  */
  readonly maxGrantDurationInSec?: number;
  /**
  * name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#name GrantKit#name}
  */
  readonly name: string;
  /**
  * output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#output GrantKit#output}
  */
  readonly output: GrantKitOutput;
  /**
  * policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#policies GrantKit#policies}
  */
  readonly policies?: GrantKitPolicies[] | cdktf.IResolvable;
  /**
  * requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#requests GrantKit#requests}
  */
  readonly requests?: GrantKitRequests[] | cdktf.IResolvable;
  /**
  * resource_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#resource_type GrantKit#resource_type}
  */
  readonly resourceType?: string;
  /**
  * updated_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#updated_at GrantKit#updated_at}
  */
  readonly updatedAt?: string;
  /**
  * workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#workflow GrantKit#workflow}
  */
  readonly workflow?: GrantKitWorkflow;
}
export interface GrantKitGrants {
  /**
  * created_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#created_at GrantKit#created_at}
  */
  readonly createdAt: string;
  /**
  * deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#deleted GrantKit#deleted}
  */
  readonly deleted: boolean | cdktf.IResolvable;
  /**
  * grant_kit_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#grant_kit_id GrantKit#grant_kit_id}
  */
  readonly grantKitId: string;
  /**
  * grant_kit_version_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#grant_kit_version_id GrantKit#grant_kit_version_id}
  */
  readonly grantKitVersionId: string;
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#id GrantKit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * organization_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#organization_id GrantKit#organization_id}
  */
  readonly organizationId: string;
  /**
  * request_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#request_id GrantKit#request_id}
  */
  readonly requestId: string;
  /**
  * updated_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#updated_at GrantKit#updated_at}
  */
  readonly updatedAt: string;
  /**
  * user_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#user_id GrantKit#user_id}
  */
  readonly userId: string;
}

export function grantKitGrantsToTerraform(struct?: GrantKitGrants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_at: cdktf.stringToTerraform(struct!.createdAt),
    deleted: cdktf.booleanToTerraform(struct!.deleted),
    grant_kit_id: cdktf.stringToTerraform(struct!.grantKitId),
    grant_kit_version_id: cdktf.stringToTerraform(struct!.grantKitVersionId),
    id: cdktf.stringToTerraform(struct!.id),
    organization_id: cdktf.stringToTerraform(struct!.organizationId),
    request_id: cdktf.stringToTerraform(struct!.requestId),
    updated_at: cdktf.stringToTerraform(struct!.updatedAt),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function grantKitGrantsToHclTerraform(struct?: GrantKitGrants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_at: {
      value: cdktf.stringToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deleted: {
      value: cdktf.booleanToHclTerraform(struct!.deleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grant_kit_id: {
      value: cdktf.stringToHclTerraform(struct!.grantKitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_kit_version_id: {
      value: cdktf.stringToHclTerraform(struct!.grantKitVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_id: {
      value: cdktf.stringToHclTerraform(struct!.requestId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantKitGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrantKitGrants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._deleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleted = this._deleted;
    }
    if (this._grantKitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantKitId = this._grantKitId;
    }
    if (this._grantKitVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantKitVersionId = this._grantKitVersionId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    if (this._requestId !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestId = this._requestId;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantKitGrants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdAt = undefined;
      this._deleted = undefined;
      this._grantKitId = undefined;
      this._grantKitVersionId = undefined;
      this._id = undefined;
      this._organizationId = undefined;
      this._requestId = undefined;
      this._updatedAt = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdAt = value.createdAt;
      this._deleted = value.deleted;
      this._grantKitId = value.grantKitId;
      this._grantKitVersionId = value.grantKitVersionId;
      this._id = value.id;
      this._organizationId = value.organizationId;
      this._requestId = value.requestId;
      this._updatedAt = value.updatedAt;
      this._userId = value.userId;
    }
  }

  // created_at - computed: true, optional: false, required: true
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // deleted - computed: true, optional: false, required: true
  private _deleted?: boolean | cdktf.IResolvable; 
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }
  public set deleted(value: boolean | cdktf.IResolvable) {
    this._deleted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedInput() {
    return this._deleted;
  }

  // grant_kit_id - computed: true, optional: false, required: true
  private _grantKitId?: string; 
  public get grantKitId() {
    return this.getStringAttribute('grant_kit_id');
  }
  public set grantKitId(value: string) {
    this._grantKitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantKitIdInput() {
    return this._grantKitId;
  }

  // grant_kit_version_id - computed: true, optional: false, required: true
  private _grantKitVersionId?: string; 
  public get grantKitVersionId() {
    return this.getStringAttribute('grant_kit_version_id');
  }
  public set grantKitVersionId(value: string) {
    this._grantKitVersionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantKitVersionIdInput() {
    return this._grantKitVersionId;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // organization_id - computed: true, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // request_id - computed: true, optional: false, required: true
  private _requestId?: string; 
  public get requestId() {
    return this.getStringAttribute('request_id');
  }
  public set requestId(value: string) {
    this._requestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdInput() {
    return this._requestId;
  }

  // updated_at - computed: true, optional: false, required: true
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // user_id - computed: true, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class GrantKitGrantsList extends cdktf.ComplexList {
  public internalValue? : GrantKitGrants[] | cdktf.IResolvable

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
  public get(index: number): GrantKitGrantsOutputReference {
    return new GrantKitGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrantKitOutput {
  /**
  * append
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#append GrantKit#append}
  */
  readonly append?: string;
  /**
  * location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#location GrantKit#location}
  */
  readonly location: string;
  /**
  * overwrite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#overwrite GrantKit#overwrite}
  */
  readonly overwrite?: string;
}

export function grantKitOutputToTerraform(struct?: GrantKitOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.stringToTerraform(struct!.append),
    location: cdktf.stringToTerraform(struct!.location),
    overwrite: cdktf.stringToTerraform(struct!.overwrite),
  }
}


export function grantKitOutputToHclTerraform(struct?: GrantKitOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.stringToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktf.stringToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantKitOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GrantKitOutput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantKitOutput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._location = undefined;
      this._overwrite = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._location = value.location;
      this._overwrite = value.overwrite;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: string; 
  public get append() {
    return this.getStringAttribute('append');
  }
  public set append(value: string) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: string; 
  public get overwrite() {
    return this.getStringAttribute('overwrite');
  }
  public set overwrite(value: string) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }
}
export interface GrantKitPolicies {
  /**
  * bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#bundle GrantKit#bundle}
  */
  readonly bundle?: string;
  /**
  * query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#query GrantKit#query}
  */
  readonly query?: string;
}

export function grantKitPoliciesToTerraform(struct?: GrantKitPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundle: cdktf.stringToTerraform(struct!.bundle),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function grantKitPoliciesToHclTerraform(struct?: GrantKitPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundle: {
      value: cdktf.stringToHclTerraform(struct!.bundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantKitPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrantKitPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundle = this._bundle;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantKitPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundle = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundle = value.bundle;
      this._query = value.query;
    }
  }

  // bundle - computed: false, optional: true, required: false
  private _bundle?: string; 
  public get bundle() {
    return this.getStringAttribute('bundle');
  }
  public set bundle(value: string) {
    this._bundle = value;
  }
  public resetBundle() {
    this._bundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInput() {
    return this._bundle;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class GrantKitPoliciesList extends cdktf.ComplexList {
  public internalValue? : GrantKitPolicies[] | cdktf.IResolvable

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
  public get(index: number): GrantKitPoliciesOutputReference {
    return new GrantKitPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrantKitRequestsReviewsGrant {
  /**
  * created_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#created_at GrantKit#created_at}
  */
  readonly createdAt: string;
  /**
  * deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#deleted GrantKit#deleted}
  */
  readonly deleted: boolean | cdktf.IResolvable;
  /**
  * grant_kit_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#grant_kit_id GrantKit#grant_kit_id}
  */
  readonly grantKitId: string;
  /**
  * grant_kit_version_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#grant_kit_version_id GrantKit#grant_kit_version_id}
  */
  readonly grantKitVersionId: string;
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#id GrantKit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * organization_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#organization_id GrantKit#organization_id}
  */
  readonly organizationId: string;
  /**
  * request_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#request_id GrantKit#request_id}
  */
  readonly requestId: string;
  /**
  * updated_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#updated_at GrantKit#updated_at}
  */
  readonly updatedAt: string;
  /**
  * user_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#user_id GrantKit#user_id}
  */
  readonly userId: string;
}

export function grantKitRequestsReviewsGrantToTerraform(struct?: GrantKitRequestsReviewsGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_at: cdktf.stringToTerraform(struct!.createdAt),
    deleted: cdktf.booleanToTerraform(struct!.deleted),
    grant_kit_id: cdktf.stringToTerraform(struct!.grantKitId),
    grant_kit_version_id: cdktf.stringToTerraform(struct!.grantKitVersionId),
    id: cdktf.stringToTerraform(struct!.id),
    organization_id: cdktf.stringToTerraform(struct!.organizationId),
    request_id: cdktf.stringToTerraform(struct!.requestId),
    updated_at: cdktf.stringToTerraform(struct!.updatedAt),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function grantKitRequestsReviewsGrantToHclTerraform(struct?: GrantKitRequestsReviewsGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_at: {
      value: cdktf.stringToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deleted: {
      value: cdktf.booleanToHclTerraform(struct!.deleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grant_kit_id: {
      value: cdktf.stringToHclTerraform(struct!.grantKitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_kit_version_id: {
      value: cdktf.stringToHclTerraform(struct!.grantKitVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_id: {
      value: cdktf.stringToHclTerraform(struct!.requestId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantKitRequestsReviewsGrantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GrantKitRequestsReviewsGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._deleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleted = this._deleted;
    }
    if (this._grantKitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantKitId = this._grantKitId;
    }
    if (this._grantKitVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantKitVersionId = this._grantKitVersionId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    if (this._requestId !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestId = this._requestId;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantKitRequestsReviewsGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdAt = undefined;
      this._deleted = undefined;
      this._grantKitId = undefined;
      this._grantKitVersionId = undefined;
      this._id = undefined;
      this._organizationId = undefined;
      this._requestId = undefined;
      this._updatedAt = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdAt = value.createdAt;
      this._deleted = value.deleted;
      this._grantKitId = value.grantKitId;
      this._grantKitVersionId = value.grantKitVersionId;
      this._id = value.id;
      this._organizationId = value.organizationId;
      this._requestId = value.requestId;
      this._updatedAt = value.updatedAt;
      this._userId = value.userId;
    }
  }

  // created_at - computed: true, optional: false, required: true
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // deleted - computed: true, optional: false, required: true
  private _deleted?: boolean | cdktf.IResolvable; 
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }
  public set deleted(value: boolean | cdktf.IResolvable) {
    this._deleted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedInput() {
    return this._deleted;
  }

  // grant_kit_id - computed: true, optional: false, required: true
  private _grantKitId?: string; 
  public get grantKitId() {
    return this.getStringAttribute('grant_kit_id');
  }
  public set grantKitId(value: string) {
    this._grantKitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantKitIdInput() {
    return this._grantKitId;
  }

  // grant_kit_version_id - computed: true, optional: false, required: true
  private _grantKitVersionId?: string; 
  public get grantKitVersionId() {
    return this.getStringAttribute('grant_kit_version_id');
  }
  public set grantKitVersionId(value: string) {
    this._grantKitVersionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantKitVersionIdInput() {
    return this._grantKitVersionId;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // organization_id - computed: true, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // request_id - computed: true, optional: false, required: true
  private _requestId?: string; 
  public get requestId() {
    return this.getStringAttribute('request_id');
  }
  public set requestId(value: string) {
    this._requestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdInput() {
    return this._requestId;
  }

  // updated_at - computed: true, optional: false, required: true
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // user_id - computed: true, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface GrantKitRequestsReviews {
  /**
  * created_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#created_at GrantKit#created_at}
  */
  readonly createdAt: string;
  /**
  * grant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#grant GrantKit#grant}
  */
  readonly grant?: GrantKitRequestsReviewsGrant;
  /**
  * grant_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#grant_id GrantKit#grant_id}
  */
  readonly grantId: string;
  /**
  * grant_kit_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#grant_kit_name GrantKit#grant_kit_name}
  */
  readonly grantKitName: string;
  /**
  * grant_kit_version_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#grant_kit_version_id GrantKit#grant_kit_version_id}
  */
  readonly grantKitVersionId: string;
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#id GrantKit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * pull_request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#pull_request GrantKit#pull_request}
  */
  readonly pullRequest: string;
  /**
  * reason
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#reason GrantKit#reason}
  */
  readonly reason: string;
  /**
  * request_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#request_id GrantKit#request_id}
  */
  readonly requestId: string;
  /**
  * request_reason
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#request_reason GrantKit#request_reason}
  */
  readonly requestReason: string;
  /**
  * status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#status GrantKit#status}
  */
  readonly status: string;
  /**
  * updated_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#updated_at GrantKit#updated_at}
  */
  readonly updatedAt: string;
  /**
  * user_email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#user_email GrantKit#user_email}
  */
  readonly userEmail?: string;
  /**
  * user_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#user_id GrantKit#user_id}
  */
  readonly userId: string;
}

export function grantKitRequestsReviewsToTerraform(struct?: GrantKitRequestsReviews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_at: cdktf.stringToTerraform(struct!.createdAt),
    grant: grantKitRequestsReviewsGrantToTerraform(struct!.grant),
    grant_id: cdktf.stringToTerraform(struct!.grantId),
    grant_kit_name: cdktf.stringToTerraform(struct!.grantKitName),
    grant_kit_version_id: cdktf.stringToTerraform(struct!.grantKitVersionId),
    id: cdktf.stringToTerraform(struct!.id),
    pull_request: cdktf.stringToTerraform(struct!.pullRequest),
    reason: cdktf.stringToTerraform(struct!.reason),
    request_id: cdktf.stringToTerraform(struct!.requestId),
    request_reason: cdktf.stringToTerraform(struct!.requestReason),
    status: cdktf.stringToTerraform(struct!.status),
    updated_at: cdktf.stringToTerraform(struct!.updatedAt),
    user_email: cdktf.stringToTerraform(struct!.userEmail),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function grantKitRequestsReviewsToHclTerraform(struct?: GrantKitRequestsReviews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_at: {
      value: cdktf.stringToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant: {
      value: grantKitRequestsReviewsGrantToHclTerraform(struct!.grant),
      isBlock: true,
      type: "struct",
      storageClassType: "GrantKitRequestsReviewsGrant",
    },
    grant_id: {
      value: cdktf.stringToHclTerraform(struct!.grantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_kit_name: {
      value: cdktf.stringToHclTerraform(struct!.grantKitName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_kit_version_id: {
      value: cdktf.stringToHclTerraform(struct!.grantKitVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request: {
      value: cdktf.stringToHclTerraform(struct!.pullRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_id: {
      value: cdktf.stringToHclTerraform(struct!.requestId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_reason: {
      value: cdktf.stringToHclTerraform(struct!.requestReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_email: {
      value: cdktf.stringToHclTerraform(struct!.userEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantKitRequestsReviewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrantKitRequestsReviews | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._grant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grant = this._grant?.internalValue;
    }
    if (this._grantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantId = this._grantId;
    }
    if (this._grantKitName !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantKitName = this._grantKitName;
    }
    if (this._grantKitVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantKitVersionId = this._grantKitVersionId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._pullRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._requestId !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestId = this._requestId;
    }
    if (this._requestReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestReason = this._requestReason;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    if (this._userEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.userEmail = this._userEmail;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantKitRequestsReviews | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdAt = undefined;
      this._grant.internalValue = undefined;
      this._grantId = undefined;
      this._grantKitName = undefined;
      this._grantKitVersionId = undefined;
      this._id = undefined;
      this._pullRequest = undefined;
      this._reason = undefined;
      this._requestId = undefined;
      this._requestReason = undefined;
      this._status = undefined;
      this._updatedAt = undefined;
      this._userEmail = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdAt = value.createdAt;
      this._grant.internalValue = value.grant;
      this._grantId = value.grantId;
      this._grantKitName = value.grantKitName;
      this._grantKitVersionId = value.grantKitVersionId;
      this._id = value.id;
      this._pullRequest = value.pullRequest;
      this._reason = value.reason;
      this._requestId = value.requestId;
      this._requestReason = value.requestReason;
      this._status = value.status;
      this._updatedAt = value.updatedAt;
      this._userEmail = value.userEmail;
      this._userId = value.userId;
    }
  }

  // created_at - computed: true, optional: false, required: true
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // grant - computed: true, optional: true, required: false
  private _grant = new GrantKitRequestsReviewsGrantOutputReference(this, "grant");
  public get grant() {
    return this._grant;
  }
  public putGrant(value: GrantKitRequestsReviewsGrant) {
    this._grant.internalValue = value;
  }
  public resetGrant() {
    this._grant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantInput() {
    return this._grant.internalValue;
  }

  // grant_id - computed: true, optional: false, required: true
  private _grantId?: string; 
  public get grantId() {
    return this.getStringAttribute('grant_id');
  }
  public set grantId(value: string) {
    this._grantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantIdInput() {
    return this._grantId;
  }

  // grant_kit_name - computed: true, optional: false, required: true
  private _grantKitName?: string; 
  public get grantKitName() {
    return this.getStringAttribute('grant_kit_name');
  }
  public set grantKitName(value: string) {
    this._grantKitName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantKitNameInput() {
    return this._grantKitName;
  }

  // grant_kit_version_id - computed: true, optional: false, required: true
  private _grantKitVersionId?: string; 
  public get grantKitVersionId() {
    return this.getStringAttribute('grant_kit_version_id');
  }
  public set grantKitVersionId(value: string) {
    this._grantKitVersionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantKitVersionIdInput() {
    return this._grantKitVersionId;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // pull_request - computed: true, optional: false, required: true
  private _pullRequest?: string; 
  public get pullRequest() {
    return this.getStringAttribute('pull_request');
  }
  public set pullRequest(value: string) {
    this._pullRequest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest;
  }

  // reason - computed: true, optional: false, required: true
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // request_id - computed: true, optional: false, required: true
  private _requestId?: string; 
  public get requestId() {
    return this.getStringAttribute('request_id');
  }
  public set requestId(value: string) {
    this._requestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdInput() {
    return this._requestId;
  }

  // request_reason - computed: true, optional: false, required: true
  private _requestReason?: string; 
  public get requestReason() {
    return this.getStringAttribute('request_reason');
  }
  public set requestReason(value: string) {
    this._requestReason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestReasonInput() {
    return this._requestReason;
  }

  // status - computed: true, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // updated_at - computed: true, optional: false, required: true
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // user_email - computed: true, optional: true, required: false
  private _userEmail?: string; 
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }
  public set userEmail(value: string) {
    this._userEmail = value;
  }
  public resetUserEmail() {
    this._userEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailInput() {
    return this._userEmail;
  }

  // user_id - computed: true, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class GrantKitRequestsReviewsList extends cdktf.ComplexList {
  public internalValue? : GrantKitRequestsReviews[] | cdktf.IResolvable

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
  public get(index: number): GrantKitRequestsReviewsOutputReference {
    return new GrantKitRequestsReviewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrantKitRequests {
  /**
  * created_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#created_at GrantKit#created_at}
  */
  readonly createdAt: string;
  /**
  * grant_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#grant_id GrantKit#grant_id}
  */
  readonly grantId: string;
  /**
  * grant_kit_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#grant_kit_id GrantKit#grant_kit_id}
  */
  readonly grantKitId: string;
  /**
  * grant_kit_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#grant_kit_name GrantKit#grant_kit_name}
  */
  readonly grantKitName?: string;
  /**
  * grant_kit_version_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#grant_kit_version_id GrantKit#grant_kit_version_id}
  */
  readonly grantKitVersionId: string;
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#id GrantKit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * pull_request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#pull_request GrantKit#pull_request}
  */
  readonly pullRequest: string;
  /**
  * reason
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#reason GrantKit#reason}
  */
  readonly reason: string;
  /**
  * reviews
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#reviews GrantKit#reviews}
  */
  readonly reviews?: GrantKitRequestsReviews[] | cdktf.IResolvable;
  /**
  * status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#status GrantKit#status}
  */
  readonly status: string;
  /**
  * updated_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#updated_at GrantKit#updated_at}
  */
  readonly updatedAt: string;
  /**
  * user_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#user_id GrantKit#user_id}
  */
  readonly userId: string;
}

export function grantKitRequestsToTerraform(struct?: GrantKitRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_at: cdktf.stringToTerraform(struct!.createdAt),
    grant_id: cdktf.stringToTerraform(struct!.grantId),
    grant_kit_id: cdktf.stringToTerraform(struct!.grantKitId),
    grant_kit_name: cdktf.stringToTerraform(struct!.grantKitName),
    grant_kit_version_id: cdktf.stringToTerraform(struct!.grantKitVersionId),
    id: cdktf.stringToTerraform(struct!.id),
    pull_request: cdktf.stringToTerraform(struct!.pullRequest),
    reason: cdktf.stringToTerraform(struct!.reason),
    reviews: cdktf.listMapper(grantKitRequestsReviewsToTerraform, false)(struct!.reviews),
    status: cdktf.stringToTerraform(struct!.status),
    updated_at: cdktf.stringToTerraform(struct!.updatedAt),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function grantKitRequestsToHclTerraform(struct?: GrantKitRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_at: {
      value: cdktf.stringToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_id: {
      value: cdktf.stringToHclTerraform(struct!.grantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_kit_id: {
      value: cdktf.stringToHclTerraform(struct!.grantKitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_kit_name: {
      value: cdktf.stringToHclTerraform(struct!.grantKitName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_kit_version_id: {
      value: cdktf.stringToHclTerraform(struct!.grantKitVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request: {
      value: cdktf.stringToHclTerraform(struct!.pullRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reviews: {
      value: cdktf.listMapperHcl(grantKitRequestsReviewsToHclTerraform, false)(struct!.reviews),
      isBlock: true,
      type: "list",
      storageClassType: "GrantKitRequestsReviewsList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantKitRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrantKitRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._grantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantId = this._grantId;
    }
    if (this._grantKitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantKitId = this._grantKitId;
    }
    if (this._grantKitName !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantKitName = this._grantKitName;
    }
    if (this._grantKitVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantKitVersionId = this._grantKitVersionId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._pullRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._reviews?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviews = this._reviews?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantKitRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdAt = undefined;
      this._grantId = undefined;
      this._grantKitId = undefined;
      this._grantKitName = undefined;
      this._grantKitVersionId = undefined;
      this._id = undefined;
      this._pullRequest = undefined;
      this._reason = undefined;
      this._reviews.internalValue = undefined;
      this._status = undefined;
      this._updatedAt = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdAt = value.createdAt;
      this._grantId = value.grantId;
      this._grantKitId = value.grantKitId;
      this._grantKitName = value.grantKitName;
      this._grantKitVersionId = value.grantKitVersionId;
      this._id = value.id;
      this._pullRequest = value.pullRequest;
      this._reason = value.reason;
      this._reviews.internalValue = value.reviews;
      this._status = value.status;
      this._updatedAt = value.updatedAt;
      this._userId = value.userId;
    }
  }

  // created_at - computed: true, optional: false, required: true
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // grant_id - computed: true, optional: false, required: true
  private _grantId?: string; 
  public get grantId() {
    return this.getStringAttribute('grant_id');
  }
  public set grantId(value: string) {
    this._grantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantIdInput() {
    return this._grantId;
  }

  // grant_kit_id - computed: true, optional: false, required: true
  private _grantKitId?: string; 
  public get grantKitId() {
    return this.getStringAttribute('grant_kit_id');
  }
  public set grantKitId(value: string) {
    this._grantKitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantKitIdInput() {
    return this._grantKitId;
  }

  // grant_kit_name - computed: true, optional: true, required: false
  private _grantKitName?: string; 
  public get grantKitName() {
    return this.getStringAttribute('grant_kit_name');
  }
  public set grantKitName(value: string) {
    this._grantKitName = value;
  }
  public resetGrantKitName() {
    this._grantKitName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantKitNameInput() {
    return this._grantKitName;
  }

  // grant_kit_version_id - computed: true, optional: false, required: true
  private _grantKitVersionId?: string; 
  public get grantKitVersionId() {
    return this.getStringAttribute('grant_kit_version_id');
  }
  public set grantKitVersionId(value: string) {
    this._grantKitVersionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantKitVersionIdInput() {
    return this._grantKitVersionId;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // pull_request - computed: true, optional: false, required: true
  private _pullRequest?: string; 
  public get pullRequest() {
    return this.getStringAttribute('pull_request');
  }
  public set pullRequest(value: string) {
    this._pullRequest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest;
  }

  // reason - computed: true, optional: false, required: true
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // reviews - computed: true, optional: true, required: false
  private _reviews = new GrantKitRequestsReviewsList(this, "reviews", false);
  public get reviews() {
    return this._reviews;
  }
  public putReviews(value: GrantKitRequestsReviews[] | cdktf.IResolvable) {
    this._reviews.internalValue = value;
  }
  public resetReviews() {
    this._reviews.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewsInput() {
    return this._reviews.internalValue;
  }

  // status - computed: true, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // updated_at - computed: true, optional: false, required: true
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // user_id - computed: true, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class GrantKitRequestsList extends cdktf.ComplexList {
  public internalValue? : GrantKitRequests[] | cdktf.IResolvable

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
  public get(index: number): GrantKitRequestsOutputReference {
    return new GrantKitRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrantKitWorkflowStepsReviewers {
  /**
  * all_of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#all_of GrantKit#all_of}
  */
  readonly allOf?: string[];
  /**
  * one_of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#one_of GrantKit#one_of}
  */
  readonly oneOf?: string[];
}

export function grantKitWorkflowStepsReviewersToTerraform(struct?: GrantKitWorkflowStepsReviewers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allOf),
    one_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oneOf),
  }
}


export function grantKitWorkflowStepsReviewersToHclTerraform(struct?: GrantKitWorkflowStepsReviewers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_of: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    one_of: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oneOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantKitWorkflowStepsReviewersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GrantKitWorkflowStepsReviewers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.allOf = this._allOf;
    }
    if (this._oneOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneOf = this._oneOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantKitWorkflowStepsReviewers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allOf = undefined;
      this._oneOf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allOf = value.allOf;
      this._oneOf = value.oneOf;
    }
  }

  // all_of - computed: false, optional: true, required: false
  private _allOf?: string[]; 
  public get allOf() {
    return this.getListAttribute('all_of');
  }
  public set allOf(value: string[]) {
    this._allOf = value;
  }
  public resetAllOf() {
    this._allOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allOfInput() {
    return this._allOf;
  }

  // one_of - computed: false, optional: true, required: false
  private _oneOf?: string[]; 
  public get oneOf() {
    return this.getListAttribute('one_of');
  }
  public set oneOf(value: string[]) {
    this._oneOf = value;
  }
  public resetOneOf() {
    this._oneOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneOfInput() {
    return this._oneOf;
  }
}
export interface GrantKitWorkflowStepsSkipIf {
  /**
  * bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#bundle GrantKit#bundle}
  */
  readonly bundle?: string;
  /**
  * query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#query GrantKit#query}
  */
  readonly query?: string;
}

export function grantKitWorkflowStepsSkipIfToTerraform(struct?: GrantKitWorkflowStepsSkipIf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundle: cdktf.stringToTerraform(struct!.bundle),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function grantKitWorkflowStepsSkipIfToHclTerraform(struct?: GrantKitWorkflowStepsSkipIf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundle: {
      value: cdktf.stringToHclTerraform(struct!.bundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantKitWorkflowStepsSkipIfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrantKitWorkflowStepsSkipIf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundle = this._bundle;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantKitWorkflowStepsSkipIf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundle = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundle = value.bundle;
      this._query = value.query;
    }
  }

  // bundle - computed: false, optional: true, required: false
  private _bundle?: string; 
  public get bundle() {
    return this.getStringAttribute('bundle');
  }
  public set bundle(value: string) {
    this._bundle = value;
  }
  public resetBundle() {
    this._bundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInput() {
    return this._bundle;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class GrantKitWorkflowStepsSkipIfList extends cdktf.ComplexList {
  public internalValue? : GrantKitWorkflowStepsSkipIf[] | cdktf.IResolvable

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
  public get(index: number): GrantKitWorkflowStepsSkipIfOutputReference {
    return new GrantKitWorkflowStepsSkipIfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrantKitWorkflowSteps {
  /**
  * reviewers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#reviewers GrantKit#reviewers}
  */
  readonly reviewers?: GrantKitWorkflowStepsReviewers;
  /**
  * skip_if
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#skip_if GrantKit#skip_if}
  */
  readonly skipIf?: GrantKitWorkflowStepsSkipIf[] | cdktf.IResolvable;
}

export function grantKitWorkflowStepsToTerraform(struct?: GrantKitWorkflowSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reviewers: grantKitWorkflowStepsReviewersToTerraform(struct!.reviewers),
    skip_if: cdktf.listMapper(grantKitWorkflowStepsSkipIfToTerraform, false)(struct!.skipIf),
  }
}


export function grantKitWorkflowStepsToHclTerraform(struct?: GrantKitWorkflowSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reviewers: {
      value: grantKitWorkflowStepsReviewersToHclTerraform(struct!.reviewers),
      isBlock: true,
      type: "struct",
      storageClassType: "GrantKitWorkflowStepsReviewers",
    },
    skip_if: {
      value: cdktf.listMapperHcl(grantKitWorkflowStepsSkipIfToHclTerraform, false)(struct!.skipIf),
      isBlock: true,
      type: "list",
      storageClassType: "GrantKitWorkflowStepsSkipIfList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantKitWorkflowStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrantKitWorkflowSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reviewers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewers = this._reviewers?.internalValue;
    }
    if (this._skipIf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipIf = this._skipIf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantKitWorkflowSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reviewers.internalValue = undefined;
      this._skipIf.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reviewers.internalValue = value.reviewers;
      this._skipIf.internalValue = value.skipIf;
    }
  }

  // reviewers - computed: false, optional: true, required: false
  private _reviewers = new GrantKitWorkflowStepsReviewersOutputReference(this, "reviewers");
  public get reviewers() {
    return this._reviewers;
  }
  public putReviewers(value: GrantKitWorkflowStepsReviewers) {
    this._reviewers.internalValue = value;
  }
  public resetReviewers() {
    this._reviewers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewersInput() {
    return this._reviewers.internalValue;
  }

  // skip_if - computed: false, optional: true, required: false
  private _skipIf = new GrantKitWorkflowStepsSkipIfList(this, "skip_if", false);
  public get skipIf() {
    return this._skipIf;
  }
  public putSkipIf(value: GrantKitWorkflowStepsSkipIf[] | cdktf.IResolvable) {
    this._skipIf.internalValue = value;
  }
  public resetSkipIf() {
    this._skipIf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipIfInput() {
    return this._skipIf.internalValue;
  }
}

export class GrantKitWorkflowStepsList extends cdktf.ComplexList {
  public internalValue? : GrantKitWorkflowSteps[] | cdktf.IResolvable

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
  public get(index: number): GrantKitWorkflowStepsOutputReference {
    return new GrantKitWorkflowStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrantKitWorkflow {
  /**
  * steps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#steps GrantKit#steps}
  */
  readonly steps?: GrantKitWorkflowSteps[] | cdktf.IResolvable;
}

export function grantKitWorkflowToTerraform(struct?: GrantKitWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    steps: cdktf.listMapper(grantKitWorkflowStepsToTerraform, false)(struct!.steps),
  }
}


export function grantKitWorkflowToHclTerraform(struct?: GrantKitWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    steps: {
      value: cdktf.listMapperHcl(grantKitWorkflowStepsToHclTerraform, false)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "GrantKitWorkflowStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantKitWorkflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GrantKitWorkflow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantKitWorkflow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._steps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._steps.internalValue = value.steps;
    }
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new GrantKitWorkflowStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: GrantKitWorkflowSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit abbey_grant_kit}
*/
export class GrantKit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "abbey_grant_kit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrantKit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrantKit to import
  * @param importFromId The id of the existing GrantKit that should be imported. Refer to the {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrantKit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "abbey_grant_kit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/grant_kit abbey_grant_kit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrantKitConfig
  */
  public constructor(scope: Construct, id: string, config: GrantKitConfig) {
    super(scope, id, {
      terraformResourceType: 'abbey_grant_kit',
      terraformGeneratorMetadata: {
        providerName: 'abbey',
        providerVersion: '0.2.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdAt = config.createdAt;
    this._currentVersionId = config.currentVersionId;
    this._description = config.description;
    this._grants.internalValue = config.grants;
    this._id = config.id;
    this._maxGrantDurationInSec = config.maxGrantDurationInSec;
    this._name = config.name;
    this._output.internalValue = config.output;
    this._policies.internalValue = config.policies;
    this._requests.internalValue = config.requests;
    this._resourceType = config.resourceType;
    this._updatedAt = config.updatedAt;
    this._workflow.internalValue = config.workflow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // current_version_id - computed: true, optional: true, required: false
  private _currentVersionId?: string; 
  public get currentVersionId() {
    return this.getStringAttribute('current_version_id');
  }
  public set currentVersionId(value: string) {
    this._currentVersionId = value;
  }
  public resetCurrentVersionId() {
    this._currentVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentVersionIdInput() {
    return this._currentVersionId;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // grants - computed: true, optional: true, required: false
  private _grants = new GrantKitGrantsList(this, "grants", false);
  public get grants() {
    return this._grants;
  }
  public putGrants(value: GrantKitGrants[] | cdktf.IResolvable) {
    this._grants.internalValue = value;
  }
  public resetGrants() {
    this._grants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantsInput() {
    return this._grants.internalValue;
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

  // max_grant_duration_in_sec - computed: true, optional: true, required: false
  private _maxGrantDurationInSec?: number; 
  public get maxGrantDurationInSec() {
    return this.getNumberAttribute('max_grant_duration_in_sec');
  }
  public set maxGrantDurationInSec(value: number) {
    this._maxGrantDurationInSec = value;
  }
  public resetMaxGrantDurationInSec() {
    this._maxGrantDurationInSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGrantDurationInSecInput() {
    return this._maxGrantDurationInSec;
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

  // output - computed: false, optional: false, required: true
  private _output = new GrantKitOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: GrantKitOutput) {
    this._output.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new GrantKitPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: GrantKitPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // requests - computed: true, optional: true, required: false
  private _requests = new GrantKitRequestsList(this, "requests", false);
  public get requests() {
    return this._requests;
  }
  public putRequests(value: GrantKitRequests[] | cdktf.IResolvable) {
    this._requests.internalValue = value;
  }
  public resetRequests() {
    this._requests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow = new GrantKitWorkflowOutputReference(this, "workflow");
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: GrantKitWorkflow) {
    this._workflow.internalValue = value;
  }
  public resetWorkflow() {
    this._workflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_at: cdktf.stringToTerraform(this._createdAt),
      current_version_id: cdktf.stringToTerraform(this._currentVersionId),
      description: cdktf.stringToTerraform(this._description),
      grants: cdktf.listMapper(grantKitGrantsToTerraform, false)(this._grants.internalValue),
      id: cdktf.stringToTerraform(this._id),
      max_grant_duration_in_sec: cdktf.numberToTerraform(this._maxGrantDurationInSec),
      name: cdktf.stringToTerraform(this._name),
      output: grantKitOutputToTerraform(this._output.internalValue),
      policies: cdktf.listMapper(grantKitPoliciesToTerraform, false)(this._policies.internalValue),
      requests: cdktf.listMapper(grantKitRequestsToTerraform, false)(this._requests.internalValue),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      updated_at: cdktf.stringToTerraform(this._updatedAt),
      workflow: grantKitWorkflowToTerraform(this._workflow.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      current_version_id: {
        value: cdktf.stringToHclTerraform(this._currentVersionId),
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
      grants: {
        value: cdktf.listMapperHcl(grantKitGrantsToHclTerraform, false)(this._grants.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrantKitGrantsList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_grant_duration_in_sec: {
        value: cdktf.numberToHclTerraform(this._maxGrantDurationInSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output: {
        value: grantKitOutputToHclTerraform(this._output.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GrantKitOutput",
      },
      policies: {
        value: cdktf.listMapperHcl(grantKitPoliciesToHclTerraform, false)(this._policies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrantKitPoliciesList",
      },
      requests: {
        value: cdktf.listMapperHcl(grantKitRequestsToHclTerraform, false)(this._requests.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrantKitRequestsList",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_at: {
        value: cdktf.stringToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow: {
        value: grantKitWorkflowToHclTerraform(this._workflow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GrantKitWorkflow",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
