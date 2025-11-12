// https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MveConfig extends cdktf.TerraformMetaArguments {
  /**
  * The term of the contract in months: valid values are 1, 12, 24, 36, 48, and 60. To set the product to a month-to-month contract with no minimum term, set the value to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#contract_term_months Mve#contract_term_months}
  */
  readonly contractTermMonths: number;
  /**
  * The cost centre of the MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#cost_centre Mve#cost_centre}
  */
  readonly costCentre?: string;
  /**
  * The diversity zone of the MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#diversity_zone Mve#diversity_zone}
  */
  readonly diversityZone?: string;
  /**
  * The numeric location ID of the product. This value can be retrieved from the data source megaport_location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#location_id Mve#location_id}
  */
  readonly locationId: number;
  /**
  * The name of the MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#product_name Mve#product_name}
  */
  readonly productName: string;
  /**
  * Promo code is an optional string that can be used to enter a promotional code for the service order. The code is not validated, so if the code doesn't exist or doesn't work for the service, the request will still be successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#promo_code Mve#promo_code}
  */
  readonly promoCode?: string;
  /**
  * The resource tags associated with the product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#resource_tags Mve#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string };
  /**
  * The vendor configuration of the MVE. Vendor-specific information required to bootstrap the MVE. These values will be different for each vendor, and can include vendor name, size of VM, license/activation code, software version, and SSH keys. This field cannot be changed after the MVE is created and if it is modified, the MVE will be deleted and re-created. Imported MVEs do not have this field populated by the API, so the initially provided configuration will be ignored as it can't be verified to be correct. If the user wants to change the configuration after importing the resource, they can then do so by changing the field after importing the resource and running terraform apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#vendor_config Mve#vendor_config}
  */
  readonly vendorConfig: MveVendorConfig;
  /**
  * The network interfaces of the MVE. The number of elements in the array is the number of vNICs the user wants to provision. Description can be null. The maximum number of vNICs allowed is 5. If the array is not supplied (i.e. null), it will default to the minimum number of vNICs for the supplier - 2 for Palo Alto and 1 for the others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#vnics Mve#vnics}
  */
  readonly vnics?: MveVnics[] | cdktf.IResolvable;
}
export interface MveVendorConfig {
  /**
  * The account key for the vendor config. Enter the Account Key from Aruba Orchestrator. The key is linked to the Account Name. Required for Aruba MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#account_key Mve#account_key}
  */
  readonly accountKey?: string;
  /**
  * The account name for the vendor config. Enter the Account Name from Aruba Orchestrator. To view your Account Name, log in to Orchestrator and choose Orchestrator > Licensing | Cloud Portal. Required for Aruba MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#account_name Mve#account_name}
  */
  readonly accountName?: string;
  /**
  * The admin password hash for the vendor config. Required for Palo Alto MVE. Must be a SHA-256 crypt hash in the format "$5$<salt>$<hash>" (e.g., "$5$2833ea35$Pdyc6dKE8N/UBRge3QWDJJyotG3I59pxLJWVmcSQDdC"). On Linux/macOS, you can generate this using: "mkpasswd -m sha-256 'your_password'".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#admin_password_hash Mve#admin_password_hash}
  */
  readonly adminPasswordHash?: string;
  /**
  * The admin SSH public key for the vendor config. Required for Cisco, Fortinet, and Vmware MVEs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#admin_ssh_public_key Mve#admin_ssh_public_key}
  */
  readonly adminSshPublicKey?: string;
  /**
  * The Base64 encoded cloud init file for the vendor config. The bootstrap configuration file. Required for Aviatrix and Cisco C8000v.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#cloud_init Mve#cloud_init}
  */
  readonly cloudInit?: string;
  /**
  * The controldler address for the vendor config. A FQDN (Fully Qualified Domain Name) or IPv4 address of your Versa Controller. Required for Versa MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#controller_address Mve#controller_address}
  */
  readonly controllerAddress?: string;
  /**
  * The director address for the vendor config. A FQDN (Fully Qualified Domain Name) or IPv4 address of your Versa Director. Required for Versa MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#director_address Mve#director_address}
  */
  readonly directorAddress?: string;
  /**
  * The FMC IP address for the vendor config. Required for Cisco FTDv (Firewall) MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#fmc_ip_address Mve#fmc_ip_address}
  */
  readonly fmcIpAddress?: string;
  /**
  * The FMC NAT ID for the vendor config. Required for Cisco FTDv (Firewall) MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#fmc_nat_id Mve#fmc_nat_id}
  */
  readonly fmcNatId?: string;
  /**
  * The FMC registration key for the vendor config. Required for Cisco FTDv (Firewall) MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#fmc_registration_key Mve#fmc_registration_key}
  */
  readonly fmcRegistrationKey?: string;
  /**
  * The image ID of the MVE. Indicates the software version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#image_id Mve#image_id}
  */
  readonly imageId: number;
  /**
  * The vION key for the vendor config. Required for Prisma MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#ion_key Mve#ion_key}
  */
  readonly ionKey?: string;
  /**
  * The license data for the vendor config. Required for Fortinet and Palo Alto MVEs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#license_data Mve#license_data}
  */
  readonly licenseData?: string;
  /**
  * The local auth for the vendor config. Enter the Local Auth string as configured in your Versa Director. Required for Versa MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#local_auth Mve#local_auth}
  */
  readonly localAuth?: string;
  /**
  * Whether to manage the MVE locally. Required for Cisco MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#manage_locally Mve#manage_locally}
  */
  readonly manageLocally?: boolean | cdktf.IResolvable;
  /**
  * The MVE label for the vendor config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#mve_label Mve#mve_label}
  */
  readonly mveLabel?: string;
  /**
  * The product size for the vendor config. The size defines the MVE specifications including number of cores, bandwidth, and number of connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#product_size Mve#product_size}
  */
  readonly productSize: string;
  /**
  * The remote auth for the vendor config. Enter the Remote Auth string as configured in your Versa Director. Required for Versa MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#remote_auth Mve#remote_auth}
  */
  readonly remoteAuth?: string;
  /**
  * The secret key for the vendor config. Required for Prisma MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#secret_key Mve#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The serial number for the vendor config. Enter the serial number that you specified when creating the device in Versa Director. Required for Versa MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#serial_number Mve#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * The SSH public key for the vendor config. Required for 6WIND, VMWare, Palo Alto, and Fortinet MVEs. Megaport supports the 2048-bit RSA key type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#ssh_public_key Mve#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * The system tag for the vendor config. Aruba Orchestrator System Tags and preconfiguration templates register the EC-V with the Cloud Portal and Orchestrator, and enable Orchestrator to automatically accept and configure newly discovered EC-V appliances. If you created a preconfiguration template in Orchestrator, enter the System Tag you specified here. Required for Aruba MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#system_tag Mve#system_tag}
  */
  readonly systemTag?: string;
  /**
  * The token for the vendor config. Required for Meraki MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#token Mve#token}
  */
  readonly token?: string;
  /**
  * The VCO activation code for the vendor config. This is provided by Orchestrator after creating the edge device. Required for VMware MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#vco_activation_code Mve#vco_activation_code}
  */
  readonly vcoActivationCode?: string;
  /**
  * The VCO address for the vendor config. A FQDN (Fully Qualified Domain Name) or IPv4 or IPv6 address for the Orchestrator where you created the edge device. Required for VMware MVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#vco_address Mve#vco_address}
  */
  readonly vcoAddress?: string;
  /**
  * The name of vendor of the MVE. Currently supported values: "6wind", "aruba", "aviatrix", "cisco", "fortinet", "palo_alto", "prisma", "versa", "vmware", "meraki".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#vendor Mve#vendor}
  */
  readonly vendor: string;
}

export function mveVendorConfigToTerraform(struct?: MveVendorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_key: cdktf.stringToTerraform(struct!.accountKey),
    account_name: cdktf.stringToTerraform(struct!.accountName),
    admin_password_hash: cdktf.stringToTerraform(struct!.adminPasswordHash),
    admin_ssh_public_key: cdktf.stringToTerraform(struct!.adminSshPublicKey),
    cloud_init: cdktf.stringToTerraform(struct!.cloudInit),
    controller_address: cdktf.stringToTerraform(struct!.controllerAddress),
    director_address: cdktf.stringToTerraform(struct!.directorAddress),
    fmc_ip_address: cdktf.stringToTerraform(struct!.fmcIpAddress),
    fmc_nat_id: cdktf.stringToTerraform(struct!.fmcNatId),
    fmc_registration_key: cdktf.stringToTerraform(struct!.fmcRegistrationKey),
    image_id: cdktf.numberToTerraform(struct!.imageId),
    ion_key: cdktf.stringToTerraform(struct!.ionKey),
    license_data: cdktf.stringToTerraform(struct!.licenseData),
    local_auth: cdktf.stringToTerraform(struct!.localAuth),
    manage_locally: cdktf.booleanToTerraform(struct!.manageLocally),
    mve_label: cdktf.stringToTerraform(struct!.mveLabel),
    product_size: cdktf.stringToTerraform(struct!.productSize),
    remote_auth: cdktf.stringToTerraform(struct!.remoteAuth),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    ssh_public_key: cdktf.stringToTerraform(struct!.sshPublicKey),
    system_tag: cdktf.stringToTerraform(struct!.systemTag),
    token: cdktf.stringToTerraform(struct!.token),
    vco_activation_code: cdktf.stringToTerraform(struct!.vcoActivationCode),
    vco_address: cdktf.stringToTerraform(struct!.vcoAddress),
    vendor: cdktf.stringToTerraform(struct!.vendor),
  }
}


export function mveVendorConfigToHclTerraform(struct?: MveVendorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_key: {
      value: cdktf.stringToHclTerraform(struct!.accountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_password_hash: {
      value: cdktf.stringToHclTerraform(struct!.adminPasswordHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_ssh_public_key: {
      value: cdktf.stringToHclTerraform(struct!.adminSshPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_init: {
      value: cdktf.stringToHclTerraform(struct!.cloudInit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_address: {
      value: cdktf.stringToHclTerraform(struct!.controllerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    director_address: {
      value: cdktf.stringToHclTerraform(struct!.directorAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fmc_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.fmcIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fmc_nat_id: {
      value: cdktf.stringToHclTerraform(struct!.fmcNatId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fmc_registration_key: {
      value: cdktf.stringToHclTerraform(struct!.fmcRegistrationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.numberToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ion_key: {
      value: cdktf.stringToHclTerraform(struct!.ionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_data: {
      value: cdktf.stringToHclTerraform(struct!.licenseData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_auth: {
      value: cdktf.stringToHclTerraform(struct!.localAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manage_locally: {
      value: cdktf.booleanToHclTerraform(struct!.manageLocally),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mve_label: {
      value: cdktf.stringToHclTerraform(struct!.mveLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_size: {
      value: cdktf.stringToHclTerraform(struct!.productSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_auth: {
      value: cdktf.stringToHclTerraform(struct!.remoteAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_tag: {
      value: cdktf.stringToHclTerraform(struct!.systemTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vco_activation_code: {
      value: cdktf.stringToHclTerraform(struct!.vcoActivationCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vco_address: {
      value: cdktf.stringToHclTerraform(struct!.vcoAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MveVendorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MveVendorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKey = this._accountKey;
    }
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._adminPasswordHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPasswordHash = this._adminPasswordHash;
    }
    if (this._adminSshPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminSshPublicKey = this._adminSshPublicKey;
    }
    if (this._cloudInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudInit = this._cloudInit;
    }
    if (this._controllerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerAddress = this._controllerAddress;
    }
    if (this._directorAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.directorAddress = this._directorAddress;
    }
    if (this._fmcIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmcIpAddress = this._fmcIpAddress;
    }
    if (this._fmcNatId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmcNatId = this._fmcNatId;
    }
    if (this._fmcRegistrationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmcRegistrationKey = this._fmcRegistrationKey;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._ionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ionKey = this._ionKey;
    }
    if (this._licenseData !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseData = this._licenseData;
    }
    if (this._localAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAuth = this._localAuth;
    }
    if (this._manageLocally !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageLocally = this._manageLocally;
    }
    if (this._mveLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.mveLabel = this._mveLabel;
    }
    if (this._productSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.productSize = this._productSize;
    }
    if (this._remoteAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAuth = this._remoteAuth;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._sshPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKey = this._sshPublicKey;
    }
    if (this._systemTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemTag = this._systemTag;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._vcoActivationCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcoActivationCode = this._vcoActivationCode;
    }
    if (this._vcoAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcoAddress = this._vcoAddress;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MveVendorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountKey = undefined;
      this._accountName = undefined;
      this._adminPasswordHash = undefined;
      this._adminSshPublicKey = undefined;
      this._cloudInit = undefined;
      this._controllerAddress = undefined;
      this._directorAddress = undefined;
      this._fmcIpAddress = undefined;
      this._fmcNatId = undefined;
      this._fmcRegistrationKey = undefined;
      this._imageId = undefined;
      this._ionKey = undefined;
      this._licenseData = undefined;
      this._localAuth = undefined;
      this._manageLocally = undefined;
      this._mveLabel = undefined;
      this._productSize = undefined;
      this._remoteAuth = undefined;
      this._secretKey = undefined;
      this._serialNumber = undefined;
      this._sshPublicKey = undefined;
      this._systemTag = undefined;
      this._token = undefined;
      this._vcoActivationCode = undefined;
      this._vcoAddress = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountKey = value.accountKey;
      this._accountName = value.accountName;
      this._adminPasswordHash = value.adminPasswordHash;
      this._adminSshPublicKey = value.adminSshPublicKey;
      this._cloudInit = value.cloudInit;
      this._controllerAddress = value.controllerAddress;
      this._directorAddress = value.directorAddress;
      this._fmcIpAddress = value.fmcIpAddress;
      this._fmcNatId = value.fmcNatId;
      this._fmcRegistrationKey = value.fmcRegistrationKey;
      this._imageId = value.imageId;
      this._ionKey = value.ionKey;
      this._licenseData = value.licenseData;
      this._localAuth = value.localAuth;
      this._manageLocally = value.manageLocally;
      this._mveLabel = value.mveLabel;
      this._productSize = value.productSize;
      this._remoteAuth = value.remoteAuth;
      this._secretKey = value.secretKey;
      this._serialNumber = value.serialNumber;
      this._sshPublicKey = value.sshPublicKey;
      this._systemTag = value.systemTag;
      this._token = value.token;
      this._vcoActivationCode = value.vcoActivationCode;
      this._vcoAddress = value.vcoAddress;
      this._vendor = value.vendor;
    }
  }

  // account_key - computed: false, optional: true, required: false
  private _accountKey?: string; 
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }
  public set accountKey(value: string) {
    this._accountKey = value;
  }
  public resetAccountKey() {
    this._accountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyInput() {
    return this._accountKey;
  }

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // admin_password_hash - computed: false, optional: true, required: false
  private _adminPasswordHash?: string; 
  public get adminPasswordHash() {
    return this.getStringAttribute('admin_password_hash');
  }
  public set adminPasswordHash(value: string) {
    this._adminPasswordHash = value;
  }
  public resetAdminPasswordHash() {
    this._adminPasswordHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordHashInput() {
    return this._adminPasswordHash;
  }

  // admin_ssh_public_key - computed: false, optional: true, required: false
  private _adminSshPublicKey?: string; 
  public get adminSshPublicKey() {
    return this.getStringAttribute('admin_ssh_public_key');
  }
  public set adminSshPublicKey(value: string) {
    this._adminSshPublicKey = value;
  }
  public resetAdminSshPublicKey() {
    this._adminSshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshPublicKeyInput() {
    return this._adminSshPublicKey;
  }

  // cloud_init - computed: false, optional: true, required: false
  private _cloudInit?: string; 
  public get cloudInit() {
    return this.getStringAttribute('cloud_init');
  }
  public set cloudInit(value: string) {
    this._cloudInit = value;
  }
  public resetCloudInit() {
    this._cloudInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitInput() {
    return this._cloudInit;
  }

  // controller_address - computed: false, optional: true, required: false
  private _controllerAddress?: string; 
  public get controllerAddress() {
    return this.getStringAttribute('controller_address');
  }
  public set controllerAddress(value: string) {
    this._controllerAddress = value;
  }
  public resetControllerAddress() {
    this._controllerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerAddressInput() {
    return this._controllerAddress;
  }

  // director_address - computed: false, optional: true, required: false
  private _directorAddress?: string; 
  public get directorAddress() {
    return this.getStringAttribute('director_address');
  }
  public set directorAddress(value: string) {
    this._directorAddress = value;
  }
  public resetDirectorAddress() {
    this._directorAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directorAddressInput() {
    return this._directorAddress;
  }

  // fmc_ip_address - computed: false, optional: true, required: false
  private _fmcIpAddress?: string; 
  public get fmcIpAddress() {
    return this.getStringAttribute('fmc_ip_address');
  }
  public set fmcIpAddress(value: string) {
    this._fmcIpAddress = value;
  }
  public resetFmcIpAddress() {
    this._fmcIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmcIpAddressInput() {
    return this._fmcIpAddress;
  }

  // fmc_nat_id - computed: false, optional: true, required: false
  private _fmcNatId?: string; 
  public get fmcNatId() {
    return this.getStringAttribute('fmc_nat_id');
  }
  public set fmcNatId(value: string) {
    this._fmcNatId = value;
  }
  public resetFmcNatId() {
    this._fmcNatId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmcNatIdInput() {
    return this._fmcNatId;
  }

  // fmc_registration_key - computed: false, optional: true, required: false
  private _fmcRegistrationKey?: string; 
  public get fmcRegistrationKey() {
    return this.getStringAttribute('fmc_registration_key');
  }
  public set fmcRegistrationKey(value: string) {
    this._fmcRegistrationKey = value;
  }
  public resetFmcRegistrationKey() {
    this._fmcRegistrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmcRegistrationKeyInput() {
    return this._fmcRegistrationKey;
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: number; 
  public get imageId() {
    return this.getNumberAttribute('image_id');
  }
  public set imageId(value: number) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // ion_key - computed: false, optional: true, required: false
  private _ionKey?: string; 
  public get ionKey() {
    return this.getStringAttribute('ion_key');
  }
  public set ionKey(value: string) {
    this._ionKey = value;
  }
  public resetIonKey() {
    this._ionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ionKeyInput() {
    return this._ionKey;
  }

  // license_data - computed: false, optional: true, required: false
  private _licenseData?: string; 
  public get licenseData() {
    return this.getStringAttribute('license_data');
  }
  public set licenseData(value: string) {
    this._licenseData = value;
  }
  public resetLicenseData() {
    this._licenseData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseDataInput() {
    return this._licenseData;
  }

  // local_auth - computed: false, optional: true, required: false
  private _localAuth?: string; 
  public get localAuth() {
    return this.getStringAttribute('local_auth');
  }
  public set localAuth(value: string) {
    this._localAuth = value;
  }
  public resetLocalAuth() {
    this._localAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthInput() {
    return this._localAuth;
  }

  // manage_locally - computed: false, optional: true, required: false
  private _manageLocally?: boolean | cdktf.IResolvable; 
  public get manageLocally() {
    return this.getBooleanAttribute('manage_locally');
  }
  public set manageLocally(value: boolean | cdktf.IResolvable) {
    this._manageLocally = value;
  }
  public resetManageLocally() {
    this._manageLocally = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageLocallyInput() {
    return this._manageLocally;
  }

  // mve_label - computed: false, optional: true, required: false
  private _mveLabel?: string; 
  public get mveLabel() {
    return this.getStringAttribute('mve_label');
  }
  public set mveLabel(value: string) {
    this._mveLabel = value;
  }
  public resetMveLabel() {
    this._mveLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mveLabelInput() {
    return this._mveLabel;
  }

  // product_size - computed: false, optional: false, required: true
  private _productSize?: string; 
  public get productSize() {
    return this.getStringAttribute('product_size');
  }
  public set productSize(value: string) {
    this._productSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productSizeInput() {
    return this._productSize;
  }

  // remote_auth - computed: false, optional: true, required: false
  private _remoteAuth?: string; 
  public get remoteAuth() {
    return this.getStringAttribute('remote_auth');
  }
  public set remoteAuth(value: string) {
    this._remoteAuth = value;
  }
  public resetRemoteAuth() {
    this._remoteAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthInput() {
    return this._remoteAuth;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // system_tag - computed: false, optional: true, required: false
  private _systemTag?: string; 
  public get systemTag() {
    return this.getStringAttribute('system_tag');
  }
  public set systemTag(value: string) {
    this._systemTag = value;
  }
  public resetSystemTag() {
    this._systemTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTagInput() {
    return this._systemTag;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // vco_activation_code - computed: false, optional: true, required: false
  private _vcoActivationCode?: string; 
  public get vcoActivationCode() {
    return this.getStringAttribute('vco_activation_code');
  }
  public set vcoActivationCode(value: string) {
    this._vcoActivationCode = value;
  }
  public resetVcoActivationCode() {
    this._vcoActivationCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcoActivationCodeInput() {
    return this._vcoActivationCode;
  }

  // vco_address - computed: false, optional: true, required: false
  private _vcoAddress?: string; 
  public get vcoAddress() {
    return this.getStringAttribute('vco_address');
  }
  public set vcoAddress(value: string) {
    this._vcoAddress = value;
  }
  public resetVcoAddress() {
    this._vcoAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcoAddressInput() {
    return this._vcoAddress;
  }

  // vendor - computed: false, optional: false, required: true
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}
export interface MveVnics {
  /**
  * The description of the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#description Mve#description}
  */
  readonly description: string;
}

export function mveVnicsToTerraform(struct?: MveVnics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function mveVnicsToHclTerraform(struct?: MveVnics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MveVnicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MveVnics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MveVnics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
    }
  }

  // description - computed: true, optional: false, required: true
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

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
}

export class MveVnicsList extends cdktf.ComplexList {
  public internalValue? : MveVnics[] | cdktf.IResolvable

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
  public get(index: number): MveVnicsOutputReference {
    return new MveVnicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve megaport_mve}
*/
export class Mve extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "megaport_mve";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mve resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mve to import
  * @param importFromId The id of the existing Mve that should be imported. Refer to the {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mve to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "megaport_mve", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mve megaport_mve} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MveConfig
  */
  public constructor(scope: Construct, id: string, config: MveConfig) {
    super(scope, id, {
      terraformResourceType: 'megaport_mve',
      terraformGeneratorMetadata: {
        providerName: 'megaport',
        providerVersion: '1.4.6',
        providerVersionConstraint: '1.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractTermMonths = config.contractTermMonths;
    this._costCentre = config.costCentre;
    this._diversityZone = config.diversityZone;
    this._locationId = config.locationId;
    this._productName = config.productName;
    this._promoCode = config.promoCode;
    this._resourceTags = config.resourceTags;
    this._vendorConfig.internalValue = config.vendorConfig;
    this._vnics.internalValue = config.vnics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_locked - computed: true, optional: false, required: false
  public get adminLocked() {
    return this.getBooleanAttribute('admin_locked');
  }

  // attribute_tags - computed: true, optional: false, required: false
  private _attributeTags = new cdktf.StringMap(this, "attribute_tags");
  public get attributeTags() {
    return this._attributeTags;
  }

  // buyout_port - computed: true, optional: false, required: false
  public get buyoutPort() {
    return this.getBooleanAttribute('buyout_port');
  }

  // cancelable - computed: true, optional: false, required: false
  public get cancelable() {
    return this.getBooleanAttribute('cancelable');
  }

  // company_name - computed: true, optional: false, required: false
  public get companyName() {
    return this.getStringAttribute('company_name');
  }

  // company_uid - computed: true, optional: false, required: false
  public get companyUid() {
    return this.getStringAttribute('company_uid');
  }

  // contract_end_date - computed: true, optional: false, required: false
  public get contractEndDate() {
    return this.getStringAttribute('contract_end_date');
  }

  // contract_start_date - computed: true, optional: false, required: false
  public get contractStartDate() {
    return this.getStringAttribute('contract_start_date');
  }

  // contract_term_months - computed: false, optional: false, required: true
  private _contractTermMonths?: number; 
  public get contractTermMonths() {
    return this.getNumberAttribute('contract_term_months');
  }
  public set contractTermMonths(value: number) {
    this._contractTermMonths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractTermMonthsInput() {
    return this._contractTermMonths;
  }

  // cost_centre - computed: true, optional: true, required: false
  private _costCentre?: string; 
  public get costCentre() {
    return this.getStringAttribute('cost_centre');
  }
  public set costCentre(value: string) {
    this._costCentre = value;
  }
  public resetCostCentre() {
    this._costCentre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCentreInput() {
    return this._costCentre;
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // diversity_zone - computed: true, optional: true, required: false
  private _diversityZone?: string; 
  public get diversityZone() {
    return this.getStringAttribute('diversity_zone');
  }
  public set diversityZone(value: string) {
    this._diversityZone = value;
  }
  public resetDiversityZone() {
    this._diversityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diversityZoneInput() {
    return this._diversityZone;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // live_date - computed: true, optional: false, required: false
  public get liveDate() {
    return this.getStringAttribute('live_date');
  }

  // location_id - computed: false, optional: false, required: true
  private _locationId?: number; 
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }
  public set locationId(value: number) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked');
  }

  // market - computed: true, optional: false, required: false
  public get market() {
    return this.getStringAttribute('market');
  }

  // marketplace_visibility - computed: true, optional: false, required: false
  public get marketplaceVisibility() {
    return this.getBooleanAttribute('marketplace_visibility');
  }

  // mve_size - computed: true, optional: false, required: false
  public get mveSize() {
    return this.getStringAttribute('mve_size');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getNumberAttribute('product_id');
  }

  // product_name - computed: false, optional: false, required: true
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }

  // product_uid - computed: true, optional: false, required: false
  public get productUid() {
    return this.getStringAttribute('product_uid');
  }

  // promo_code - computed: false, optional: true, required: false
  private _promoCode?: string; 
  public get promoCode() {
    return this.getStringAttribute('promo_code');
  }
  public set promoCode(value: string) {
    this._promoCode = value;
  }
  public resetPromoCode() {
    this._promoCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promoCodeInput() {
    return this._promoCode;
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string }; 
  public get resourceTags() {
    return this.getStringMapAttribute('resource_tags');
  }
  public set resourceTags(value: { [key: string]: string }) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags;
  }

  // secondary_name - computed: true, optional: false, required: false
  public get secondaryName() {
    return this.getStringAttribute('secondary_name');
  }

  // terminate_date - computed: true, optional: false, required: false
  public get terminateDate() {
    return this.getStringAttribute('terminate_date');
  }

  // usage_algorithm - computed: true, optional: false, required: false
  public get usageAlgorithm() {
    return this.getStringAttribute('usage_algorithm');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // vendor_config - computed: false, optional: false, required: true
  private _vendorConfig = new MveVendorConfigOutputReference(this, "vendor_config");
  public get vendorConfig() {
    return this._vendorConfig;
  }
  public putVendorConfig(value: MveVendorConfig) {
    this._vendorConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorConfigInput() {
    return this._vendorConfig.internalValue;
  }

  // virtual - computed: true, optional: false, required: false
  public get virtual() {
    return this.getBooleanAttribute('virtual');
  }

  // vnics - computed: true, optional: true, required: false
  private _vnics = new MveVnicsList(this, "vnics", false);
  public get vnics() {
    return this._vnics;
  }
  public putVnics(value: MveVnics[] | cdktf.IResolvable) {
    this._vnics.internalValue = value;
  }
  public resetVnics() {
    this._vnics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicsInput() {
    return this._vnics.internalValue;
  }

  // vxc_auto_approval - computed: true, optional: false, required: false
  public get vxcAutoApproval() {
    return this.getBooleanAttribute('vxc_auto_approval');
  }

  // vxc_permitted - computed: true, optional: false, required: false
  public get vxcPermitted() {
    return this.getBooleanAttribute('vxc_permitted');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_term_months: cdktf.numberToTerraform(this._contractTermMonths),
      cost_centre: cdktf.stringToTerraform(this._costCentre),
      diversity_zone: cdktf.stringToTerraform(this._diversityZone),
      location_id: cdktf.numberToTerraform(this._locationId),
      product_name: cdktf.stringToTerraform(this._productName),
      promo_code: cdktf.stringToTerraform(this._promoCode),
      resource_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceTags),
      vendor_config: mveVendorConfigToTerraform(this._vendorConfig.internalValue),
      vnics: cdktf.listMapper(mveVnicsToTerraform, false)(this._vnics.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_term_months: {
        value: cdktf.numberToHclTerraform(this._contractTermMonths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cost_centre: {
        value: cdktf.stringToHclTerraform(this._costCentre),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diversity_zone: {
        value: cdktf.stringToHclTerraform(this._diversityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_id: {
        value: cdktf.numberToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      promo_code: {
        value: cdktf.stringToHclTerraform(this._promoCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resourceTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vendor_config: {
        value: mveVendorConfigToHclTerraform(this._vendorConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MveVendorConfig",
      },
      vnics: {
        value: cdktf.listMapperHcl(mveVnicsToHclTerraform, false)(this._vnics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MveVnicsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
