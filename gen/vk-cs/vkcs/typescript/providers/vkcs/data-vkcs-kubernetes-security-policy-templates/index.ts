// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/kubernetes_security_policy_templates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVkcsKubernetesSecurityPolicyTemplatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The region in which to obtain the service client. If omitted, the `region` argument of the provider is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/kubernetes_security_policy_templates#region DataVkcsKubernetesSecurityPolicyTemplates#region}
  */
  readonly region?: string;
}
export interface DataVkcsKubernetesSecurityPolicyTemplatesSecurityPolicyTemplates {
}

export function dataVkcsKubernetesSecurityPolicyTemplatesSecurityPolicyTemplatesToTerraform(struct?: DataVkcsKubernetesSecurityPolicyTemplatesSecurityPolicyTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVkcsKubernetesSecurityPolicyTemplatesSecurityPolicyTemplatesToHclTerraform(struct?: DataVkcsKubernetesSecurityPolicyTemplatesSecurityPolicyTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVkcsKubernetesSecurityPolicyTemplatesSecurityPolicyTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVkcsKubernetesSecurityPolicyTemplatesSecurityPolicyTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVkcsKubernetesSecurityPolicyTemplatesSecurityPolicyTemplates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // settings_description - computed: true, optional: false, required: false
  public get settingsDescription() {
    return this.getStringAttribute('settings_description');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataVkcsKubernetesSecurityPolicyTemplatesSecurityPolicyTemplatesList extends cdktf.ComplexList {

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
  public get(index: number): DataVkcsKubernetesSecurityPolicyTemplatesSecurityPolicyTemplatesOutputReference {
    return new DataVkcsKubernetesSecurityPolicyTemplatesSecurityPolicyTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/kubernetes_security_policy_templates vkcs_kubernetes_security_policy_templates}
*/
export class DataVkcsKubernetesSecurityPolicyTemplates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_kubernetes_security_policy_templates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVkcsKubernetesSecurityPolicyTemplates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVkcsKubernetesSecurityPolicyTemplates to import
  * @param importFromId The id of the existing DataVkcsKubernetesSecurityPolicyTemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/kubernetes_security_policy_templates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVkcsKubernetesSecurityPolicyTemplates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_kubernetes_security_policy_templates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/kubernetes_security_policy_templates vkcs_kubernetes_security_policy_templates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVkcsKubernetesSecurityPolicyTemplatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVkcsKubernetesSecurityPolicyTemplatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vkcs_kubernetes_security_policy_templates',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_policy_templates - computed: true, optional: false, required: false
  private _securityPolicyTemplates = new DataVkcsKubernetesSecurityPolicyTemplatesSecurityPolicyTemplatesList(this, "security_policy_templates", false);
  public get securityPolicyTemplates() {
    return this._securityPolicyTemplates;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
