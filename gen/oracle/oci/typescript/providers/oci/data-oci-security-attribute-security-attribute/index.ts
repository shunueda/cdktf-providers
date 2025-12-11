// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/security_attribute_security_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciSecurityAttributeSecurityAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/security_attribute_security_attribute#security_attribute_name DataOciSecurityAttributeSecurityAttribute#security_attribute_name}
  */
  readonly securityAttributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/security_attribute_security_attribute#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttribute#security_attribute_namespace_id}
  */
  readonly securityAttributeNamespaceId: string;
}
export interface DataOciSecurityAttributeSecurityAttributeValidator {
}

export function dataOciSecurityAttributeSecurityAttributeValidatorToTerraform(struct?: DataOciSecurityAttributeSecurityAttributeValidator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciSecurityAttributeSecurityAttributeValidatorToHclTerraform(struct?: DataOciSecurityAttributeSecurityAttributeValidator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciSecurityAttributeSecurityAttributeValidatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciSecurityAttributeSecurityAttributeValidator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciSecurityAttributeSecurityAttributeValidator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // validator_type - computed: true, optional: false, required: false
  public get validatorType() {
    return this.getStringAttribute('validator_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataOciSecurityAttributeSecurityAttributeValidatorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciSecurityAttributeSecurityAttributeValidatorOutputReference {
    return new DataOciSecurityAttributeSecurityAttributeValidatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/security_attribute_security_attribute oci_security_attribute_security_attribute}
*/
export class DataOciSecurityAttributeSecurityAttribute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_security_attribute_security_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciSecurityAttributeSecurityAttribute to import
  * @param importFromId The id of the existing DataOciSecurityAttributeSecurityAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/security_attribute_security_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciSecurityAttributeSecurityAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_security_attribute_security_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/security_attribute_security_attribute oci_security_attribute_security_attribute} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciSecurityAttributeSecurityAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciSecurityAttributeSecurityAttributeConfig) {
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
    this._securityAttributeName = config.securityAttributeName;
    this._securityAttributeNamespaceId = config.securityAttributeNamespaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_retired - computed: true, optional: false, required: false
  public get isRetired() {
    return this.getBooleanAttribute('is_retired');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // security_attribute_name - computed: false, optional: false, required: true
  private _securityAttributeName?: string; 
  public get securityAttributeName() {
    return this.getStringAttribute('security_attribute_name');
  }
  public set securityAttributeName(value: string) {
    this._securityAttributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributeNameInput() {
    return this._securityAttributeName;
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

  // validator - computed: true, optional: false, required: false
  private _validator = new DataOciSecurityAttributeSecurityAttributeValidatorList(this, "validator", false);
  public get validator() {
    return this._validator;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      security_attribute_name: cdktf.stringToTerraform(this._securityAttributeName),
      security_attribute_namespace_id: cdktf.stringToTerraform(this._securityAttributeNamespaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      security_attribute_name: {
        value: cdktf.stringToHclTerraform(this._securityAttributeName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
