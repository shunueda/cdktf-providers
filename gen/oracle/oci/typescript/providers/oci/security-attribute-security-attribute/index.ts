// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityAttributeSecurityAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute#description SecurityAttributeSecurityAttribute#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute#id SecurityAttributeSecurityAttribute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute#is_retired SecurityAttributeSecurityAttribute#is_retired}
  */
  readonly isRetired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute#name SecurityAttributeSecurityAttribute#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute#security_attribute_namespace_id SecurityAttributeSecurityAttribute#security_attribute_namespace_id}
  */
  readonly securityAttributeNamespaceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute#timeouts SecurityAttributeSecurityAttribute#timeouts}
  */
  readonly timeouts?: SecurityAttributeSecurityAttributeTimeouts;
  /**
  * validator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute#validator SecurityAttributeSecurityAttribute#validator}
  */
  readonly validator?: SecurityAttributeSecurityAttributeValidator;
}
export interface SecurityAttributeSecurityAttributeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute#create SecurityAttributeSecurityAttribute#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute#delete SecurityAttributeSecurityAttribute#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute#update SecurityAttributeSecurityAttribute#update}
  */
  readonly update?: string;
}

export function securityAttributeSecurityAttributeTimeoutsToTerraform(struct?: SecurityAttributeSecurityAttributeTimeouts | cdktf.IResolvable): any {
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


export function securityAttributeSecurityAttributeTimeoutsToHclTerraform(struct?: SecurityAttributeSecurityAttributeTimeouts | cdktf.IResolvable): any {
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

export class SecurityAttributeSecurityAttributeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityAttributeSecurityAttributeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityAttributeSecurityAttributeTimeouts | cdktf.IResolvable | undefined) {
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
export interface SecurityAttributeSecurityAttributeValidator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute#validator_type SecurityAttributeSecurityAttribute#validator_type}
  */
  readonly validatorType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute#values SecurityAttributeSecurityAttribute#values}
  */
  readonly values?: string[];
}

export function securityAttributeSecurityAttributeValidatorToTerraform(struct?: SecurityAttributeSecurityAttributeValidatorOutputReference | SecurityAttributeSecurityAttributeValidator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validator_type: cdktf.stringToTerraform(struct!.validatorType),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function securityAttributeSecurityAttributeValidatorToHclTerraform(struct?: SecurityAttributeSecurityAttributeValidatorOutputReference | SecurityAttributeSecurityAttributeValidator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    validator_type: {
      value: cdktf.stringToHclTerraform(struct!.validatorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityAttributeSecurityAttributeValidatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityAttributeSecurityAttributeValidator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validatorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.validatorType = this._validatorType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityAttributeSecurityAttributeValidator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._validatorType = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._validatorType = value.validatorType;
      this._values = value.values;
    }
  }

  // validator_type - computed: false, optional: false, required: true
  private _validatorType?: string; 
  public get validatorType() {
    return this.getStringAttribute('validator_type');
  }
  public set validatorType(value: string) {
    this._validatorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validatorTypeInput() {
    return this._validatorType;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute oci_security_attribute_security_attribute}
*/
export class SecurityAttributeSecurityAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_security_attribute_security_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityAttributeSecurityAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityAttributeSecurityAttribute to import
  * @param importFromId The id of the existing SecurityAttributeSecurityAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityAttributeSecurityAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_security_attribute_security_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/security_attribute_security_attribute oci_security_attribute_security_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityAttributeSecurityAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityAttributeSecurityAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_security_attribute_security_attribute',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._isRetired = config.isRetired;
    this._name = config.name;
    this._securityAttributeNamespaceId = config.securityAttributeNamespaceId;
    this._timeouts.internalValue = config.timeouts;
    this._validator.internalValue = config.validator;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // is_retired - computed: true, optional: true, required: false
  private _isRetired?: boolean | cdktf.IResolvable; 
  public get isRetired() {
    return this.getBooleanAttribute('is_retired');
  }
  public set isRetired(value: boolean | cdktf.IResolvable) {
    this._isRetired = value;
  }
  public resetIsRetired() {
    this._isRetired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRetiredInput() {
    return this._isRetired;
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

  // security_attribute_namespace_id - computed: false, optional: false, required: true
  private _securityAttributeNamespaceId?: string; 
  public get securityAttributeNamespaceId() {
    return this.getStringAttribute('security_attribute_namespace_id');
  }
  public set securityAttributeNamespaceId(value: string) {
    this._securityAttributeNamespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributeNamespaceIdInput() {
    return this._securityAttributeNamespaceId;
  }

  // security_attribute_namespace_name - computed: true, optional: false, required: false
  public get securityAttributeNamespaceName() {
    return this.getStringAttribute('security_attribute_namespace_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecurityAttributeSecurityAttributeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecurityAttributeSecurityAttributeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // validator - computed: false, optional: true, required: false
  private _validator = new SecurityAttributeSecurityAttributeValidatorOutputReference(this, "validator");
  public get validator() {
    return this._validator;
  }
  public putValidator(value: SecurityAttributeSecurityAttributeValidator) {
    this._validator.internalValue = value;
  }
  public resetValidator() {
    this._validator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatorInput() {
    return this._validator.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_retired: cdktf.booleanToTerraform(this._isRetired),
      name: cdktf.stringToTerraform(this._name),
      security_attribute_namespace_id: cdktf.stringToTerraform(this._securityAttributeNamespaceId),
      timeouts: securityAttributeSecurityAttributeTimeoutsToTerraform(this._timeouts.internalValue),
      validator: securityAttributeSecurityAttributeValidatorToTerraform(this._validator.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      is_retired: {
        value: cdktf.booleanToHclTerraform(this._isRetired),
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
      security_attribute_namespace_id: {
        value: cdktf.stringToHclTerraform(this._securityAttributeNamespaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: securityAttributeSecurityAttributeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityAttributeSecurityAttributeTimeouts",
      },
      validator: {
        value: securityAttributeSecurityAttributeValidatorToHclTerraform(this._validator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityAttributeSecurityAttributeValidatorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
