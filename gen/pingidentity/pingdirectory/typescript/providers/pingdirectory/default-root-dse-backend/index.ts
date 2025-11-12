// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_root_dse_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultRootDseBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies an additional OID that should appear in the list of supportedControl values in the server's root DSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_root_dse_backend#additional_supported_control_oid DefaultRootDseBackend#additional_supported_control_oid}
  */
  readonly additionalSupportedControlOid?: string[];
  /**
  * Indicates whether all attributes in the root DSE are to be treated like user attributes (and therefore returned to clients by default) regardless of the Directory Server schema configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_root_dse_backend#show_all_attributes DefaultRootDseBackend#show_all_attributes}
  */
  readonly showAllAttributes?: boolean | cdktf.IResolvable;
  /**
  * Specifies the set of base DNs used for singleLevel, wholeSubtree, and subordinateSubtree searches based at the root DSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_root_dse_backend#subordinate_base_dn DefaultRootDseBackend#subordinate_base_dn}
  */
  readonly subordinateBaseDn?: string[];
  /**
  * Indicates whether the server's root DSE should reflect current or legacy values for the vendorName and vendorVersion attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_root_dse_backend#use_legacy_vendor_version DefaultRootDseBackend#use_legacy_vendor_version}
  */
  readonly useLegacyVendorVersion?: boolean | cdktf.IResolvable;
}
export interface DefaultRootDseBackendRequiredActions {
}

export function defaultRootDseBackendRequiredActionsToTerraform(struct?: DefaultRootDseBackendRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultRootDseBackendRequiredActionsToHclTerraform(struct?: DefaultRootDseBackendRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultRootDseBackendRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultRootDseBackendRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultRootDseBackendRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultRootDseBackendRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultRootDseBackendRequiredActionsOutputReference {
    return new DefaultRootDseBackendRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_root_dse_backend pingdirectory_default_root_dse_backend}
*/
export class DefaultRootDseBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_root_dse_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultRootDseBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultRootDseBackend to import
  * @param importFromId The id of the existing DefaultRootDseBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_root_dse_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultRootDseBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_root_dse_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_root_dse_backend pingdirectory_default_root_dse_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultRootDseBackendConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DefaultRootDseBackendConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_root_dse_backend',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalSupportedControlOid = config.additionalSupportedControlOid;
    this._showAllAttributes = config.showAllAttributes;
    this._subordinateBaseDn = config.subordinateBaseDn;
    this._useLegacyVendorVersion = config.useLegacyVendorVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_supported_control_oid - computed: true, optional: true, required: false
  private _additionalSupportedControlOid?: string[]; 
  public get additionalSupportedControlOid() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_supported_control_oid'));
  }
  public set additionalSupportedControlOid(value: string[]) {
    this._additionalSupportedControlOid = value;
  }
  public resetAdditionalSupportedControlOid() {
    this._additionalSupportedControlOid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSupportedControlOidInput() {
    return this._additionalSupportedControlOid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultRootDseBackendRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // show_all_attributes - computed: true, optional: true, required: false
  private _showAllAttributes?: boolean | cdktf.IResolvable; 
  public get showAllAttributes() {
    return this.getBooleanAttribute('show_all_attributes');
  }
  public set showAllAttributes(value: boolean | cdktf.IResolvable) {
    this._showAllAttributes = value;
  }
  public resetShowAllAttributes() {
    this._showAllAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAllAttributesInput() {
    return this._showAllAttributes;
  }

  // subordinate_base_dn - computed: true, optional: true, required: false
  private _subordinateBaseDn?: string[]; 
  public get subordinateBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('subordinate_base_dn'));
  }
  public set subordinateBaseDn(value: string[]) {
    this._subordinateBaseDn = value;
  }
  public resetSubordinateBaseDn() {
    this._subordinateBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subordinateBaseDnInput() {
    return this._subordinateBaseDn;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_legacy_vendor_version - computed: true, optional: true, required: false
  private _useLegacyVendorVersion?: boolean | cdktf.IResolvable; 
  public get useLegacyVendorVersion() {
    return this.getBooleanAttribute('use_legacy_vendor_version');
  }
  public set useLegacyVendorVersion(value: boolean | cdktf.IResolvable) {
    this._useLegacyVendorVersion = value;
  }
  public resetUseLegacyVendorVersion() {
    this._useLegacyVendorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLegacyVendorVersionInput() {
    return this._useLegacyVendorVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_supported_control_oid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalSupportedControlOid),
      show_all_attributes: cdktf.booleanToTerraform(this._showAllAttributes),
      subordinate_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subordinateBaseDn),
      use_legacy_vendor_version: cdktf.booleanToTerraform(this._useLegacyVendorVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_supported_control_oid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalSupportedControlOid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      show_all_attributes: {
        value: cdktf.booleanToHclTerraform(this._showAllAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subordinate_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subordinateBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_legacy_vendor_version: {
        value: cdktf.booleanToHclTerraform(this._useLegacyVendorVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
