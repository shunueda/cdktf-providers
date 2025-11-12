// https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CspTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#add_tags CspTag#add_tags}
  */
  readonly addTags: CspTagAddTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#cloud_provider_id CspTag#cloud_provider_id}
  */
  readonly cloudProviderId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#delete_tags CspTag#delete_tags}
  */
  readonly deleteTags: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#edit_tags CspTag#edit_tags}
  */
  readonly editTags: CspTagEditTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#project_id CspTag#project_id}
  */
  readonly projectId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#timeouts CspTag#timeouts}
  */
  readonly timeouts?: CspTagTimeouts;
}
export interface CspTagAddTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#csp_tag_key CspTag#csp_tag_key}
  */
  readonly cspTagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#csp_tag_value CspTag#csp_tag_value}
  */
  readonly cspTagValue: string;
}

export function cspTagAddTagsToTerraform(struct?: CspTagAddTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csp_tag_key: cdktf.stringToTerraform(struct!.cspTagKey),
    csp_tag_value: cdktf.stringToTerraform(struct!.cspTagValue),
  }
}


export function cspTagAddTagsToHclTerraform(struct?: CspTagAddTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csp_tag_key: {
      value: cdktf.stringToHclTerraform(struct!.cspTagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csp_tag_value: {
      value: cdktf.stringToHclTerraform(struct!.cspTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CspTagAddTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CspTagAddTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cspTagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.cspTagKey = this._cspTagKey;
    }
    if (this._cspTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cspTagValue = this._cspTagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CspTagAddTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cspTagKey = undefined;
      this._cspTagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cspTagKey = value.cspTagKey;
      this._cspTagValue = value.cspTagValue;
    }
  }

  // csp_tag_key - computed: false, optional: false, required: true
  private _cspTagKey?: string; 
  public get cspTagKey() {
    return this.getStringAttribute('csp_tag_key');
  }
  public set cspTagKey(value: string) {
    this._cspTagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cspTagKeyInput() {
    return this._cspTagKey;
  }

  // csp_tag_value - computed: false, optional: false, required: true
  private _cspTagValue?: string; 
  public get cspTagValue() {
    return this.getStringAttribute('csp_tag_value');
  }
  public set cspTagValue(value: string) {
    this._cspTagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cspTagValueInput() {
    return this._cspTagValue;
  }
}

export class CspTagAddTagsList extends cdktf.ComplexList {
  public internalValue? : CspTagAddTags[] | cdktf.IResolvable

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
  public get(index: number): CspTagAddTagsOutputReference {
    return new CspTagAddTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CspTagCspTags {
}

export function cspTagCspTagsToTerraform(struct?: CspTagCspTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cspTagCspTagsToHclTerraform(struct?: CspTagCspTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CspTagCspTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CspTagCspTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CspTagCspTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csp_tag_id - computed: true, optional: false, required: false
  public get cspTagId() {
    return this.getStringAttribute('csp_tag_id');
  }

  // csp_tag_key - computed: true, optional: false, required: false
  public get cspTagKey() {
    return this.getStringAttribute('csp_tag_key');
  }

  // csp_tag_value - computed: true, optional: false, required: false
  public get cspTagValue() {
    return this.getStringAttribute('csp_tag_value');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class CspTagCspTagsList extends cdktf.ComplexList {

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
  public get(index: number): CspTagCspTagsOutputReference {
    return new CspTagCspTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CspTagEditTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#csp_tag_id CspTag#csp_tag_id}
  */
  readonly cspTagId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#csp_tag_key CspTag#csp_tag_key}
  */
  readonly cspTagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#csp_tag_value CspTag#csp_tag_value}
  */
  readonly cspTagValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#status CspTag#status}
  */
  readonly status: string;
}

export function cspTagEditTagsToTerraform(struct?: CspTagEditTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csp_tag_id: cdktf.stringToTerraform(struct!.cspTagId),
    csp_tag_key: cdktf.stringToTerraform(struct!.cspTagKey),
    csp_tag_value: cdktf.stringToTerraform(struct!.cspTagValue),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function cspTagEditTagsToHclTerraform(struct?: CspTagEditTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csp_tag_id: {
      value: cdktf.stringToHclTerraform(struct!.cspTagId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csp_tag_key: {
      value: cdktf.stringToHclTerraform(struct!.cspTagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csp_tag_value: {
      value: cdktf.stringToHclTerraform(struct!.cspTagValue),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CspTagEditTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CspTagEditTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cspTagId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cspTagId = this._cspTagId;
    }
    if (this._cspTagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.cspTagKey = this._cspTagKey;
    }
    if (this._cspTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cspTagValue = this._cspTagValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CspTagEditTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cspTagId = undefined;
      this._cspTagKey = undefined;
      this._cspTagValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cspTagId = value.cspTagId;
      this._cspTagKey = value.cspTagKey;
      this._cspTagValue = value.cspTagValue;
      this._status = value.status;
    }
  }

  // csp_tag_id - computed: false, optional: false, required: true
  private _cspTagId?: string; 
  public get cspTagId() {
    return this.getStringAttribute('csp_tag_id');
  }
  public set cspTagId(value: string) {
    this._cspTagId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cspTagIdInput() {
    return this._cspTagId;
  }

  // csp_tag_key - computed: false, optional: false, required: true
  private _cspTagKey?: string; 
  public get cspTagKey() {
    return this.getStringAttribute('csp_tag_key');
  }
  public set cspTagKey(value: string) {
    this._cspTagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cspTagKeyInput() {
    return this._cspTagKey;
  }

  // csp_tag_value - computed: false, optional: false, required: true
  private _cspTagValue?: string; 
  public get cspTagValue() {
    return this.getStringAttribute('csp_tag_value');
  }
  public set cspTagValue(value: string) {
    this._cspTagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cspTagValueInput() {
    return this._cspTagValue;
  }

  // status - computed: false, optional: false, required: true
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
}

export class CspTagEditTagsList extends cdktf.ComplexList {
  public internalValue? : CspTagEditTags[] | cdktf.IResolvable

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
  public get(index: number): CspTagEditTagsOutputReference {
    return new CspTagEditTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CspTagTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#create CspTag#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#delete CspTag#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#update CspTag#update}
  */
  readonly update?: string;
}

export function cspTagTimeoutsToTerraform(struct?: CspTagTimeouts | cdktf.IResolvable): any {
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


export function cspTagTimeoutsToHclTerraform(struct?: CspTagTimeouts | cdktf.IResolvable): any {
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

export class CspTagTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CspTagTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CspTagTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag biganimal_csp_tag}
*/
export class CspTag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "biganimal_csp_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CspTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CspTag to import
  * @param importFromId The id of the existing CspTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CspTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "biganimal_csp_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/csp_tag biganimal_csp_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CspTagConfig
  */
  public constructor(scope: Construct, id: string, config: CspTagConfig) {
    super(scope, id, {
      terraformResourceType: 'biganimal_csp_tag',
      terraformGeneratorMetadata: {
        providerName: 'biganimal',
        providerVersion: '3.1.1',
        providerVersionConstraint: '3.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addTags.internalValue = config.addTags;
    this._cloudProviderId = config.cloudProviderId;
    this._deleteTags = config.deleteTags;
    this._editTags.internalValue = config.editTags;
    this._projectId = config.projectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_tags - computed: false, optional: false, required: true
  private _addTags = new CspTagAddTagsList(this, "add_tags", false);
  public get addTags() {
    return this._addTags;
  }
  public putAddTags(value: CspTagAddTags[] | cdktf.IResolvable) {
    this._addTags.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addTagsInput() {
    return this._addTags.internalValue;
  }

  // cloud_provider_id - computed: false, optional: false, required: true
  private _cloudProviderId?: string; 
  public get cloudProviderId() {
    return this.getStringAttribute('cloud_provider_id');
  }
  public set cloudProviderId(value: string) {
    this._cloudProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderIdInput() {
    return this._cloudProviderId;
  }

  // csp_tags - computed: true, optional: false, required: false
  private _cspTags = new CspTagCspTagsList(this, "csp_tags", false);
  public get cspTags() {
    return this._cspTags;
  }

  // delete_tags - computed: false, optional: false, required: true
  private _deleteTags?: string[]; 
  public get deleteTags() {
    return this.getListAttribute('delete_tags');
  }
  public set deleteTags(value: string[]) {
    this._deleteTags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteTagsInput() {
    return this._deleteTags;
  }

  // edit_tags - computed: false, optional: false, required: true
  private _editTags = new CspTagEditTagsList(this, "edit_tags", false);
  public get editTags() {
    return this._editTags;
  }
  public putEditTags(value: CspTagEditTags[] | cdktf.IResolvable) {
    this._editTags.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get editTagsInput() {
    return this._editTags.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CspTagTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CspTagTimeouts) {
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
      add_tags: cdktf.listMapper(cspTagAddTagsToTerraform, false)(this._addTags.internalValue),
      cloud_provider_id: cdktf.stringToTerraform(this._cloudProviderId),
      delete_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deleteTags),
      edit_tags: cdktf.listMapper(cspTagEditTagsToTerraform, false)(this._editTags.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
      timeouts: cspTagTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_tags: {
        value: cdktf.listMapperHcl(cspTagAddTagsToHclTerraform, false)(this._addTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CspTagAddTagsList",
      },
      cloud_provider_id: {
        value: cdktf.stringToHclTerraform(this._cloudProviderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deleteTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      edit_tags: {
        value: cdktf.listMapperHcl(cspTagEditTagsToHclTerraform, false)(this._editTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CspTagEditTagsList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cspTagTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CspTagTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
