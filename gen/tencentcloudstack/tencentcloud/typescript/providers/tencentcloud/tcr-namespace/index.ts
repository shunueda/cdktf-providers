// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcrNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_namespace#id TcrNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the TCR instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_namespace#instance_id TcrNamespace#instance_id}
  */
  readonly instanceId: string;
  /**
  * Scanning level, `True` is automatic, `False` is manual. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_namespace#is_auto_scan TcrNamespace#is_auto_scan}
  */
  readonly isAutoScan?: boolean | cdktf.IResolvable;
  /**
  * Blocking switch, `True` is open, `False` is closed. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_namespace#is_prevent_vul TcrNamespace#is_prevent_vul}
  */
  readonly isPreventVul?: boolean | cdktf.IResolvable;
  /**
  * Indicate that the namespace is public or not. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_namespace#is_public TcrNamespace#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Name of the TCR namespace. Valid length is [2~30]. It can only contain lowercase letters, numbers and separators (`.`, `_`, `-`), and cannot start, end or continue with separators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_namespace#name TcrNamespace#name}
  */
  readonly name: string;
  /**
  * Block vulnerability level, currently only supports `low`, `medium`, `high`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_namespace#severity TcrNamespace#severity}
  */
  readonly severity?: string;
  /**
  * cve_whitelist_items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_namespace#cve_whitelist_items TcrNamespace#cve_whitelist_items}
  */
  readonly cveWhitelistItems?: TcrNamespaceCveWhitelistItems[] | cdktf.IResolvable;
}
export interface TcrNamespaceCveWhitelistItems {
  /**
  * Vulnerability Whitelist ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_namespace#cve_id TcrNamespace#cve_id}
  */
  readonly cveId?: string;
}

export function tcrNamespaceCveWhitelistItemsToTerraform(struct?: TcrNamespaceCveWhitelistItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cve_id: cdktf.stringToTerraform(struct!.cveId),
  }
}


export function tcrNamespaceCveWhitelistItemsToHclTerraform(struct?: TcrNamespaceCveWhitelistItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cve_id: {
      value: cdktf.stringToHclTerraform(struct!.cveId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcrNamespaceCveWhitelistItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TcrNamespaceCveWhitelistItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cveId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cveId = this._cveId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcrNamespaceCveWhitelistItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cveId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cveId = value.cveId;
    }
  }

  // cve_id - computed: false, optional: true, required: false
  private _cveId?: string; 
  public get cveId() {
    return this.getStringAttribute('cve_id');
  }
  public set cveId(value: string) {
    this._cveId = value;
  }
  public resetCveId() {
    this._cveId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cveIdInput() {
    return this._cveId;
  }
}

export class TcrNamespaceCveWhitelistItemsList extends cdktf.ComplexList {
  public internalValue? : TcrNamespaceCveWhitelistItems[] | cdktf.IResolvable

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
  public get(index: number): TcrNamespaceCveWhitelistItemsOutputReference {
    return new TcrNamespaceCveWhitelistItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_namespace tencentcloud_tcr_namespace}
*/
export class TcrNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcr_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcrNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcrNamespace to import
  * @param importFromId The id of the existing TcrNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcrNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcr_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_namespace tencentcloud_tcr_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcrNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: TcrNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcr_namespace',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
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
    this._instanceId = config.instanceId;
    this._isAutoScan = config.isAutoScan;
    this._isPreventVul = config.isPreventVul;
    this._isPublic = config.isPublic;
    this._name = config.name;
    this._severity = config.severity;
    this._cveWhitelistItems.internalValue = config.cveWhitelistItems;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // is_auto_scan - computed: false, optional: true, required: false
  private _isAutoScan?: boolean | cdktf.IResolvable; 
  public get isAutoScan() {
    return this.getBooleanAttribute('is_auto_scan');
  }
  public set isAutoScan(value: boolean | cdktf.IResolvable) {
    this._isAutoScan = value;
  }
  public resetIsAutoScan() {
    this._isAutoScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoScanInput() {
    return this._isAutoScan;
  }

  // is_prevent_vul - computed: false, optional: true, required: false
  private _isPreventVul?: boolean | cdktf.IResolvable; 
  public get isPreventVul() {
    return this.getBooleanAttribute('is_prevent_vul');
  }
  public set isPreventVul(value: boolean | cdktf.IResolvable) {
    this._isPreventVul = value;
  }
  public resetIsPreventVul() {
    this._isPreventVul = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPreventVulInput() {
    return this._isPreventVul;
  }

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
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

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // cve_whitelist_items - computed: false, optional: true, required: false
  private _cveWhitelistItems = new TcrNamespaceCveWhitelistItemsList(this, "cve_whitelist_items", false);
  public get cveWhitelistItems() {
    return this._cveWhitelistItems;
  }
  public putCveWhitelistItems(value: TcrNamespaceCveWhitelistItems[] | cdktf.IResolvable) {
    this._cveWhitelistItems.internalValue = value;
  }
  public resetCveWhitelistItems() {
    this._cveWhitelistItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cveWhitelistItemsInput() {
    return this._cveWhitelistItems.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      is_auto_scan: cdktf.booleanToTerraform(this._isAutoScan),
      is_prevent_vul: cdktf.booleanToTerraform(this._isPreventVul),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      name: cdktf.stringToTerraform(this._name),
      severity: cdktf.stringToTerraform(this._severity),
      cve_whitelist_items: cdktf.listMapper(tcrNamespaceCveWhitelistItemsToTerraform, true)(this._cveWhitelistItems.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_auto_scan: {
        value: cdktf.booleanToHclTerraform(this._isAutoScan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_prevent_vul: {
        value: cdktf.booleanToHclTerraform(this._isPreventVul),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_public: {
        value: cdktf.booleanToHclTerraform(this._isPublic),
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
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cve_whitelist_items: {
        value: cdktf.listMapperHcl(tcrNamespaceCveWhitelistItemsToHclTerraform, true)(this._cveWhitelistItems.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TcrNamespaceCveWhitelistItemsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
