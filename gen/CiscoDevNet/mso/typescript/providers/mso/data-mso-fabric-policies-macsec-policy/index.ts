// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/fabric_policies_macsec_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoFabricPoliciesMacsecPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/fabric_policies_macsec_policy#id DataMsoFabricPoliciesMacsecPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/fabric_policies_macsec_policy#name DataMsoFabricPoliciesMacsecPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/fabric_policies_macsec_policy#template_id DataMsoFabricPoliciesMacsecPolicy#template_id}
  */
  readonly templateId: string;
}
export interface DataMsoFabricPoliciesMacsecPolicyMacsecKeys {
}

export function dataMsoFabricPoliciesMacsecPolicyMacsecKeysToTerraform(struct?: DataMsoFabricPoliciesMacsecPolicyMacsecKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMsoFabricPoliciesMacsecPolicyMacsecKeysToHclTerraform(struct?: DataMsoFabricPoliciesMacsecPolicyMacsecKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMsoFabricPoliciesMacsecPolicyMacsecKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMsoFabricPoliciesMacsecPolicyMacsecKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsoFabricPoliciesMacsecPolicyMacsecKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // psk - computed: true, optional: false, required: false
  public get psk() {
    return this.getStringAttribute('psk');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataMsoFabricPoliciesMacsecPolicyMacsecKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataMsoFabricPoliciesMacsecPolicyMacsecKeysOutputReference {
    return new DataMsoFabricPoliciesMacsecPolicyMacsecKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/fabric_policies_macsec_policy mso_fabric_policies_macsec_policy}
*/
export class DataMsoFabricPoliciesMacsecPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_fabric_policies_macsec_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoFabricPoliciesMacsecPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoFabricPoliciesMacsecPolicy to import
  * @param importFromId The id of the existing DataMsoFabricPoliciesMacsecPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/fabric_policies_macsec_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoFabricPoliciesMacsecPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_fabric_policies_macsec_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/fabric_policies_macsec_policy mso_fabric_policies_macsec_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoFabricPoliciesMacsecPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoFabricPoliciesMacsecPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_fabric_policies_macsec_policy',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
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
    this._name = config.name;
    this._templateId = config.templateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: true, optional: false, required: false
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }

  // cipher_suite - computed: true, optional: false, required: false
  public get cipherSuite() {
    return this.getStringAttribute('cipher_suite');
  }

  // confidentiality_offset - computed: true, optional: false, required: false
  public get confidentialityOffset() {
    return this.getStringAttribute('confidentiality_offset');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // interface_type - computed: true, optional: false, required: false
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }

  // key_server_priority - computed: true, optional: false, required: false
  public get keyServerPriority() {
    return this.getNumberAttribute('key_server_priority');
  }

  // macsec_keys - computed: true, optional: false, required: false
  private _macsecKeys = new DataMsoFabricPoliciesMacsecPolicyMacsecKeysList(this, "macsec_keys", true);
  public get macsecKeys() {
    return this._macsecKeys;
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

  // sak_expire_time - computed: true, optional: false, required: false
  public get sakExpireTime() {
    return this.getNumberAttribute('sak_expire_time');
  }

  // security_policy - computed: true, optional: false, required: false
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // window_size - computed: true, optional: false, required: false
  public get windowSize() {
    return this.getNumberAttribute('window_size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      template_id: cdktf.stringToTerraform(this._templateId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
