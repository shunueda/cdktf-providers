// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ErrorDisableRecoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery#annotation ErrorDisableRecovery#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery#description ErrorDisableRecovery#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery#edr_event_ids ErrorDisableRecovery#edr_event_ids}
  */
  readonly edrEventIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery#err_dis_recov_intvl ErrorDisableRecovery#err_dis_recov_intvl}
  */
  readonly errDisRecovIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery#id ErrorDisableRecovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery#name_alias ErrorDisableRecovery#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * edr_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery#edr_event ErrorDisableRecovery#edr_event}
  */
  readonly edrEvent?: ErrorDisableRecoveryEdrEvent[] | cdktf.IResolvable;
}
export interface ErrorDisableRecoveryEdrEvent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery#annotation ErrorDisableRecovery#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery#description ErrorDisableRecovery#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery#event ErrorDisableRecovery#event}
  */
  readonly event: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery#name ErrorDisableRecovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery#name_alias ErrorDisableRecovery#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery#recover ErrorDisableRecovery#recover}
  */
  readonly recover?: string;
}

export function errorDisableRecoveryEdrEventToTerraform(struct?: ErrorDisableRecoveryEdrEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    description: cdktf.stringToTerraform(struct!.description),
    event: cdktf.stringToTerraform(struct!.event),
    name: cdktf.stringToTerraform(struct!.name),
    name_alias: cdktf.stringToTerraform(struct!.nameAlias),
    recover: cdktf.stringToTerraform(struct!.recover),
  }
}


export function errorDisableRecoveryEdrEventToHclTerraform(struct?: ErrorDisableRecoveryEdrEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_alias: {
      value: cdktf.stringToHclTerraform(struct!.nameAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recover: {
      value: cdktf.stringToHclTerraform(struct!.recover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ErrorDisableRecoveryEdrEventOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ErrorDisableRecoveryEdrEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAlias = this._nameAlias;
    }
    if (this._recover !== undefined) {
      hasAnyValues = true;
      internalValueResult.recover = this._recover;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorDisableRecoveryEdrEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._description = undefined;
      this._event = undefined;
      this._name = undefined;
      this._nameAlias = undefined;
      this._recover = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._description = value.description;
      this._event = value.event;
      this._name = value.name;
      this._nameAlias = value.nameAlias;
      this._recover = value.recover;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
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

  // event - computed: false, optional: false, required: true
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // recover - computed: true, optional: true, required: false
  private _recover?: string; 
  public get recover() {
    return this.getStringAttribute('recover');
  }
  public set recover(value: string) {
    this._recover = value;
  }
  public resetRecover() {
    this._recover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverInput() {
    return this._recover;
  }
}

export class ErrorDisableRecoveryEdrEventList extends cdktf.ComplexList {
  public internalValue? : ErrorDisableRecoveryEdrEvent[] | cdktf.IResolvable

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
  public get(index: number): ErrorDisableRecoveryEdrEventOutputReference {
    return new ErrorDisableRecoveryEdrEventOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery aci_error_disable_recovery}
*/
export class ErrorDisableRecovery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_error_disable_recovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ErrorDisableRecovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ErrorDisableRecovery to import
  * @param importFromId The id of the existing ErrorDisableRecovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ErrorDisableRecovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_error_disable_recovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/error_disable_recovery aci_error_disable_recovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ErrorDisableRecoveryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ErrorDisableRecoveryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_error_disable_recovery',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._description = config.description;
    this._edrEventIds = config.edrEventIds;
    this._errDisRecovIntvl = config.errDisRecovIntvl;
    this._id = config.id;
    this._nameAlias = config.nameAlias;
    this._edrEvent.internalValue = config.edrEvent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
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

  // edr_event_ids - computed: true, optional: true, required: false
  private _edrEventIds?: string[]; 
  public get edrEventIds() {
    return this.getListAttribute('edr_event_ids');
  }
  public set edrEventIds(value: string[]) {
    this._edrEventIds = value;
  }
  public resetEdrEventIds() {
    this._edrEventIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edrEventIdsInput() {
    return this._edrEventIds;
  }

  // err_dis_recov_intvl - computed: true, optional: true, required: false
  private _errDisRecovIntvl?: string; 
  public get errDisRecovIntvl() {
    return this.getStringAttribute('err_dis_recov_intvl');
  }
  public set errDisRecovIntvl(value: string) {
    this._errDisRecovIntvl = value;
  }
  public resetErrDisRecovIntvl() {
    this._errDisRecovIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errDisRecovIntvlInput() {
    return this._errDisRecovIntvl;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // edr_event - computed: false, optional: true, required: false
  private _edrEvent = new ErrorDisableRecoveryEdrEventList(this, "edr_event", false);
  public get edrEvent() {
    return this._edrEvent;
  }
  public putEdrEvent(value: ErrorDisableRecoveryEdrEvent[] | cdktf.IResolvable) {
    this._edrEvent.internalValue = value;
  }
  public resetEdrEvent() {
    this._edrEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edrEventInput() {
    return this._edrEvent.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      edr_event_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._edrEventIds),
      err_dis_recov_intvl: cdktf.stringToTerraform(this._errDisRecovIntvl),
      id: cdktf.stringToTerraform(this._id),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      edr_event: cdktf.listMapper(errorDisableRecoveryEdrEventToTerraform, true)(this._edrEvent.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
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
      edr_event_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._edrEventIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      err_dis_recov_intvl: {
        value: cdktf.stringToHclTerraform(this._errDisRecovIntvl),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edr_event: {
        value: cdktf.listMapperHcl(errorDisableRecoveryEdrEventToHclTerraform, true)(this._edrEvent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ErrorDisableRecoveryEdrEventList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
