// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatalogVappTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Catalog where to upload the OVA file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#catalog_id CatalogVappTemplate#catalog_id}
  */
  readonly catalogId: string;
  /**
  * Description of the vApp Template. Not to be used with `ovf_url` when target OVA has a description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#description CatalogVappTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#id CatalogVappTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key and value pairs for the metadata of this vApp Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#metadata CatalogVappTemplate#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * vApp Template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#name CatalogVappTemplate#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#org CatalogVappTemplate#org}
  */
  readonly org?: string;
  /**
  * Absolute or relative path to OVA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#ova_path CatalogVappTemplate#ova_path}
  */
  readonly ovaPath?: string;
  /**
  * URL of OVF file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#ovf_url CatalogVappTemplate#ovf_url}
  */
  readonly ovfUrl?: string;
  /**
  * Size of upload file piece size in megabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#upload_piece_size CatalogVappTemplate#upload_piece_size}
  */
  readonly uploadPieceSize?: number;
  /**
  * capture_vapp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#capture_vapp CatalogVappTemplate#capture_vapp}
  */
  readonly captureVapp?: CatalogVappTemplateCaptureVapp;
  /**
  * lease block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#lease CatalogVappTemplate#lease}
  */
  readonly lease?: CatalogVappTemplateLease;
  /**
  * metadata_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#metadata_entry CatalogVappTemplate#metadata_entry}
  */
  readonly metadataEntry?: CatalogVappTemplateMetadataEntry[] | cdktf.IResolvable;
}
export interface CatalogVappTemplateCaptureVapp {
  /**
  * Defines if Trusted Platform Module should be copied (false) or created (true). Default 'false'. VCD 10.4.2+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#copy_tpm_on_instantiate CatalogVappTemplate#copy_tpm_on_instantiate}
  */
  readonly copyTpmOnInstantiate?: boolean | cdktf.IResolvable;
  /**
  * Marks if instantiating applies customization settings ('true'). Default is 'false` - create an identical copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#customize_on_instantiate CatalogVappTemplate#customize_on_instantiate}
  */
  readonly customizeOnInstantiate?: boolean | cdktf.IResolvable;
  /**
  * An existing catalog item ID to overwrite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#overwrite_catalog_item_id CatalogVappTemplate#overwrite_catalog_item_id}
  */
  readonly overwriteCatalogItemId?: string;
  /**
  * Source vApp ID (can be a vApp ID or 'vapp_id' field of standalone VM 'vcd_vm')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#source_id CatalogVappTemplate#source_id}
  */
  readonly sourceId?: string;
}

export function catalogVappTemplateCaptureVappToTerraform(struct?: CatalogVappTemplateCaptureVappOutputReference | CatalogVappTemplateCaptureVapp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_tpm_on_instantiate: cdktf.booleanToTerraform(struct!.copyTpmOnInstantiate),
    customize_on_instantiate: cdktf.booleanToTerraform(struct!.customizeOnInstantiate),
    overwrite_catalog_item_id: cdktf.stringToTerraform(struct!.overwriteCatalogItemId),
    source_id: cdktf.stringToTerraform(struct!.sourceId),
  }
}


export function catalogVappTemplateCaptureVappToHclTerraform(struct?: CatalogVappTemplateCaptureVappOutputReference | CatalogVappTemplateCaptureVapp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copy_tpm_on_instantiate: {
      value: cdktf.booleanToHclTerraform(struct!.copyTpmOnInstantiate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    customize_on_instantiate: {
      value: cdktf.booleanToHclTerraform(struct!.customizeOnInstantiate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overwrite_catalog_item_id: {
      value: cdktf.stringToHclTerraform(struct!.overwriteCatalogItemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatalogVappTemplateCaptureVappOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogVappTemplateCaptureVapp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyTpmOnInstantiate !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTpmOnInstantiate = this._copyTpmOnInstantiate;
    }
    if (this._customizeOnInstantiate !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizeOnInstantiate = this._customizeOnInstantiate;
    }
    if (this._overwriteCatalogItemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteCatalogItemId = this._overwriteCatalogItemId;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogVappTemplateCaptureVapp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._copyTpmOnInstantiate = undefined;
      this._customizeOnInstantiate = undefined;
      this._overwriteCatalogItemId = undefined;
      this._sourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._copyTpmOnInstantiate = value.copyTpmOnInstantiate;
      this._customizeOnInstantiate = value.customizeOnInstantiate;
      this._overwriteCatalogItemId = value.overwriteCatalogItemId;
      this._sourceId = value.sourceId;
    }
  }

  // copy_tpm_on_instantiate - computed: false, optional: true, required: false
  private _copyTpmOnInstantiate?: boolean | cdktf.IResolvable; 
  public get copyTpmOnInstantiate() {
    return this.getBooleanAttribute('copy_tpm_on_instantiate');
  }
  public set copyTpmOnInstantiate(value: boolean | cdktf.IResolvable) {
    this._copyTpmOnInstantiate = value;
  }
  public resetCopyTpmOnInstantiate() {
    this._copyTpmOnInstantiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTpmOnInstantiateInput() {
    return this._copyTpmOnInstantiate;
  }

  // customize_on_instantiate - computed: false, optional: true, required: false
  private _customizeOnInstantiate?: boolean | cdktf.IResolvable; 
  public get customizeOnInstantiate() {
    return this.getBooleanAttribute('customize_on_instantiate');
  }
  public set customizeOnInstantiate(value: boolean | cdktf.IResolvable) {
    this._customizeOnInstantiate = value;
  }
  public resetCustomizeOnInstantiate() {
    this._customizeOnInstantiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizeOnInstantiateInput() {
    return this._customizeOnInstantiate;
  }

  // overwrite_catalog_item_id - computed: false, optional: true, required: false
  private _overwriteCatalogItemId?: string; 
  public get overwriteCatalogItemId() {
    return this.getStringAttribute('overwrite_catalog_item_id');
  }
  public set overwriteCatalogItemId(value: string) {
    this._overwriteCatalogItemId = value;
  }
  public resetOverwriteCatalogItemId() {
    this._overwriteCatalogItemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteCatalogItemIdInput() {
    return this._overwriteCatalogItemId;
  }

  // source_id - computed: false, optional: true, required: false
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }
}
export interface CatalogVappTemplateLease {
  /**
  * How long the vApp template is available before being automatically deleted or marked as expired. 0 means never expires (or expires at the maximum limit provided by the parent Org)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#storage_lease_in_sec CatalogVappTemplate#storage_lease_in_sec}
  */
  readonly storageLeaseInSec: number;
}

export function catalogVappTemplateLeaseToTerraform(struct?: CatalogVappTemplateLeaseOutputReference | CatalogVappTemplateLease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_lease_in_sec: cdktf.numberToTerraform(struct!.storageLeaseInSec),
  }
}


export function catalogVappTemplateLeaseToHclTerraform(struct?: CatalogVappTemplateLeaseOutputReference | CatalogVappTemplateLease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_lease_in_sec: {
      value: cdktf.numberToHclTerraform(struct!.storageLeaseInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatalogVappTemplateLeaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogVappTemplateLease | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageLeaseInSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLeaseInSec = this._storageLeaseInSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogVappTemplateLease | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageLeaseInSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageLeaseInSec = value.storageLeaseInSec;
    }
  }

  // storage_lease_in_sec - computed: false, optional: false, required: true
  private _storageLeaseInSec?: number; 
  public get storageLeaseInSec() {
    return this.getNumberAttribute('storage_lease_in_sec');
  }
  public set storageLeaseInSec(value: number) {
    this._storageLeaseInSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLeaseInSecInput() {
    return this._storageLeaseInSec;
  }
}
export interface CatalogVappTemplateMetadataEntry {
  /**
  * Domain for this metadata entry. true, if it belongs to SYSTEM. false, if it belongs to GENERAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#is_system CatalogVappTemplate#is_system}
  */
  readonly isSystem?: boolean | cdktf.IResolvable;
  /**
  * Key of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#key CatalogVappTemplate#key}
  */
  readonly key?: string;
  /**
  * Type of this metadata entry. One of: 'MetadataStringValue', 'MetadataNumberValue', 'MetadataBooleanValue', 'MetadataDateTimeValue'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#type CatalogVappTemplate#type}
  */
  readonly type?: string;
  /**
  * User access level for this metadata entry. One of: 'READWRITE', 'READONLY', 'PRIVATE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#user_access CatalogVappTemplate#user_access}
  */
  readonly userAccess?: string;
  /**
  * Value of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#value CatalogVappTemplate#value}
  */
  readonly value?: string;
}

export function catalogVappTemplateMetadataEntryToTerraform(struct?: CatalogVappTemplateMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_system: cdktf.booleanToTerraform(struct!.isSystem),
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    user_access: cdktf.stringToTerraform(struct!.userAccess),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function catalogVappTemplateMetadataEntryToHclTerraform(struct?: CatalogVappTemplateMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_system: {
      value: cdktf.booleanToHclTerraform(struct!.isSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    user_access: {
      value: cdktf.stringToHclTerraform(struct!.userAccess),
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

export class CatalogVappTemplateMetadataEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CatalogVappTemplateMetadataEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSystem = this._isSystem;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAccess = this._userAccess;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogVappTemplateMetadataEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSystem = undefined;
      this._key = undefined;
      this._type = undefined;
      this._userAccess = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSystem = value.isSystem;
      this._key = value.key;
      this._type = value.type;
      this._userAccess = value.userAccess;
      this._value = value.value;
    }
  }

  // is_system - computed: false, optional: true, required: false
  private _isSystem?: boolean | cdktf.IResolvable; 
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }
  public set isSystem(value: boolean | cdktf.IResolvable) {
    this._isSystem = value;
  }
  public resetIsSystem() {
    this._isSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemInput() {
    return this._isSystem;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // type - computed: false, optional: true, required: false
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

  // user_access - computed: false, optional: true, required: false
  private _userAccess?: string; 
  public get userAccess() {
    return this.getStringAttribute('user_access');
  }
  public set userAccess(value: string) {
    this._userAccess = value;
  }
  public resetUserAccess() {
    this._userAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessInput() {
    return this._userAccess;
  }

  // value - computed: false, optional: true, required: false
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

export class CatalogVappTemplateMetadataEntryList extends cdktf.ComplexList {
  public internalValue? : CatalogVappTemplateMetadataEntry[] | cdktf.IResolvable

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
  public get(index: number): CatalogVappTemplateMetadataEntryOutputReference {
    return new CatalogVappTemplateMetadataEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template vcd_catalog_vapp_template}
*/
export class CatalogVappTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_catalog_vapp_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatalogVappTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogVappTemplate to import
  * @param importFromId The id of the existing CatalogVappTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogVappTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_catalog_vapp_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/catalog_vapp_template vcd_catalog_vapp_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogVappTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CatalogVappTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_catalog_vapp_template',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogId = config.catalogId;
    this._description = config.description;
    this._id = config.id;
    this._metadata = config.metadata;
    this._name = config.name;
    this._org = config.org;
    this._ovaPath = config.ovaPath;
    this._ovfUrl = config.ovfUrl;
    this._uploadPieceSize = config.uploadPieceSize;
    this._captureVapp.internalValue = config.captureVapp;
    this._lease.internalValue = config.lease;
    this._metadataEntry.internalValue = config.metadataEntry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // catalog_item_id - computed: true, optional: false, required: false
  public get catalogItemId() {
    return this.getStringAttribute('catalog_item_id');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // inherited_metadata - computed: true, optional: false, required: false
  private _inheritedMetadata = new cdktf.StringMap(this, "inherited_metadata");
  public get inheritedMetadata() {
    return this._inheritedMetadata;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // ova_path - computed: false, optional: true, required: false
  private _ovaPath?: string; 
  public get ovaPath() {
    return this.getStringAttribute('ova_path');
  }
  public set ovaPath(value: string) {
    this._ovaPath = value;
  }
  public resetOvaPath() {
    this._ovaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovaPathInput() {
    return this._ovaPath;
  }

  // ovf_url - computed: false, optional: true, required: false
  private _ovfUrl?: string; 
  public get ovfUrl() {
    return this.getStringAttribute('ovf_url');
  }
  public set ovfUrl(value: string) {
    this._ovfUrl = value;
  }
  public resetOvfUrl() {
    this._ovfUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovfUrlInput() {
    return this._ovfUrl;
  }

  // upload_piece_size - computed: false, optional: true, required: false
  private _uploadPieceSize?: number; 
  public get uploadPieceSize() {
    return this.getNumberAttribute('upload_piece_size');
  }
  public set uploadPieceSize(value: number) {
    this._uploadPieceSize = value;
  }
  public resetUploadPieceSize() {
    this._uploadPieceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadPieceSizeInput() {
    return this._uploadPieceSize;
  }

  // vdc_id - computed: true, optional: false, required: false
  public get vdcId() {
    return this.getStringAttribute('vdc_id');
  }

  // vm_names - computed: true, optional: false, required: false
  public get vmNames() {
    return cdktf.Fn.tolist(this.getListAttribute('vm_names'));
  }

  // capture_vapp - computed: false, optional: true, required: false
  private _captureVapp = new CatalogVappTemplateCaptureVappOutputReference(this, "capture_vapp");
  public get captureVapp() {
    return this._captureVapp;
  }
  public putCaptureVapp(value: CatalogVappTemplateCaptureVapp) {
    this._captureVapp.internalValue = value;
  }
  public resetCaptureVapp() {
    this._captureVapp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureVappInput() {
    return this._captureVapp.internalValue;
  }

  // lease - computed: false, optional: true, required: false
  private _lease = new CatalogVappTemplateLeaseOutputReference(this, "lease");
  public get lease() {
    return this._lease;
  }
  public putLease(value: CatalogVappTemplateLease) {
    this._lease.internalValue = value;
  }
  public resetLease() {
    this._lease.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseInput() {
    return this._lease.internalValue;
  }

  // metadata_entry - computed: false, optional: true, required: false
  private _metadataEntry = new CatalogVappTemplateMetadataEntryList(this, "metadata_entry", true);
  public get metadataEntry() {
    return this._metadataEntry;
  }
  public putMetadataEntry(value: CatalogVappTemplateMetadataEntry[] | cdktf.IResolvable) {
    this._metadataEntry.internalValue = value;
  }
  public resetMetadataEntry() {
    this._metadataEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataEntryInput() {
    return this._metadataEntry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      ova_path: cdktf.stringToTerraform(this._ovaPath),
      ovf_url: cdktf.stringToTerraform(this._ovfUrl),
      upload_piece_size: cdktf.numberToTerraform(this._uploadPieceSize),
      capture_vapp: catalogVappTemplateCaptureVappToTerraform(this._captureVapp.internalValue),
      lease: catalogVappTemplateLeaseToTerraform(this._lease.internalValue),
      metadata_entry: cdktf.listMapper(catalogVappTemplateMetadataEntryToTerraform, true)(this._metadataEntry.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_id: {
        value: cdktf.stringToHclTerraform(this._catalogId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ova_path: {
        value: cdktf.stringToHclTerraform(this._ovaPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ovf_url: {
        value: cdktf.stringToHclTerraform(this._ovfUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_piece_size: {
        value: cdktf.numberToHclTerraform(this._uploadPieceSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      capture_vapp: {
        value: catalogVappTemplateCaptureVappToHclTerraform(this._captureVapp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CatalogVappTemplateCaptureVappList",
      },
      lease: {
        value: catalogVappTemplateLeaseToHclTerraform(this._lease.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CatalogVappTemplateLeaseList",
      },
      metadata_entry: {
        value: cdktf.listMapperHcl(catalogVappTemplateMetadataEntryToHclTerraform, true)(this._metadataEntry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CatalogVappTemplateMetadataEntryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
