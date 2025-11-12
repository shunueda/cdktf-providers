// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/vulnerabilities
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VulnerabilitiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/vulnerabilities#id Vulnerabilities#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * vulnerability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/vulnerabilities#vulnerability Vulnerabilities#vulnerability}
  */
  readonly vulnerability: VulnerabilitiesVulnerability[] | cdktf.IResolvable;
}
export interface VulnerabilitiesVulnerability {
  /**
  * The cve_ids for the vulnerability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/vulnerabilities#cve_ids Vulnerabilities#cve_ids}
  */
  readonly cveIds?: string[];
  /**
  * An arbitrary field to store some details of the vulnerability class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/vulnerabilities#description Vulnerabilities#description}
  */
  readonly description?: string;
  /**
  * The title/name of the vulnerability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/vulnerabilities#name Vulnerabilities#name}
  */
  readonly name: string;
  /**
  * reference id of vulnerability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/vulnerabilities#reference_id Vulnerabilities#reference_id}
  */
  readonly referenceId: string;
  /**
  * The normalized score of the vulnerability within the range of 0 to 100. CVSS Score can be used here with a 10x multiplier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/vulnerabilities#score Vulnerabilities#score}
  */
  readonly score: number;
}

export function vulnerabilitiesVulnerabilityToTerraform(struct?: VulnerabilitiesVulnerability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cve_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cveIds),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    reference_id: cdktf.stringToTerraform(struct!.referenceId),
    score: cdktf.numberToTerraform(struct!.score),
  }
}


export function vulnerabilitiesVulnerabilityToHclTerraform(struct?: VulnerabilitiesVulnerability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cve_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cveIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    reference_id: {
      value: cdktf.stringToHclTerraform(struct!.referenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score: {
      value: cdktf.numberToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VulnerabilitiesVulnerabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VulnerabilitiesVulnerability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cveIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cveIds = this._cveIds;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._referenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceId = this._referenceId;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VulnerabilitiesVulnerability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cveIds = undefined;
      this._description = undefined;
      this._name = undefined;
      this._referenceId = undefined;
      this._score = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cveIds = value.cveIds;
      this._description = value.description;
      this._name = value.name;
      this._referenceId = value.referenceId;
      this._score = value.score;
    }
  }

  // cve_ids - computed: false, optional: true, required: false
  private _cveIds?: string[]; 
  public get cveIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cve_ids'));
  }
  public set cveIds(value: string[]) {
    this._cveIds = value;
  }
  public resetCveIds() {
    this._cveIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cveIdsInput() {
    return this._cveIds;
  }

  // description - computed: false, optional: true, required: false
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

  // reference_id - computed: false, optional: false, required: true
  private _referenceId?: string; 
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }
  public set referenceId(value: string) {
    this._referenceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceIdInput() {
    return this._referenceId;
  }

  // score - computed: false, optional: false, required: true
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}

export class VulnerabilitiesVulnerabilityList extends cdktf.ComplexList {
  public internalValue? : VulnerabilitiesVulnerability[] | cdktf.IResolvable

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
  public get(index: number): VulnerabilitiesVulnerabilityOutputReference {
    return new VulnerabilitiesVulnerabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/vulnerabilities illumio-core_vulnerabilities}
*/
export class Vulnerabilities extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_vulnerabilities";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vulnerabilities resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vulnerabilities to import
  * @param importFromId The id of the existing Vulnerabilities that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/vulnerabilities#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vulnerabilities to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_vulnerabilities", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/vulnerabilities illumio-core_vulnerabilities} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VulnerabilitiesConfig
  */
  public constructor(scope: Construct, id: string, config: VulnerabilitiesConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_vulnerabilities',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
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
    this._vulnerability.internalValue = config.vulnerability;
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

  // vulnerability - computed: false, optional: false, required: true
  private _vulnerability = new VulnerabilitiesVulnerabilityList(this, "vulnerability", false);
  public get vulnerability() {
    return this._vulnerability;
  }
  public putVulnerability(value: VulnerabilitiesVulnerability[] | cdktf.IResolvable) {
    this._vulnerability.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityInput() {
    return this._vulnerability.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vulnerability: cdktf.listMapper(vulnerabilitiesVulnerabilityToTerraform, true)(this._vulnerability.internalValue),
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
      vulnerability: {
        value: cdktf.listMapperHcl(vulnerabilitiesVulnerabilityToHclTerraform, true)(this._vulnerability.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VulnerabilitiesVulnerabilityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
