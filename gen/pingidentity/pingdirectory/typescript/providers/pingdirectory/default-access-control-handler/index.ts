// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_access_control_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultAccessControlHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a set of controls that clients should be allowed to include in bind requests. As bind requests are evaluated as the unauthenticated user, any controls included in this set will be permitted for any bind attempt. If you wish to grant permission for any bind controls not listed here, then the allowed-bind-control-oid property may be used to accomplish that.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_access_control_handler#allowed_bind_control DefaultAccessControlHandler#allowed_bind_control}
  */
  readonly allowedBindControl?: string[];
  /**
  * Specifies the OIDs of any additional controls (not covered by the allowed-bind-control property) that should be permitted in bind requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_access_control_handler#allowed_bind_control_oid DefaultAccessControlHandler#allowed_bind_control_oid}
  */
  readonly allowedBindControlOid?: string[];
  /**
  * Indicates whether this Access Control Handler is enabled. If set to FALSE, then no access control is enforced, and any client (including unauthenticated or anonymous clients) could be allowed to perform any operation if not subject to other restrictions, such as those enforced by the privilege subsystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_access_control_handler#enabled DefaultAccessControlHandler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Supported in PingDirectory product version 10.1.0.0+. Indicates whether the server should ensure that the requester has the "add" right for each attribute included in an add request, and is not denied "add" rights for any attributes in the request. Historically, any user who has been granted the "add" right has been allowed to create an entry of any type, even for add requests that include attributes for which they do not have the "add" right (that is, the "targetattr" portion of an access control rule was not considered when evaluating access control rights for add operations). This is still the default behavior in order to preserve backward compatibility, but setting the value of this property to true will cause the server to only permit add operations in which the requester has the "add" right for each of the attributes included in the add request, and deny add operations if the requester is denied "add" rights for any attributes included in the add request. It is strongly recommended that you thoroughly test your existing access control configuration before enabling this setting in a production environment to identify any cases in which you may need to add or augment access control rules to ensure that authorized users are allowed to add the entries they need to be able to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_access_control_handler#evaluate_target_attribute_rights_for_add_operations DefaultAccessControlHandler#evaluate_target_attribute_rights_for_add_operations}
  */
  readonly evaluateTargetAttributeRightsForAddOperations?: boolean | cdktf.IResolvable;
  /**
  * Defines global access control rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_access_control_handler#global_aci DefaultAccessControlHandler#global_aci}
  */
  readonly globalAci?: string[];
}
export interface DefaultAccessControlHandlerRequiredActions {
}

export function defaultAccessControlHandlerRequiredActionsToTerraform(struct?: DefaultAccessControlHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultAccessControlHandlerRequiredActionsToHclTerraform(struct?: DefaultAccessControlHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultAccessControlHandlerRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultAccessControlHandlerRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultAccessControlHandlerRequiredActions | undefined) {
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

export class DefaultAccessControlHandlerRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultAccessControlHandlerRequiredActionsOutputReference {
    return new DefaultAccessControlHandlerRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_access_control_handler pingdirectory_default_access_control_handler}
*/
export class DefaultAccessControlHandler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_access_control_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultAccessControlHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultAccessControlHandler to import
  * @param importFromId The id of the existing DefaultAccessControlHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_access_control_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultAccessControlHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_access_control_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_access_control_handler pingdirectory_default_access_control_handler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultAccessControlHandlerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DefaultAccessControlHandlerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_access_control_handler',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedBindControl = config.allowedBindControl;
    this._allowedBindControlOid = config.allowedBindControlOid;
    this._enabled = config.enabled;
    this._evaluateTargetAttributeRightsForAddOperations = config.evaluateTargetAttributeRightsForAddOperations;
    this._globalAci = config.globalAci;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_bind_control - computed: true, optional: true, required: false
  private _allowedBindControl?: string[]; 
  public get allowedBindControl() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_bind_control'));
  }
  public set allowedBindControl(value: string[]) {
    this._allowedBindControl = value;
  }
  public resetAllowedBindControl() {
    this._allowedBindControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedBindControlInput() {
    return this._allowedBindControl;
  }

  // allowed_bind_control_oid - computed: true, optional: true, required: false
  private _allowedBindControlOid?: string[]; 
  public get allowedBindControlOid() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_bind_control_oid'));
  }
  public set allowedBindControlOid(value: string[]) {
    this._allowedBindControlOid = value;
  }
  public resetAllowedBindControlOid() {
    this._allowedBindControlOid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedBindControlOidInput() {
    return this._allowedBindControlOid;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // evaluate_target_attribute_rights_for_add_operations - computed: true, optional: true, required: false
  private _evaluateTargetAttributeRightsForAddOperations?: boolean | cdktf.IResolvable; 
  public get evaluateTargetAttributeRightsForAddOperations() {
    return this.getBooleanAttribute('evaluate_target_attribute_rights_for_add_operations');
  }
  public set evaluateTargetAttributeRightsForAddOperations(value: boolean | cdktf.IResolvable) {
    this._evaluateTargetAttributeRightsForAddOperations = value;
  }
  public resetEvaluateTargetAttributeRightsForAddOperations() {
    this._evaluateTargetAttributeRightsForAddOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateTargetAttributeRightsForAddOperationsInput() {
    return this._evaluateTargetAttributeRightsForAddOperations;
  }

  // global_aci - computed: true, optional: true, required: false
  private _globalAci?: string[]; 
  public get globalAci() {
    return cdktf.Fn.tolist(this.getListAttribute('global_aci'));
  }
  public set globalAci(value: string[]) {
    this._globalAci = value;
  }
  public resetGlobalAci() {
    this._globalAci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAciInput() {
    return this._globalAci;
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
  private _requiredActions = new DefaultAccessControlHandlerRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_bind_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedBindControl),
      allowed_bind_control_oid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedBindControlOid),
      enabled: cdktf.booleanToTerraform(this._enabled),
      evaluate_target_attribute_rights_for_add_operations: cdktf.booleanToTerraform(this._evaluateTargetAttributeRightsForAddOperations),
      global_aci: cdktf.listMapper(cdktf.stringToTerraform, false)(this._globalAci),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_bind_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedBindControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_bind_control_oid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedBindControlOid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      evaluate_target_attribute_rights_for_add_operations: {
        value: cdktf.booleanToHclTerraform(this._evaluateTargetAttributeRightsForAddOperations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_aci: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._globalAci),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
