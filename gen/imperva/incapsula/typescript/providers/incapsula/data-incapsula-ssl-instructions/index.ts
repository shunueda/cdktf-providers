// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/ssl_instructions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIncapsulaSslInstructionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * domain ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/ssl_instructions#domain_ids DataIncapsulaSslInstructions#domain_ids}
  */
  readonly domainIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/ssl_instructions#id DataIncapsulaSslInstructions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Numeric identifier of the site certificate id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/ssl_instructions#managed_certificate_settings_id DataIncapsulaSslInstructions#managed_certificate_settings_id}
  */
  readonly managedCertificateSettingsId: string;
  /**
  * Numeric identifier of the site to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/ssl_instructions#site_id DataIncapsulaSslInstructions#site_id}
  */
  readonly siteId: string;
}
export interface DataIncapsulaSslInstructionsInstructions {
}

export function dataIncapsulaSslInstructionsInstructionsToTerraform(struct?: DataIncapsulaSslInstructionsInstructions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncapsulaSslInstructionsInstructionsToHclTerraform(struct?: DataIncapsulaSslInstructionsInstructions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncapsulaSslInstructionsInstructionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncapsulaSslInstructionsInstructions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncapsulaSslInstructionsInstructions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // san_id - computed: true, optional: false, required: false
  public get sanId() {
    return this.getNumberAttribute('san_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIncapsulaSslInstructionsInstructionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncapsulaSslInstructionsInstructionsOutputReference {
    return new DataIncapsulaSslInstructionsInstructionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/ssl_instructions incapsula_ssl_instructions}
*/
export class DataIncapsulaSslInstructions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_ssl_instructions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIncapsulaSslInstructions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIncapsulaSslInstructions to import
  * @param importFromId The id of the existing DataIncapsulaSslInstructions that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/ssl_instructions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIncapsulaSslInstructions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_ssl_instructions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/ssl_instructions incapsula_ssl_instructions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIncapsulaSslInstructionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataIncapsulaSslInstructionsConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_ssl_instructions',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainIds = config.domainIds;
    this._id = config.id;
    this._managedCertificateSettingsId = config.managedCertificateSettingsId;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_ids - computed: false, optional: false, required: true
  private _domainIds?: string[]; 
  public get domainIds() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_ids'));
  }
  public set domainIds(value: string[]) {
    this._domainIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdsInput() {
    return this._domainIds;
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

  // instructions - computed: true, optional: false, required: false
  private _instructions = new DataIncapsulaSslInstructionsInstructionsList(this, "instructions", true);
  public get instructions() {
    return this._instructions;
  }

  // managed_certificate_settings_id - computed: false, optional: false, required: true
  private _managedCertificateSettingsId?: string; 
  public get managedCertificateSettingsId() {
    return this.getStringAttribute('managed_certificate_settings_id');
  }
  public set managedCertificateSettingsId(value: string) {
    this._managedCertificateSettingsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedCertificateSettingsIdInput() {
    return this._managedCertificateSettingsId;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainIds),
      id: cdktf.stringToTerraform(this._id),
      managed_certificate_settings_id: cdktf.stringToTerraform(this._managedCertificateSettingsId),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_certificate_settings_id: {
        value: cdktf.stringToHclTerraform(this._managedCertificateSettingsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
