// https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BillingDomainMasterdataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata#additional_information BillingDomainMasterdata#additional_information}
  */
  readonly additionalInformation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata#collector BillingDomainMasterdata#collector}
  */
  readonly collector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata#description BillingDomainMasterdata#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata#domain_id BillingDomainMasterdata#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata#domain_name BillingDomainMasterdata#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata#id BillingDomainMasterdata#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata#region BillingDomainMasterdata#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata#responsible_primary_contact_email BillingDomainMasterdata#responsible_primary_contact_email}
  */
  readonly responsiblePrimaryContactEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata#responsible_primary_contact_id BillingDomainMasterdata#responsible_primary_contact_id}
  */
  readonly responsiblePrimaryContactId?: string;
  /**
  * cost_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata#cost_object BillingDomainMasterdata#cost_object}
  */
  readonly costObject?: BillingDomainMasterdataCostObject;
}
export interface BillingDomainMasterdataCostObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata#name BillingDomainMasterdata#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata#projects_can_inherit BillingDomainMasterdata#projects_can_inherit}
  */
  readonly projectsCanInherit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata#type BillingDomainMasterdata#type}
  */
  readonly type?: string;
}

export function billingDomainMasterdataCostObjectToTerraform(struct?: BillingDomainMasterdataCostObjectOutputReference | BillingDomainMasterdataCostObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    projects_can_inherit: cdktf.booleanToTerraform(struct!.projectsCanInherit),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function billingDomainMasterdataCostObjectToHclTerraform(struct?: BillingDomainMasterdataCostObjectOutputReference | BillingDomainMasterdataCostObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    projects_can_inherit: {
      value: cdktf.booleanToHclTerraform(struct!.projectsCanInherit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingDomainMasterdataCostObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BillingDomainMasterdataCostObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectsCanInherit !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectsCanInherit = this._projectsCanInherit;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingDomainMasterdataCostObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._projectsCanInherit = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._projectsCanInherit = value.projectsCanInherit;
      this._type = value.type;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // projects_can_inherit - computed: false, optional: true, required: false
  private _projectsCanInherit?: boolean | cdktf.IResolvable; 
  public get projectsCanInherit() {
    return this.getBooleanAttribute('projects_can_inherit');
  }
  public set projectsCanInherit(value: boolean | cdktf.IResolvable) {
    this._projectsCanInherit = value;
  }
  public resetProjectsCanInherit() {
    this._projectsCanInherit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsCanInheritInput() {
    return this._projectsCanInherit;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata sci_billing_domain_masterdata}
*/
export class BillingDomainMasterdata extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sci_billing_domain_masterdata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BillingDomainMasterdata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BillingDomainMasterdata to import
  * @param importFromId The id of the existing BillingDomainMasterdata that should be imported. Refer to the {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BillingDomainMasterdata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sci_billing_domain_masterdata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/billing_domain_masterdata sci_billing_domain_masterdata} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BillingDomainMasterdataConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BillingDomainMasterdataConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sci_billing_domain_masterdata',
      terraformGeneratorMetadata: {
        providerName: 'sci',
        providerVersion: '2.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalInformation = config.additionalInformation;
    this._collector = config.collector;
    this._description = config.description;
    this._domainId = config.domainId;
    this._domainName = config.domainName;
    this._id = config.id;
    this._region = config.region;
    this._responsiblePrimaryContactEmail = config.responsiblePrimaryContactEmail;
    this._responsiblePrimaryContactId = config.responsiblePrimaryContactId;
    this._costObject.internalValue = config.costObject;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_information - computed: false, optional: true, required: false
  private _additionalInformation?: string; 
  public get additionalInformation() {
    return this.getStringAttribute('additional_information');
  }
  public set additionalInformation(value: string) {
    this._additionalInformation = value;
  }
  public resetAdditionalInformation() {
    this._additionalInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInformationInput() {
    return this._additionalInformation;
  }

  // changed_at - computed: true, optional: false, required: false
  public get changedAt() {
    return this.getStringAttribute('changed_at');
  }

  // changed_by - computed: true, optional: false, required: false
  public get changedBy() {
    return this.getStringAttribute('changed_by');
  }

  // collector - computed: true, optional: true, required: false
  private _collector?: string; 
  public get collector() {
    return this.getStringAttribute('collector');
  }
  public set collector(value: string) {
    this._collector = value;
  }
  public resetCollector() {
    this._collector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorInput() {
    return this._collector;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // is_complete - computed: true, optional: false, required: false
  public get isComplete() {
    return this.getBooleanAttribute('is_complete');
  }

  // missing_attributes - computed: true, optional: false, required: false
  public get missingAttributes() {
    return this.getStringAttribute('missing_attributes');
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

  // responsible_primary_contact_email - computed: false, optional: true, required: false
  private _responsiblePrimaryContactEmail?: string; 
  public get responsiblePrimaryContactEmail() {
    return this.getStringAttribute('responsible_primary_contact_email');
  }
  public set responsiblePrimaryContactEmail(value: string) {
    this._responsiblePrimaryContactEmail = value;
  }
  public resetResponsiblePrimaryContactEmail() {
    this._responsiblePrimaryContactEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsiblePrimaryContactEmailInput() {
    return this._responsiblePrimaryContactEmail;
  }

  // responsible_primary_contact_id - computed: false, optional: true, required: false
  private _responsiblePrimaryContactId?: string; 
  public get responsiblePrimaryContactId() {
    return this.getStringAttribute('responsible_primary_contact_id');
  }
  public set responsiblePrimaryContactId(value: string) {
    this._responsiblePrimaryContactId = value;
  }
  public resetResponsiblePrimaryContactId() {
    this._responsiblePrimaryContactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsiblePrimaryContactIdInput() {
    return this._responsiblePrimaryContactId;
  }

  // cost_object - computed: false, optional: true, required: false
  private _costObject = new BillingDomainMasterdataCostObjectOutputReference(this, "cost_object");
  public get costObject() {
    return this._costObject;
  }
  public putCostObject(value: BillingDomainMasterdataCostObject) {
    this._costObject.internalValue = value;
  }
  public resetCostObject() {
    this._costObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costObjectInput() {
    return this._costObject.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_information: cdktf.stringToTerraform(this._additionalInformation),
      collector: cdktf.stringToTerraform(this._collector),
      description: cdktf.stringToTerraform(this._description),
      domain_id: cdktf.stringToTerraform(this._domainId),
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      responsible_primary_contact_email: cdktf.stringToTerraform(this._responsiblePrimaryContactEmail),
      responsible_primary_contact_id: cdktf.stringToTerraform(this._responsiblePrimaryContactId),
      cost_object: billingDomainMasterdataCostObjectToTerraform(this._costObject.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_information: {
        value: cdktf.stringToHclTerraform(this._additionalInformation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collector: {
        value: cdktf.stringToHclTerraform(this._collector),
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
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsible_primary_contact_email: {
        value: cdktf.stringToHclTerraform(this._responsiblePrimaryContactEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsible_primary_contact_id: {
        value: cdktf.stringToHclTerraform(this._responsiblePrimaryContactId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost_object: {
        value: billingDomainMasterdataCostObjectToHclTerraform(this._costObject.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BillingDomainMasterdataCostObjectList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
